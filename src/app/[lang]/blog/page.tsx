import { blogPosts } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { getDictionary } from '@/lib/dictionaries';

export default async function BlogPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang);
  const blogDict = dict.blog_page;

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">{blogDict.title}</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          {blogDict.description}
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 flex flex-col">
            <CardHeader className="p-0">
              <Link href={`/${lang}/blog/${post.slug}`}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  data-ai-hint="technology abstract"
                  className="rounded-t-lg object-cover aspect-[3/2]"
                />
              </Link>
            </CardHeader>
            <div className="p-6 flex flex-col flex-grow">
              <CardTitle className="mb-2">
                <Link href={`/${lang}/blog/${post.slug}`} className="hover:text-primary transition-colors">{post.title}</Link>
              </CardTitle>
              <CardDescription>{post.excerpt}</CardDescription>
              <div className="flex-grow"></div>
              <CardFooter className="p-0 pt-4 flex justify-between items-center text-sm text-muted-foreground mt-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5"><User size={14} /> {post.author}</div>
                  <div className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</div>
                </div>
                <Link href={`/${lang}/blog/${post.slug}`}>
                    <ArrowRight className="h-5 w-5 hover:text-primary transition-colors"/>
                </Link>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
