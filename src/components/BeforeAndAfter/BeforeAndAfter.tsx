"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type PropsDefinition = {
  song1src: string;
  song2src: string;
  title: string;
  artist: string;
  img?: string;
};

export default function BeforeAndAfter({
  song1src,
  song2src,
  title,
  artist,
  img,
}: PropsDefinition) {
  const [songSwitch, setSongSwitch] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef1 = useRef<HTMLAudioElement | null>(null);
  const audioRef2 = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSwitch = () => {
    switch(songSwitch) {
        case 0: 
            setSongSwitch(1);
            audioRef2.current!.currentTime = audioRef1.current?.currentTime || 0;
            break;
        case 1:
            setSongSwitch(0);
            audioRef1.current!.currentTime = audioRef2.current?.currentTime || 0;
            break;
  };
}

  useEffect(() => {
    const currentAudio =
      songSwitch === 0 ? audioRef1.current : audioRef2.current;
    const otherAudio = songSwitch === 0 ? audioRef2.current : audioRef1.current;

    if (isPlaying) {
      currentAudio?.play();
      otherAudio?.pause();
    } else {
      currentAudio?.pause();
      otherAudio?.pause();
    }

    if (otherAudio) {
      otherAudio.currentTime = currentAudio?.currentTime || 0;
    }
  }, [isPlaying, songSwitch]);

  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 gap-2">
      <h1>{title}</h1>
      <h2>{artist}</h2>
      {img && (
        <div className="overflow-hidden border-2 border-tinyBlack-base rounded-xl">
          <Image
            width={100}
            height={100}
            src={img}
            alt={`${title} by ${artist}`}
            className=" object-cover w-full h-full"
          />
        </div>
      )}
      <audio ref={audioRef1} src={song1src} preload="metadata" />
      <audio ref={audioRef2} src={song2src} preload="metadata" />
      <div>
        <button
          className="
      rounded-full p-4 
      bg-tinyOrange-light 
      border-2 border-black 
      w-[10rem]"
          onClick={handlePlayPause}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button
          className="
      rounded-full p-4 
      bg-tinyOrange-light 
      border-2 
      border-black w-[10rem]"
          onClick={handleSwitch}
        >
          Switch Song
        </button>
      </div>
    </div>
  );
}




