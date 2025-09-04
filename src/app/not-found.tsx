
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { TriangleAlert } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container mx-auto flex h-[calc(100vh-8rem)] items-center justify-center px-4 text-center md:px-6">
      <div className="space-y-6">
        <TriangleAlert className="mx-auto h-16 w-16 text-primary" />
        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline">
          404 - Page Not Found
        </h1>
        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
          Oops! It seems you've ventured into uncharted territory. The page you're looking for doesn't exist.
        </p>
        <div className="flex justify-center">
          <Link href="/">
            <Button size="lg">Return to Homepage</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
