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
  title: "Fundacion Cardando Madera | Arte, musica y cultura",
  description:
    "Plataforma oficial de la Fundacion Cardando Madera en Duitama, Boyaca. Arte, musica, cultura y transformacion social.",
  keywords: [
    "Fundacion Cardando Madera",
    "Duitama",
    "Boyaca",
    "arte comunitario",
    "educacion cultural",
    "musica",
    "talleres artisticos",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${nunito.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
