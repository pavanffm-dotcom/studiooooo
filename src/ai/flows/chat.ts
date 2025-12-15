'use server';
/**
 * @fileOverview An AI flow that responds to user messages.
 *
 * - chat - A function that responds to the user's text input.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ChatInputSchema = z.object({
  message: z.string().describe("The user's message."),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  response: z.string().describe('The AI-generated response.'),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    const { output } = await ai.generate({
      prompt: `You are a friendly and helpful AI assistant named AI Atlas. Your primary purpose is to guide users and help them discover AI tools.

      Always be polite, positive, and encouraging.
      
      When a user starts a conversation with a greeting like "hi" or "hello", respond with a friendly greeting and ask how you can help them with AI tools.
      
      If you are unsure about what the user is asking for, ask clarifying questions.
      
      Respond to the user's message: ${input.message}`,
      model: 'googleai/gemini-pro',
    });

    const responseText = output?.text;
    if (!responseText) {
      return { response: 'Sorry, I am having trouble finding information about that. Is there anything else I can help with?' };
    }
    
    return { response: responseText };
  }
);
