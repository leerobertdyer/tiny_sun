'use client'
import BeforeAndAfter from "@/components/BeforeAndAfter/BeforeAndAfter";
import { useEffect, useState } from "react";

export type Song = {
  id: string;
  title: string;
  artist: string;
  audio: string;
  before_audio: string;
  image: string;
};

export default function BeforeAndAfterPlayer() {
  const [allSongs, setAllSongs] = useState<Song[]>([]);

  useEffect(() => {
    async function getSongs() {
      const resp = await fetch("/api/songs");
      if (resp) {
        const data = await resp.json();
        setAllSongs(data); // Would like to either randomize this, or change the order manually in database
      }
    }
    getSongs();
  }, []);

  return (
    <>
    {allSongs && allSongs.map((song: Song) => (
        <BeforeAndAfter 
        key={song.id}
        song1src={song.before_audio}
        song2src={song.audio}
        title={song.title}
        artist={song.artist}
        img={song.image} />
    ))}
    </>
  )
}
