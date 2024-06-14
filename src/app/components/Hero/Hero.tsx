"use client";
import { sendEmail, scheduleACall } from "@/app/actions";
import Button from "@/app/components/Button/Button";
import Image from "next/image";
import { FaPhoneVolume } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

export default function Hero() {
  return (
    <>
      <div
        className="
      w-full pb-6 
      bg-tinyOrange-base bg-opacity-55
      flex flex-col 
      gap-2 
      items-center justify-around"
      >
        <h2
          className="
        bg-white 
        bg-opacity-80
        text-tinyOrange-base
        w-full text-center py-4 "
        >
          Organic music
          <hr className="w-1/2 mx-auto border-t-2 border-tinyBlue-base mt-[5px]" />
          <span
            className="
          block 
          text-tinyPink-dark 
          pb-2 w-full "
          >
            vintage vibes
          </span>
        </h2>
        <div className="flex gap-2">
          <Button type="primary" onClick={() => sendEmail()}>
            Email Me
            <TfiEmail size={30} fill={"white"} />
          </Button>
          <Button type="secondary" onClick={() => scheduleACall()}>
            Schedule A Call <FaPhoneVolume size={30} />
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-evenly">
        <p
          className="
      text-tinyOrange-base text-2xl 
      bg-tinyBlack-base bg-opacity-45
      p-4
      rounded-full"
          aria-hidden
        >
          Hello
        </p>
        <div
          className="
      w-[40vw] h-[40vw] 
      overflow-hidden
      mt-4 
      border-[4px] border-white border-double
      rounded-full"
        >
          <Image
            src="/images/layingOnPiano.jpeg"
            alt="Lee laying on a piano"
            width={1000}
            height={750}
            className="w-full h-full object-cover"
          />
        </div>
        <p
          className="
      text-tinyOrange-base text-2xl 
      bg-tinyBlack-base bg-opacity-45
      p-4
      rounded-full"
          aria-hidden
        >
          there!
        </p>
      </div>
<div className="
flex flex-col 
items-center justify-center 
bg-white bg-opacity-85
rounded-xl
w-[50vw] mx-auto my-4 p-4
text-tinyBlack-base
text-center text-xl">
  <p>
    I{`'`}m Lee Dyer
    </p>
  <p>
    I produce <span className="text-tinyPink-light text-2xl">
    Real Music
    </span>
    </p>
    <p>
      for 
      <span className="text-tinyBlue-base text-2xl">
      Wild Folks
      </span>
      </p> 
</div>
    </>
  );
}
