
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { useDictionary } from '@/hooks/use-dictionary';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lang = pathname.split('/')[1] || 'es';
  const dict = useDictionary()?.header;

  const navLinks = [
    { href: '/', label: dict?.home || 'Home' },
    { href: '/products', label: dict?.products || 'Products' },
    { href: '/about', label: dict?.about || 'About' },
    { href: '/blog', label: dict?.blog || 'Blog' },
    { href: '/contact', label: dict?.contact || 'Contact' },
  ];

  const NavLink = ({ href, label }: { href: string; label: string; }) => {
    const finalHref = href === '/' ? `/${lang}` : `/${lang}${href}`;
    const isActive = pathname === finalHref;
    return (
      <Link
        href={finalHref}
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
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href="/en">English</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/es">Español</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const Logo = ({ className }: { className?: string }) => (
    <Link href={`/${lang}`} className={cn("flex items-center space-x-2", className)} onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)}>
      <Image src="/logo.svg" alt="Gamers4Gamers Company Logo" width={24} height={24} className="h-6 w-6" />
      <span className="font-bold">
        Gamers <span className="text-accent text-xl inline-block group-data-[state=open]:animate-wobble-and-rotate group-[.animate-fade-in_&]:animate-wobble-and-rotate rotate-12">4</span> Gamers
      </span>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Logo className="mr-6" />
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
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
                <Logo className="mb-6" />
                <div className="flex flex-col space-y-4 px-4">
                  {navLinks.map((link) => (
                     <NavLink key={link.href} href={link.href} label={link.label} />
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          <div className="md:hidden">
            <Logo />
          </div>

          <nav className="flex items-center gap-2">
            <LanguageSwitcher />
            <Link href={`/${lang}/contact`}>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground hidden sm:inline-flex">
                {dict?.contact_us || 'Contact Us'}
              </Button>
            </Link>
          </nav>
        </div>
      </div>
      <div className="relative h-[1px] w-full animate-brush-reveal overflow-hidden"></div>
    </header>
  );
}
