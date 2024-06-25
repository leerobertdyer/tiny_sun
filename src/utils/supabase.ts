import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pxscvmmpmqjtcjjlcghr.supabase.co";
const supabaseKey = process.env.SUPABASE_PUBLIC_ANON;
if (supabaseKey === undefined)
  throw new Error("SUPABASE_PUBLIC_ANON is not defined");
export const supabase = createClient(supabaseUrl, supabaseKey);
