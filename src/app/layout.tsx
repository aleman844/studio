
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Providers from './providers';
import { getDictionary } from '@/lib/dictionaries';
import LayoutClient from './LayoutClient';


export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const dictionary = await getDictionary(params.lang ?? 'es');

  return (
    <html lang={params.lang ?? 'es'} className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <Providers dictionary={dictionary}>
          <LayoutClient lang={params.lang}>
            {children}
          </LayoutClient>
        </Providers>
      </body>
    </html>
  );
}

