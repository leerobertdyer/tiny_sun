import { connectToDatabase, disconnectFromDatabase } from "@/utils/mongo";
import { NextResponse } from "next/server";

export async function GET() {
  let client;
  try {
    client = await connectToDatabase();
    const db = client.db("tinySun");
    const collection = db.collection("songs");
    const songs = await collection.find({}).toArray();
    console.log(songs)
    return NextResponse.json(songs);
  } catch (error) {
    console.error("Failed to retrieve songs", error);
    throw error;
  } finally {
    if (client) {
      await disconnectFromDatabase();
    }
  }
}
