import Link from "next/link";

const redes = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/_crypto.az/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" width={24} height={24}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Crypto-AZ/100087331395148/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@CryptoAZ-classvideos",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/az-crypto/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export function SocialLinks() {
  return (
    <section className="py-20 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--brand)" }}>
          Redes sociales
        </p>
        <h2 className="text-3xl font-extrabold mb-10">Seguinos en redes</h2>
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {redes.map(({ label, href, icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 group"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-all group-hover:scale-110"
                style={{
                  background: "var(--surface-card)",
                  borderColor: "var(--border)",
                  color: "var(--brand)",
                }}
              >
                {icon}
              </div>
              <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
