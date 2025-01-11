"use client";
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
  // "/images/photos/2024/site08.jpg",
  "/images/photos/2024/site09.jpg",
  "/images/photos/2024/site10.jpg",
  "/images/photos/2024/site11.jpg",
  "/images/photos/2024/site12.jpg",
];

export default function CarouselSite2024() {
  const carouselRef = useRef(null);

  const smoothScroll = (direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const scrollAmount = carousel.offsetWidth/3;
    const start = carousel.scrollLeft;
    const target =
      direction === "left" ? start - scrollAmount : start + scrollAmount;
    const duration = 500;
    const startTime = performance.now();
    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      carousel.scrollLeft = start + (target - start) * ease;
      if (elapsed < duration) requestAnimationFrame(animateScroll);
    };
    requestAnimationFrame(animateScroll);
  };
  return (
    <div className="relative my-4 md:my-12">
      <div
        className="flex flex-row overflow-hidden rounded-box h-[50vh] relative snap-x snap-mandatory scroll-smooth "
        ref={carouselRef}
      >
        {images.map((img, i) => (
          <div className="flex-shrink-0 snap-center" key={`siteimage${i}`}>
            <Image
              src={img}
              width={2000}
              height={2000}
              className="object-cover h-full"
              sizes="(max-width: 768px) 100vw, 36.8vw"
            />
          </div>
        ))}
      </div>
      <div className="absolute z-10 flex justify-between w-full transform -translate-y-1/2 top-1/2">
        <button
          className="btn h-fit w-fit "
          onClick={() => smoothScroll("left")}
        >
          <IconChevronLeft />
        </button>
        <button
          className="btn h-fit w-fit "
          onClick={() => smoothScroll("right")}
        >
          <IconChevronRight />
        </button>
      </div>
    </div>
  );
}
