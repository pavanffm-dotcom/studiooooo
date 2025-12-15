
'use client';

import React from 'react';
import { 
    Users, Bot, Edit, BarChart, Calendar, Camera, Play, Music
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

export const socialMediaToolData: ToolCategory[] = [
    {
        title: "Social Media Management",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Sprout Social', description: 'Social media management and optimization platform.', url: 'https://sproutsocial.com/', image: 'https://picsum.photos/seed/sprout-social-sm/600/400', dataAiHint: 'social management', pricing: 'Paid' },
            { name: 'Hootsuite', description: 'Manage all your social media in one place.', url: 'https://www.hootsuite.com/', image: 'https://picsum.photos/seed/hootsuite-sm/600/400', dataAiHint: 'social dashboard', pricing: 'Paid' },
            { name: 'Agorapulse', description: 'Social media management software for agencies.', url: 'https://www.agorapulse.com/', image: 'https://picsum.photos/seed/agorapulse-sm/600/400', dataAiHint: 'social inbox', pricing: 'Paid' },
            { name: 'Buffer', description: 'Social media toolkit for small businesses.', url: 'https://buffer.com/', image: 'https://picsum.photos/seed/buffer-sm/600/400', dataAiHint: 'social scheduling', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Content Creation",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Lately', description: 'AI-powered social media marketing platform.', url: 'https://www.lately.ai/', image: 'https://picsum.photos/seed/lately-sm/600/400', dataAiHint: 'social content', pricing: 'Paid' },
            { name: 'Flick', description: 'Hashtag and analytics tool for Instagram.', url: 'https://www.flick.tech/', image: 'https://picsum.photos/seed/flick-sm/600/400', dataAiHint: 'instagram hashtags', pricing: 'Paid' },
            { name: 'Jasper', description: 'AI content platform to help write social media posts.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-sm/600/400', dataAiHint: 'ai writer', pricing: 'Paid' },
            { name: 'Copy.ai', description: 'Generate high-quality social media copy.', url: 'https://www.copy.ai/', image: 'https://picsum.photos/seed/copyai-sm/600/400', dataAiHint: 'marketing copy', pricing: 'Freemium' },
        ]
    },
    {
        title: "Scheduling & Automation",
        icon: <Calendar className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Later', description: 'Visually plan and schedule social media posts.', url: 'https://later.com/', image: 'https://picsum.photos/seed/later-sm/600/400', dataAiHint: 'instagram scheduler', pricing: 'Freemium' },
            { name: 'MeetEdgar', description: 'Social media automation and scheduling.', url: 'https://meetedgar.com/', image: 'https://picsum.photos/seed/meetedgar-sm/600/400', dataAiHint: 'content recycling', pricing: 'Paid' },
            { name: 'SocialBee', description: 'AI-powered social media management tool.', url: 'https://socialbee.io/', image: 'https://picsum.photos/seed/socialbee-sm/600/400', dataAiHint: 'content categories', pricing: 'Paid' },
            { name: 'Tailwind', description: 'Smart marketing for Pinterest & Instagram.', url: 'https://www.tailwindapp.com/', image: 'https://picsum.photos/seed/tailwind-sm/600/400', dataAiHint: 'pinterest scheduler', pricing: 'Freemium' },
        ]
    },
    {
        title: "Analytics & Reporting",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Iconosquare', description: 'Advanced analytics and management suite.', url: 'https://www.iconosquare.com/', image: 'https://picsum.photos/seed/iconosquare/600/400', dataAiHint: 'social analytics', pricing: 'Paid' },
            { name: 'Keyhole', description: 'Real-time social media analytics & reporting.', url: 'https://keyhole.co/', image: 'https://picsum.photos/seed/keyhole/600/400', dataAiHint: 'hashtag tracking', pricing: 'Paid' },
            { name: 'Brandwatch', description: 'Consumer intelligence and social media listening.', url: 'https://www.brandwatch.com/', image: 'https://picsum.photos/seed/brandwatch-sm/600/400', dataAiHint: 'consumer intelligence', pricing: 'Paid' },
            { name: 'Talkwalker', description: 'Social listening and analytics platform.', url: 'https://www.talkwalker.com/', image: 'https://picsum.photos/seed/talkwalker-sm/600/400', dataAiHint: 'social listening', pricing: 'Paid' },
        ]
    },
];
