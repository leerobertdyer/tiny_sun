import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "us-east-2",
});

export async function getFileUrl(fileName: string) {
  const params = {
    Bucket: "tinysun",
    Key: fileName,
  };

  return s3.getSignedUrlPromise('getObject', params);
};

export async function listFilesInFolder(folderName:string) {
    const params = {
      Bucket: 'tinysun',
      Prefix: folderName, 
      Delimiter: '/',     // Ensures you get a list of files, not subfolders
    };
  
    try {
        const data = await s3.listObjectsV2(params).promise();
        if (!data.Contents) return [];
        const files = data.Contents.filter(item => item.Key !== folderName); // Filter out folders
        const signedUrls = await Promise.all(
          files.map(async (file) => {
            const url = await s3.getSignedUrlPromise('getObject', {
              Bucket: params.Bucket,
              Key: file.Key,
            });
            return url;
          })
        );
        return signedUrls;
      } catch (error) {
        console.error('Error listing S3 objects:', error);
        throw error;
      }
    };
