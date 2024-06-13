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
      border-b-4
      border-tinyBlue-dark
      w-screen
      "
      >
        <div
          className="
          flex
          justify-between
          gap-4
          border-[4px] 
          border-tinyPink-dark
          rounded-2xl
          text-white
          text-center
          p-4
          bg-tinyBlack-base
          w-[90vw]
          md:w-[60vw]
          "
        >
          <Image
            src="/images/tinySunLogo.png"
            width={125}
            height={125}
            alt="Tiny Sun Logo"
            className="
            overflow-hidden
            rounded-xl
            border-2
            border-white
            "
          />
          <div className="flex flex-col justify-center gap-6">
            <h1 className="text-[1.5rem] md:text-[3.5rem] text-tinyOrange-base">
              Tiny Sun
            </h1>
            <h2 className="md:text-2xl">Music Production</h2>
          </div>
          <Image
            src="/images/tinySunLogo.png"
            width={125}
            height={125}
            alt="Tiny Sun Logo"
            className="
            overflow-hidden
            rounded-xl
            border-2
            border-white
            "
          />
        </div>
        <Nav links={["Home", "About", "Services", "Contact"]} />
      </div>
    </>
  );
}
