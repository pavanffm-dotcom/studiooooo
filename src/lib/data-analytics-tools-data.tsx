
'use client';

import React from 'react';
import { 
    Cpu, BarChart3, LineChart, BrainCircuit, Users, Database, PieChart, Search, AlertTriangle,
    Zap, SlidersHorizontal, Settings, TrendingUp, UserCheck, Eye, Megaphone, DollarSign,
    ListChecks, Shield, Server, Magnet, Bot, FileQuestion, FileCheck, Cloud, Wifi, ShieldCheck, LayoutDashboard
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

export const dataAnalyticsToolData: ToolCategory[] = [
    {
        title: "AI Data Analytics Platforms",
        icon: <Cpu className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Databricks', description: 'A unified platform for data engineering, data science, and machine learning.', url: 'https://databricks.com/', image: 'https://picsum.photos/seed/databricks-platform/600/400', dataAiHint: 'data lakehouse', pricing: 'Paid' },
            { name: 'DataRobot', description: 'Enterprise AI platform that democratizes data science.', url: 'https://www.datarobot.com/', image: 'https://picsum.photos/seed/datarobot-platform/600/400', dataAiHint: 'automated ml', pricing: 'Paid' },
            { name: 'Alteryx', description: 'Analytics Automation Platform for data science and analytics.', url: 'https://www.alteryx.com/', image: 'https://picsum.photos/seed/alteryx-platform/600/400', dataAiHint: 'data automation', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Business Intelligence Tools",
        icon: <BarChart3 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Tableau', description: 'Leading data visualization and BI software with AI features.', url: 'https://www.tableau.com/', image: 'https://picsum.photos/seed/tableau-bi/600/400', dataAiHint: 'data visualization', pricing: 'Paid' },
            { name: 'Power BI', description: 'Microsoft\'s BI tools with integrated AI capabilities.', url: 'https://powerbi.microsoft.com/', image: 'https://picsum.photos/seed/powerbi-bi/600/400', dataAiHint: 'microsoft bi', pricing: 'Freemium' },
            { name: 'ThoughtSpot', description: 'Search and AI-driven analytics platform.', url: 'https://www.thoughtspot.com/', image: 'https://picsum.photos/seed/thoughtspot-bi/600/400', dataAiHint: 'search analytics', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Data Visualization Tools",
        icon: <PieChart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'DALL·E 3 for Charts', description: 'Generate charts and graphs from text descriptions.', url: 'https://openai.com/dall-e-3', image: 'https://picsum.photos/seed/dalle-charts/600/400', dataAiHint: 'ai chart', pricing: 'Freemium' },
            { name: 'Google Charts', description: 'Free, rich gallery of interactive charts.', url: 'https://developers.google.com/chart', image: 'https://picsum.photos/seed/google-charts/600/400', dataAiHint: 'interactive charts', pricing: 'Free' },
        ]
    },
    {
        title: "AI Predictive Analytics Tools",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'H2O.ai', description: 'AI Cloud for building and deploying predictive models.', url: 'https://h2o.ai/', image: 'https://picsum.photos/seed/h2oai-predict/600/400', dataAiHint: 'ai models', pricing: 'Freemium' },
            { name: 'RapidMiner', description: 'A data science platform for teams with predictive capabilities.', url: 'https://rapidminer.com/', image: 'https://picsum.photos/seed/rapidminer-predict/600/400', dataAiHint: 'data science', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Descriptive Analytics Tools",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Tableau', description: 'Create rich descriptive dashboards.', url: 'https://www.tableau.com/', image: 'https://picsum.photos/seed/tableau-descriptive/600/400', dataAiHint: 'dashboarding', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Diagnostic Analytics Tools",
        icon: <AlertTriangle className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ThoughtSpot', description: 'Use search to diagnose the root cause of trends.', url: 'https://www.thoughtspot.com/', image: 'https://picsum.photos/seed/thoughtspot-diag/600/400', dataAiHint: 'root cause analysis', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Prescriptive Analytics Tools",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Pecan AI', description: 'Predictive AI platform that provides actionable recommendations.', url: 'https://pecan.ai/', image: 'https://picsum.photos/seed/pecanai-prescribe/600/400', dataAiHint: 'actionable insights', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Real-Time Analytics Tools",
        icon: <SlidersHorizontal className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Big Data Analytics Tools",
        icon: <Database className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Snowflake', description: 'The Data Cloud for big data analytics.', url: 'https://www.snowflake.com/', image: 'https://picsum.photos/seed/snowflake-bigdata/600/400', dataAiHint: 'data cloud', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Self-Service Analytics",
        icon: <Settings className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Power BI', description: 'Enable users to create their own reports and dashboards.', url: 'https://powerbi.microsoft.com/', image: 'https://picsum.photos/seed/powerbi-self/600/400', dataAiHint: 'self service bi', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Reporting & Dashboard Tools",
        icon: <LayoutDashboard className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI KPI & Metrics Tracking Tools",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Forecasting & Trend Analysis",
        icon: <LineChart className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Customer Analytics Tools",
        icon: <UserCheck className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI User Behavior Analytics",
        icon: <Eye className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Marketing Analytics Tools",
        icon: <Megaphone className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Sales Analytics Tools",
        icon: <DollarSign className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Financial Analytics Tools",
        icon: <DollarSign className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Operational Analytics Tools",
        icon: <ListChecks className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Risk & Fraud Analytics",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Data Mining Tools",
        icon: <Server className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Anomaly Detection Tools",
        icon: <Magnet className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Pattern Recognition Tools",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Natural Language Query Tools",
        icon: <FileQuestion className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Automated Insights Tools",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Data Preparation & Cleaning",
        icon: <FileCheck className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI ETL & Data Integration Tools",
        icon: <Cloud className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Data Quality Management",
        icon: <FileCheck className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Analytics for IoT Data",
        icon: <Wifi className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Analytics Governance Tools",
        icon: <ShieldCheck className="w-5 h-5 text-primary"/>,
        tools: [],
    }
];

    
