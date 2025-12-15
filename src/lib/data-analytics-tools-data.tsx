
'use client';

import React from 'react';
import { BarChart3, LineChart, BrainCircuit, Users, Database } from 'lucide-react';

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
        title: "Business Intelligence (BI) Tools",
        icon: <BarChart3 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Tableau', description: 'Leading data visualization and BI software.', url: 'https://www.tableau.com/', image: 'https://picsum.photos/seed/tableau-da/600/400', dataAiHint: 'data visualization', pricing: 'Paid' },
            { name: 'Power BI', description: 'Microsoft\'s interactive data visualization BI tools.', url: 'https://powerbi.microsoft.com/', image: 'https://picsum.photos/seed/powerbi-da/600/400', dataAiHint: 'microsoft bi', pricing: 'Freemium' },
            { name: 'Looker', description: 'Business intelligence and big data analytics platform.', url: 'https://looker.com/', image: 'https://picsum.photos/seed/looker-da/600/400', dataAiHint: 'google cloud bi', pricing: 'Paid' },
            { name: 'Qlik Sense', description: 'Complete data analytics platform.', url: 'https://www.qlik.com/us/products/qlik-sense', image: 'https://picsum.photos/seed/qlik-sense-da/600/400', dataAiHint: 'associative engine', pricing: 'Paid' },
        ]
    },
    {
        title: "Predictive Analytics",
        icon: <LineChart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'DataRobot', description: 'Enterprise AI platform.', url: 'https://www.datarobot.com/', image: 'https://picsum.photos/seed/datarobot-da/600/400', dataAiHint: 'enterprise ai', pricing: 'Paid' },
            { name: 'H2O.ai', description: 'AI Cloud for building and deploying AI models.', url: 'https://h2o.ai/', image: 'https://picsum.photos/seed/h2oai-da/600/400', dataAiHint: 'ai cloud', pricing: 'Freemium' },
            { name: 'RapidMiner', description: 'A data science platform for teams.', url: 'https://rapidminer.com/', image: 'https://picsum.photos/seed/rapidminer-da/600/400', dataAiHint: 'data science', pricing: 'Paid' },
        ]
    },
    {
        title: "Machine Learning Platforms",
        icon: <BrainCircuit className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'TensorFlow', description: 'An end-to-end open source platform for machine learning.', url: 'https://www.tensorflow.org/', image: 'https://picsum.photos/seed/tensorflow-da/600/400', dataAiHint: 'machine learning', pricing: 'Free' },
            { name: 'PyTorch', description: 'An open source machine learning framework.', url: 'https://pytorch.org/', image: 'https://picsum.photos/seed/pytorch-da/600/400', dataAiHint: 'deep learning', pricing: 'Free' },
            { name: 'Scikit-learn', description: 'Simple and efficient tools for predictive data analysis.', url: 'https://scikit-learn.org/', image: 'https://picsum.photos/seed/scikitlearn-da/600/400', dataAiHint: 'python ml', pricing: 'Free' },
        ]
    },
    {
        title: "Customer Data Platforms (CDP)",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Segment', description: 'The leading Customer Data Platform (CDP).', url: 'https://segment.com/', image: 'https://picsum.photos/seed/segment-da/600/400', dataAiHint: 'customer data', pricing: 'Freemium' },
            { name: 'Tealium', description: 'The most trusted Customer Data Platform.', url: 'https://tealium.com/', image: 'https://picsum.photos/seed/tealium-da/600/400', dataAiHint: 'data hub', pricing: 'Paid' },
            { name: 'mParticle', description: 'Customer data platform for the enterprise.', url: 'https://www.mparticle.com/', image: 'https://picsum.photos/seed/mparticle-da/600/400', dataAiHint: 'enterprise cdp', pricing: 'Paid' },
        ]
    },
     {
        title: "Big Data & Data Warehousing",
        icon: <Database className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Snowflake', description: 'The Data Cloud.', url: 'https://www.snowflake.com/', image: 'https://picsum.photos/seed/snowflake-da/600/400', dataAiHint: 'data cloud', pricing: 'Paid' },
            { name: 'Databricks', description: 'The Data and AI Company.', url: 'https://www.databricks.com/', image: 'https://picsum.photos/seed/databricks-da/600/400', dataAiHint: 'lakehouse', pricing: 'Paid' },
            { name: 'Google BigQuery', description: 'Serverless, highly scalable, and cost-effective cloud data warehouse.', url: 'https://cloud.google.com/bigquery', image: 'https://picsum.photos/seed/bigquery-da/600/400', dataAiHint: 'data warehouse', pricing: 'Paid' },
        ]
    }
];
