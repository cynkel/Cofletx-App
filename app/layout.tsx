import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-zinc-950 text-slate-900 bg-white dark:text-white 2xl:px-64`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
