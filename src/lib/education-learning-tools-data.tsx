'use client';

import React from 'react';
import { 
    Cpu, BookOpen, UserCheck, Book, Bot, GraduationCap, CheckSquare, ListChecks, Note, FileText,
    Brain, MessageSquare, Languages, Code, Atom, Sigma, FlaskConical, Briefcase, Milestone, Tv,
    BarChart, Users, Settings, Gamepad, Zap, BookHeart
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

export const educationLearningToolData: ToolCategory[] = [
    {
        title: "AI Learning Platforms",
        icon: <Cpu className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Coursera', description: 'Learn without limits with online courses.', url: 'https://www.coursera.org/', image: 'https://picsum.photos/seed/coursera-edu/600/400', dataAiHint: 'online courses', pricing: 'Freemium' },
            { name: 'edX', description: 'Access 2000 free online courses from 140 leading institutions.', url: 'https://www.edx.org/', image: 'https://picsum.photos/seed/edx-edu/600/400', dataAiHint: 'university courses', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Online Course Builders",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Teachable', description: 'Create and sell online courses and coaching.', url: 'https://teachable.com/', image: 'https://picsum.photos/seed/teachable-edu/600/400', dataAiHint: 'online course', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Personalized Learning Tools",
        icon: <UserCheck className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Adaptive Learning Systems",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Tutoring Tools",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Virtual Teachers",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Homework Help Tools",
        icon: <GraduationCap className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Socratic by Google', description: 'Learning app to help with homework.', url: 'https://socratic.org/', image: 'https://picsum.photos/seed/socratic-edu/600/400', dataAiHint: 'homework help', pricing: 'Free' },
             { name: 'Brainly', description: 'For students, by students.', url: 'https://brainly.com/', image: 'https://picsum.photos/seed/brainly-edu/600/400', dataAiHint: 'student community', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI Exam Preparation Tools",
        icon: <CheckSquare className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Quiz & Assessment Tools",
        icon: <ListChecks className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Practice Test Generators",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Study Planning Tools",
        icon: <Book className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Note-Taking for Students",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Study Material Generators",
        icon: <Book className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Concept Explanation Tools",
        icon: <Brain className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Doubt-Solving Assistants",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Language Learning Tools",
        icon: <Languages className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Duolingo', description: 'Learn a language for free.', url: 'https://www.duolingo.com/', image: 'https://picsum.photos/seed/duolingo-edu/600/400', dataAiHint: 'language app', pricing: 'Freemium' },
             { name: 'Babbel', description: 'Language for life.', url: 'https://www.babbel.com/', image: 'https://picsum.photos/seed/babbel-edu/600/400', dataAiHint: 'language learning', pricing: 'Paid' },
        ],
    },
    {
        title: "AI Coding & Programming Learning Tools",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI STEM Learning Tools",
        icon: <Atom className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Math Solvers",
        icon: <Sigma className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Science Learning Tools",
        icon: <FlaskConical className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Skill Development Platforms",
        icon: <Briefcase className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Career Guidance Tools",
        icon: <Milestone className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Certification & Training Tools",
        icon: <CheckSquare className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Learning Analytics Tools",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Student Progress Tracking",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Teacher Assistant Tools",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Classroom Management Tools",
        icon: <Settings className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI E-Learning Content Creation",
        icon: <Tv className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Education Gamification Tools",
        icon: <Gamepad className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Lifelong Learning Tools",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [],
    }
];
