import Image from "next/image";

export default function about() {
  return (
    <main
      className="
      p-4
    bg-[url(/images/vintageFlowers.jpeg)] 
    bg-cover 
    w-screen  
    flex flex-col 
    items-center justify-start"
    >
      <div
        className="
      bg-tinyBlack-base bg-opacity-95 
      flex flex-col 
      justify-around 
      items-center 
      w-[95vw] mt-2 
      rounded-xl 
      text-center"
      >
        <h1 className="md:text-[2rem] py-2 bg-white rounded-t-xl border border-t-2 border-tinyBlack-base text-tinyBlack-base w-full mb-4">
          About
          <span className="text-tinyOrange-base"> Tiny Sun</span>
        </h1>
        <div className="leading-[2rem] md:text-[1.2rem] flex flex-col sm:flex-row items-center justify-between p-4">
          <div
            className="
         w-[60vw] h-[60vw] 
         max-w-[30rem] max-h-[30rem] 
         overflow-hidden 
         border-2 border-white 
         rounded-xl"
          >
            <Image
              src="/images/leeTinySun.jpeg"
              width={375}
              height={475}
              alt="Lee Screaming Onstage"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="sm:w-[70%] p-6 leading-[2.5rem]">
            {`"`}Maybe i{`'`}m old fashioned, and this is the grumpy old man
            talking... but I like music with
            <span className="text-tinyBlue-base md:text-[1.4rem]">
              {" "}
              real live instruments.{" "}
            </span>
            Music that sounds like a band recorded in a room together. I{`'`}m
            not afraid to use samples, and modern sounds/techniques, but the
            majority of my tracks are made from scratch...{" "}
            <span className="text-tinyPink-base md:text-[1.4rem]">
              with love.
            </span>{" "}
            And the result is unique to each song.{`"`}
          </div>
        </div>
      </div>
      <div
        className="
      bg-tinyBlack-base bg-opacity-95 
      flex flex-col 
      justify-around 
      items-center 
      w-[95vw] mt-2 
      rounded-xl 
      text-center"
      >
        <h1 className="md:text-[2rem] py-2 bg-white rounded-t-xl border border-t-2 border-tinyBlack-base text-tinyBlack-base w-full mb-4">
          About
          <span className="text-tinyBlue-base"> Lee Dyer</span>
        </h1>
        <div className="leading-[2rem] md:text-[1.2rem] flex flex-col sm:flex-row items-center justify-between p-4">
          <div className="sm:w-[70%] p-6 leading-[2.5rem]">
            <p>
              Lee Dyer has been writing, performing, and recording music for the
              last 20 years. He studied trumpet and theory at Interlochen Arts
              Academy, and piano at Northern Michigan University.
            </p>
            <br />
            <p>
              With over 14 albums recorded, and 100s of songs written, Lee has
              the skills to not only help you record your music, but also to
              help you edit and sculpt it into the best possible version.
            </p>
          </div>
          <div
            className="
         w-[60vw] h-[60vw] 
         max-w-[30rem] max-h-[30rem] 
         overflow-hidden 
         border-2 border-white 
         rounded-xl"
          >
            <Image
              src="/images/leeScreaming.jpeg"
              width={375}
              height={475}
              alt="Lee Screaming Onstage"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
