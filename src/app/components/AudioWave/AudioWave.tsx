"use client";
import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

type PropsDefinition = {
  src: string;
};

export default function AudioWave({ src }: PropsDefinition) {
  const waveformRef = useRef(null);
  const waveSurferRef = useRef<WaveSurfer | null>(null);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (waveformRef.current && !waveSurferRef.current) {
      waveSurferRef.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#FF9A1F",
        progressColor: "#0e6b8b",
        cursorWidth: 4,
        cursorColor: "#e0389a",
        url: src,
        barWidth: 4,
        barRadius: 50,
        barGap: 2,
      });
    }
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
        if (isHovered) handlePlayPause();
        
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [isHovered, src]);

  const handlePlayPause = () => {
    if (waveSurferRef.current) {
      waveSurferRef.current.playPause();
    }
  };

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <div
      className="
    w-[90vw] sm:w-[60vw] m-auto 
    bg-white 
    rounded-md p-2 my-[2px]
    hover:cursor-pointer
    hover:bg-tinyBlack-base hover:bg-opacity-50
    transition-all duration-300 ease-in-out"
    >
      <div
        id="waveform"
        ref={waveformRef}
        onDoubleClick={() => handlePlayPause()}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      ></div>
    </div>
  );
}
