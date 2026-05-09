import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="border-t py-12"
      style={{ borderColor: "var(--border)", background: "var(--surface)" }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img
            src="https://iili.io/qtxa2hG.png"
            alt="Crypto AZ"
            className="h-8 w-auto"
          />
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm" style={{ color: "var(--text-muted)" }}>
            <Link href="https://cryptoaz.store" className="hover:text-white transition-colors">
              cryptoaz.store
            </Link>
            <Link href="https://cryptoaz.online" className="hover:text-white transition-colors">
              cryptoaz.online
            </Link>
            <Link
              href="https://instagram.com/_crypto.az"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              @_crypto.az
            </Link>
            <Link
              href="mailto:info@cryptoaz.com.ar"
              className="hover:text-white transition-colors"
            >
              info@cryptoaz.com.ar
            </Link>
          </nav>
          <div className="text-xs text-right" style={{ color: "var(--text-muted)" }}>
            <p>© 2026 Crypto AZ</p>
            <p className="mt-1">Desarrollado por AIZ Solutions</p>
          </div>
        </div>
      </div>
    </footer>
  );
}