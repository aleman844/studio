
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useState } from 'react';
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

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: "Home" },
    { href: '/products', label: "Products" },
    { href: '/about', label: "About" },
    { href: '/blog', label: "Blog" },
    { href: '/contact', label: "Contact" },
  ];
  
  const toolLinks = [
    { href: '/tools/seo', label: "SEO Optimizer" },
    { href: '/tools/article-generator', label: "Article Generator" },
  ]

  const NavLink = ({ href, label }: { href: string; label: string; }) => {
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
  
  const ToolsDropdown = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={cn("text-sm font-medium transition-colors hover:text-primary px-0", pathname.includes('/tools') ? "text-primary" : "text-muted-foreground")}>
          Tools
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {toolLinks.map(link => (
          <DropdownMenuItem key={link.href} asChild>
            <Link href={link.href}>{link.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const LanguageSwitcher = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="px-2">
          <span className="font-medium uppercase">Es</span>
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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Icons.logo className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">Gamers4Gamers</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
            <ToolsDropdown />
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
                <div className="flex flex-col space-y-4 px-4">
                  {navLinks.map((link) => (
                     <NavLink key={link.href} href={link.href} label={link.label} />
                  ))}
                  <div className="pt-2">
                     <h4 className="font-medium mb-2 text-muted-foreground">Tools</h4>
                     <div className='flex flex-col space-y-4'>
                       {toolLinks.map(sublink => <NavLink key={sublink.href} href={sublink.href} label={sublink.label} />)}
                     </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <Link href="/" className="flex items-center space-x-2 md:hidden">
            <Icons.logo className="h-6 w-6 text-primary" />
            <span className="font-bold">Gamers4Gamers</span>
          </Link>

          <nav className="flex items-center gap-2">
            <LanguageSwitcher />
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground hidden sm:inline-flex">
                Contact Us
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
