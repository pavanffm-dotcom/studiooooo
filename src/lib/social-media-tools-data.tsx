
'use client';

import React from 'react';
import { 
    Users, Bot, Edit, BarChart, Calendar, Camera, Play, Music, Feather, Hash, Send, CalendarDays,
    Repeat, Layers, Clapperboard, Video, ImageIcon, Image as ImageLucide, PartyPopper, Tv, MessageCircle, FileText,
    Heart, Search, Mic, TrendingUp, ThumbsUp, TestTube, MessageSquare, Shield, Zap, TrendingUpIcon,
    UserPlus, UserSquare, GanttChartSquare
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
        title: "AI Social Media Management",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Sprout Social', description: 'Social media management and optimization platform.', url: 'https://sproutsocial.com/', image: 'https://picsum.photos/seed/sprout-social-sm/600/400', dataAiHint: 'social management', pricing: 'Paid' },
            { name: 'Hootsuite', description: 'Manage all your social media in one place.', url: 'https://www.hootsuite.com/', image: 'https://picsum.photos/seed/hootsuite-sm/600/400', dataAiHint: 'social dashboard', pricing: 'Paid' },
            { name: 'Agorapulse', description: 'Social media management software for agencies.', url: 'https://www.agorapulse.com/', image: 'https://picsum.photos/seed/agorapulse-sm/600/400', dataAiHint: 'social inbox', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Content Creation",
        icon: <Feather className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Jasper', description: 'AI content platform for social media posts.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-sm/600/400', dataAiHint: 'ai writer', pricing: 'Paid' },
            { name: 'Copy.ai', description: 'Generate high-quality social media copy.', url: 'https://www.copy.ai/', image: 'https://picsum.photos/seed/copyai-sm/600/400', dataAiHint: 'marketing copy', pricing: 'Freemium' },
            { name: 'Canva', description: 'Design anything for social media.', url: 'https://www.canva.com/', image: 'https://picsum.photos/seed/canva-sm/600/400', dataAiHint: 'design tool', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Post Generators",
        icon: <Send className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Lately', description: 'AI-powered social media marketing platform.', url: 'https://www.lately.ai/', image: 'https://picsum.photos/seed/lately-sm/600/400', dataAiHint: 'social content', pricing: 'Paid' },
            { name: 'Predis.ai', description: 'AI Social Media Post Generator.', url: 'https://predis.ai/', image: 'https://picsum.photos/seed/predis-sm/600/400', dataAiHint: 'post generator', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Caption & Hashtag Generators",
        icon: <Hash className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Flick', description: 'Hashtag and analytics tool for Instagram.', url: 'https://www.flick.tech/', image: 'https://picsum.photos/seed/flick-sm/600/400', dataAiHint: 'instagram hashtags', pricing: 'Paid' },
            { name: 'RiteTag', description: 'Get instant hashtag suggestions.', url: 'https://ritetag.com/', image: 'https://picsum.photos/seed/ritetag/600/400', dataAiHint: 'hashtag suggestions', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Social Media Scheduling",
        icon: <Calendar className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Later', description: 'Visually plan and schedule social media posts.', url: 'https://later.com/', image: 'https://picsum.photos/seed/later-sm/600/400', dataAiHint: 'instagram scheduler', pricing: 'Freemium' },
            { name: 'Buffer', description: 'Social media toolkit for small businesses.', url: 'https://buffer.com/', image: 'https://picsum.photos/seed/buffer-sm/600/400', dataAiHint: 'social scheduling', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Auto Posting Tools",
        icon: <Repeat className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'MeetEdgar', description: 'Social media automation and scheduling.', url: 'https://meetedgar.com/', image: 'https://picsum.photos/seed/meetedgar-sm/600/400', dataAiHint: 'content recycling', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Content Calendar Tools",
        icon: <CalendarDays className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Airtable', description: 'Build your content calendar with a flexible database.', url: 'https://www.airtable.com/', image: 'https://picsum.photos/seed/airtable-cal/600/400', dataAiHint: 'content calendar', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Social Media Automation",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ManyChat', description: 'Chat Marketing platform.', url: 'https://manychat.com/', image: 'https://picsum.photos/seed/manychat-auto/600/400', dataAiHint: 'messenger bot', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Multi-Platform Posting",
        icon: <Layers className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'SocialBee', description: 'AI-powered social media management tool.', url: 'https://socialbee.io/', image: 'https://picsum.photos/seed/socialbee-sm/600/400', dataAiHint: 'content categories', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Reels & Shorts Generators",
        icon: <Clapperboard className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Opus Clip', description: 'Turn long videos into viral shorts with AI.', url: 'https://www.opus.pro/', image: 'https://picsum.photos/seed/opus-shorts-sm/600/400', dataAiHint: 'viral shorts', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Video Editing for Social Media",
        icon: <Video className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'CapCut', description: 'Free all-in-one video editor for social media.', url: 'https://www.capcut.com/', image: 'https://picsum.photos/seed/capcut-sm/600/400', dataAiHint: 'video editor', pricing: 'Free' },
        ]
    },
    {
        title: "AI Image Creation for Social Media",
        icon: <ImageIcon className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Microsoft Designer', description: 'Stunning designs in a flash.', url: 'https://designer.microsoft.com/', image: 'https://picsum.photos/seed/msdesigner-sm/600/400', dataAiHint: 'social designs', pricing: 'Free' },
        ]
    },
    {
        title: "AI Thumbnail Generators",
        icon: <ImageLucide className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Meme Generators",
        icon: <PartyPopper className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Kapwing', description: 'Online meme generator.', url: 'https://www.kapwing.com/meme-maker', image: 'https://picsum.photos/seed/kapwing-meme-sm/600/400', dataAiHint: 'meme maker', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Story & Reel Editors",
        icon: <Tv className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Influencer Marketing",
        icon: <Heart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Upfluence', description: 'All-in-one influencer marketing platform.', url: 'https://www.upfluence.com/', image: 'https://picsum.photos/seed/upfluence-sm/600/400', dataAiHint: 'influencer platform', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Brand Monitoring Tools",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Brand24', description: 'Social media monitoring tool.', url: 'https://brand24.com/', image: 'https://picsum.photos/seed/brand24-sm/600/400', dataAiHint: 'media monitoring', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Social Listening Tools",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Talkwalker', description: 'Social listening and analytics platform.', url: 'https://www.talkwalker.com/', image: 'https://picsum.photos/seed/talkwalker-sm/600/400', dataAiHint: 'social listening', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Sentiment Analysis Tools",
        icon: <ThumbsUp className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'MonkeyLearn', description: 'Text analysis with machine learning.', url: 'https://monkeylearn.com/', image: 'https://picsum.photos/seed/monkeylearn-sm/600/400', dataAiHint: 'text analysis', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Trend Detection Tools",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Exploding Topics', description: 'Discover rapidly growing trends.', url: 'https://explodingtopics.com/', image: 'https://picsum.photos/seed/exploding-sm/600/400', dataAiHint: 'trend spotting', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Analytics & Insights Tools",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Iconosquare', description: 'Advanced analytics and management suite.', url: 'https://www.iconosquare.com/', image: 'https://picsum.photos/seed/iconosquare-sm/600/400', dataAiHint: 'social analytics', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Engagement Optimization",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI A/B Testing for Social Posts",
        icon: <TestTube className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Community Management",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Comment & DM Automation",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ManyChat', description: 'Automate conversations in Instagram DMs, Facebook Messenger.', url: 'https://manychat.com/', image: 'https://picsum.photos/seed/manychat-dm/600/400', dataAiHint: 'dm automation', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Ad Creation for Social Media",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'AdCreative.ai', description: 'Generate conversion-focused ad creatives.', url: 'https://www.adcreative.ai/', image: 'https://picsum.photos/seed/adcreative-sm/600/400', dataAiHint: 'ad creatives', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Ad Performance Optimization",
        icon: <TrendingUpIcon className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Growth & Follower Tools",
        icon: <UserPlus className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Bio & Profile Optimization",
        icon: <UserSquare className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Social Media Strategy Tools",
        icon: <GanttChartSquare className="w-5 h-5 text-primary"/>,
        tools: [],
    }
];
