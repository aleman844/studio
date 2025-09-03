
"use client";

import Image from 'next/image';
import { useDictionary } from '@/hooks/use-dictionary';
import ScrollAnimation from './ScrollAnimation';

const brandLogos = [
  { name: 'MSI', src: 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/msi-logo.png', width: 150, height: 80 },
  { name: 'ASUS', src: 'https://dlcdnimgs.asus.com/images/logo/20230510092305.png', width: 150, height: 80 },
  { name: 'Acer', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Acer_2011.svg/1024px-Acer_2011.svg.png', width: 150, height: 80 },
  { name: 'Gigabyte', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Gigabyte_Technology_logo.svg/1280px-Gigabyte_Technology_logo.svg.png', width: 150, height: 80 },
  { name: 'Nvidia', src: 'https://upload.wikimedia.org/wikipedia/fr/thumb/c/c6/Nvidia_logo.svg/1280px-Nvidia_logo.svg.png', width: 150, height: 80 },
  { name: 'AMD', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/AMD_Logo.svg/1280px-AMD_Logo.svg.png', width: 150, height: 80 },
];

export default function Brands() {
  const dict = useDictionary()?.home;

  if (!dict) {
    return null;
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <ScrollAnimation>
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">{dict.trusted_brands}</div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">{dict.quality_components}</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            {dict.trusted_brands_description}
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
                    {brandLogos.map((brand) => (
                        <div key={brand.name} className="flex justify-center">
                            <Image
                                src={brand.src}
                                alt={`${brand.name} logo`}
                                width={brand.width}
                                height={brand.height}
                                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </ScrollAnimation>
    </section>
  );
}
