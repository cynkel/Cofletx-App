"use client";
import { useState } from "react";
import clsx from "clsx";

export default function FCard() {
  const [clicked, setClicked] = useState(false);
  const drop = () => {
    setClicked((prev) => !prev);
  };
  return (
    <div onClick={() => drop()}>
      <div className="bg-black rounded-md max-h-24 p-4 shadow-md flex items-center justify-between">
        <p className="text-lg text-white">
          Lorem ipsum dolor sit amet, consectetur
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="size-7 stroke-white self-end"
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
          hidden: clicked === false,
          "block bg-black rounded-md": clicked === true,
        })}
      >
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sed ipsa
          maiores dolore assumenda fugiat provident ad, libero consequuntur
          nesciunt dolor fugit a est eius officia. Praesentium sunt neque
          incidunt?
        </p>
      </div>
    </div>
  );
}
