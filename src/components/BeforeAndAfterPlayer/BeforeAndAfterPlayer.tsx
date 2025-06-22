"use client";
import BeforeAndAfter from "@/components/BeforeAndAfter/BeforeAndAfter";
import LoadingWheel from "@/components/LoadingWheel/LoadingWheel";
import { shuffleArray } from "@/utils/randomizeArray";
import {  useEffect, useState } from "react";
import { PiPlay } from "react-icons/pi";

export type Song = {
  id: string;
  title: string;
  artist: string;
  after: string;
  before: string;
  image: string;
};

export default function BeforeAndAfterPlayer() {
  const [allSongs, setAllSongs] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function getSongs() {
      const resp = await fetch("/api/songs");
      if (resp.ok) {
        const data = await resp.json();
        const songs = shuffleArray(data);
        setAllSongs(songs); 
        setCurrentSong(songs[0]);
        setIsLoaded(true);
      }
    }
    getSongs();
  }, []);

  function handlePlayPause() {
    setIsPlaying(!isPlaying);
  }

  function handleInnerPlayClick(song: Song) {
    setCurrentSong(song)
    setIsPlaying(true)
  }

  return (
    <div
      className="
      w-[90%] max-w-[45rem]
      min-h-[20rem]
      m-auto
      flex flex-col 
      items-center justify-start 
      bg-tinyBlue-base 
      gap-2 
      rounded-xl 
      border-2 border-white
      "
      >
      <h2
        className="
        w-full h-[3rem] 
        pb-2 text-xl
        bg-white 
        rounded-t-lg 
        flex items-center justify-center 
        user-select-none
        "
        >
        Full Production Examples
      </h2>
      {!isLoaded && 
      <>
        <p>
          Loading...
          </p>
      <div className="flex flex-col items-center justify-between p-4 h-[15rem] w-[15rem] rounded-full bg-tinyBlack-light bg-opacity-90 mb-2">
        <LoadingWheel size={3}/>
        </div>
      </>
        }
      {currentSong && (
        <BeforeAndAfter
        key={currentSong.id}
        song1src={currentSong.before}
        song2src={currentSong.after}
        img={currentSong.image}
        handlePlayPause={handlePlayPause}
        isPlaying={isPlaying}
        />
      )}
      {allSongs &&
        allSongs.map((song) => (
          console.log(song),
          <div key={song.id} className="flex gap-4 w-full">
            <div
              onClick={() => setCurrentSong(song)}
              onDoubleClick={() => handleInnerPlayClick(song)}
              className={`
                ${currentSong?.id === song.id && "bg-tinyPink-light"} 
                hover:bg-tinyPink-lighter
                hover:cursor-pointer 
                py-2 w-full
                flex items-center justify-center gap-4
                `}
                >
              <div className="w-[22rem] m-auto flex justify-between gap-[2rem] items-center">
                <PiPlay size={35} onClick={() => handleInnerPlayClick(song)}/>
                <div className="w-full flex flex-col text-end">
                  <p className="user-select-none">{song.title}</p>
                  <p className="text-tinyBlack-light text-xs">{song.artist}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
