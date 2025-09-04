
"use client";

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Starfield from './Starfield';

export default function IntroAnimation({ onFinish }: { onFinish: () => void }) {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFinished(true);
      onFinish();
    }, 4000); // Animation duration

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center bg-background',
        isFinished && 'animate-fade-out'
      )}
    >
      <Starfield />
      <Image 
        src="/logo.svg" 
        alt="Gamers4Gamers Logo" 
        width={384} 
        height={384} 
        className="h-96 w-96 text-primary animate-wobble-and-rotate"
      />
    </div>
  );
}
