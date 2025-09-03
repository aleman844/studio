import ArticleGenerator from "@/components/ArticleGenerator";

export default function ArticleGeneratorPage({ params: { lang } }: { params: { lang: string } }) {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      <section className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">AI Tech Article Generator</h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Instantly create engaging, SEO-friendly blog posts on any tech topic. Just provide a few details and let our AI do the writing.
        </p>
      </section>
      <ArticleGenerator lang={lang} />
    </div>
  );
}
