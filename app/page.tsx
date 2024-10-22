import Image from "next/image";
import { Button, Acc_Button } from "./components/buttons";

export default function Home() {
  return (
    <main className="mt-16 lg:mt-0">
      <section className="w-full bg-gradient-to-r from-purple-700 to-purple-800 grid grid-rows-hero lg:grid-cols-2 lg:grid-rows-1 lg:h-screen">
        <div className="py-16 px-8 flex flex-col gap-6 justify-center">
          <h2 className="font-extrabold text-white text-4xl 2xl:text-8xl">Leading Experts in Innovative Building Solutions</h2>
          <p className="text-white font-light text-left 2xl:text-4xl">
          Transforming visions into reality, we specialize in modern
          architecture and sustainable construction practices. 
          Partner with us for exceptional design, quality craftsmanship, 
          and a commitment to excellence that elevates every project.
          </p>
          <div className="flex gap-6">
            <Button text="About Us" paddings="px-4 py-2"/>
            <Acc_Button text="Reach Out" paddings="px-4 py-2" />
          </div>
        </div>
        <div>
          <Image src="/cranes.webp" alt="" width={1920} height={1280} className="w-full hidden lg:block h-full"/>
          <Image src="/cranes-tablet.webp" alt="" width={1280} height={800} className="lg:hidden w-full h-full" />
        </div>
      </section>
      <section className="w-full bg-gradient-to-r from-purple-400 to-bg-purple-50 bg-cover">
        <div className="p-16 grid grid-rows-hero lg:flex lg:flex-row-reverse lg:bg-texture bg-cover gap-8">
          <div className="flex flex-col gap-6 justify-center">
            <h3 className="text-5xl font-bold">About Cofletx</h3>
            <p>At Cofletx, we specialize in delivering top-notch building and construction services, 
              combined with precise architectural drawings. Our commitment to quality and innovation 
              ensures that your vision becomes a reality.
            </p>
            <div className="flex gap-6">
              <Button text="Give Us A call" paddings="py-2 px-2"/>
              <Acc_Button text="Learn More" paddings="px-4 py-2" />
            </div>
          </div>
          <div>
            <Image src="/logo.webp" alt="" width={300} height={400}/>
          </div>
        </div>
      </section>
    </main>
  );
}