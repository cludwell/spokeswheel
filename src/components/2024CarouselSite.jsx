"use client"
import Image from "next/image";
import IconChevronLeft from "./Icons/IconChevronLeft";
import IconChevronRight from "./Icons/IconChevronRight";
import { useRef } from "react";

const images = [
  "/images/photos/2024/site01.jpg",
  "/images/photos/2024/site02.jpg",
  "/images/photos/2024/site03.jpg",
  "/images/photos/2024/site04.jpg",
  "/images/photos/2024/site05.jpg",
  "/images/photos/2024/site06.jpg",
  "/images/photos/2024/site07.jpg",
  "/images/photos/2024/site08.jpg",
  "/images/photos/2024/site09.jpg",
  "/images/photos/2024/site10.jpg",
  "/images/photos/2024/site11.jpg",
  "/images/photos/2024/site12.jpg",
];

export default function CarouselSite2024() {
  const carouselRef = useRef(null);
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="relative my-4 md:my-12">

    <div className="flex flex-row overflow-x-auto rounded-box h-[50vh] relative snap-x snap-mandatory scroll-smooth"
    ref={carouselRef}>
      {images.map((img, i) => (
        <div className="carousel-item" key={`siteimage${i}`}>
          <Image
            src={img}
            width={2000}
            height={2000}
            className="object-cover h-full"
            layout="responsive"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ))}
    </div>
      <div className="absolute z-10 flex justify-between w-full transform -translate-y-1/2 top-1/2">
        <button className="btn h-fit w-fit " onClick={scrollLeft}>
          <IconChevronLeft />
        </button>
        <button className="btn h-fit w-fit " onClick={scrollRight}>
          <IconChevronRight />
        </button>
      </div>
    </div>
  );
}
