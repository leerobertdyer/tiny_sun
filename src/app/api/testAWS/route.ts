import { listFilesInFolder } from "@/utils/s3";
import { NextResponse } from "next/server";

export async function GET() {
  const files = await listFilesInFolder('audio/');
  return NextResponse.json(files)
}

//what i need to do is:
//4. write code to connect everythign together