import Image from "next/image";

const images = [
  "/images/photos/2024/people1.jpg",
  "/images/photos/2024/people2.jpg",
  "/images/photos/2024/people3.jpg",
  "/images/photos/2024/people4.jpg",
  "/images/photos/2024/people5.jpg",
  //   "/images/photos/2024/people6.jpg",
  "/images/photos/2024/people7.jpg",
  "/images/photos/2024/people8.jpg",
  "/images/photos/2024/people9.jpg",
];
export default function CarouselPeople2024() {
  return (
    <div className="my-4 md:my-12 carousel carousel-center rounded-box h-[50vh]">
      {images.map((img, i) => (
        <div className="carousel-item" key={`peopleimage${i}`}>
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
