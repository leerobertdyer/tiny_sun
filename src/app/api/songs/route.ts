import { NextResponse } from "next/server";

// Use dynamic imports to avoid connecting during build time
export async function GET() {
  let client;
  try {
    // Dynamically import the MongoDB connection code
    const { connectToDatabase } = await import("@/utils/mongo");
    client = await connectToDatabase();
    const db = client.db("tinySun");
    const collection = db.collection("songs");
    const songs = await collection.find({}).toArray();
    console.log(songs);
    return NextResponse.json(songs);
  } catch (error) {
    console.error("Failed to retrieve songs", error);
    return NextResponse.json({ error: "Failed to retrieve songs" }, { status: 500 });
  } finally {
    if (client) {
      // Dynamically import and disconnect
      const { disconnectFromDatabase } = await import("@/utils/mongo");
      await disconnectFromDatabase();
    }
  }
}
