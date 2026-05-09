import Link from "next/link";
import { ArrowRight } from "lucide-react";

const offerings = [
  {
    title: "Membresias al campus",
    desc: "Acceso completo a todos los cursos pregrabados, clases en vivo, workshops y webinars incluidos en tu plan. Una sola inversion, todo incluido.",
    cta: "Ver membresias",
    href: "https://cryptoaz.store/#membresias",
  },
  {
    title: "Capacitaciones sueltas",
    desc: "Compra cursos, workshops o webinars individuales sin necesidad de membresia. Acceso permanente a la grabacion y materiales.",
    cta: "Ver capacitaciones",
    href: "https://cryptoaz.store/#capacitaciones",
  },
  {
    title: "Comunidad",
    desc: "Grupo activo de alumnos, acceso a preguntas y respuestas con los docentes, y networking con profesionales de toda la region.",
    cta: "Ingresar al campus",
    href: "https://cryptoaz.online",
  },
];

export function Offerings() {
  return (
    <section className="py-28 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--brand)" }}>
            Lo que ofrecemos
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Tres formas de aprender con nosotros
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {offerings.map((o) => (
            <div
              key={o.title}
              className="rounded-2xl p-8 flex flex-col gap-4 border"
              style={{ background: "var(--surface-card)", borderColor: "var(--border)" }}
            >
              <h3 className="text-lg font-bold text-white">{o.title}</h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
                {o.desc}
              </p>
              <Link
                href={o.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                style={{ color: "var(--brand)" }}
              >
                {o.cta} <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}