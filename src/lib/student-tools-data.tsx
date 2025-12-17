
'use client';

import React from 'react';
import { Youtube, MessageSquare, BookOpen, FileText, HelpCircle, Book, Zap, Calendar, Brain, Search, Type, Presentation, Wand2, Mic, File, GraduationCap, Scissors } from 'lucide-react';

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

export const studentToolData: ToolCategory[] = [
    {
        title: "YouTube Summarizer",
        icon: <Youtube className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Eightify AI', description: 'Summarize YouTube videos with AI.', url: 'https://eightify.app/', image: 'https://picsum.photos/seed/eightify/600/400', dataAiHint: 'youtube summary', pricing: 'Freemium' },
            { name: 'Glarity', description: 'Summarize Google search results and YouTube videos.', url: 'https://glarity.app/', image: 'https://picsum.photos/seed/glarity/600/400', dataAiHint: 'video transcript', pricing: 'Free' },
            { name: 'YouTube Transcript Extractor', description: 'Get transcripts from any YouTube video.', url: 'https://youtubetranscript.com/', image: 'https://picsum.photos/seed/youtubetranscript/600/400', dataAiHint: 'video text', pricing: 'Free' },
        ]
    },
    {
        title: "Chatbox / Study Assistant Tools",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ChatGPT', description: 'Conversational AI for instant answers.', url: 'https://chat.openai.com/', image: 'https://picsum.photos/seed/chatgpt-study/600/400', dataAiHint: 'ai assistant', pricing: 'Freemium' },
            { name: 'Perplexity AI', description: 'An answer engine for complex questions.', url: 'https://www.perplexity.ai/', image: 'https://picsum.photos/seed/perplexity-study/600/400', dataAiHint: 'research tool', pricing: 'Freemium' },
            { name: 'Notion AI', description: 'AI features integrated into Notion workspace.', url: 'https://www.notion.so/product/ai', image: 'https://picsum.photos/seed/notionai-study/600/400', dataAiHint: 'workspace assistant', pricing: 'Paid' },
        ]
    },
    {
        title: "Notes Making & Summarising Tools",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Notion', description: 'The all-in-one workspace for notes and tasks.', url: 'https://www.notion.so/', image: 'https://picsum.photos/seed/notion-notes/600/400', dataAiHint: 'digital notebook', pricing: 'Freemium' },
            { name: 'Obsidian', description: 'A powerful knowledge base on top of a local folder.', url: 'https://obsidian.md/', image: 'https://picsum.photos/seed/obsidian-notes/600/400', dataAiHint: 'second brain', pricing: 'Free' },
            { name: 'TLDV', description: 'Record, transcribe, and summarize meetings.', url: 'https://tldv.io/', image: 'https://picsum.photos/seed/tldv/600/400', dataAiHint: 'meeting notes', pricing: 'Freemium' },
        ]
    },
    {
        title: "Text-to-Notes Converter Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Scholarcy', description: 'AI-powered article summarizer.', url: 'https://www.scholarcy.com/', image: 'https://picsum.photos/seed/scholarcy/600/400', dataAiHint: 'research paper', pricing: 'Freemium' },
            { name: 'Humata AI', description: 'Your AI for files. Ask questions, get answers.', url: 'https://www.humata.ai/', image: 'https://picsum.photos/seed/humataai/600/400', dataAiHint: 'document ai', pricing: 'Freemium' },
            { name: 'PDFgear AI', description: 'Free PDF editor with AI features.', url: 'https://www.pdfgear.com/', image: 'https://picsum.photos/seed/pdfgear/600/400', dataAiHint: 'pdf chat', pricing: 'Free' },
        ]
    },
    {
        title: "Question Solving Tools",
        icon: <HelpCircle className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Photomath', description: 'Scan and solve math problems.', url: 'https://photomath.com/', image: 'https://picsum.photos/seed/photomath/600/400', dataAiHint: 'math solver', pricing: 'Freemium' },
            { name: 'Mathway', description: 'Step-by-step algebra, calculus, and more.', url: 'https://www.mathway.com/', image: 'https://picsum.photos/seed/mathway/600/400', dataAiHint: 'algebra solver', pricing: 'Freemium' },
            { name: 'Symbolab', description: 'Math solver with step-by-step solutions.', url: 'https://www.symbolab.com/', image: 'https://picsum.photos/seed/symbolab/600/400', dataAiHint: 'calculus solver', pricing: 'Freemium' },
        ]
    },
    {
        title: "Exam Revision Tools",
        icon: <Book className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Quizlet', description: 'Learn with flashcards, games, and more.', url: 'https://quizlet.com/', image: 'https://picsum.photos/seed/quizlet/600/400', dataAiHint: 'study sets', pricing: 'Freemium' },
            { name: 'Anki', description: 'Powerful, intelligent flashcards.', url: 'https://apps.ankiweb.net/', image: 'https://picsum.photos/seed/anki/600/400', dataAiHint: 'spaced repetition', pricing: 'Free' },
            { name: 'StudySmarter', description: 'All-in-one learning platform.', url: 'https://www.studysmarter.us/', image: 'https://picsum.photos/seed/studysmarter/600/400', dataAiHint: 'learning platform', pricing: 'Free' },
        ]
    },
    {
        title: "Productivity & Focus Tools",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Forest', description: 'Stay focused, be present.', url: 'https://www.forestapp.cc/', image: 'https://picsum.photos/seed/forest-app/600/400', dataAiHint: 'focus timer', pricing: 'Freemium' },
            { name: 'Focus To-Do', description: 'Pomodoro Timer & To Do List.', url: 'https://www.focustodo.cn/', image: 'https://picsum.photos/seed/focustodo/600/400', dataAiHint: 'pomodoro technique', pricing: 'Freemium' },
            { name: 'Study Bunny', description: 'A motivating study timer app.', url: 'https://superbyte.site/studybunny', image: 'https://picsum.photos/seed/studybunny/600/400', dataAiHint: 'cute timer', pricing: 'Free' },
        ]
    },
    {
        title: "Study Planner / Time Table Tools",
        icon: <Calendar className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Notion Templates', description: 'Customizable templates for study planning.', url: 'https://www.notion.so/templates', image: 'https://picsum.photos/seed/notion-templates/600/400', dataAiHint: 'student planner', pricing: 'Freemium' },
            { name: 'Google Calendar', description: 'Organize your schedule and share events.', url: 'https://calendar.google.com/', image: 'https://picsum.photos/seed/google-calendar/600/400', dataAiHint: 'digital calendar', pricing: 'Free' },
            { name: 'Todoist', description: 'Organize your work and life.', url: 'https://todoist.com/', image: 'https://picsum.photos/seed/todoist-study/600/400', dataAiHint: 'task manager', pricing: 'Freemium' },
        ]
    },
    {
        title: "Memory Booster Tools",
        icon: <Brain className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Anki', description: 'Intelligent flashcards for effective memorization.', url: 'https://apps.ankiweb.net/', image: 'https://picsum.photos/seed/anki-memory/600/400', dataAiHint: 'spaced repetition', pricing: 'Free' },
            { name: 'Memrise', description: 'The fastest way to learn a language.', url: 'https://www.memrise.com/', image: 'https://picsum.photos/seed/memrise/600/400', dataAiHint: 'language learning', pricing: 'Freemium' },
            { name: 'ChatGPT Mnemonic Mode', description: 'Use AI to create memory aids.', url: 'https://chat.openai.com/', image: 'https://picsum.photos/seed/chatgpt-mnemonic/600/400', dataAiHint: 'memory palace', pricing: 'Freemium' },
        ]
    },
    {
        title: "Research / Information Tools",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Perplexity AI', description: 'An answer engine for discovering and sharing knowledge.', url: 'https://www.perplexity.ai/', image: 'https://picsum.photos/seed/perplexity-research/600/400', dataAiHint: 'knowledge engine', pricing: 'Freemium' },
            { name: 'Google Scholar', description: 'Provides a simple way to broadly search for scholarly literature.', url: 'https://scholar.google.com/', image: 'https://picsum.photos/seed/googlescholar/600/400', dataAiHint: 'academic search', pricing: 'Free' },
            { name: 'Research Rabbit', description: 'Your personal research assistant.', url: 'https://www.researchrabbit.ai/', image: 'https://picsum.photos/seed/researchrabbit/600/400', dataAiHint: 'literature map', pricing: 'Free' },
        ]
    }
];
