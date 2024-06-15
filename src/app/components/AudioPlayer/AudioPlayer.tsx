import AudioWave from "@/app/components/AudioWave/AudioWave";
import { PiPlayPauseBold } from "react-icons/pi";

export type Song = {
    title: string;
    src: string;
}

type PropsDefinition = {
  songs: Song[]
};

export default function AudioPlayer({ songs }: PropsDefinition) {
  return (
    <>
    <div className="
    w-[95vw] sm:w-[75vw] m-auto
    border-2 border-white rounded-xl 
    overflow-hidden 
    mt-4
    text-center">
        <div className="
        flex justify-center items-center
        gap-4
        bg-tinyBlack-base 
        w-full 
        text-white text-3xl
         p-4">
            Examples
            <PiPlayPauseBold size={30} />
        </div>
      {songs.map((song, key) => (
          <div
          key={key}
          className={`
            ${key % 2 === 0
                ? "bg-tinyPink-light"
                : "bg-tinyBlue-light"
                }
                w-full py-2
                bg-opacity-75
                `}
                >
            <p className="bg-white p-4  rounded-md w-fit mx-auto">{song.title}</p>
          <AudioWave src="/audio/viktor.mp3" />
        </div>
      ))}
    </div>
    </>
  );
}
