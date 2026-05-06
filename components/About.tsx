export function About() {
  return (
    <section id="nosotros" className="py-28 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--brand)" }}>
              Sobre nosotros
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Conocimiento que{" "}
              <span className="gradient-text">cambia decisiones.</span>
            </h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Crypto AZ nacio con una conviccion simple: en un mercado lleno de ruido,
              la mejor ventaja es el conocimiento. Desde Argentina, formamos a inversores,
              profesionales y emprendedores de toda la region para que operen en el mundo
              cripto con criterio propio — sin depender de senales, sin atajos.
            </p>
            <p className="text-lg leading-relaxed mt-4 font-medium" style={{ color: "var(--text)" }}>
              No prometemos rendimientos. Prometemos que vas a entender lo que estas haciendo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}