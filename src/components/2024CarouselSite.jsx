import Image from "next/image";

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
  return (
    <div className="my-12 carousel carousel-center rounded-box">
      {images.map((img, i) => (
        <div className="w-1/3 carousel-item" key={`siteimage${i}`}>
          <Image src={img} width={2000} height={2000} className="" />
        </div>
      ))}
    </div>
  );
}
