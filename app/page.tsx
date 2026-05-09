import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { About } from "@/components/About";
import { Offerings } from "@/components/Offerings";
import { Newsletter } from "@/components/Newsletter";
import { SocialLinks } from "@/components/SocialLinks";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <About />
      <Offerings />
      <SocialLinks />
      <Newsletter />
      <Footer />
    </main>
  );
}