import Image from "next/image";

export default function Card({
  title,
  subtext,
  imgSource,
}: {
  title: string;
  subtext: string;
  imgSource: string;
}) {
  return (
    <div className="min-h-96 w-full border border-gray-400 dark:border-gray-700 hover:dark:border-gray-400 rounded-2xl grid-rows-card hover:border-gray-700 shadow-lg">
      <div className="h-4/6 p-2">
        <div className="h-full dark:bg-black flex justify-center">
          <Image src={imgSource} alt="" width={300} height={230} className="h-full rounded-2xl"/>
        </div>
      </div>
      <div className="h-2/6 px-4">
        <p className="text-sm font-light dark:text-gray-400">
          <span className="text-2xl font-bold text-purple-950 dark:text-white">
            {title}
          </span>
          <br />
          {subtext}
        </p>
      </div>
    </div>
  );
}
