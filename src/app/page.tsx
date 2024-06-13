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
      </main>
    </>
  );
}
