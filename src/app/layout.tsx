
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getDictionary } from '@/lib/dictionaries';

export const metadata: Metadata = {
  title: 'Gamers4Gamers',
  description: 'Specialized PC solutions, parts, and technical services.',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const dictionary = await getDictionary(params.lang);
  return (
    <html lang={params.lang ?? 'en'} className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
          <div className="relative flex min-h-screen flex-col">
            <Header lang={params.lang} dict={dictionary.header} />
            <main className="flex-1">{children}</main>
            <Footer lang={params.lang} dict={dictionary.footer} />
          </div>
          <Toaster />
      </body>
    </html>
  );
}
