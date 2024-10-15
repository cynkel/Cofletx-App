import Image from "next/image";
import { inter } from "./fonts";

export default function Hero() {
  return (
    <div className="md:flex md:flex-col md:items-center mx-4 mt-4 relative md:mt-20">
      <div>
        <Image
          src="/construction-sm.jpg"
          width={600}
          height={512}
          alt=""
          className="md:hidden rounded-lg"
        />
        <Image
          src="/construction.jpg"
          width={896}
          height={512}
          alt=""
          className="hidden md:block rounded-lg"
        />
        <div className="md:relative md:w-full md:bottom-14">
          <h1
            className={`${inter.className} text-2xl absolute bottom-28 left-8 font-bold text-white md:text-4xl md:bottom-36 md:mb-8`}
          >
            Leading Experts in Building Design and Architecture
          </h1>
          <button className="shadow-md bg-yellow-400 text-black absolute bottom-4 p-2 rounded-md font-bold right-6 left-6 md:relative md:bottom-16 md:ml-2">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
