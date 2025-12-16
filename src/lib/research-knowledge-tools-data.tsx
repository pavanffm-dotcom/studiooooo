
'use client';

import React from 'react';
import { 
    BrainCircuit, BookOpen, Search, BookCopy, GraduationCap, BookMarked, Combine, CheckCircle, Database,
    Globe, Users, TrendingUp, BarChart, Lightbulb, StickyNote, Book, FileSearch, Milestone,
    MessageSquare, Zap, TestTube, Code, GitBranch, Settings, Network, Cpu, File, CheckSquare as CheckSquareIcon,
    FileText
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

export const researchKnowledgeToolData: ToolCategory[] = [
    {
        title: "AI Research Assistants",
        icon: <BrainCircuit className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Elicit', description: 'The AI Research Assistant.', url: 'https://elicit.org/', image: 'https://picsum.photos/seed/elicit-rk/600/400', dataAiHint: 'automate research', pricing: 'Freemium' },
            { name: 'Perplexity AI', description: 'An answer engine for discovering and sharing knowledge.', url: 'https://www.perplexity.ai/', image: 'https://picsum.photos/seed/perplexity-rk/600/400', dataAiHint: 'answer engine', pricing: 'Freemium' },
            { name: 'Research Rabbit', description: 'Your personal research assistant.', url: 'https://www.researchrabbit.ai/', image: 'https://picsum.photos/seed/researchrabbit-rk/600/400', dataAiHint: 'literature map', pricing: 'Free' },
        ]
    },
    {
        title: "AI Knowledge Management Tools",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Obsidian', description: 'A powerful knowledge base on top of a local folder.', url: 'https://obsidian.md/', image: 'https://picsum.photos/seed/obsidian-km-rk/600/400', dataAiHint: 'second brain', pricing: 'Free' },
            { name: 'Roam Research', description: 'A note-taking tool for networked thought.', url: 'https://roamresearch.com/', image: 'https://picsum.photos/seed/roam-rk/600/400', dataAiHint: 'networked thought', pricing: 'Paid' },
            { name: 'Logseq', description: 'A privacy-first, open-source knowledge base.', url: 'https://logseq.com/', image: 'https://picsum.photos/seed/logseq-rk/600/400', dataAiHint: 'open source knowledge', pricing: 'Free' },
        ]
    },
    {
        title: "AI Information Retrieval Tools",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Scholar', description: 'Provides a simple way to broadly search for scholarly literature.', url: 'https://scholar.google.com/', image: 'https://picsum.photos/seed/googlescholar-rk/600/400', dataAiHint: 'academic search', pricing: 'Free' },
            { name: 'Semantic Scholar', description: 'AI-powered research tool for scientific literature.', url: 'https://www.semanticscholar.org/', image: 'https://picsum.photos/seed/semanticscholar-rk/600/400', dataAiHint: 'scientific literature', pricing: 'Free' },
        ]
    },
    {
        title: "AI Literature Review Tools",
        icon: <BookCopy className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'SciSpace', description: 'Explore, understand, and explain research papers.', url: 'https://typeset.io/', image: 'https://picsum.photos/seed/scispace-rk/600/400', dataAiHint: 'ai for research', pricing: 'Freemium' },
             { name: 'Litmaps', description: 'Create literature maps for your research.', url: 'https://www.litmaps.com/', image: 'https://picsum.photos/seed/litmaps-rk/600/400', dataAiHint: 'literature maps', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Academic Research Tools",
        icon: <GraduationCap className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Paper Search & Discovery Tools",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Connected Papers', description: 'A visual tool to find and explore academic papers.', url: 'https://www.connectedpapers.com/', image: 'https://picsum.photos/seed/connectedpapers-rk/600/400', dataAiHint: 'visual explorer', pricing: 'Free' },
        ]
    },
    {
        title: "AI Citation & Reference Managers",
        icon: <BookMarked className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Zotero', description: 'Your personal research assistant.', url: 'https://www.zotero.org/', image: 'https://picsum.photos/seed/zotero-ref-rk/600/400', dataAiHint: 'reference manager', pricing: 'Free' },
        ]
    },
    {
        title: "AI Research Summarization Tools",
        icon: <Combine className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Scholarcy', description: 'AI-powered article summarizer.', url: 'https://www.scholarcy.com/', image: 'https://picsum.photos/seed/scholarcy-sum-rk/600/400', dataAiHint: 'research paper', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Fact-Checking Tools",
        icon: <CheckCircle className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Data Collection Tools",
        icon: <Database className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Web Research Tools",
        icon: <Globe className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Competitive Research Tools",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Market Research Tools",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Trend Analysis Tools",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Insight Generation Tools",
        icon: <Lightbulb className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Note-Taking Tools",
        icon: <StickyNote className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Knowledge Base Builders",
        icon: <Book className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Document Search Tools",
        icon: <FileSearch className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Semantic Search Tools",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Question Answering Systems",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Learning & Study Tools",
        icon: <GraduationCap className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Concept Mapping Tools",
        icon: <Milestone className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Idea & Hypothesis Generators",
        icon: <Lightbulb className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Report & Whitepaper Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Research Collaboration Tools",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Knowledge Graph Tools",
        icon: <Network className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Data Annotation Tools",
        icon: <Cpu className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Research Workflow Automation",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Domain-Specific Research AI",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Knowledge Analytics Tools",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [],
    }
];
