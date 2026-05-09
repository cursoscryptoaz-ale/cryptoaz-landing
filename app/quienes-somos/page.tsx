import { Footer } from "@/components/Footer";
import Link from "next/link";

const members = [
  {
    name: "Alexis Zeballos",
    role: "Fundador y docente principal",
  },
  {
    name: "Marcos Zocaro",
    role: "Mgter. · Instructor Workshop Tributos",
  },
  {
    name: "Agustin Castro Fox",
    role: "Profesor invitado · Trading e Inversiones",
  },
  {
    name: "Julian Maccaferri",
    role: "Profesor invitado · Trading e Inversiones",
  },
];

export default function QuienesSomosPage() {
  return (
    <>
      <main className="py-28">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--brand)" }}>
              Equipo
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Quienes estamos detras
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
              Docentes y profesionales comprometidos con la educacion cripto de calidad en latinoamerica.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((m) => (
              <div
                key={m.name}
                className="rounded-2xl p-6 text-center border"
                style={{ background: "var(--surface-card)", borderColor: "var(--border)" }}
              >
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold"
                  style={{
                    background: "linear-gradient(135deg, rgba(107,63,231,0.3), rgba(255,79,163,0.2))",
                    color: "var(--brand)",
                    border: "1px solid rgba(167,139,250,0.2)",
                  }}
                >
                  {m.name.charAt(0)}
                </div>
                <p className="font-bold text-white text-sm leading-tight">{m.name}</p>
                <p className="text-xs mt-1.5 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {m.role}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs mt-8" style={{ color: "var(--text-muted)" }}>
            * Fotos del equipo proximamente
          </p>

          <div className="text-center mt-16">
            <Link
              href="/"
              className="text-sm font-medium transition-colors"
              style={{ color: "var(--brand)" }}
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
