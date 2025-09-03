import { products, computerParts } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Cpu, Dribbble, HardDrive, MemoryStick } from 'lucide-react';
import { getDictionary } from '@/lib/dictionaries';

export default async function ProductsPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang);
  const productsDict = dict.products_page;

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">{productsDict.title}</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          {productsDict.description}
        </p>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold font-headline mb-8">{productsDict.custom_builds}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 flex flex-col overflow-hidden">
               <div className="grid md:grid-cols-2">
                 <div className="relative h-64 md:h-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      data-ai-hint={product.category === 'Gaming PC' ? 'gaming pc' : 'workstation computer'}
                      className="object-cover"
                    />
                 </div>
                 <div className="flex flex-col">
                    <CardHeader>
                      <CardTitle>{product.name}</CardTitle>
                      <CardDescription>{product.category}</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-2 flex-grow">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground"><Cpu size={16} /> {product.specs.cpu}</div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground"><Dribbble size={16}/> {product.specs.gpu}</div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground"><MemoryStick size={16}/> {product.specs.ram}</div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground"><HardDrive size={16}/> {product.specs.storage}</div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center mt-4">
                      <p className="text-2xl font-bold text-primary">${product.price.toLocaleString()}</p>
                      <Link href={`/${lang}/products/${product.slug}`}>
                        <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                          {productsDict.details} <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                 </div>
               </div>
            </Card>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold font-headline mb-8">{productsDict.computer_parts}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {computerParts.map((part) => (
            <Card key={part.name} className="p-6 flex flex-col items-center text-center">
              <h3 className="text-lg font-semibold">{part.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{part.description}</p>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href={`/${lang}/contact`}>
            <Button size="lg">{productsDict.request_custom_list}</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
