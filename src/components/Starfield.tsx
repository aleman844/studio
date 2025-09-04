
"use client";

import { useEffect, useState } from 'react';

export default function Starfield() {
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
      const newStars = Array.from({ length: 50 }).map(() => {
        const size = Math.random() * 2 + 1;
        return {
          position: 'absolute',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: 'white',
          borderRadius: '50%',
          opacity: Math.random() * 0.5,
          animation: `twinkle ${Math.random() * 5 + 2}s infinite alternate, move-stars 50s linear infinite`,
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
