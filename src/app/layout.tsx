import type { Metadata } from "next";
import { Nunito, Playfair_Display } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fundacion Cardando Madera | Cultura y accion comunitaria",
  description:
    "Plataforma oficial de la Fundacion Cardando Madera en Duitama, Boyaca. Arte, educacion y transformacion social.",
  keywords: [
    "Fundacion Cardando Madera",
    "Duitama",
    "Boyaca",
    "arte comunitario",
    "educacion cultural",
    "accion solidaria",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${nunito.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#f7f0e6] text-stone-900 dark:bg-stone-950 dark:text-stone-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
