
'use client';

import React from 'react';
import { 
    Globe, Puzzle, Code, LayoutDashboard, Briefcase, ShoppingCart, Book, File, Layers, Brush,
    Layout, MousePointer, Smartphone, Search, Zap, Cloud, Server, MessageSquare, BarChart, Wrench,
    Shield, Milestone, Settings, FileText
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

export const websiteBuilderToolData: ToolCategory[] = [
    {
        title: "AI Website Builder Tools",
        icon: <Globe className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Wix ADI', description: 'Artificial Design Intelligence to build your site.', url: 'https://www.wix.com/adi', image: 'https://picsum.photos/seed/wix-adi/600/400', dataAiHint: 'ai website', pricing: 'Freemium' },
            { name: 'Durable', description: 'The AI website builder that generates a website in 30 seconds.', url: 'https://durable.co/', image: 'https://picsum.photos/seed/durable/600/400', dataAiHint: 'instant website', pricing: 'Paid' },
            { name: 'Hocoos', description: 'AI Website Builder that creates unique websites.', url: 'https://hocoos.com/', image: 'https://picsum.photos/seed/hocoos/600/400', dataAiHint: 'unique website', pricing: 'Freemium' },
        ]
    },
    {
        title: "No-Code Website Builders",
        icon: <Puzzle className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Webflow', description: 'Build responsive websites visually.', url: 'https://webflow.com/', image: 'https://picsum.photos/seed/webflow-nocode/600/400', dataAiHint: 'visual builder', pricing: 'Freemium' },
            { name: 'Bubble', description: 'Build production-ready web apps without code.', url: 'https://bubble.io/', image: 'https://picsum.photos/seed/bubble-nocode/600/400', dataAiHint: 'no-code app', pricing: 'Freemium' },
            { name: 'Carrd', description: 'Simple, free, fully responsive one-page sites.', url: 'https://carrd.co/', image: 'https://picsum.photos/seed/carrd/600/400', dataAiHint: 'one page site', pricing: 'Freemium' },
        ]
    },
    {
        title: "Low-Code Website Builders",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Vercel', description: 'Platform for frontend developers.', url: 'https://vercel.com/', image: 'https://picsum.photos/seed/vercel-lowcode/600/400', dataAiHint: 'frontend platform', pricing: 'Freemium' },
            { name: 'Netlify', description: 'The fastest way to build the best sites.', url: 'https://www.netlify.com/', image: 'https://picsum.photos/seed/netlify-lowcode/600/400', dataAiHint: 'web hosting', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Landing Page Builders",
        icon: <LayoutDashboard className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Unbounce', description: 'Smart landing page builder.', url: 'https://unbounce.com/', image: 'https://picsum.photos/seed/unbounce-landing/600/400', dataAiHint: 'landing page', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Portfolio Website Builders",
        icon: <Briefcase className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Business Website Builders",
        icon: <Briefcase className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI E-Commerce Website Builders",
        icon: <ShoppingCart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Shopify Magic', description: 'AI tools built into the Shopify platform.', url: 'https://www.shopify.com/magic', image: 'https://picsum.photos/seed/shopify-magic/600/400', dataAiHint: 'ecommerce ai', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Blog Website Builders",
        icon: <Book className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI One-Page Website Builders",
        icon: <File className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Multi-Page Website Builders",
        icon: <Layers className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI UI/UX Website Design Tools",
        icon: <Brush className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Website Templates Generators",
        icon: <Layout className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Drag-and-Drop Builders",
        icon: <MousePointer className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Responsive Design Tools",
        icon: <Smartphone className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Mobile-First Website Builders",
        icon: <Smartphone className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI SEO Website Builders",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Speed Optimization Tools",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Hosting & Deployment Tools",
        icon: <Cloud className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Domain & DNS Management",
        icon: <Server className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI CMS Website Builders",
        icon: <Server className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Web App Builders",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI SaaS Website Builders",
        icon: <Cloud className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Form & Lead Capture Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Chatbot Integration Tools",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Analytics & Tracking Tools",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Website Maintenance Tools",
        icon: <Wrench className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Website Security Tools",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Website Migration Tools",
        icon: <Milestone className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Website Customization Tools",
        icon: <Settings className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Website Management Platforms",
        icon: <LayoutDashboard className="w-5 h-5 text-primary"/>,
        tools: [],
    }
];
