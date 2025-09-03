
"use client";

import { useEffect, useState, ReactNode } from 'react';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import IntroAnimation from '@/components/IntroAnimation';
import ScrollAnimation from '@/components/ScrollAnimation';
import { usePathname } from 'next/navigation';

export default function LayoutClient({
  children,
}: {
  children: ReactNode;
}) {
  const [showIntro, setShowIntro] = useState(true);
  const pathname = usePathname();
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      setShowIntro(false);
    } else {
      const timer = setTimeout(() => {
        sessionStorage.setItem('hasSeenIntro', 'true');
      }, 5500); // Give a bit more time than the animation
      return () => clearTimeout(timer);
    }
  }, []);
  
  useEffect(() => {
    // Increment key on pathname change to re-trigger animation
    setAnimationKey(prevKey => prevKey + 1);
  }, [pathname]);

  const handleIntroFinish = () => {
    setShowIntro(false);
    sessionStorage.setItem('hasSeenIntro', 'true');
  };

  return (
    <>
      {showIntro ? (
        <IntroAnimation onFinish={handleIntroFinish} />
      ) : (
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main key={animationKey} className="flex-1 bg-background z-10 animate-fade-in">
            {children}
          </main>
          <ScrollAnimation>
            <Footer />
          </ScrollAnimation>
        </div>
      )}
      <Toaster />
    </>
  );
}
