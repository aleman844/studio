"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Icons } from '../icons';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  {
    href: '/tools',
    label: 'Tools',
    subLinks: [
      { href: '/tools/seo', label: 'SEO Optimizer' },
      { href: '/tools/article-generator', label: 'Article Generator' },
    ],
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
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
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Icons.logo className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">Gamers4Gamers</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.filter(l => !l.subLinks).map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
             <Link href="/tools/seo" className={cn("text-sm font-medium transition-colors hover:text-primary", pathname.startsWith('/tools') ? "text-primary" : "text-muted-foreground")}>Tools</Link>
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
                <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                  <Icons.logo className="h-6 w-6 text-primary" />
                  <span className="font-bold">Gamers4Gamers</span>
                </Link>
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    link.subLinks ? (
                      <div key={link.href}>
                         <h4 className="font-medium px-4 py-2">{link.label}</h4>
                         {link.subLinks.map(sublink => <NavLink key={sublink.href} {...sublink} />)}
                      </div>
                    ) :
                    <NavLink key={link.href} {...link} />
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <Link href="/" className="flex items-center space-x-2 md:hidden">
             <Icons.logo className="h-6 w-6 text-primary" />
             <span className="font-bold">Gamers4Gamers</span>
          </Link>

          <nav className="flex items-center">
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Contact Us
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
