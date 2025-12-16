'use server';
/**
 * @fileOverview A flow to validate a URL to ensure it is a safe and relevant AI tool.
 *
 * - validateAndGetToolInfo - A function that validates a URL and returns tool information.
 * - ValidateToolUrlInput - The input type for the validateAndGetToolInfo function.
 * - ValidateToolUrlOutput - The return type for the validateAndGetToolInfo function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const ValidateToolUrlInputSchema = z.object({
  url: z.string().url().describe('The URL of the potential AI tool.'),
});
export type ValidateToolUrlInput = z.infer<typeof ValidateToolUrlInputSchema>;

const ValidateToolUrlOutputSchema = z.object({
  isAiTool: z
    .boolean()
    .describe('Whether the URL points to a website about a specific AI tool or service.'),
  isSafe: z
    .boolean()
    .describe('Whether the website appears safe and legitimate (not spam or malicious).'),
  toolName: z.string().optional().describe('The official name of the AI tool if identified.'),
  toolDescription: z
    .string()
    .optional()
    .describe('A brief, one-sentence description of the AI tool if identified.'),
});
export type ValidateToolUrlOutput = z.infer<typeof ValidateToolUrlOutputSchema>;

export async function validateAndGetToolInfo(
  input: ValidateToolUrlInput
): Promise<ValidateToolUrlOutput> {
  return validateToolUrlFlow(input);
}

const prompt = ai.definePrompt({
  name: 'validateToolUrlPrompt',
  input: { schema: ValidateToolUrlInputSchema },
  output: { schema: ValidateToolUrlOutputSchema },
  prompt: `You are an AI tool validation expert. Analyze the content of the given URL: {{{url}}}

  Your tasks are:
  1.  Determine if the website is primarily about a specific AI tool or service. General tech news sites or blogs that mention AI are not AI tools.
  2.  Assess if the website looks safe and legitimate. Check for signs of spam, malware, or phishing.
  3.  If it is a legitimate AI tool, extract its official name and a concise one-sentence description.
  
  Provide your analysis in the specified JSON format.`,
});

const validateToolUrlFlow = ai.defineFlow(
  {
    name: 'validateToolUrlFlow',
    inputSchema: ValidateToolUrlInputSchema,
    outputSchema: ValidateToolUrlOutputSchema,
  },
  async (input) => {
    try {
        const { output } = await prompt(input);
        if (!output) {
            throw new Error('Analysis failed to generate a valid output.');
        }
        return output;
    } catch (error) {
        console.error("Error in validation flow:", error);
        // Return a default "unsafe/not a tool" response on error
        return {
            isAiTool: false,
            isSafe: false,
        };
    }
  }
);
