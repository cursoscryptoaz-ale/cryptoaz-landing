import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { About } from "@/components/About";
import { Team } from "@/components/Team";
import { Offerings } from "@/components/Offerings";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <About />
      <Team />
      <Offerings />
      <Newsletter />
      <Footer />
    </main>
  );
}