"use client";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PiPlayPauseFill } from "react-icons/pi";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import './styles.css'

type PropsDefinition = {
  song1src: string;
  song2src: string;
  img?: string;
  handlePlayPause: () => void
  isPlaying: boolean
};

export default function BeforeAndAfter({
  song1src,
  song2src,
  img,
  handlePlayPause,
  isPlaying
}: PropsDefinition) {
  const [songSwitch, setSongSwitch] = useState(0);
  const audioRef1 = useRef<HTMLAudioElement | null>(null);
  const audioRef2 = useRef<HTMLAudioElement | null>(null);

  const handleSwitch = () => {
    switch (songSwitch) {
      case 0:
        setSongSwitch(1);
        audioRef2.current!.currentTime = audioRef1.current?.currentTime || 0;
        break;
      case 1:
        setSongSwitch(0);
        audioRef1.current!.currentTime = audioRef2.current?.currentTime || 0;
        break;
    }
  };

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
    <div className="flex flex-col items-center justify-center">
      {img && (
        <div className="w-[8rem] h-[8rem] overflow-hidden border-2 border-tinyBlack-base rounded-xl mb-2">
          <Image
            width={100}
            height={100}
            src={img}
            alt={`Album cover for song`}
            className="object-top object-cover w-full h-full"
          />
        </div>
      )}
      <div className="mb-2">
      <Button type="playButton" onClick={handlePlayPause}>
        <PiPlayPauseFill size={30} />
      </Button>
      </div>
      <audio ref={audioRef1} src={song1src} />
      <audio ref={audioRef2} src={song2src} />
      <div className="flex gap-2 justify-between items-center p-2 bg-white rounded-xl">
        <span className={`${songSwitch === 0 && 'bg-tinyBlack-light text-white pb-[10px]'} rounded-lg p-2 leading-3`}>
          Before
          </span>
        <Toggle
          checked={songSwitch === 1}
          icons={{
            checked: null,
            unchecked: null
          }}
          className='customToggle'
          name="songSwitch"
          value="yes"
          onChange={handleSwitch}
        />
 <span className={`${songSwitch === 1 && 'bg-tinyOrange-light pb-[10px]'} rounded-lg p-2 leading-3`}>
          After
          </span>
      </div>
    </div>
  );
}
