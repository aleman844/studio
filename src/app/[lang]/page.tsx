import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { teamMembers, products } from '@/lib/data';
import { ArrowRight, Cpu, Dribbble, Github, HardDrive, MemoryStick, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getDictionary } from '@/lib/dictionaries';

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang);
  const homeDict = dict.home;
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    {homeDict.title}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    {homeDict.description}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href={`/${lang}/products`}>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      {homeDict.explore_builds}
                    </Button>
                  </Link>
                  <Link href={`/${lang}/contact`}>
                    <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      {homeDict.get_a_quote}
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="https://picsum.photos/1200/800"
                width={1200}
                height={800}
                alt="Hero"
                data-ai-hint="gaming pc"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">{homeDict.our_mission}</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">{homeDict.unleashing_potential}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {homeDict.mission_description}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="products" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">{homeDict.featured_products}</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">{homeDict.top_tiers}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {homeDict.featured_products_description}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 flex flex-col">
                  <CardHeader>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={600}
                      height={400}
                      data-ai-hint={product.category === 'Gaming PC' ? 'gaming pc' : 'workstation computer'}
                      className="rounded-t-lg object-cover aspect-[3/2]"
                    />
                    <CardTitle className="pt-4">{product.name}</CardTitle>
                    <CardDescription>{product.category}</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-2 flex-grow">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground"><Cpu /> {product.specs.cpu}</div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground"><Dribbble /> {product.specs.gpu}</div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground"><MemoryStick /> {product.specs.ram}</div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground"><HardDrive /> {product.specs.storage}</div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <p className="text-2xl font-bold text-primary">${product.price.toLocaleString()}</p>
                    <Link href={`/${lang}/products/${product.slug}`}>
                      <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                        {homeDict.view_details} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">{homeDict.meet_the_experts}</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {homeDict.team_description}
              </p>
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="flex flex-col items-center space-y-2">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={member.image} alt={member.name} data-ai-hint="portrait professional" />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                    <p className="text-sm text-muted-foreground mt-2">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
