import BeforeAndAfterPlayer from "@/components/BeforeAndAfterPlayer/BeforeAndAfterPlayer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <>
      <main
        className="
    w-screen
    bg-[url('/images/vintageFlowers9.jpg')]
    bg-cover
    pb-[4rem]"
      >
        <Header />
        <Hero />
        <BeforeAndAfterPlayer />
      
      </main>
    </>
  );
}
