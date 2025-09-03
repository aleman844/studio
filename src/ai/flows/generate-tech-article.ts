'use server';

/**
 * @fileOverview A technology article generation AI agent.
 *
 * - generateTechArticle - A function that handles the tech article generation process.
 * - GenerateTechArticleInput - The input type for the generateTechArticle function.
 * - GenerateTechArticleOutput - The return type for the generateTechArticle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import wav from 'wav';

const GenerateTechArticleInputSchema = z.object({
  topic: z.string().describe('The topic of the technology article.'),
  keywords: z.string().describe('Comma separated keywords related to the topic.'),
  tone: z.string().describe('The tone of the article (e.g., informative, persuasive, humorous).'),
});

export type GenerateTechArticleInput = z.infer<typeof GenerateTechArticleInputSchema>;

const GenerateTechArticleOutputSchema = z.object({
  title: z.string().describe('The title of the article.'),
  content: z.string().describe('The full content of the article.'),
});

export type GenerateTechArticleOutput = z.infer<typeof GenerateTechArticleOutputSchema>;

export async function generateTechArticle(input: GenerateTechArticleInput): Promise<GenerateTechArticleOutput> {
  return generateTechArticleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTechArticlePrompt',
  input: {schema: GenerateTechArticleInputSchema},
  output: {schema: GenerateTechArticleOutputSchema},
  prompt: `You are a technology blogger. Your goal is to write engaging blog posts that attract visitors to a website and improve SEO.

  Topic: {{{topic}}}
  Keywords: {{{keywords}}}
  Tone: {{{tone}}}

  Write a blog post about the topic, including the keywords to improve SEO. Use the specified tone.
  The output should include a title and the content of the article.
  `,
});

const generateTechArticleFlow = ai.defineFlow(
  {
    name: 'generateTechArticleFlow',
    inputSchema: GenerateTechArticleInputSchema,
    outputSchema: GenerateTechArticleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
