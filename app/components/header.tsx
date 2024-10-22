import Menu from "@/app/components/ddmenu";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between w-full shadow backdrop-blur-md p-2 items-center sticky z-10 top-0 dark:text-white">
      <Link href="/">
        <div className="text-2xl font-extrabold text-purple-950 dark:text-white flex gap-2 items-center">
          <Image
            src="/cofletx.png"
            width={32}
            height={32}
            alt=""
            className="mt-1.5 text-2xl"
          />
          COFLETX
        </div>
      </Link>
      <div className="hidden md:block dark:text-white">
        <ul className="flex gap-4 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Services</li>
          <li>Projects</li>
          <li>About</li>
          <li>
            <button className="transform ease-in-out hover:scale-110 duration-300 shadow-md bg-yellow-400 font-bold text-purple-950 hover:bg-purple-950 hover:text-yellow-400 p-2 rounded-lg">
              Contact Us
            </button>
          </li>
        </ul>
      </div>
      <Menu />
    </div>
  );
}
