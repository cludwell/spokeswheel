"use client";

import Image from "next/image";
import { useState } from "react";

const fireImages = [
  "/images/photos/2024/fire1.jpg",
  "/images/photos/2024/fire2.jpg",
  "/images/photos/2024/fire3.jpg",
  "/images/photos/2024/fire4.jpg",
  "/images/photos/2024/fire5.jpg",
  "/images/photos/2024/fire6.jpg",
  "/images/photos/2024/fire7.jpg",
  "/images/photos/2024/fire8.jpg",
  //   "/images/photos/2024/fire9.jpg",
  "/images/photos/2024/fire10.jpg",
  "/images/photos/2024/fire11.jpg",
  "/images/photos/2024/fire12.jpg",
];
export default function CarouselFire2024() {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-4 md:my-12 carousel carousel-center rounded-box h-[50vh] relative">
      {fireImages.map((img, i) => (
        <div className=" carousel-item" key={`fireimage${i}`}>
          <Image
            src={img}
            width={2000}
            height={2000}
            className="w-auto h-auto"
            alt={`${img}`}
            id={`fire-${i}`}
          />
          {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
            <a
              href={`${
                i == 0 ? `#fire-${images.length-1}`: `#fire-${i - 1}`
              }`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`${i < images.length ? "#fire-" + (i + 1) : "#fire-0"}`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div> */}
        </div>
      ))}
    </div>
  );
}
