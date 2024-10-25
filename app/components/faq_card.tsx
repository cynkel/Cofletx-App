"use client";
import { useState } from "react";
import clsx from "clsx";

export default function FCard({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [clicked, setClicked] = useState(false);
  const drop = () => {
    setClicked((prev) => !prev);
  };
  return (
    <div className="rounded-md">
      <div
        onClick={() => drop()}
        className="transition ease-in-out border border-x-0 border-y-1 border-yellow hover:cursor-pointer md:max-h-24 p-4 flex items-center justify-between dark:border-white duration-500"
      >
        <p className="text-sm hover:text-dark_purple md:text-lg">{question}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="size-7 stroke-black self-center"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
          />
        </svg>
      </div>
      <div
        className={clsx({
          "animate-fade_out hidden": clicked === false,
          "animate-fade_in bg-purple-300 p-4 mt-1 dark:mt-0":
            clicked === true,
        })}
      >
        <p className="text-black font-extralight">{answer}</p>
      </div>
    </div>
  );
}
