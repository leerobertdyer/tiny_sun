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
        w-full text-center py-4 mb-4"
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
      <div
        className="
      flex flex-col sm:flex-row items-center justify-evenly 
      bg-tinyBlue-light bg-opacity-50
      p-8 gap-4"
      >
        <div
          className="
      w-[40vw] h-[40vw] 
      min-w-[18rem] min-h-[18rem]
      overflow-hidden
      border-[4px] border-white border-double
      rounded-full"
        >
          <Image
            priority
            src="/images/layingOnPiano.jpeg"
            alt="Lee laying on a piano"
            width={1000}
            height={750}
            className="w-full h-full object-cover"
          />
        </div>
        <article
          className="
        flex flex-col 
        items-center justify-center 
        bg-white bg-opacity-85
        rounded-xl
        w-[90vw] sm:w-[50vw] mx-auto my-4 p-4
        text-tinyBlack-base
        text-center text-xl"
        >
          <p>Hi, I{`'`}m Lee Dyer</p>
          <p>
            I{`'`}m a musician, composer, and producer. I specialize in
            transforming acoustic singer-songwriter music into
            <span className="text-tinyBlue-base md:text-3xl block">
              full band arrangements
            </span>
            Whether that means adding
            <span className="bg-tinyBlack-base bg-opacity-75 text-tinyPink-light block rounded-xl p-4 text-sm my-2">
              drums, bass, electric guitar, keyboard...
            </span>
            or perhaps
            <span className="bg-tinyBlack-base bg-opacity-75 text-tinyBlue-light block rounded-xl p-4 text-sm my-2">
              washboard, banjo, accordion...
            </span>
            or even
            <span className="bg-tinyBlack-base bg-opacity-75 text-tinyOrange-light block rounded-xl p-4 text-sm my-2">
              pedal steel, fiddle, harmonica...
            </span>
          </p>
        </article>
      </div>
    </>
  );
}
