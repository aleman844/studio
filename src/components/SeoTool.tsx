"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { suggestSeoOptimizationsAction } from "@/app/actions";
import { SuggestSeoOptimizationsOutput } from "@/ai/flows/suggest-seo-optimizations";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  websiteContent: z.string().min(50, { message: "Content must be at least 50 characters." }),
  targetKeywords: z.string().min(3, { message: "Please provide at least one keyword." }),
});

export default function SeoTool({ lang }: { lang: string }) {
  const { toast } = useToast();
  const [result, setResult] = useState<SuggestSeoOptimizationsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      websiteContent: "",
      targetKeywords: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    try {
      const response = await suggestSeoOptimizationsAction(values);
      setResult(response);
    } catch (error) {
      toast({
        title: "An error occurred",
        description: (error as Error).message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Analyze Your Content</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="websiteContent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website Content</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Paste your website content here..." className="min-h-[200px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="targetKeywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target Keywords</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., custom gaming pc, 4k video editing" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Get Suggestions
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <div className="space-y-8">
        <Card className="min-h-[200px]">
          <CardHeader>
            <CardTitle>Suggested Keywords</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading && <div className="flex justify-center items-center h-24"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>}
            {result ? (
              <div className="flex flex-wrap gap-2">
                {result.suggestedKeywords.map((keyword) => (
                  <Badge key={keyword} variant="secondary" className="text-base py-1 px-3">{keyword}</Badge>
                ))}
              </div>
            ) : !isLoading && (
              <p className="text-muted-foreground">Your suggested keywords will appear here.</p>
            )}
          </CardContent>
        </Card>
        
        <Card className="min-h-[200px]">
          <CardHeader>
            <CardTitle>Optimization Suggestions</CardTitle>
          </CardHeader>
          <CardContent>
             {isLoading && <div className="flex justify-center items-center h-24"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>}
            {result ? (
              <div className="prose prose-sm prose-invert max-w-none text-muted-foreground">
                <p>{result.optimizationSuggestions}</p>
              </div>
            ) : !isLoading && (
              <p className="text-muted-foreground">Actionable optimization tips will appear here.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
