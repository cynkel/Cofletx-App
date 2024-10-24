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
      <body className={`${public_sans.className} antialiased h-screen`}>
        <header className="w-full bg-transparent absolute flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-6 tracking-wide">
            <Link href="/">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.webp"
                width={44}
                height={44}
                alt="Company Logo"
              />
              <h1
                className={`${public_sans.className} font-extrabold text-xl md:text-3xl text-yellow`}
              >
                Cofletx
              </h1>
            </div>
            </Link>
            <ul className="hidden text-white md:flex md:gap-4 md:font-light pt-1">
              <li><Nav route="/about" page="About Us"/></li>
              <li><Nav route="/services" page="Our Services"/></li>
              <li><Nav route="/projects" page="Projects"/></li>
              <li><Nav route="/contact" page="Contact Us"/></li>
            </ul>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <Link href="/contact">
            <button className="px-2 py-1 md:p-2 md:px-3 bg-yellow rounded transform duration-500 hover:scale-105 hover:bg-dark_purple hover:text-white">
              Contact Us
            </button>
            </Link>
          </div>
        </header>
        {children}
        <footer className="md:hidden w-full fixed bottom-0 bg-purple-950 opacity-80 flex justify-center items-center p-2">
          <Home />
          <Service />
          <Project />
          <Contact />
        </footer>
      </body>
    </html>
  );
}
