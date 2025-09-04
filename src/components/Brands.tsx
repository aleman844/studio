
"use client";

import Image from 'next/image';
import { useDictionary } from '@/hooks/use-dictionary';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const brandLogos = [
  { name: 'MSI', src: '/msi.png', width: 150, height: 80 },
  { name: 'ASUS', src: '/asus.png', width: 150, height: 80 },
  { name: 'Acer', src: '/acer.png', width: 150, height: 80 },
  { name: 'Nvidia', src: '/nvidia.png', width: 150, height: 80 },
  { name: 'AMD', src: '/amd2.png', width: 150, height: 80 },
];

export default function Brands() {
  const dict = useDictionary()?.home;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  if (!dict) {
    return null;
  }

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className={cn(
          "transition-all duration-1000 ease-out",
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">{dict.trusted_brands}</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">{dict.quality_components}</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {dict.trusted_brands_description}
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
          {brandLogos.map((brand, index) => (
            <div
              key={brand.name}
              className={cn(
                "flex justify-center items-center h-20 w-full opacity-0",
                isVisible && "animate-jump-in"
              )}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Image
                src={brand.src}
                alt={`${brand.name} logo`}
                width={brand.width}
                height={brand.height}
                className="object-contain h-full w-full filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
