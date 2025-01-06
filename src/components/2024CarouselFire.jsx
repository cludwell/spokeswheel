import Image from "next/image";

const images = [
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
  return (
    <div className="my-4 md:my-12 carousel carousel-center rounded-box h-[50vh]">
      {images.map((img, i) => (
        <div className=" carousel-item" key={`fireimage${i}`}>
          <Image
            src={img}
            width={2000}
            height={2000}
            className="w-auto h-auto"
          />
        </div>
      ))}
    </div>
  );
}
