
'use client';

import React from 'react';
import { 
    Bot, User, ShoppingCart, TrendingUp, Zap, DollarSign, FileText, ImageIcon, Video, Search,
    Layout, Truck, Shield, BarChart, Users as UsersIcon, Mail, Star, Heart, Store
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

export const eCommerceToolData: ToolCategory[] = [
    {
        title: "AI Product Recommendation",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Nosto', description: 'AI-powered commerce experience platform.', url: 'https://www.nosto.com/', image: 'https://picsum.photos/seed/nosto-rec/600/400', dataAiHint: 'product recommendation', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Personalized Shopping",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Dynamic Yield', description: 'Personalization, optimization, and A/B testing.', url: 'https://www.dynamicyield.com/', image: 'https://picsum.photos/seed/dynamicyield-ecom/600/400', dataAiHint: 'ab testing', pricing: 'Paid' },
        ]
    },
    {
        title: "AI E-Commerce Chatbots",
        icon: <ShoppingCart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Tidio', description: 'A comprehensive live chat and chatbot solution.', url: 'https://www.tidio.com/', image: 'https://picsum.photos/seed/tidio-ecom/600/400', dataAiHint: 'live chat', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Customer Support",
        icon: <UsersIcon className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Gorgias', description: 'Customer service platform for e-commerce.', url: 'https://www.gorgias.com/', image: 'https://picsum.photos/seed/gorgias-ecom/600/400', dataAiHint: 'ecommerce support', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Sales Automation",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Conversion Rate Optimization",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Upsell & Cross-Sell Tools",
        icon: <DollarSign className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Pricing Optimization",
        icon: <DollarSign className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Dynamic Pricing AI",
        icon: <DollarSign className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Revenue Optimization",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Product Description Generators",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Image & Video for Products",
        icon: <Video className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Product Search & Discovery",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Visual Search Tools",
        icon: <ImageIcon className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Inventory Management AI",
        icon: <Layout className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Demand Forecasting Tools",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Supply Chain Optimization",
        icon: <Truck className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Order Management AI",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Logistics & Shipping AI",
        icon: <Truck className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Fraud Detection Tools",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Payment & Checkout Optimization",
        icon: <DollarSign className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Cart Abandonment Recovery",
        icon: <ShoppingCart className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Email & SMS Marketing for E-Commerce",
        icon: <Mail className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Customer Segmentation Tools",
        icon: <UsersIcon className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Customer Lifetime Value Analytics",
        icon: <Heart className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Review & Feedback Analysis",
        icon: <Star className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Brand Monitoring for E-Commerce",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Marketplace Optimization Tools",
        icon: <Store className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Store Analytics & Insights",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI E-Commerce Growth Tools",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: []
    }
];
