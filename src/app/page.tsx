import AudioPlayer from "@/app/components/AudioPlayer/AudioPlayer";
import Header from "@/app/components/Header/Header";
import Hero from "@/app/components/Hero/Hero";

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
        <AudioPlayer songs={[
          {title: 'Viktor', artist: 'Tiny Sun', src: "/audio/viktor.mp3"},
          {title: 'Snakeskin', artist: "Kathryn O'Shea", src: "/audio/snakeskin.mp3", img: '/images/snakeskin.jpeg'},
          {title: 'Ageless', artist: 'Tiny Sun', src: "/audio/ageless.mp3", img: '/images/ageless.jpeg'},
          {title: 'Change In The Chemical', artist: 'Daniel Glenn Campbell', src: "/audio/changeInTheChemical.mp3", img: '/images/strange.jpeg'},
          ]} />
      </main>
    </>
  );
}
