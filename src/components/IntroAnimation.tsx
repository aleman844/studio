
"use client";

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Starfield = () => {
  const [stars, setStars] = useState<React.CSSProperties[]>([]);
  const [starfieldStyle, setStarfieldStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    // Generate a single random direction for the entire starfield
    const dx = (Math.random() - 0.5) * 40; // Random horizontal movement between -20px and 20px
    const dy = (Math.random() - 0.5) * 40; // Random vertical movement between -20px and 20px
    
    setStarfieldStyle({
      '--star-dx': `${dx}px`,
      '--star-dy': `${dy}px`,
    } as React.CSSProperties);

    const generateStars = () => {
      const newStars = Array.from({ length: 150 }).map(() => {
        const size = Math.random() * 2 + 1;
        const duration = Math.random() * 50 + 40; // Slower duration
        return {
          position: 'absolute',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: 'white',
          borderRadius: '50%',
          opacity: Math.random(),
          animation: `twinkle ${Math.random() * 5 + 2}s infinite alternate, move-stars ${duration}s linear infinite`,
          animationDelay: `${Math.random() * 3}s`,
        } as React.CSSProperties;
      });
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" style={starfieldStyle}>
      {stars.map((style, index) => (
        <div key={index} style={style} />
      ))}
    </div>
  );
};


export default function IntroAnimation({ onFinish }: { onFinish: () => void }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onFinish, 500); // Wait for fade-out animation to complete
    }, 4000); // Total duration of the intro screen

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 animate-brush-reveal',
        isExiting ? 'animate-fade-out' : ''
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
