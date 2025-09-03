
"use client";

import Link from 'next/link';
import { Icons } from '../icons';
import { Twitter, Instagram, Facebook } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Footer() {
  const pathname = usePathname();
  const lang = pathname.split('/')[1] || 'es';

  return (
    <footer className="relative overflow-hidden w-full border-t border-border/40 bg-card text-card-foreground animate-brush-reveal">
      <div className="container relative z-10 mx-auto py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href={`/${lang}`} className="flex items-center space-x-2 mb-4">
              <Icons.logo className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Gamers4Gamers</span>
            </Link>
            <p className="text-muted-foreground">
              Creando PCs de alto rendimiento para gaming y uso profesional.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href={`/${lang}/about`} className="text-muted-foreground hover:text-primary transition-colors">Sobre Nosotros</Link></li>
              <li><Link href={`/${lang}/products`} className="text-muted-foreground hover:text-primary transition-colors">Productos</Link></li>
              <li><Link href={`/${lang}/contact`} className="text-muted-foreground hover:text-primary transition-colors">Contacto</Link></li>
              <li><Link href={`/${lang}/blog`} className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Conecta con Nosotros</h3>
            <div className="flex space-x-4 mb-4">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
            <p className="text-muted-foreground text-sm">123 Gaming Lane, Tech City, 12345</p>
            <p className="text-muted-foreground text-sm">contacto@gamers4gamers.com</p>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&#169; {new Date().getFullYear()} Gamers4Gamers. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
