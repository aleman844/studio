
"use client";

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Starfield from './Starfield';

const STAGES = {
  STARS: 0,
  LOGO: 1,
  TEXT: 2,
  HOLD: 3,
  FINISH: 4,
};

export default function IntroAnimation({ onFinish }: { onFinish: () => void }) {
  const [stage, setStage] = useState(STAGES.STARS);

  useEffect(() => {
    const sequence = [
      () => setStage(STAGES.LOGO), // Show logo
      () => setStage(STAGES.TEXT), // Show text
      () => setStage(STAGES.HOLD), // Hold everything
      () => {
        setStage(STAGES.FINISH); // Start fade out
        onFinish();
      },
    ];

    // Total duration: 500 + 1000 + 2500 + 1000 = 5000ms (5 seconds)
    const timeouts = [500, 1000, 2500, 1000];
    let currentTimeoutIndex = 0;

    const timers = timeouts.map((delay, index) => {
      return setTimeout(() => {
        sequence[index]();
      }, timeouts.slice(0, index + 1).reduce((a, b) => a + b, 0) - delay);
    });

    return () => {
      timers.forEach(clearTimeout);
    };
    
  }, [onFinish]);

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background',
        stage === STAGES.FINISH && 'animate-fade-out'
      )}
    >
      <div className={cn('absolute inset-0 transition-opacity duration-1000', stage >= STAGES.STARS ? 'opacity-100 animate-fade-in-slow' : 'opacity-0')}>
        <Starfield />
      </div>

      <div className="relative flex flex-col items-center justify-center">
        {stage >= STAGES.LOGO && (
           <Image 
            src="/logo.svg" 
            alt="Gamers4Gamers Logo" 
            width={384} 
            height={384} 
            className={cn(
              "h-96 w-96 text-primary animate-wobble-and-rotate"
            )}
            style={ stage === STAGES.HOLD ? { animation: 'scale-in-out 3s ease-in-out infinite', filter: 'drop-shadow(0 0 10px hsl(var(--foreground) / 0.8))' } : { filter: 'drop-shadow(0 0 10px hsl(var(--foreground) / 0.8))' } }
          />
        )}
       
        {stage >= STAGES.TEXT && (
          <div className={cn(
            "flex items-center space-x-2 -mt-12 overflow-hidden px-4"
          )} 
          style={ stage === STAGES.HOLD ? { animation: 'scale-in-out 3s ease-in-out infinite', filter: 'drop-shadow(0 0 10px hsl(var(--foreground) / 0.8))' } : { filter: 'drop-shadow(0 0 10px hsl(var(--foreground) / 0.8))' } }
          >
            <span className="text-4xl md:text-5xl font-bold animate-slide-in-left opacity-0" style={{ animationDelay: '0s' }}>
              Gamers
            </span>
            <span className="text-accent text-5xl md:text-6xl inline-block -rotate-12 font-bold animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
              4
            </span>
            <span className="text-4xl md:text-5xl font-bold animate-slide-in-right opacity-0" style={{ animationDelay: '0s' }}>
              Gamers
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
