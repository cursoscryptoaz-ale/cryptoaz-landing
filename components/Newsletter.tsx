"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-28 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="container mx-auto px-6 max-w-xl text-center">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--brand)" }}>
          Newsletter
        </p>
        <h2 className="text-3xl font-extrabold mb-3">Enterate primero.</h2>
        <p className="mb-8" style={{ color: "var(--text-muted)" }}>
          Enterate primero de cada nuevo lanzamiento.
        </p>

        {status === "success" ? (
          <p className="text-green-400 font-medium">Suscripto correctamente.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              className="flex-1 px-4 py-3 rounded-xl text-white placeholder-white/30 outline-none focus:ring-2 text-sm"
              style={{
                background: "var(--surface-card)",
                border: "1px solid var(--border)",
              }}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="gradient-btn text-white font-semibold px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-opacity disabled:opacity-50 whitespace-nowrap"
            >
              {status === "loading" ? "Enviando..." : "Suscribirme"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="text-red-400 text-sm mt-3">Hubo un error. Intenta de nuevo.</p>
        )}
      </div>
    </section>
  );
}