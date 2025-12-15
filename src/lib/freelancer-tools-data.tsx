
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
        title: "AI Personal Assistant",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Motion', description: 'Uses AI to intelligently plan your day.', url: 'https://www.usemotion.com/', image: 'https://picsum.photos/seed/motion-fl/600/400', dataAiHint: 'ai planner', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Task & Time Management",
        icon: <Clock className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Toggl Track', description: 'Effortless time tracking and reporting.', url: 'https://toggl.com/track/', image: 'https://picsum.photos/seed/toggl-fl-time/600/400', dataAiHint: 'time tracker', pricing: 'Freemium' },
            { name: 'Harvest', description: 'Simple time tracking, powerful reporting.', url: 'https://www.getharvest.com/', image: 'https://picsum.photos/seed/harvest-fl-time/600/400', dataAiHint: 'time reporting', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Project Management",
        icon: <ListChecks className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Bonsai', description: 'All-in-one product suite for freelancers.', url: 'https://www.hellobonsai.com/', image: 'https://picsum.photos/seed/bonsai-fl-pm/600/400', dataAiHint: 'freelancer suite', pricing: 'Paid' },
            { name: 'Trello', description: 'A visual collaboration tool for your team.', url: 'https://trello.com/', image: 'https://picsum.photos/seed/trello-fl-pm/600/400', dataAiHint: 'kanban board', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Client Communication",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Proposal & Bid Writing",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Contract & Agreement Tools",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Invoice & Billing Tools",
        icon: <DollarSign className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'FreshBooks', description: 'Accounting software for small businesses.', url: 'https://www.freshbooks.com/', image: 'https://picsum.photos/seed/freshbooks-fl-inv/600/400', dataAiHint: 'invoicing software', pricing: 'Paid' },
             { name: 'Wave', description: 'Free invoicing & accounting software.', url: 'https://www.waveapps.com/', image: 'https://picsum.photos/seed/wave-fl-inv/600/400', dataAiHint: 'free accounting', pricing: 'Free' },
        ],
    },
    {
        title: "AI Payment & Expense Tracking",
        icon: <DollarSign className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'PayPal', description: 'Online payments system.', url: 'https://www.paypal.com/', image: 'https://picsum.photos/seed/paypal-fl-pay/600/400', dataAiHint: 'online payment', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI Pricing & Rate Optimization",
        icon: <DollarSign className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Work Scheduling Tools",
        icon: <Clock className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Writing & Content Tools",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Design & Creative Tools",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Video & Media Tools",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Code & Development Tools",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Website & Portfolio Builders",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Marketing Tools for Freelancers",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Social Media Management",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Email Marketing Tools",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Lead Generation Tools",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Client Management (CRM)",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Productivity & Focus Tools",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Meeting & Call Assistants",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Note-Taking & Documentation",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI File & Cloud Management",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Automation & Workflow Tools",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Analytics & Performance Tracking",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Feedback & Review Analysis",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Skill Learning & Upskilling",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Job Matching & Gig Finder",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Upwork', description: 'Leading online talent solution.', url: 'https://www.upwork.com/', image: 'https://picsum.photos/seed/upwork-fl-job/600/400', dataAiHint: 'freelance jobs', pricing: 'Freemium' },
            { name: 'Fiverr', description: 'Freelance services marketplace.', url: 'https://www.fiverr.com/', image: 'https://picsum.photos/seed/fiverr-fl-job/600/400', dataAiHint: 'gig economy', pricing: 'Freemium' },
            { name: 'Toptal', description: 'Hire freelance talent from the top 3%.', url: 'https://www.toptal.com/', image: 'https://picsum.photos/seed/toptal-fl-job/600/400', dataAiHint: 'top freelancers', pricing: 'Paid' },
        ],
    },
];
