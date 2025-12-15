
'use client';

import React from 'react';
import { 
    Bot, MessageSquare, BrainCircuit, Users, Mic, Briefcase, ShoppingCart, Send, Phone, GitBranch, Languages, Puzzle, Key, HelpCircle, User, Star, Calendar, Zap, Workflow, Settings, BarChart, Shield, LayoutDashboard, Terminal, BookOpen, Globe
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
        title: "AI Chatbots",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ChatGPT', description: 'Conversational AI by OpenAI.', url: 'https://chat.openai.com/', image: 'https://picsum.photos/seed/chatgpt-gen/600/400', dataAiHint: 'openai chat', pricing: 'Freemium' },
            { name: 'Google Gemini', description: 'Google\'s creative and helpful AI collaborator.', url: 'https://gemini.google.com/', image: 'https://picsum.photos/seed/gemini-gen/600/400', dataAiHint: 'google ai', pricing: 'Free' },
            { name: 'Claude', description: 'A next-generation AI assistant by Anthropic.', url: 'https://claude.ai/', image: 'https://picsum.photos/seed/claude-gen/600/400', dataAiHint: 'anthropic ai', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Virtual Assistants",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Microsoft Copilot', description: 'Your everyday AI companion.', url: 'https://copilot.microsoft.com/', image: 'https://picsum.photos/seed/mscopilot-va/600/400', dataAiHint: 'ai companion', pricing: 'Free' },
            { name: 'Siri', description: 'Apple\'s intelligent assistant built into its devices.', url: 'https://www.apple.com/siri/', image: 'https://picsum.photos/seed/siri-va/600/400', dataAiHint: 'apple assistant', pricing: 'Free' },
            { name: 'Amazon Alexa', description: 'The voice service that powers Echo devices.', url: 'https://www.amazon.com/alexa', image: 'https://picsum.photos/seed/alexa-va/600/400', dataAiHint: 'smart speaker', pricing: 'Free' },
        ]
    },
    {
        title: "AI Customer Support Chatbots",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Intercom', description: 'The customer service platform for scaling businesses.', url: 'https://www.intercom.com/', image: 'https://picsum.photos/seed/intercom-cs/600/400', dataAiHint: 'customer service', pricing: 'Paid' },
            { name: 'Zendesk', description: 'Customer service software and sales CRM.', url: 'https://www.zendesk.com/', image: 'https://picsum.photos/seed/zendesk-cs/600/400', dataAiHint: 'support crm', pricing: 'Paid' },
            { name: 'Tidio', description: 'A comprehensive live chat and chatbot solution.', url: 'https://www.tidio.com/', image: 'https://picsum.photos/seed/tidio-cs/600/400', dataAiHint: 'live chat', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Sales Chatbots",
        icon: <Briefcase className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Drift', description: 'Revenue acceleration platform with conversational AI.', url: 'https://www.drift.com/', image: 'https://picsum.photos/seed/drift-sales/600/400', dataAiHint: 'conversational sales', pricing: 'Paid' },
            { name: 'Salesforce Einstein', description: 'AI for the world\'s #1 CRM.', url: 'https://www.salesforce.com/products/einstein/', image: 'https://picsum.photos/seed/einstein-sales/600/400', dataAiHint: 'sales ai', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Lead Generation Chatbots",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'MobileMonkey', description: 'OmniChat marketing platform with lead generation bots.', url: 'https://mobilemonkey.com/', image: 'https://picsum.photos/seed/mobilemonkey-lead/600/400', dataAiHint: 'lead generation', pricing: 'Paid' },
            { name: 'Tars', description: 'Create chatbot landing pages for lead generation.', url: 'https://hellotars.com/', image: 'https://picsum.photos/seed/tars-lead/600/400', dataAiHint: 'chatbot landing page', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Website Chatbots",
        icon: <Globe className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'LiveChat', description: 'Live chat software with chatbot capabilities.', url: 'https://www.livechat.com/', image: 'https://picsum.photos/seed/livechat-web/600/400', dataAiHint: 'website chat', pricing: 'Paid' },
            { name: 'ChatBot.com', description: 'Build chatbots for your website.', url: 'https://www.chatbot.com/', image: 'https://picsum.photos/seed/chatbotcom/600/400', dataAiHint: 'chatbot builder', pricing: 'Paid' },
        ]
    },
    {
        title: "AI E-commerce Chatbots",
        icon: <ShoppingCart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Gorgias', description: 'Customer service platform designed for e-commerce.', url: 'https://www.gorgias.com/', image: 'https://picsum.photos/seed/gorgias-ecom-bot/600/400', dataAiHint: 'ecommerce support', pricing: 'Paid' },
        ]
    },
    {
        title: "AI WhatsApp Chatbots",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'WATI', description: 'WhatsApp API for customer communication.', url: 'https://www.wati.io/', image: 'https://picsum.photos/seed/wati/600/400', dataAiHint: 'whatsapp api', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Telegram Chatbots",
        icon: <Send className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ManyChat', description: 'Build chatbot for Telegram and other platforms.', url: 'https://manychat.com/', image: 'https://picsum.photos/seed/manychat-tele/600/400', dataAiHint: 'telegram bot', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Messenger Chatbots",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ManyChat', description: 'Chatbot builder for Facebook Messenger.', url: 'https://manychat.com/', image: 'https://picsum.photos/seed/manychat-msg/600/400', dataAiHint: 'messenger bot', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Voice Assistants",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Assistant', description: 'Your personal Google, always ready to help.', url: 'https://assistant.google.com/', image: 'https://picsum.photos/seed/google-assistant-voice/600/400', dataAiHint: 'voice assistant', pricing: 'Free' },
        ]
    },
    {
        title: "AI Conversational AI Platforms",
        icon: <BrainCircuit className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Rasa', description: 'Open source conversational AI.', url: 'https://rasa.com/', image: 'https://picsum.photos/seed/rasa-convo/600/400', dataAiHint: 'open source ai', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Multilingual Chatbots",
        icon: <Languages className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI No-Code Chatbot Builders",
        icon: <Puzzle className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Landbot', description: 'No-code chatbot builder.', url: 'https://landbot.io/', image: 'https://picsum.photos/seed/landbot-nocode/600/400', dataAiHint: 'no-code builder', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Custom Chatbot Development",
        icon: <Terminal className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Helpdesk Assistants",
        icon: <HelpCircle className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Internal Team Assistants",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Knowledge Base Chatbots",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI FAQ Chatbots",
        icon: <HelpCircle className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Booking & Scheduling Bots",
        icon: <Calendar className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI AI Agents (Autonomous Agents)",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Personal Assistants",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Task Automation Assistants",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Workflow Assistants",
        icon: <Workflow className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI CRM Chatbots",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Analytics for Chatbots",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Sentiment-Aware Chatbots",
        icon: <Star className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Context-Aware Assistants",
        icon: <BrainCircuit className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Secure & Private Chatbots",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Enterprise Assistant Platforms",
        icon: <LayoutDashboard className="w-5 h-5 text-primary"/>,
        tools: [],
    }
];
