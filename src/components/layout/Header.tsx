
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
import { useDictionary } from '@/hooks/use-dictionary';

export default function Header({ lang }: { lang: string }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dict = useDictionary();
  const headerDict = dict.header;

  if (!headerDict) return null; // Or a loading skeleton

  const navLinks = [
    { href: `/`, label: headerDict.home },
    { href: `/products`, label: headerDict.products },
    { href: `/about`, label: headerDict.about },
    { href: `/blog`, label: headerDict.blog },
    { href: `/contact`, label: headerDict.contact },
    {
      href: `/tools`,
      label: headerDict.tools,
      subLinks: [
        { href: `/tools/seo`, label: headerDict.seo_optimizer },
        { href: `/tools/article-generator`, label: headerDict.article_generator },
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
    const fullPath = `/${lang}${href === '/' ? '' : href}`;
    const isActive = href === `/` ? pathname === `/${lang}` : pathname.startsWith(fullPath);
    return (
      <Link
        href={fullPath}
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
          {headerDict.tools}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href={`/${lang}/tools/seo`}>{headerDict.seo_optimizer}</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/${lang}/tools/article-generator`}>{headerDict.article_generator}</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const LanguageSwitcher = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="px-2">
          <span className="font-medium uppercase">{lang}</span>
          <span className="sr-only">{headerDict.language_switcher}</span>
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
                          {link.subLinks.map(sublink => <NavLink key={sublink.href} href={sublink.href} label={sublink.label} />)}
                        </div>
                      </div>
                    ) :
                      (
                        <div key={link.href} className='px-4'>
                           <NavLink href={link.href} label={link.label} />
                        </div>
                      )
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
                {headerDict.contact_us}
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
