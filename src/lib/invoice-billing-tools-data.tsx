
'use client';

import React from 'react';
import {
    FileText, Bot, Repeat, DollarSign, Clock, Scan, Calculator, Wallet, CreditCard, Calendar,
    Mail, Users, Book, FileSignature, RefreshCw, Zap, BarChart, Shield, Palette, Smartphone
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

export const invoiceBillingToolData: ToolCategory[] = [
    {
        title: "AI Invoice Generation Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Zoho Invoice', description: 'Free online invoice generator.', url: 'https://www.zoho.com/invoice/', image: 'https://picsum.photos/seed/zoho-invoice/600/400', dataAiHint: 'invoice generator', pricing: 'Freemium' },
            { name: 'FreshBooks', description: 'Invoicing software for small businesses.', url: 'https://www.freshbooks.com/invoicing', image: 'https://picsum.photos/seed/freshbooks-invoice/600/400', dataAiHint: 'small business', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Billing Automation Tools",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Chargebee', description: 'Subscription billing & revenue management.', url: 'https://www.chargebee.com/', image: 'https://picsum.photos/seed/chargebee/600/400', dataAiHint: 'subscription billing', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Recurring Billing Tools",
        icon: <Repeat className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Stripe Billing', description: 'Recurring billing and subscription management.', url: 'https://stripe.com/billing', image: 'https://picsum.photos/seed/stripe-billing/600/400', dataAiHint: 'recurring payments', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Subscription Management",
        icon: <Repeat className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Recurly', description: 'Subscription management and recurring billing.', url: 'https://recurly.com/', image: 'https://picsum.photos/seed/recurly/600/400', dataAiHint: 'subscription platform', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Payment Collection Tools",
        icon: <DollarSign className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'PayPal', description: 'Online payments system.', url: 'https://www.paypal.com/', image: 'https://picsum.photos/seed/paypal-collect/600/400', dataAiHint: 'online payments', pricing: 'Freemium' },
            { name: 'Stripe', description: 'Online payment processing for internet businesses.', url: 'https://stripe.com/', image: 'https://picsum.photos/seed/stripe-collect/600/400', dataAiHint: 'payment processing', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Expense Tracking Tools",
        icon: <Wallet className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Expensify', description: 'Expense reports done in a snap.', url: 'https://www.expensify.com/', image: 'https://picsum.photos/seed/expensify/600/400', dataAiHint: 'expense reports', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Receipt Scanning Tools",
        icon: <Scan className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Rydoo', description: 'Expense management with receipt scanning.', url: 'https://www.rydoo.com/', image: 'https://picsum.photos/seed/rydoo/600/400', dataAiHint: 'receipt scanner', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Tax Calculation Tools",
        icon: <Calculator className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Avalara', description: 'Tax compliance done right.', url: 'https://www.avalara.com/', image: 'https://picsum.photos/seed/avalara/600/400', dataAiHint: 'tax compliance', pricing: 'Paid' },
        ]
    },
    {
        title: "AI GST / VAT Billing Tools",
        icon: <Calculator className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Multi-Currency Billing",
        icon: <CreditCard className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Payment Reminder Tools",
        icon: <Calendar className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Late Fee Automation",
        icon: <Clock className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Invoice Follow-Up Tools",
        icon: <Mail className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Client Billing Management",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Time-Based Billing Tools",
        icon: <Clock className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Estimates & Quotation Tools",
        icon: <Book className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Proforma Invoice Tools",
        icon: <FileSignature className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Credit & Debit Note Tools",
        icon: <RefreshCw className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Refund & Adjustment Tools",
        icon: <DollarSign className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Revenue Recognition Tools",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Accounting Integration Tools",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Payroll Billing Tools",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Financial Reporting Tools",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Cash Flow Management",
        icon: <Wallet className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Fraud Detection in Billing",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Compliance & Audit Tools",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Invoice Customization Tools",
        icon: <Palette className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI E-Invoicing Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Mobile Billing Tools",
        icon: <Smartphone className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Billing Analytics & Insights",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [],
    }
];
