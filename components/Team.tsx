interface Member {
  name: string;
  role: string;
  photo?: string;
}

const members: Member[] = [
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

export function Team() {
  return (
    <section className="py-28 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--brand)" }}>
            Equipo
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Quienes estan detras
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {members.map((m) => (
            <div
              key={m.name}
              className="rounded-2xl p-6 text-center border"
              style={{ background: "var(--surface-card)", borderColor: "var(--border)" }}
            >
              {/* Avatar placeholder */}
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
      </div>
    </section>
  );
}