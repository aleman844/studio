
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Icons } from '../icons';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { useDictionary } from '@/contexts/DictionaryContext';

export default function Header() {
  const pathname = usePathname();
  const [lang, setLang] = useState('en');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dict = useDictionary().header;

  useEffect(() => {
    if (pathname) {
      const segments = pathname.split('/');
      // Assuming the language is the first segment, e.g., /en/products
      setLang(segments[1] || 'en');
    }
  }, [pathname]);

  if (!dict) return null; // Or a loading skeleton

  const navLinks = [
    { href: `/${lang}/`, label: dict.home },
    { href: `/${lang}/products`, label: dict.products },
    { href: `/${lang}/about`, label: dict.about },
    { href: `/${lang}/blog`, label: dict.blog },
    { href: `/${lang}/contact`, label: dict.contact },
    {
      href: `/${lang}/tools`,
      label: dict.tools,
      subLinks: [
        { href: `/${lang}/tools/seo`, label: dict.seo_optimizer },
        { href: `/${lang}/tools/article-generator`, label: dict.article_generator },
      ],
    },
  ];

  const redirectedPathName = (locale: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    // Exact match for home, startsWith for others
    const isActive = href === `/${lang}/` ? pathname === href : pathname.startsWith(href);
    return (
      <Link
        href={href}
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          isActive ? "text-primary" : "text-muted-foreground"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {label}
      </Link>
    );
  };

  const LanguageSwitcher = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="px-2">
          <span className="font-medium uppercase">{lang}</span>
          <span className="sr-only">{dict.language_switcher}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href={redirectedPathName('en')}>English</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={redirectedPathName('es')}>Español</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href={`/${lang}`} className="mr-6 flex items-center space-x-2">
            <Icons.logo className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">Gamers4Gamers</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.filter(l => !l.subLinks).map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
             <Link href={`/${lang}/tools/seo`} className={cn("text-sm font-medium transition-colors hover:text-primary", pathname.includes('/tools') ? "text-primary" : "text-muted-foreground")}>{dict.tools}</Link>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <Link href={`/${lang}`} className="mr-6 flex items-center space-x-2 mb-6">
                  <Icons.logo className="h-6 w-6 text-primary" />
                  <span className="font-bold">Gamers4Gamers</span>
                </Link>
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    link.subLinks ? (
                      <div key={link.href} className='px-4'>
                         <h4 className="font-medium py-2">{link.label}</h4>
                         <div className='flex flex-col space-y-4 ml-4'>
                            {link.subLinks.map(sublink => <NavLink key={sublink.href} {...sublink} />)}
                         </div>
                      </div>
                    ) :
                    <div className='px-4'>
                      <NavLink key={link.href} {...link} />
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <Link href={`/${lang}`} className="flex items-center space-x-2 md:hidden">
             <Icons.logo className="h-6 w-6 text-primary" />
             <span className="font-bold">Gamers4Gamers</span>
          </Link>

          <nav className="flex items-center gap-2">
            <LanguageSwitcher />
            <Link href={`/${lang}/contact`}>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground hidden sm:inline-flex">
                {dict.contact_us}
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
