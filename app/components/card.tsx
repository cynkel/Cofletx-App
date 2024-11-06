"use client";

import Image from "next/image";
import clsx from "clsx";

export function Card({
  title,
  subtext,
  imgSource,
}: {
  title: string;
  subtext: string;
  imgSource: string;
}) {
  return (
    <div
      className={`dark:bg-black bg-gray-50 min-h-96 w-full border border-gray-400 dark:border-gray-700 hover:dark:border-gray-400 rounded-2xl grid-rows-card hover:border-gray-700 shadow-lg`}
    >
      <div className="h-4/6 p-2">
        <div className="h-full dark:bg-black flex justify-center">
          <Image
            src={imgSource}
            alt=""
            width={300}
            height={230}
            className="h-full rounded-2xl shadow-xl border border-gray-100"
          />
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

export function ProjectCard({
  title,
  subtext,
  imgSource,
  filter,
}: {
  title: string;
  subtext: string;
  imgSource: string;
  filter: boolean;
}) {
  return (
    <div
      className={clsx({
        "dark:bg-black animate-pageOpen max-w-96 min-h-96 bg-gray-50 w-full border border-gray-400 dark:bg-none dark:border-gray-700 hover:dark:border-gray-400 rounded-2xl grid-rows-card hover:border-gray-700 shadow-lg":
          filter === true,
        hidden: filter === false,
      })}
    >
      <div className="h-4/6 p-2">
        <div className="h-full dark:bg-black flex justify-center">
          <Image
            src={imgSource}
            alt=""
            width={300}
            height={230}
            className="rounded-2xl w-auto h-auto"
          />
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
