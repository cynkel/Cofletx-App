"use client";
import { useState } from "react";

import clsx from "clsx";

export default function DropDown() {
  const [isClicked, setIsClicked] = useState(false);
  const toggleMenu = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div className="md:hidden z-10">
      <div onClick={() => toggleMenu()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div
        className={clsx({
          "hidden": isClicked === false,
          "block shadow-md bg-slate-200 fixed right-4 p-4 rounded-md":
            isClicked === true,
        })}
      >
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Services</li>
          <li>Contact Us</li>
          <li>Careers</li>
        </ul>
      </div>
    </div>
  );
}
