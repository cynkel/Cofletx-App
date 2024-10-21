import { montserrat, roboto_bold, roboto } from "./fonts";

export default function Hero() {
  return (
    <div className="w-full pt-4 px-4 bg-mobile bg-cover h-96 md:bg-none md:flex md:justify-center lg:h-[30rem]">
      <div className="w-full h-full bg-cover md:bg-tablet md:rounded-lg md:px-4 lg:w-[64rem] 2xl:w-[120rem] lg:bg-large">
        <div className="flex flex-col h-full justify-around md:justify-around">
          <div>
            <h1
              className={`${montserrat.className} text-2xl text-left font-bold text-white md:text-4xl`}
            >
              Leading Experts in Building Construction and Architecture
            </h1>
            <p
              className={`${roboto.className} text-black font-thin md:text-sm md:w-3/6 md:text-justify`}
            >
              At Cofletx, we merge innovative design with architectural
              expertise to bring your vision to life. Our dedicated team is
              committed to crafting sustainable and functional spaces that stand
              the test of time. Join us in shaping the future of architecture,
              one exceptional design at a time.
            </p>
          </div>
          <button
            className={`${roboto_bold.className} transform ease-in-out duration-300 hover:bg-purple-950 hover:text-yellow-400 hover:scale-105 antialiased rounded-lg bg-yellow-400 shadow-lg w-full p-2 text-purple-950 text-2xl md:w-64`}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
