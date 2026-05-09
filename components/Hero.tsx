import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-[140px] opacity-20"
          style={{ background: "radial-gradient(ellipse, #6B3FE7 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full blur-[120px] opacity-10"
          style={{ background: "radial-gradient(ellipse, #FF4FA3 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(167,139,250,0.15) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center max-w-5xl">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img
            src="https://iili.io/qtxa2hG.png"
            alt="Crypto AZ"
            className="h-14 w-auto"
          />
        </div>

        {/* Eyebrow */}
        <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-6" style={{ color: "var(--brand)" }}>
          Academia latinoamericana de blockchain, criptomonedas y Web3
        </p>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Educacion real,{" "}
          <span className="gradient-text">sin promesas vacias.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "var(--text-muted)" }}>
          Formamos inversores, profesionales y emprendedores de toda la region
          para que operen en el mundo cripto con criterio propio.
        </p>

        {/* CTA */}
        <Link
          href="https://cryptoaz.store"
          className="gradient-btn inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full text-lg hover:opacity-90 transition-opacity"
        >
          Ver capacitaciones <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}