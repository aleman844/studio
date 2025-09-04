
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Providers from './providers';
import { getDictionary } from '@/lib/dictionaries';
import LayoutClient from './LayoutClient';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

export const metadata: Metadata = {
  title: {
    template: '%s | Gamers4Gamers',
    default: 'Gamers4Gamers - Custom High-Performance PCs',
  },
  description: 'We craft bespoke high-performance PCs for gaming, content creation, and professional use. Built by gamers, for gamers. Experience unparalleled power and dedicated technical service.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'Gamers4Gamers - Custom High-Performance PCs',
    description: 'Bespoke high-performance PCs for gaming, content creation, and professional use.',
    url: siteUrl,
    siteName: 'Gamers4Gamers',
    images: [
      {
        url: '/P1.jpeg', 
        width: 1200,
        height: 800,
        alt: 'High-performance gaming PC by Gamers4Gamers',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gamers4Gamers - Custom High-Performance PCs',
    description: 'Bespoke high-performance PCs for gaming, content creation, and professional use.',
    images: [`${siteUrl}/P1.jpeg`],
  },
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const dictionary = await getDictionary(params.lang ?? 'es');

  return (
    <html lang={params.lang ?? 'es'} className={cn("dark")}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Providers dictionary={dictionary}>
          <LayoutClient>
            {children}
          </LayoutClient>
        </Providers>
      </body>
    </html>
  );
}
