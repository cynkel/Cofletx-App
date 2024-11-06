import type { Metadata } from "next";
import "./globals.css";
import { public_sans } from "./components/fonts";
import Image from "next/image";
import { Home, Service, Project, Contact } from "./components/icons";
import Link from "next/link";
import Nav from "./components/nav";

export const metadata: Metadata = {
  title:
    "Cofletx | Innovative Construction & Architectural Solutions for Your Dream Projects",
  description:
    "Professional construction and building services, specializing in residential and commercial projects. Skilled craftsmanship, innovative design, and reliable, tailored solutions for all your construction needs. Contact us for expert construction services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${public_sans.className} antialiased h-screen text-black flex justify-center`}
      >
        <div className="w-full 2xl:max-w-[1400px] relative animate-pageOpen">
          <header className="hidden w-full 2xl:w-[1400px] backdrop-blur-sm md:fixed top-0 z-10 bg-white dark:bg-black bg-opacity-80 md:flex justify-between items-center px-6 border border-b-gray-300 dark:border-b-white border-x-0 border-t-0">
            <div className="flex items-center gap-6 tracking-wide">
              <Link href="/">
                <div className="flex items-center gap-2">
                  <Image
                    src="/logo.webp"
                    width={44}
                    height={44}
                    alt="Company Logo"
                  />
                  <div
                    className={`font-extrabold text-xl lg:text-3xl text-yellow font-serif`}
                  >
                    Cofletx
                  </div>
                </div>
              </Link>
              <ul className="hidden text-black dark:text-white md:flex md:gap-4 md:font-light pt-1 text-sm">
                <li>
                  <Nav route="/" page="Home" />
                </li>
                <li>
                  <Nav route="/about" page="About Us" />
                </li>
                <li>
                  <Nav route="/services" page="Our Services" />
                </li>
                <li>
                  <Nav route="/projects" page="Projects" />
                </li>
                <li>
                  <Nav route="/contact" page="Contact Us" />
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              <Link href="/contact">
                <button className="px-2 py-1 md:p-2 md:px-3 bg-yellow rounded transform duration-500 text-black hover:scale-105 hover:bg-dark_purple hover:text-white shadow-md">
                  Get a quote
                </button>
              </Link>
            </div>
          </header>
          {children}
          <footer>
            <div className="w-full bg-purple-950 relative bottom-20 flex flex-col items-center gap-8 py-6 text-white lg:bottom-0 lg:flex-row justify-around h-80">
              <div className="flex gap-2 items-center">
                <Image src="/cofletx.webp" alt="" width={35} height={50} />
                <p className="text-2xl text-yellow font-bold lg:text-4xl">
                  Cofletx
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 lg:gap-6 lg:order-first">
                <p className="font-bold">Quick Links:</p>
                <ul className="flex flex-col items-center justify-center gap-2">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 lg:gap-6">
                <p className="font-bold">Contact Us:</p>
                <p className="font-extralight">adm.cofletx@gmail.com</p>
              </div>
            </div>
            <div className="lg:hidden w-full fixed bottom-0 bg-purple-950 flex justify-center items-center p-2">
              <Home />
              <Service />
              <Project />
              <Contact />
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
