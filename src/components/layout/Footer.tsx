
"use client";

import Link from 'next/link';
import { Icons } from '../icons';
import { Twitter, Instagram, Facebook } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Footer({ lang, dict }: { lang: string, dict: any }) {
  const pathname = usePathname();

  if (!dict) return null;

  const footerDict = dict;

  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href={`/${lang}`} className="flex items-center space-x-2 mb-4">
              <Icons.logo className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Gamers4Gamers</span>
            </Link>
            <p className="text-muted-foreground">
              {footerDict.tagline}
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{footerDict.quick_links}</h3>
            <ul className="space-y-2">
              <li><Link href={`/${lang}/about`} className="text-muted-foreground hover:text-primary transition-colors">{footerDict.about_us}</Link></li>
              <li><Link href={`/${lang}/products`} className="text-muted-foreground hover:text-primary transition-colors">{footerDict.products}</Link></li>
              <li><Link href={`/${lang}/contact`} className="text-muted-foreground hover:text-primary transition-colors">{footerDict.contact}</Link></li>
              <li><Link href={`/${lang}/blog`} className="text-muted-foreground hover:text-primary transition-colors">{footerDict.blog}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{footerDict.connect_with_us}</h3>
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
            <p className="text-muted-foreground text-sm">{footerDict.address}</p>
            <p className="text-muted-foreground text-sm">{footerDict.email}</p>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>{footerDict.copyright.replace('{year}', new Date().getFullYear())}</p>
        </div>
      </div>
    </footer>
  );
}
