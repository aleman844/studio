'use server';

import { 
  generateTechArticle, 
  GenerateTechArticleInput,
  GenerateTechArticleOutput
} from '@/ai/flows/generate-tech-article';
import { 
  suggestSeoOptimizations, 
  SuggestSeoOptimizationsInput,
  SuggestSeoOptimizationsOutput
} from '@/ai/flows/suggest-seo-optimizations';

export async function generateTechArticleAction(input: GenerateTechArticleInput): Promise<GenerateTechArticleOutput> {
    try {
        const result = await generateTechArticle(input);
        return result;
    } catch (error) {
        console.error('Error generating tech article:', error);
        throw new Error('Failed to generate article. Please try again.');
    }
}

export async function suggestSeoOptimizationsAction(input: SuggestSeoOptimizationsInput): Promise<SuggestSeoOptimizationsOutput> {
    try {
        const result = await suggestSeoOptimizations(input);
        return result;
    } catch (error) {
        console.error('Error suggesting SEO optimizations:', error);
        throw new Error('Failed to get SEO suggestions. Please try again.');
    }
}
