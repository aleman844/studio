import { products } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Cpu, HardDrive, MemoryStick, CheckCircle } from 'lucide-react';
import Link from 'next/link';

// This is a speciallucide icon, not in the library.
const GpuIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect>
        <circle cx="9" cy="9" r="2"></circle>
        <path d="M15.5 15.5L19 19"></path><path d="M2 15l3-3l2 2l3-3"></path>
    </svg>
)

const WhatsAppButton = ({ productName }: { productName: string }) => {
  const phoneNumber = '1234567890'; // Replace with actual number
  const message = `Hi, I'm interested in the "${productName}" build. Can I get more information?`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white">
        Chat on WhatsApp
      </Button>
    </Link>
  );
};

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={1200}
            height={800}
            data-ai-hint={product.category === 'Gaming PC' ? 'gaming pc' : 'workstation computer'}
            className="rounded-lg shadow-xl object-cover w-full aspect-[4/3]"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold font-headline">{product.name}</h1>
          <p className="text-lg text-muted-foreground mt-2">{product.category}</p>
          <p className="text-4xl font-bold text-primary my-6">${product.price.toLocaleString()}</p>
          
          <div className="space-y-4 text-lg">
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </div>
          
          <div className="mt-8 space-y-4">
             <WhatsAppButton productName={product.name} />
             <Link href="/contact">
               <Button size="lg" variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                 Request Customization
               </Button>
             </Link>
          </div>
        </div>
      </div>
      
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-12 font-headline">Full Specifications</h2>
        <div className="max-w-4xl mx-auto bg-card rounded-lg p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                    <Cpu className="w-10 h-10 text-primary" />
                    <div>
                        <h3 className="font-semibold text-lg">Processor</h3>
                        <p className="text-muted-foreground">{product.specs.cpu}</p>
                    </div>
                </div>
                 <div className="flex items-center gap-4">
                    <GpuIcon className="w-10 h-10 text-primary" />
                    <div>
                        <h3 className="font-semibold text-lg">Graphics Card</h3>
                        <p className="text-muted-foreground">{product.specs.gpu}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <MemoryStick className="w-10 h-10 text-primary" />
                    <div>
                        <h3 className="font-semibold text-lg">Memory (RAM)</h3>
                        <p className="text-muted-foreground">{product.specs.ram}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <HardDrive className="w-10 h-10 text-primary" />
                    <div>
                        <h3 className="font-semibold text-lg">Storage</h3>
                        <p className="text-muted-foreground">{product.specs.storage}</p>
                    </div>
                </div>
            </div>
             <div className="border-t my-8"></div>
             <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> Professionally assembled and cable managed</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> 72-hour stress testing and quality assurance</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> 3-Year parts and labor warranty</li>
             </ul>
        </div>
      </div>
    </div>
  );
}
