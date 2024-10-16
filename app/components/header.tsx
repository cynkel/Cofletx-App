import Menu from "@/app/components/ddmenu";
import { oswald } from "./fonts";

export default function Header() {
  return (
    <div className="flex justify-between w-full bg-white p-2 items-center shadow md:fixed z-10 md:top-0 md:px-8">
      <div className={`${oswald.className} text-2xl font-extrabold text-black`}>
        COFLETX
      </div>
      <div className="hidden md:block dark:text-black">
        <ul className="flex gap-4 items-center">
          <li>Projects</li>
          <li>About</li>
          <li>
            <button className="shadow-md bg-yellow-400 text-black p-2 rounded-lg">
              Contact Us
            </button>
          </li>
        </ul>
      </div>
      <Menu />
    </div>
  );
}
