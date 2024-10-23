import type { Metadata } from "next";
import "./globals.css";
import { public_sans } from "./components/fonts";
import { Button } from "./components/buttons";

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
      <body className={`${public_sans.className} antialiased`}>
        <header className="fixed w-full bg-purple-800 top-0 flex justify-between items-center px-6 py-4 shadow-lg">
          <h1 className={`${public_sans.className} text-yellow font-extrabold text-3xl`}>Cofletx</h1>
          <ul className="hidden lg:flex lg:gap-4 lg:text-white lg:font-extralight">
            <li>About Us</li>
            <li>Our Services</li>
            <li>Projects</li>
            <li>Contact Us</li>
          </ul>
          <div className="flex items-center gap-4">
            <Button text="Contact Us" paddings="py-1 px-1"/>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="size-9 stroke-yellow lg:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
