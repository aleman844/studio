
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
    }, 8000); // Total duration of the intro screen

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 animate-brush-reveal',
        isExiting ? 'animate-fade-out' : ''
      )}
    >
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
