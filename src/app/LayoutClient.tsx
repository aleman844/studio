
"use client";

import { useEffect, useState, ReactNode } from 'react';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import IntroAnimation from '@/components/IntroAnimation';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function LayoutClient({
  children,
  lang,
}: {
  children: ReactNode;
  lang: string;
}) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      setShowIntro(false);
    } else {
      const timer = setTimeout(() => {
        sessionStorage.setItem('hasSeenIntro', 'true');
      }, 3500); // Give a bit more time than the animation
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleIntroFinish = () => {
    setShowIntro(false);
    sessionStorage.setItem('hasSeenIntro', 'true');

  };

  return (
    <>
      {showIntro ? (
        <IntroAnimation onFinish={handleIntroFinish} />
      ) : (
        <div className="relative flex min-h-screen flex-col animate-fade-in">
          <Header lang={lang} />
          <main className="flex-1 bg-background z-10">{children}</main>
          <ScrollAnimation>
            <Footer />
          </ScrollAnimation>
        </div>
      )}
      <Toaster />
    </>
  );
}
