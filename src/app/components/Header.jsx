import Image from "next/image";
import darkCampFire from '../../../public/images/dark-campfire.jpg'
export default function Header() {
    return (
        <div className=" bg-red-500 max-w-screen-xl h-40 self-center flex flex-col items-center">
            <p className="">Spokeswheel Conference</p>
            <Image
            src={darkCampFire}
            alt={`friends are gathered around a campfire`}
            className="max-w-screen-lg h-64 object-bottom object-cover  absolute"
            width={1200}
            height={1200}
            />
        </div>
    )
}
