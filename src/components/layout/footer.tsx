import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-amber-900/15 bg-[#2e2219] px-4 py-10 text-amber-50 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">Fundacion Cardando Madera</h3>
          <p className="mt-2 text-sm text-amber-100/80">Duitama, Boyaca, Colombia</p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-wider text-amber-100/70">Proyecto academico</h4>
          <p className="mt-2 text-sm">Accion Solidaria UNAD</p>
          <p className="text-sm">David Rojas - Grupo 1331</p>
          <p className="text-sm">Ingenieria de Sistemas</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="https://facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </Link>
          <Link href="https://youtube.com" target="_blank" rel="noreferrer">
            YouTube
          </Link>
          <p className="mt-2 text-amber-100/75">Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
