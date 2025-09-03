
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useDictionary } from '@/hooks/use-dictionary';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      <path d="M14.05 2.9A15.9 15.9 0 0 1 21.1 10m-7.05-7.1A15.9 15.9 0 0 0 2.9 10" />
    </svg>
);


export default function Footer() {
  const pathname = usePathname();
  const lang = pathname.split('/')[1] || 'es';
  const dict = useDictionary()?.footer;
  const whatsappUrl = `https://wa.me/573218331005?text=${encodeURIComponent("Hola, estoy interesado en sus productos y me gustaría obtener más información.")}`;
  
  if (!dict) {
    return null; // or a loading spinner
  }

  return (
    <footer className="relative overflow-hidden w-full border-t border-border/40 bg-card text-card-foreground">
      <div className="container relative z-10 mx-auto py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href={`/${lang}`} className="flex items-center space-x-2 mb-4">
              <Image src="/logo.svg" alt="Gamers4Gamers Company Logo" width={32} height={32} className="h-8 w-8" />
              <span className="text-xl font-bold">
                Gamers <span className="text-accent text-2xl inline-block -rotate-12 animate-wobble-and-rotate">4</span> Gamers
              </span>
            </Link>
            <p className="text-muted-foreground">
              {dict.tagline}
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{dict.quick_links}</h3>
            <ul className="space-y-2">
              <li><Link href={`/${lang}/about`} className="text-muted-foreground hover:text-primary transition-colors">{dict.about_us}</Link></li>
              <li><Link href={`/${lang}/products`} className="text-muted-foreground hover:text-primary transition-colors">{dict.products}</Link></li>
              <li><Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">{dict.contact}</Link></li>
              <li><Link href={`/${lang}/blog`} className="text-muted-foreground hover:text-primary transition-colors">{dict.blog}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{dict.connect_with_us}</h3>
            <div className="flex space-x-4 mb-4">
              <Link href="https://wa.me/573218331005" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="http://facebook.com/GamersForGamersStore" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://www.instagram.com/gamers4gamersstore" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://www.youtube.com/@gamers4gamers" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
            <p className="text-muted-foreground text-sm">{dict.address}</p>
            <p className="text-muted-foreground text-sm">{dict.email}</p>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>{dict.copyright.replace('{year}', new Date().getFullYear())}</p>
        </div>
      </div>
    </footer>
  );
}
