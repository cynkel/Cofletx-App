import Hero from "./components/hero";
import FAQ from "./components/faq";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 md:mt-24">
      <div className="w-full h-screen relative">
        <Image src="/hero.webp" alt="" className="w-full h-full" width={1024} height={1024}/>
      </div>
      <Hero />
      <section className="w-full">
        <h2 className="px-8 lg:px-12 py-2 mb-6 font-bold text-2xl">About Us</h2>
        <p className="px-8 lg:px-12 text-left">
        With over 20 years of experience, Cofletx has established itself 
        as a leading expert in building design and architecture. 
        Our dedicated team of professionals delivers innovative, 
        high-quality solutions tailored to meet the unique needs of each client. 
        From concept to completion, we pride ourselves on turning visions into reality, 
        ensuring precision, sustainability, and excellence in every project we undertake.
        <Link href="/about"><span className="text-dark_purple font-bold"> Click here to learn more...</span></Link>
        </p>
      </section>
      <section className="w-full grid px-8 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-4">
        <div className="w-full rounded bg-texture bg-cover p-16 flex justify-center items-center shadow-lg">
          <p className="text-center font-bold">Architectural<br />Drawings</p>
        </div>
        <div className="w-full rounded bg-residential bg-cover flex justify-center items-center shadow-lg">
          <p className="text-center font-bold text-white">Residential</p>
        </div>
        <div className="w-full rounded bg-industrial bg-cover flex justify-center items-center shadow-lg">
          <p className="text-center font-bold text-white">Industrial</p>
        </div>
      </section>
      <FAQ />
      <div className="mb-20"></div>
    </main>
  );
}
