import { blogPosts } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { teamMembers } from '@/lib/data';

export async function generateStaticParams() {
  const languages = ['en', 'es'];
  const params: { lang: string; slug: string }[] = [];
  
  languages.forEach(lang => {
    blogPosts.forEach(post => {
      params.push({ lang, slug: post.slug });
    });
  });

  return params;
}

export default function BlogPostPage({ params }: { params: { slug: string, lang: string } }) {
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
      
      <div className="prose prose-invert prose-lg max-w-none prose-p:text-muted-foreground prose-headings:font-headline prose-headings:text-foreground">
        <p>{post.excerpt}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
        <h2>Subheading for the Article</h2>
        <p>Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. </p>
        <blockquote>"This is a blockquote to emphasize a key point. Performance is not just a number, it's a feeling."</blockquote>
        <p>Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. </p>
      </div>
    </article>
  );
}
