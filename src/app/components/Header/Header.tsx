import Nav from "@/app/components/Nav/Nav";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div
        className="
      bg-tinyBlue-base
      bg-opacity-75
      p-4
      flex
      flex-col
      justify-around
      items-center
      border-b-2
      border-tinyBlue-dark
      w-screen
      "
      >
        <div
          className="
          flex
          justify-between
          gap-4
          border-[2px] 
          border-tinyOrange-base
          rounded-2xl
          bg-white
          text-center
          p-4
          text-tinyBlack-base
          w-[90vw]
          lg:w-[60vw]
          "
        >
          <div className="w-[15vw] h-[15vw] max-w-[100px] max-h-[100px] overflow-hidden border-2 border-white rounded-xl">
            <Image
              src="/images/tinySunLogo.png"
              width={125}
              height={125}
              alt="Tiny Sun Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center lg:gap-6">
            <h1 className="text-[1.5rem] lg:leading-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem] text-tinyOrange-base">
              Tiny Sun
            </h1>
            <h2 className="text-md sm:text-lg lg:text-2xl">Music Production</h2>
          </div>
          <div className="w-[15vw] h-[15vw] max-w-[100px] max-h-[100px] overflow-hidden border-2 border-white rounded-xl">
            <Image
              src="/images/tinySunLogo.png"
              width={125}
              height={125}
              alt="Tiny Sun Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <Nav links={["Home", "About", "Services", "Contact"]} />
      </div>
    </>
  );
}
