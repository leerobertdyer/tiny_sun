import { supabase } from "@/utils/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data, error } = await supabase.from("song").select("*");

    if (error) {
      return NextResponse.json("Error getting songs: ", error.message);
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
  }
}
