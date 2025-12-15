'use client';

import React from 'react';
import { User, DollarSign, Clock, ListChecks } from 'lucide-react';

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

export const freelancerToolData: ToolCategory[] = [
    {
        title: "Freelance Platforms",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Upwork', description: 'Leading online talent solution.', url: 'https://www.upwork.com/', image: 'https://picsum.photos/seed/upwork-fl/600/400', dataAiHint: 'freelance jobs', pricing: 'Freemium' },
            { name: 'Fiverr', description: 'Freelance services marketplace.', url: 'https://www.fiverr.com/', image: 'https://picsum.photos/seed/fiverr-fl/600/400', dataAiHint: 'gig economy', pricing: 'Freemium' },
            { name: 'Toptal', description: 'Hire freelance talent from the top 3%.', url: 'https://www.toptal.com/', image: 'https://picsum.photos/seed/toptal-fl/600/400', dataAiHint: 'top freelancers', pricing: 'Paid' },
        ]
    },
    {
        title: "Invoicing & Payments",
        icon: <DollarSign className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'FreshBooks', description: 'Accounting software for small businesses.', url: 'https://www.freshbooks.com/', image: 'https://picsum.photos/seed/freshbooks-fl/600/400', dataAiHint: 'invoicing software', pricing: 'Paid' },
            { name: 'Wave', description: 'Free invoicing & accounting software.', url: 'https://www.waveapps.com/', image: 'https://picsum.photos/seed/wave-fl/600/400', dataAiHint: 'free accounting', pricing: 'Free' },
            { name: 'PayPal', description: 'Online payments system.', url: 'https://www.paypal.com/', image: 'https://picsum.photos/seed/paypal-fl/600/400', dataAiHint: 'online payment', pricing: 'Freemium' },
        ]
    },
    {
        title: "Time Tracking",
        icon: <Clock className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Toggl Track', description: 'Effortless time tracking and reporting.', url: 'https://toggl.com/track/', image: 'https://picsum.photos/seed/toggl-fl/600/400', dataAiHint: 'time tracker', pricing: 'Freemium' },
            { name: 'Harvest', description: 'Simple time tracking, powerful reporting.', url: 'https://www.getharvest.com/', image: 'https://picsum.photos/seed/harvest-fl/600/400', dataAiHint: 'time reporting', pricing: 'Freemium' },
            { name: 'Clockify', description: 'Free time tracker and timesheet app.', url: 'https://clockify.me/', image: 'https://picsum.photos/seed/clockify-fl/600/400', dataAiHint: 'timesheet app', pricing: 'Free' },
        ]
    },
    {
        title: "Project Management",
        icon: <ListChecks className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Trello', description: 'A visual collaboration tool for your team.', url: 'https://trello.com/', image: 'https://picsum.photos/seed/trello-fl/600/400', dataAiHint: 'kanban board', pricing: 'Freemium' },
            { name: 'Asana', description: 'Work management for teams.', url: 'https://asana.com/', image: 'https://picsum.photos/seed/asana-fl/600/400', dataAiHint: 'team management', pricing: 'Freemium' },
            { name: 'Bonsai', description: 'All-in-one product suite for freelancers.', url: 'https://www.hellobonsai.com/', image: 'https://picsum.photos/seed/bonsai-fl/600/400', dataAiHint: 'freelancer suite', pricing: 'Paid' },
        ]
    }
];
