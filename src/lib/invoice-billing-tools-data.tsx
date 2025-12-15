
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
            { name: 'Wave', description: 'Free invoicing & accounting software.', url: 'https://www.waveapps.com/invoicing', image: 'https://picsum.photos/seed/wave-invoice/600/400', dataAiHint: 'free invoicing', pricing: 'Free' },
            { name: 'QuickBooks', description: 'Create and send custom online invoices.', url: 'https://quickbooks.intuit.com/invoicing/', image: 'https://picsum.photos/seed/qb-invoice/600/400', dataAiHint: 'accounting', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Billing Automation Tools",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Chargebee', description: 'Subscription billing & revenue management.', url: 'https://www.chargebee.com/', image: 'https://picsum.photos/seed/chargebee-billing/600/400', dataAiHint: 'subscription billing', pricing: 'Paid' },
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
            { name: 'Recurly', description: 'Subscription management and recurring billing.', url: 'https://recurly.com/', image: 'https://picsum.photos/seed/recurly-sub/600/400', dataAiHint: 'subscription platform', pricing: 'Paid' },
            { name: 'Chargify', description: 'Billing and subscription management for B2B SaaS.', url: 'https://www.chargify.com/', image: 'https://picsum.photos/seed/chargify/600/400', dataAiHint: 'b2b saas', pricing: 'Paid' },
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
            { name: 'Expensify', description: 'Expense reports done in a snap.', url: 'https://www.expensify.com/', image: 'https://picsum.photos/seed/expensify-track/600/400', dataAiHint: 'expense reports', pricing: 'Freemium' },
            { name: 'Rydoo', description: 'Expense management for modern companies.', url: 'https://www.rydoo.com/', image: 'https://picsum.photos/seed/rydoo-track/600/400', dataAiHint: 'expense management', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Receipt Scanning Tools",
        icon: <Scan className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Rydoo', description: 'Expense management with receipt scanning.', url: 'https://www.rydoo.com/', image: 'https://picsum.photos/seed/rydoo-scan/600/400', dataAiHint: 'receipt scanner', pricing: 'Paid' },
            { name: 'Dext', description: 'Automated accounting for accountants and bookkeepers.', url: 'https://dext.com/', image: 'https://picsum.photos/seed/dext/600/400', dataAiHint: 'bookkeeping automation', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Tax Calculation Tools",
        icon: <Calculator className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Avalara', description: 'Tax compliance done right.', url: 'https://www.avalara.com/', image: 'https://picsum.photos/seed/avalara-tax/600/400', dataAiHint: 'tax compliance', pricing: 'Paid' },
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
