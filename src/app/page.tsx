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
    bg-cover"
      >
        <Header />
        <Hero />
        <AudioPlayer songs={[
          {title: 'Viktor', src: "/audio/viktor.mp3"},
          {title: 'Viktor1', src: "/audio/viktor.mp3"},
          {title: 'Viktor2', src: "/audio/viktor.mp3"}
          ]} />
      </main>
    </>
  );
}
