import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex items-center justify-center bg-hero bg-cover h-svh w-full">
      <div className="flex flex-col items-center gap-4 justify-center h-full w-full bg-black bg-opacity-80 tracking-wide leading-loose">
        <h1 className="font-bold text-2xl md:text-5xl text-white text-center w-2/3">
          <span className="text-yellow">Leading Experts</span> in innovative
          building design <span className="text-purple-900">and</span> project
          management
        </h1>
        <p className="w-2/3 text-center text-lg text-white">
          Innovative solutions in architectural design and construction
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link href="/contact">
          <button className="transform duration-500 hover:scale-105 bg-yellow py-2 px-4 rounded hover:bg-purple-950 hover:text-white shadow-lg">
            Contact Us
          </button>
          </Link>
          <Link href="/projects">
          <button className="transform duration-500 hover:scale-105 py-2 px-4 rounded text-white border hover:bg-purple-950 shadow-lg">
            Explore Our Work
          </button>
          </Link>
        </div>
        <div className="text-center flex flex-col items-center absolute bottom-24 lg:bottom-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-12 md:size-24 lg:size-16 stroke-white animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
