import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full flex items-center justify-center absolute h-screen">
      <div className="flex flex-col items-center gap-4 justify-center h-full w-full py-20 bg-black dark:bg-opacity-60 bg-opacity-40 tracking-wide leading-loose">
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
            <button className="transform duration-500 hover:scale-105 bg-yellow py-2 px-4 rounded text-black hover:bg-purple-950 hover:text-white shadow-lg">
              Contact Us
            </button>
          </Link>
          <Link href="/projects">
            <button className="transform duration-500 hover:scale-105 py-2 px-4 rounded text-white border hover:bg-purple-950 shadow-lg">
              Explore Our Work
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
