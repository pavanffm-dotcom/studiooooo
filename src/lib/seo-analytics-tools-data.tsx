
'use client';

import React from 'react';
import { Search, Link2, TrendingUp, Laptop, BarChart } from 'lucide-react';

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

export const seoAnalyticsToolData: ToolCategory[] = [
    {
        title: "All-in-One SEO Platforms",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Semrush', description: 'Online visibility management platform.', url: 'https://www.semrush.com/', image: 'https://picsum.photos/seed/semrush-seo/600/400', dataAiHint: 'seo platform', pricing: 'Paid' },
            { name: 'Ahrefs', description: 'SEO tools & resources to grow your search traffic.', url: 'https://ahrefs.com/', image: 'https://picsum.photos/seed/ahrefs-seo/600/400', dataAiHint: 'backlink checker', pricing: 'Paid' },
            { name: 'Moz Pro', description: 'All-in-one suite of SEO tools.', url: 'https://moz.com/products/pro', image: 'https://picsum.photos/seed/mozpro-seo/600/400', dataAiHint: 'seo software', pricing: 'Paid' },
        ]
    },
    {
        title: "Rank Tracking",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'SE Ranking', description: 'SEO software for business owners and agencies.', url: 'https://seranking.com/', image: 'https://picsum.photos/seed/seranking-seo/600/400', dataAiHint: 'rank tracker', pricing: 'Paid' },
            { name: 'AccuRanker', description: 'The world\'s fastest rank tracker.', url: 'https://www.accuranker.com/', image: 'https://picsum.photos/seed/accuranker-seo/600/400', dataAiHint: 'keyword rank', pricing: 'Paid' },
            { name: 'STAT', description: 'Enterprise rank tracking for SEO.', url: 'https://getstat.com/', image: 'https://picsum.photos/seed/stat-seo/600/400', dataAiHint: 'enterprise seo', pricing: 'Paid' },
        ]
    },
    {
        title: "Backlink Analysis",
        icon: <Link2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Majestic', description: 'The planet\'s largest Link Index database.', url: 'https://majestic.com/', image: 'https://picsum.photos/seed/majestic-seo/600/400', dataAiHint: 'link index', pricing: 'Paid' },
            { name: 'CognitiveSEO', description: 'A complete SEO software suite.', url: 'https://cognitiveseo.com/', image: 'https://picsum.photos/seed/cognitiveseo/600/400', dataAiHint: 'unnatural links', pricing: 'Paid' },
            { name: 'LinkResearchTools', description: 'Link data and SEO analysis.', url: 'https://www.linkresearchtools.com/', image: 'https://picsum.photos/seed/linkresearchtools/600/400', dataAiHint: 'link audit', pricing: 'Paid' },
        ]
    },
    {
        title: "Technical SEO & Site Audits",
        icon: <Laptop className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Screaming Frog', description: 'The industry leading SEO Spider software.', url: 'https://www.screamingfrog.co.uk/seo-spider/', image: 'https://picsum.photos/seed/screamingfrog-seo/600/400', dataAiHint: 'website crawler', pricing: 'Freemium' },
            { name: 'Sitebulb', description: 'Website auditing tool for SEOs.', url: 'https://sitebulb.com/', image: 'https://picsum.photos/seed/sitebulb-seo/600/400', dataAiHint: 'seo audit', pricing: 'Paid' },
            { name: 'DeepCrawl', description: 'Now Lumar. The technical SEO platform.', url: 'https://www.lumar.io/', image: 'https://picsum.photos/seed/lumar-seo/600/400', dataAiHint: 'technical seo', pricing: 'Paid' },
        ]
    },
     {
        title: "Web Analytics",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Analytics', description: 'Web analytics service that tracks and reports website traffic.', url: 'https://analytics.google.com/', image: 'https://picsum.photos/seed/googleanalytics-seo/600/400', dataAiHint: 'website traffic', pricing: 'Free' },
            { name: 'Matomo', description: 'The Google Analytics alternative that protects your data.', url: 'https://matomo.org/', image: 'https://picsum.photos/seed/matomo-seo/600/400', dataAiHint: 'privacy analytics', pricing: 'Freemium' },
            { name: 'Fathom Analytics', description: 'Simple, privacy-focused website analytics.', url: 'https://usefathom.com/', image: 'https://picsum.photos/seed/fathom-seo/600/400', dataAiHint: 'simple analytics', pricing: 'Paid' },
        ]
    }
];
