
'use client';

import React from 'react';
import {
    TestTube, FileText, Zap, Puzzle, GitBranch, RefreshCw, Route, MousePointer, Globe, Smartphone,
    Gauge, Server, CloudCog, Link2, Shield, Bug, LineChart, Search, BarChart, CheckSquare,
    Database, Settings, Workflow, Accessibility, Eye, Bot, Key, FileQuestion, Cpu, Lightbulb
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

export const testingQAToolData: ToolCategory[] = [
    {
        title: "AI Software Testing Tools",
        icon: <TestTube className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Testim', description: 'AI-based test automation for stable tests.', url: 'https://www.testim.io/', image: 'https://picsum.photos/seed/testim-qa/600/400', dataAiHint: 'test automation', pricing: 'Paid' },
            { name: 'Mabl', description: 'Intelligent test automation for quality engineering.', url: 'https://www.mabl.com/', image: 'https://picsum.photos/seed/mabl-qa/600/400', dataAiHint: 'quality engineering', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Test Case Generation Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'CodiumAI', description: 'Meaningful tests for busy devs.', url: 'https://www.codium.ai/', image: 'https://picsum.photos/seed/codiumai-qa/600/400', dataAiHint: 'code integrity', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Automated Testing Tools",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Applitools', description: 'Next generation test automation platform.', url: 'https://applitools.com/', image: 'https://picsum.photos/seed/applitools-qa/600/400', dataAiHint: 'visual testing', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Unit Testing Tools",
        icon: <Puzzle className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Diffblue', description: 'Reinforcement learning for Java unit tests.', url: 'https://www.diffblue.com/', image: 'https://picsum.photos/seed/diffblue-qa/600/400', dataAiHint: 'java tests', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Integration Testing Tools",
        icon: <GitBranch className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Regression Testing Tools",
        icon: <RefreshCw className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI End-to-End Testing Tools",
        icon: <Route className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI UI / UX Testing Tools",
        icon: <MousePointer className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Cross-Browser Testing Tools",
        icon: <Globe className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Mobile App Testing Tools",
        icon: <Smartphone className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Performance Testing Tools",
        icon: <Gauge className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Load Testing Tools",
        icon: <Server className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Stress Testing Tools",
        icon: <CloudCog className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI API Testing Tools",
        icon: <Link2 className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Security Testing Tools",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Bug Detection Tools",
        icon: <Bug className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Bug Tracking & Reporting Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Defect Prediction Tools",
        icon: <LineChart className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Root Cause Analysis Tools",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Test Coverage Analysis Tools",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Test Data Generation Tools",
        icon: <Database className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Test Environment Management",
        icon: <Settings className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI CI/CD Testing Integration Tools",
        icon: <Workflow className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Continuous Testing Tools",
        icon: <RefreshCw className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI QA Monitoring & Analytics",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Accessibility Testing Tools",
        icon: <Accessibility className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Compliance Testing Tools",
        icon: <CheckSquare className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Visual Testing Tools",
        icon: <Eye className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Test Automation Frameworks",
        icon: <Cpu className="w-5 h-5 text-primary"/>,
        tools: []
    },
    {
        title: "AI Quality Intelligence Tools",
        icon: <Lightbulb className="w-5 h-5 text-primary"/>,
        tools: []
    }
];
