
"use client";

import { useEffect, useState, ReactNode } from 'react';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import IntroAnimation from '@/components/IntroAnimation';
import ScrollAnimation from '@/components/ScrollAnimation';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function LayoutClient({
  children,
}: {
  children: ReactNode;
}) {
  const [introState, setIntroState] = useState('showing'); // showing -> finished
  const pathname = usePathname();
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      setIntroState('finished');
    }
  }, []);
  
  useEffect(() => {
    // Increment key on pathname change to re-trigger animation
    setAnimationKey(prevKey => prevKey + 1);
  }, [pathname]);

  const handleIntroFinish = () => {
    setIntroState('finished');
    sessionStorage.setItem('hasSeenIntro', 'true');
  };

  const isIntroFinished = introState === 'finished';

  return (
    <>
      {introState === 'showing' ? (
        <IntroAnimation onFinish={handleIntroFinish} />
      ) : null}

      <div className={cn(
        "relative flex min-h-screen flex-col",
        isIntroFinished ? 'animate-fade-in' : 'opacity-0'
      )}>
        <Header hideLogo={!isIntroFinished} />
        <main key={animationKey} className="flex-1 bg-background z-10">
          {children}
        </main>
        <ScrollAnimation>
          <Footer />
        </ScrollAnimation>
      </div>
      <Toaster />
    </>
  );
}
