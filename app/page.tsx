import Hero from "./components/hero";
import FAQ from "./components/faq";
import Image from "next/image";
import Link from "next/link";
import { Experience, Tools, Quality, People, Heart, Bulb, Clock } from "./components/icons";
export default function Home() {
  return (
    <main className="flex flex-col gap-16 md:mt-16 w-full animate-pageOpen">
      <div className="w-full h-screen relative">
        <Image
          src="/hero.webp"
          alt=""
          className="w-full h-full"
          width={1024}
          height={1024}
        />
      </div>
      <Hero />
      <section className="w-full pb-8 px-2 border-t-0 border-x-0 border-b-gray-400 border">
        <h2 className="text-center text-3xl font-bold mb-4 text-purple-950 dark:text-white drop-shadow-lg">
          Why Choose Us?
        </h2>
        
        <div className="grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
          <div className="md:border-0 flex flex-col justify-center items-center dark:border-b-white border-b-black border border-opacity-50 p-14 border-x-0 border-t-0">
            <Experience />
            <div className="text-xl text-center font-bold m-3 dark:text-white">Experience</div>
            <p className="text-center font-thin dark:text-white">With over 20 years in the industry, our team brings extensive knowledge in building design, construction, and project management, ensuring top-notch quality in every project.</p>
          </div>
          <div className="md:border-0 dark:border-b-white flex flex-col justify-center items-center border-b-black border border-opacity-50 p-14 border-x-0 border-t-0">
            <Tools />
            <div className="text-xl text-center font-bold m-3 dark:text-white">Comprehensive Services</div>
            <p className="text-center font-thin dark:text-white">We offer a full range of services, including architectural design, and project management, providing a one stop solution for all your building needs.</p>
          </div>
          <div className="md:border-0 dark:border-b-white flex flex-col justify-center items-center border-b-black border border-opacity-50 p-14 border-x-0 border-t-0">
            <Quality />
            <div className="text-xl text-center font-bold m-3 dark:text-white">Quality Assurance</div>
            <p className="text-center font-thin dark:text-white">Our commitment to quality is unwavering. We adhere to the highest industry standards and conduct thorough quality checks at every stage of the project to ensure exceptional results</p>
          </div>
          <div className="md:border-0 flex flex-col justify-center items-center dark:border-b-white border-b-black border border-opacity-50 p-14 border-x-0 border-t-0">
            <Heart />
            <div className="text-xl text-center font-bold m-3 dark:text-white">Client-Centric Approach</div>
            <p className="text-center font-thin dark:text-white">Our clients are at the heart of everything we do. We listen to your needs and work collaboratively to bring your vision to life while keeping you informed throughout the process.</p>
          </div>
          <div className="md:border-0 flex flex-col justify-center items-center dark:border-b-white border-b-black border border-opacity-50 p-14 border-x-0 border-t-0">
            <Bulb />
            <div className="text-xl text-center font-bold m-3 dark:text-white">Innovative Design Solutions</div>
            <p className="text-center font-thin dark:text-white">Our creative team utilizes the latest technology and design trends to deliver innovative and functional spaces that stand out and meet the unique needs of our clients</p>
          </div>
          <div className="flex flex-col justify-center items-center p-14">
            <People />
            <div className="text-xl text-center font-bold m-3 dark:text-white">Strong Client Relationships</div>
            <p className="text-center font-thin dark:text-white">We value our relationships with clients and work hard to build trust through transparency, integrity, and reliable communication.</p>
          </div>
          <div className="md:col-span-2 lg:col-span-3 flex flex-col justify-center items-center p-14">
            <Clock />
            <div className="text-xl text-center font-bold m-3 dark:text-white">Timely Delivery</div>
            <p className="text-center font-thin dark:text-white">We understand the importance of deadlines. Our efficient project management ensures that we complete projects on time and within budget, without compromising quality.</p>
          </div>
          </div>

        <div className="w-full justify-center items-center flex flex-col gap-3 my-14 md:flex-row">
          <Link href="/contact">
            <button className="transform duration-500 hover:scale-105 bg-yellow py-2 px-4 rounded text-black hover:bg-purple-950 hover:text-white shadow-lg">
              Get a quote
            </button>
          </Link>
          <Link href="/projects">
            <button className="transform duration-500 hover:scale-105 py-2 px-4 rounded text-black border-black dark:text-white dark:border-white border hover:bg-purple-950 shadow-lg">
              Explore Our Work
            </button>
          </Link>
        </div>
        <div className="flex md:items-center items-end justify-center">
          <div className="md:hidden w-[312px] h-[300px] rounded-xl bg-gray-900"></div>
          <div className="hidden lg:hidden md:block md:w-[612px] md:h-[382px] md:bg-gray-900 md:rounded-xl"></div>
          <div className="hidden lg:block lg:w-[768px] lg:h-[480px] lg:bg-gray-900 lg:rounded-xl"></div>
        </div>
      </section>
      <FAQ />
      <div className="mb-20"></div>
    </main>
  );
}
