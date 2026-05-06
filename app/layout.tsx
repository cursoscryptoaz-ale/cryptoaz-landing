import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crypto AZ — La academia argentina de criptomonedas y Web3",
  description:
    "Educación real, sin promesas vacías. Formamos inversores, profesionales y emprendedores de toda la región para que operen en el mundo cripto con criterio propio.",
  openGraph: {
    title: "Crypto AZ",
    description: "La academia argentina de criptomonedas y Web3.",
    url: "https://cryptoaz.com.ar",
    siteName: "Crypto AZ",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}