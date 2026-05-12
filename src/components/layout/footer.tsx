import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookBadge, InstagramBadge } from "@/components/ui/social-icons";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-amber-900/15 bg-[#241a16] px-4 py-10 text-amber-50 md:px-8 dark:border-amber-100/10 dark:bg-stone-950">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <Image src="/Logo.png" alt="Fundacion Cardando Madera" width={180} height={60} className="h-10 w-auto md:h-12 mb-3 object-contain" />
          <h3 className="text-lg font-semibold">Fundacion Cardando Madera</h3>
          <p className="mt-2 text-sm text-amber-100/80">Arte, musica y cultura para la comunidad de Duitama</p>
          <div className="mt-4 space-y-2 text-sm text-amber-100/80">
            <p className="inline-flex items-center gap-2"><MapPin size={16} /> Cra 17 #17-48 piso 3, Duitama</p>
            <p className="inline-flex items-center gap-2"><Phone size={16} /> 311 475 5830</p>
            <p className="inline-flex items-center gap-2"><Mail size={16} /> fundacioncardandomadera@gmail.com</p>
          </div>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-wider text-amber-100/70">Experiencia cultural</h4>
          <p className="mt-2 text-sm">Talleres musicales gratuitos</p>
          <p className="text-sm">Conciertos y muestras artisticas</p>
          <p className="text-sm">Espacios para ninos, jovenes y familias</p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <Link href="https://www.instagram.com/cardando_madera/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white">
            <InstagramBadge className="h-4 w-4 text-amber-200" /> Instagram
          </Link>
          <Link href="https://www.facebook.com/funda.cardando.madera?locale=es_LA" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white">
            <FacebookBadge className="h-4 w-4 text-amber-200" /> Facebook
          </Link>
          <p className="mt-2 text-amber-100/75">Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
