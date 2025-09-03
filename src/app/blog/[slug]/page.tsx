
import { blogPosts } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { teamMembers } from '@/lib/data';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    notFound();
  }
  
  const authorInfo = teamMembers.find(member => member.name === post.author);

  return (
    <article className="container mx-auto px-4 py-12 md:px-6 md:py-20 max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 leading-tight">{post.title}</h1>
        <div className="flex items-center space-x-4 text-muted-foreground">
            <div className="flex items-center gap-2">
                {authorInfo && (
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={authorInfo.image} data-ai-hint="portrait professional" />
                        <AvatarFallback>{authorInfo.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                )}
                <span>{post.author}</span>
            </div>
            <span className="text-muted-foreground/50">|</span>
            <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <time dateTime={post.date}>{post.date}</time>
            </div>
        </div>
      </header>
      
      <Image
        src={post.image}
        alt={post.title}
        width={1200}
        height={800}
        data-ai-hint="technology abstract"
        className="rounded-lg shadow-lg mb-12 w-full object-cover aspect-video"
      />
      
       <div 
        className="prose prose-invert prose-lg max-w-none prose-p:text-muted-foreground prose-headings:font-headline prose-headings:text-foreground prose-a:text-primary prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:marker:text-primary"
        dangerouslySetInnerHTML={{ __html: post.content || '' }}
      />
    </article>
  );
}
