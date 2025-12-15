
'use client';

import React from 'react';
import { 
    Bot, MessageSquare, BrainCircuit, Users, Mic, Briefcase
} from 'lucide-react';

export type Tool = {
    name: string;
    description: string;
    url: string;
    image: string;
    dataAiHint: string;
    pricing: 'Free' | 'Paid' | 'Freemium';
};

export type ToolCategory = {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
};

export const chatbotAssistantToolData: ToolCategory[] = [
    {
        title: "General Purpose Chatbots",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ChatGPT', description: 'Conversational AI by OpenAI for various tasks.', url: 'https://chat.openai.com/', image: 'https://picsum.photos/seed/chatgpt-bot/600/400', dataAiHint: 'openai chat', pricing: 'Freemium' },
            { name: 'Google Gemini', description: 'Google\'s creative and helpful AI collaborator.', url: 'https://gemini.google.com/', image: 'https://picsum.photos/seed/gemini-bot/600/400', dataAiHint: 'google ai', pricing: 'Free' },
            { name: 'Claude', description: 'A next-generation AI assistant by Anthropic.', url: 'https://claude.ai/', image: 'https://picsum.photos/seed/claude-bot/600/400', dataAiHint: 'anthropic ai', pricing: 'Freemium' },
            { name: 'Perplexity AI', description: 'An answer engine for discovering and sharing knowledge.', url: 'https://www.perplexity.ai/', image: 'https://picsum.photos/seed/perplexity-bot/600/400', dataAiHint: 'knowledge engine', pricing: 'Freemium' },
        ]
    },
    {
        title: "Personal AI Assistants",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Microsoft Copilot', description: 'Your everyday AI companion.', url: 'https://copilot.microsoft.com/', image: 'https://picsum.photos/seed/mscopilot-bot/600/400', dataAiHint: 'ai companion', pricing: 'Free' },
            { name: 'Motion', description: 'Uses AI to intelligently plan your day.', url: 'https://www.usemotion.com/', image: 'https://picsum.photos/seed/motion-bot/600/400', dataAiHint: 'ai planner', pricing: 'Paid' },
            { name: 'Reclaim.ai', description: 'Smart time blocking for your calendar.', url: 'https://reclaim.ai/', image: 'https://picsum.photos/seed/reclaim-bot/600/400', dataAiHint: 'time blocking', pricing: 'Freemium' },
            { name: 'Siri', description: 'Apple\'s intelligent assistant built into its devices.', url: 'https://www.apple.com/siri/', image: 'https://picsum.photos/seed/siri-bot/600/400', dataAiHint: 'apple assistant', pricing: 'Free' },
        ]
    },
    {
        title: "Knowledge & Research Assistants",
        icon: <BrainCircuit className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Elicit', description: 'The AI Research Assistant to automate research workflows.', url: 'https://elicit.org/', image: 'https://picsum.photos/seed/elicit-bot/600/400', dataAiHint: 'research workflow', pricing: 'Freemium' },
            { name: 'SciSpace', description: 'Explore, understand, and explain research papers.', url: 'https://typeset.io/', image: 'https://picsum.photos/seed/scispace-bot/600/400', dataAiHint: 'research papers', pricing: 'Freemium' },
            { name: 'Humata AI', description: 'Your AI for files. Ask questions, get answers.', url: 'https://www.humata.ai/', image: 'https://picsum.photos/seed/humata-bot/600/400', dataAiHint: 'document ai', pricing: 'Freemium' },
            { name: 'ChatPDF', description: 'Chat with any PDF for instant answers.', url: 'https://www.chatpdf.com/', image: 'https://picsum.photos/seed/chatpdf-bot/600/400', dataAiHint: 'pdf conversation', pricing: 'Freemium' },
        ]
    },
    {
        title: "Customer Support Chatbots",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Intercom', description: 'The customer service platform for scaling businesses.', url: 'https://www.intercom.com/', image: 'https://picsum.photos/seed/intercom-bot/600/400', dataAiHint: 'customer service', pricing: 'Paid' },
            { name: 'Drift', description: 'Revenue acceleration platform with conversational AI.', url: 'https://www.drift.com/', image: 'https://picsum.photos/seed/drift-bot/600/400', dataAiHint: 'conversational ai', pricing: 'Paid' },
            { name: 'Zendesk', description: 'Customer service software and sales CRM.', url: 'https://www.zendesk.com/', image: 'https://picsum.photos/seed/zendesk-bot/600/400', dataAiHint: 'support crm', pricing: 'Paid' },
            { name: 'Tidio', description: 'A comprehensive live chat and chatbot solution for businesses.', url: 'https://www.tidio.com/', image: 'https://picsum.photos/seed/tidio-bot/600/400', dataAiHint: 'live chat', pricing: 'Freemium' },
        ]
    },
];
