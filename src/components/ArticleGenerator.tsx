"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { generateTechArticleAction } from "@/app/actions";
import { GenerateTechArticleOutput } from "@/ai/flows/generate-tech-article";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  topic: z.string().min(5, { message: "Topic must be at least 5 characters." }),
  keywords: z.string().min(3, { message: "Please provide at least one keyword." }),
  tone: z.string({ required_error: "Please select a tone." }),
});

export default function ArticleGenerator({ lang }: { lang: string }) {
  const { toast } = useToast();
  const [result, setResult] = useState<GenerateTechArticleOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
      keywords: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    try {
      const response = await generateTechArticleAction(values);
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
    <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle>Article Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Topic</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., The Future of Ray Tracing" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="keywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Keywords</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., path tracing, real-time graphics" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tone of Voice</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a tone" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="Informative">Informative</SelectItem>
                            <SelectItem value="Persuasive">Persuasive</SelectItem>
                            <SelectItem value="Humorous">Humorous</SelectItem>
                            <SelectItem value="Technical">Technical</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Generate Article
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <Card className="lg:col-span-2 min-h-[500px]">
        <CardHeader>
          <CardTitle>Generated Article</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading && (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
          )}
          {result ? (
            <div className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-headings:font-headline prose-headings:text-foreground">
              <h1>{result.title}</h1>
              <p>{result.content}</p>
            </div>
          ) : !isLoading && (
            <div className="flex justify-center items-center h-64">
                <p className="text-muted-foreground">Your generated article will appear here.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
