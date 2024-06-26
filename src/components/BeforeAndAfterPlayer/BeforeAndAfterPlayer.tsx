"use client";
import BeforeAndAfter from "@/components/BeforeAndAfter/BeforeAndAfter";
import { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export type Song = {
  id: string;
  title: string;
  artist: string;
  audio: string;
  before_audio: string;
  image: string;
};

export default function BeforeAndAfterPlayer() {
  const [allSongs, setAllSongs] = useState<Song[]>([]);
  const deviceType = useRef("desktop");

  useEffect(() => {
    if (!deviceType.current) return;
    if (window.innerWidth < 1024) {
      deviceType.current = "tablet";
    }
    if (window.innerWidth < 464) {
      deviceType.current = "mobile";
    }
  }, []);

  useEffect(() => {
    async function getSongs() {
      const resp = await fetch("/api/songs");
      if (resp) {
        const data = await resp.json();
        setAllSongs(data); // Would like to either randomize this, or change the order manually in database
      }
    }
    getSongs();
  }, []);

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={false}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={deviceType.current}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {allSongs &&
        allSongs.map((song: Song) => (
          <BeforeAndAfter
            key={song.id}
            song1src={song.before_audio}
            song2src={song.audio}
            title={song.title}
            artist={song.artist}
            img={song.image}
          />
        ))}
    </Carousel>
  );
}
