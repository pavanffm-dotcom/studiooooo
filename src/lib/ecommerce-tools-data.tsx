
'use client';

import React from 'react';
import { ShoppingCart, Store, Megaphone, Users, Bot } from 'lucide-react';

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
        title: "E-commerce Platforms",
        icon: <Store className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Shopify', description: 'Build your business with Shopify.', url: 'https://www.shopify.com/', image: 'https://picsum.photos/seed/shopify-ecom/600/400', dataAiHint: 'online store', pricing: 'Paid' },
            { name: 'BigCommerce', description: 'A leading e-commerce platform.', url: 'https://www.bigcommerce.com/', image: 'https://picsum.photos/seed/bigcommerce-ecom/600/400', dataAiHint: 'ecommerce builder', pricing: 'Paid' },
            { name: 'WooCommerce', description: 'An open-source e-commerce plugin for WordPress.', url: 'https://woocommerce.com/', image: 'https://picsum.photos/seed/woocommerce-ecom/600/400', dataAiHint: 'wordpress store', pricing: 'Free' },
        ]
    },
    {
        title: "Marketing & Advertising",
        icon: <Megaphone className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Klaviyo', description: 'Email and SMS marketing for e-commerce.', url: 'https://www.klaviyo.com/', image: 'https://picsum.photos/seed/klaviyo-ecom/600/400', dataAiHint: 'email marketing', pricing: 'Freemium' },
            { name: 'Omnisend', description: 'Email & SMS marketing for e-commerce.', url: 'https://www.omnisend.com/', image: 'https://picsum.photos/seed/omnisend-ecom/600/400', dataAiHint: 'sms marketing', pricing: 'Freemium' },
            { name: 'AdCreative.ai', description: 'Generate conversion-focused ad creatives.', url: 'https://www.adcreative.ai/', image: 'https://picsum.photos/seed/adcreative-ecom/600/400', dataAiHint: 'ad creatives', pricing: 'Paid' },
        ]
    },
    {
        title: "Customer Support",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Gorgias', description: 'Customer service platform for e-commerce.', url: 'https://www.gorgias.com/', image: 'https://picsum.photos/seed/gorgias-ecom/600/400', dataAiHint: 'ecommerce support', pricing: 'Paid' },
            { name: 'Tidio', description: 'A comprehensive live chat and chatbot solution.', url: 'https://www.tidio.com/', image: 'https://picsum.photos/seed/tidio-ecom/600/400', dataAiHint: 'live chat', pricing: 'Freemium' },
            { name: 'Zendesk', description: 'Customer service software and sales CRM.', url: 'https://www.zendesk.com/', image: 'https://picsum.photos/seed/zendesk-ecom/600/400', dataAiHint: 'support crm', pricing: 'Paid' },
        ]
    },
    {
        title: "Personalization & Recommendations",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Nosto', description: 'AI-powered commerce experience platform.', url: 'https://www.nosto.com/', image: 'https://picsum.photos/seed/nosto-ecom/600/400', dataAiHint: 'product recommendation', pricing: 'Paid' },
            { name: 'Dynamic Yield', description: 'Personalization, optimization, and A/B testing.', url: 'https://www.dynamicyield.com/', image: 'https://picsum.photos/seed/dynamicyield-ecom/600/400', dataAiHint: 'ab testing', pricing: 'Paid' },
        ]
    }
];
