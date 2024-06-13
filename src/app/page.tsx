import Header from "@/app/components/Header/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main
        className="
    w-screen
    h-screen
    bg-[url('/images/vintageFlowers9.jpg')]
    bg-cover"
      >
        <Header />
      </main>
    </>
  );
}
