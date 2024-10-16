import Header from "@/app/components/header";
import Hero from "@/app/components/hero";
import Services from "@/app/components/services";
import FAQ from "@/app/components/faq";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <main className="dark: text-black">
      <Header />
      <Hero />
      <Services />
      <FAQ />
      <Footer />
    </main>
  );
}
