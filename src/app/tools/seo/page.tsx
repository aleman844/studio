import SeoTool from "@/components/SeoTool";

export default function SeoPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      <section className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">AI SEO Optimizer</h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Leverage AI to analyze your website content and discover high-impact keywords. Get actionable suggestions to climb the search rankings.
        </p>
      </section>
      <SeoTool />
    </div>
  );
}
