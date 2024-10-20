import Header from "@/app/components/header";
import Hero from "@/app/components/hero";
import Services from "@/app/components/services";
import FAQ from "@/app/components/faq"; 
import Card from "./components/card";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
    </main>
  );
}
