import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simulador de señales",
  description: "Ambiente base en Next.js",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
