
'use client';

import React from 'react';
import { 
    BookUser, Book, Landmark, Wallet, FileText, Users, Calculator, TrendingUp, Shield, LineChart,
    BarChart, Handshake, Building, Box, UserCog, Bot, BarChart3, TestTube, CheckCircle
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

export const financeAccountingToolData: ToolCategory[] = [
    {
        title: "AI Accounting Software",
        icon: <BookUser className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'QuickBooks Online', description: 'Smart, simple online accounting software.', url: 'https://quickbooks.intuit.com/', image: 'https://picsum.photos/seed/quickbooks-fin/600/400', dataAiHint: 'accounting software', pricing: 'Paid' },
            { name: 'Xero', description: 'Online accounting software for your business.', url: 'https://www.xero.com/', image: 'https://picsum.photos/seed/xero/600/400', dataAiHint: 'business accounting', pricing: 'Paid' },
            { name: 'FreshBooks', description: 'Accounting software for small businesses.', url: 'https://www.freshbooks.com/', image: 'https://picsum.photos/seed/freshbooks-fin/600/400', dataAiHint: 'small business', pricing: 'Paid' },
            { name: 'Wave', description: 'Free invoicing & accounting software.', url: 'https://www.waveapps.com/', image: 'https://picsum.photos/seed/wave-fin/600/400', dataAiHint: 'free accounting', pricing: 'Free' },
        ]
    },
    {
        title: "AI Bookkeeping Tools",
        icon: <Book className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Bench', description: 'America\'s largest bookkeeping service.', url: 'https://bench.co/', image: 'https://picsum.photos/seed/bench-fin/600/400', dataAiHint: 'bookkeeping service', pricing: 'Paid' },
            { name: 'Docyt', description: 'AI-powered accounting automation.', url: 'https://www.docyt.com/', image: 'https://picsum.photos/seed/docyt-fin/600/400', dataAiHint: 'accounting automation', pricing: 'Paid' },
            { name: 'Botkeeper', description: 'Automated bookkeeping with human assistance.', url: 'https://www.botkeeper.com/', image: 'https://picsum.photos/seed/botkeeper/600/400', dataAiHint: 'human assisted', pricing: 'Paid' },
            { name: 'Zeni', description: 'AI-powered bookkeeping and accounting.', url: 'https://www.zeni.ai/', image: 'https://picsum.photos/seed/zeni-fin/600/400', dataAiHint: 'startup finance', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Financial Management Tools",
        icon: <Landmark className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Expense Tracking Tools",
        icon: <Wallet className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Expensify', description: 'Expense reports done in a snap.', url: 'https://www.expensify.com/', image: 'https://picsum.photos/seed/expensify-fin/600/400', dataAiHint: 'expense reports', pricing: 'Freemium' },
            { name: 'Rydoo', description: 'Expense management for modern companies.', url: 'https://www.rydoo.com/', image: 'https://picsum.photos/seed/rydoo-fin/600/400', dataAiHint: 'expense management', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Invoice & Billing Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Zoho Invoice', description: 'Free online invoice generator.', url: 'https://www.zoho.com/invoice/', image: 'https://picsum.photos/seed/zoho-fin/600/400', dataAiHint: 'invoice generator', pricing: 'Freemium' },
            { name: 'Stripe Billing', description: 'Recurring billing and subscription management.', url: 'https://stripe.com/billing', image: 'https://picsum.photos/seed/stripe-fin/600/400', dataAiHint: 'recurring payments', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Payroll Management Tools",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Tax Calculation & Filing Tools",
        icon: <Calculator className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI GST / VAT Compliance Tools",
        icon: <Calculator className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Financial Reporting Tools",
        icon: <BarChart3 className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Audit & Compliance Tools",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Budgeting & Planning Tools",
        icon: <Calculator className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Cash Flow Management",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Revenue & Profit Analysis",
        icon: <LineChart className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Financial Forecasting Tools",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Cost Optimization Tools",
        icon: <Wallet className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Investment Analysis Tools",
        icon: <LineChart className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Portfolio Management Tools",
        icon: <Book className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Risk Management Tools",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Fraud Detection Tools",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Credit Scoring Tools",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Banking & Reconciliation Tools",
        icon: <Landmark className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Payment Processing Tools",
        icon: <Wallet className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Multi-Currency Finance Tools",
        icon: <Wallet className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Treasury Management Tools",
        icon: <Building className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Financial Dashboards",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Startup Finance Tools",
        icon: <Box className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Freelancer Finance Tools",
        icon: <UserCog className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI SME Accounting Tools",
        icon: <BookUser className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Enterprise Finance Tools",
        icon: <Building className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Financial Insights & Analytics",
        icon: <BarChart3 className="w-5 h-5 text-primary"/>,
        tools: [],
    }
];
