
"use client";

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function IntroAnimation({ onFinish }: { onFinish: () => void }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onFinish, 500); // Wait for fade-out animation to complete
    }, 3000); // Total duration of the intro screen

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500',
        isExiting ? 'animate-fade-out' : ''
      )}
    >
      <div className="flex flex-col items-center gap-6">
        <Image 
          src="/logo.svg" 
          alt="Gamers4Gamers Logo" 
          width={192} 
          height={192} 
          className="h-48 w-48 text-primary animate-wobble-and-rotate"
        />
        <h1 
          className="text-4xl font-bold tracking-wider text-foreground animate-slide-in-bottom" 
          style={{ animationDelay: '0.5s' }}
        >
          Gamers4Gamers
        </h1>
      </div>
    </div>
  );
}
