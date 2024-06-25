"use client";
import AudioWave from "@/components/AudioWave/AudioWave";
import Image from "next/image";
import { useState } from "react";
import { PiPlayPauseBold, PiSkipBack, PiSkipForward } from "react-icons/pi";

export type Song = {
  title: string;
  src: string;
  artist: string;
  img?: string;
};

type PropsDefinition = {
  songs: Song[];
};

export default function AudioPlayer({ songs }: PropsDefinition) {
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState<number | null>(
    null
  );
  const [resetIndex, setResetIndex] = useState<number | null>(null);

  function handlePlayPause(index: number) {
    setCurrentPlayingIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  function resetToBeginning(index: number) {
    setCurrentPlayingIndex(null);
    setResetIndex(index);
    setTimeout(() => setResetIndex(null), 0);
  }

  return (
    <>
      <div
        className="
    w-[95vw] sm:w-[75vw] max-w-[45rem] m-auto
    border-2 border-white rounded-xl 
    overflow-hidden 
    mt-4 
    text-center"
      >
        <div
          className="
        flex justify-center items-center
        gap-4
        bg-tinyBlack-base 
        w-full 
        text-white text-3xl
         p-4"
        >
          Examples
        </div>
        {songs.map((song, key) => (
          <div
            key={key}
            className={`
            ${key % 2 === 0 ? "bg-tinyPink-light" : "bg-tinyBlue-light"}
                w-full p-2
                flex justify-between items-center
                gap-4
                `}
          >
            <div
              className="
            relative
            w-[6rem] h-[6rem] 
            rounded-lg overflow-hidden
            border-2 border-white
            hover:cursor-pointer
            hover:scale-105
            transition-all duration-300 ease-in-out
            "
              onClick={() => handlePlayPause(key)}
            >
              <div
                className="
            bg-tinyBlack-base p-2 
            text-white h-[2rem]
            text-[.75rem] mx-auto
            w-full
            absolute
            bottom-0
            border-t-2 border-white
            "
              >
                <p className={`absolute top-0 right-0 py-2 w-full ${song.title.length > 15 && "whitespace-nowrap animate-marquee"}`}>
                  {song.title}
                  </p>
              </div>
              <Image
                src={song.img || "/images/vintageFlowers.jpeg"}
                width={150}
                height={150}
                alt={song.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-[60%] flex flex-col items-center justify-between">
              {song.artist}
              <AudioWave
                src={song.src}
                onPlayPause={() => handlePlayPause(key)}
                isPlaying={currentPlayingIndex === key}
                reset={resetIndex === key}
              />
            </div>
            <div className="flex justify-between gap-2">
              <div
                className="
            bg-white p-2 
            rounded-md 
            text-[.75rem] mx-auto
            flex flex-col flex-grow-1
            justify-center items-center
            hover:bg-tinyBlack-base hover:text-white
            hover:cursor-pointer
            "
                onClick={() => resetToBeginning(key)}
              >
                <PiSkipBack size={33} />
              </div>
              <div
                className="
            bg-white p-2 
            rounded-md 
            text-[.75rem] mx-auto
            flex flex-col flex-grow-1
            justify-center items-center
            hover:bg-tinyBlack-base hover:text-white
            hover:cursor-pointer
            "
                onClick={() => handlePlayPause(key)}
              >
                <PiPlayPauseBold size={33} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
