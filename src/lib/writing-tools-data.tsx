
'use client';

import React from 'react';
import { 
    Feather, Bot, FileText, Type, BookOpen, Film, Cpu, GraduationCap, Mail, User,
    SpellCheck, RefreshCw, Replace, Combine, Palette, Search, Megaphone, AtSign, ThumbsUp,
    Languages, Shield, BookMarked, Check, Pencil, Globe, Milestone, FileClock, BarChart, PenTool
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

export const writingToolData: ToolCategory[] = [
    {
        title: "AI Content Writing Tools",
        icon: <Feather className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Jasper', description: 'AI content platform for teams.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-content/600/400', dataAiHint: 'ai writer', pricing: 'Paid' },
            { name: 'Copy.ai', description: 'AI-powered copywriter for marketing.', url: 'https://www.copy.ai/', image: 'https://picsum.photos/seed/copyai-content/600/400', dataAiHint: 'marketing copy', pricing: 'Freemium' },
            { name: 'Writesonic', description: 'AI writer for creating SEO-friendly content.', url: 'https://writesonic.com/', image: 'https://picsum.photos/seed/writesonic-content/600/400', dataAiHint: 'content generator', pricing: 'Freemium' },
            { name: 'Rytr', description: 'An AI writing assistant for fast content.', url: 'https://rytr.me/', image: 'https://picsum.photos/seed/rytr-content/600/400', dataAiHint: 'writing assistant', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Copywriting Tools",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Anyword', description: 'AI copywriting tool for marketing results.', url: 'https://anyword.com/', image: 'https://picsum.photos/seed/anyword-copy/600/400', dataAiHint: 'marketing results', pricing: 'Paid' },
            { name: 'Copysmith', description: 'AI copywriting for e-commerce teams.', url: 'https://copysmith.ai/', image: 'https://picsum.photos/seed/copysmith/600/400', dataAiHint: 'ecommerce copy', pricing: 'Paid' },
            { name: 'Peppertype.ai', description: 'Virtual content assistant.', url: 'https://www.peppertype.ai/', image: 'https://picsum.photos/seed/peppertype/600/400', dataAiHint: 'content ideation', pricing: 'Freemium' },
            { name: 'ClosersCopy', description: 'AI copywriting for sales.', url: 'https://www.closerscopy.com/', image: 'https://picsum.photos/seed/closerscopy/600/400', dataAiHint: 'sales copy', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Blog Writing Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Surfer SEO', description: 'Content intelligence tool for SEO.', url: 'https://surferseo.com/', image: 'https://picsum.photos/seed/surfer-blog/600/400', dataAiHint: 'seo content', pricing: 'Paid' },
            { name: 'Frase', description: 'AI for content that answers questions.', url: 'https://www.frase.io/', image: 'https://picsum.photos/seed/frase-blog/600/400', dataAiHint: 'content optimization', pricing: 'Paid' },
            { name: 'Article Forge', description: 'High-quality, AI-powered article writer.', url: 'https://articleforge.com/', image: 'https://picsum.photos/seed/articleforge-blog/600/400', dataAiHint: 'article writer', pricing: 'Paid' },
            { name: 'Scalenut', description: 'AI-powered content research and writing.', url: 'https://www.scalenut.com/', image: 'https://picsum.photos/seed/scalenut-blog/600/400', dataAiHint: 'content research', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Story & Creative Writing Tools",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Sudowrite', description: 'The AI writing partner for storytellers.', url: 'https://www.sudowrite.com/', image: 'https://picsum.photos/seed/sudowrite/600/400', dataAiHint: 'story writing', pricing: 'Paid' },
            { name: 'NovelAI', description: 'AI-assisted authorship & storytelling.', url: 'https://novelai.net/', image: 'https://picsum.photos/seed/novelai-story/600/400', dataAiHint: 'creative ai', pricing: 'Paid' },
            { name: 'Plot Factory', description: 'A collaborative story writing universe.', url: 'https://plotfactory.com/', image: 'https://picsum.photos/seed/plotfactory/600/400', dataAiHint: 'story planner', pricing: 'Freemium' },
            { name: 'TheStoryEngine', description: 'A deck of cards for generating ideas.', url: 'https://storyenginedeck.com/', image: 'https://picsum.photos/seed/storyengine/600/400', dataAiHint: 'idea generator', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Script Writing Tools",
        icon: <Film className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Final Draft', description: 'The industry-standard screenwriting software.', url: 'https://www.finaldraft.com/', image: 'https://picsum.photos/seed/finaldraft-script/600/400', dataAiHint: 'screenwriting', pricing: 'Paid' },
            { name: 'Celtx', description: 'All-in-one studio for writing, planning, and shooting.', url: 'https://www.celtx.com/', image: 'https://picsum.photos/seed/celtx-script/600/400', dataAiHint: 'pre-production', pricing: 'Freemium' },
            { name: 'WriterDuet', description: 'Real-time collaborative screenwriting.', url: 'https://writerduet.com/', image: 'https://picsum.photos/seed/writerduet-script/600/400', dataAiHint: 'collaboration', pricing: 'Freemium' },
            { name: 'DeepStory', description: 'AI script generator for movies.', url: 'https://deepstory.ai/', image: 'https://picsum.photos/seed/deepstory/600/400', dataAiHint: 'movie scripts', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Academic Writing Tools",
        icon: <GraduationCap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Elicit', description: 'The AI Research Assistant.', url: 'https://elicit.org/', image: 'https://picsum.photos/seed/elicit-academic/600/400', dataAiHint: 'research assistant', pricing: 'Freemium' },
            { name: 'Paperpal', description: 'Real-time, subject-specific language suggestions.', url: 'https://paperpal.com/', image: 'https://picsum.photos/seed/paperpal/600/400', dataAiHint: 'academic editing', pricing: 'Freemium' },
            { name: 'SciSpace', description: 'Explore, understand, and explain research papers.', url: 'https://typeset.io/', image: 'https://picsum.photos/seed/scispace-academic/600/400', dataAiHint: 'research papers', pricing: 'Freemium' },
            { name: 'Trinka AI', description: 'Online grammar checker for academic writing.', url: 'https://www.trinka.ai/', image: 'https://picsum.photos/seed/trinka/600/400', dataAiHint: 'grammar checker', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Email Writing Assistants",
        icon: <Mail className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Superhuman', description: 'The fastest email experience ever made.', url: 'https://superhuman.com/', image: 'https://picsum.photos/seed/superhuman-email-write/600/400', dataAiHint: 'fast email', pricing: 'Paid' },
            { name: 'Lavender', description: 'The #1 AI Sales Email Coach.', url: 'https://www.lavender.ai/', image: 'https://picsum.photos/seed/lavender-email-write/600/400', dataAiHint: 'email coach', pricing: 'Freemium' },
            { name: 'Shortwave', description: 'The intelligent email app.', url: 'https://www.shortwave.com/', image: 'https://picsum.photos/seed/shortwave-write/600/400', dataAiHint: 'intelligent email', pricing: 'Freemium' },
            { name: 'ChatGPT for Gmail', description: 'Use ChatGPT inside Gmail.', url: 'https://chatgptforgmail.com/', image: 'https://picsum.photos/seed/chatgpt-gmail/600/400', dataAiHint: 'gmail extension', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Grammar & Spell Checkers",
        icon: <SpellCheck className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Grammarly', description: 'AI-powered writing assistant.', url: 'https://www.grammarly.com/', image: 'https://picsum.photos/seed/grammarly-check/600/400', dataAiHint: 'grammar check', pricing: 'Freemium' },
            { name: 'ProWritingAid', description: 'A grammar checker, style editor, and writing mentor.', url: 'https://prowritingaid.com/', image: 'https://picsum.photos/seed/prowritingaid/600/400', dataAiHint: 'style editor', pricing: 'Freemium' },
            { name: 'WhiteSmoke', description: 'Grammar, spelling, style, and punctuation checker.', url: 'https://www.whitesmoke.com/', image: 'https://picsum.photos/seed/whitesmoke/600/400', dataAiHint: 'punctuation', pricing: 'Paid' },
            { name: 'Ginger Software', description: 'AI-powered writing assistant.', url: 'https://www.gingersoftware.com/', image: 'https://picsum.photos/seed/ginger-software/600/400', dataAiHint: 'writing correction', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Paraphrasing Tools",
        icon: <RefreshCw className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'QuillBot', description: 'Paraphrasing and summarizing tool.', url: 'https://quillbot.com/', image: 'https://picsum.photos/seed/quillbot-para/600/400', dataAiHint: 'rephrasing tool', pricing: 'Freemium' },
            { name: 'Wordtune', description: 'Your personal writing assistant.', url: 'https://www.wordtune.com/', image: 'https://picsum.photos/seed/wordtune-para/600/400', dataAiHint: 'rewrite sentences', pricing: 'Freemium' },
            { name: 'Paraphraser.io', description: 'Online paraphrasing tool to rewrite sentences.', url: 'https://www.paraphraser.io/', image: 'https://picsum.photos/seed/paraphraser-io/600/400', dataAiHint: 'sentence rewriter', pricing: 'Free' },
            { name: 'Spinner Chief', description: 'The best article spinner.', url: 'http://www.spinnerchief.com/', image: 'https://picsum.photos/seed/spinnerchief/600/400', dataAiHint: 'article spinner', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI SEO Writing Tools",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Surfer SEO', description: 'Content intelligence tool to write for SEO.', url: 'https://surferseo.com/', image: 'https://picsum.photos/seed/surfer-seo-write/600/400', dataAiHint: 'content intelligence', pricing: 'Paid' },
            { name: 'Clearscope', description: 'The best content optimization software.', url: 'https://www.clearscope.io/', image: 'https://picsum.photos/seed/clearscope-write/600/400', dataAiHint: 'content optimization', pricing: 'Paid' },
            { name: 'GrowthBar', description: 'AI for SEO that helps you create content.', url: 'https://www.growthbarseo.com/', image: 'https://picsum.photos/seed/growthbar/600/400', dataAiHint: 'seo content', pricing: 'Paid' },
            { name: 'NeuronWriter', description: 'Content optimization with NLP.', url: 'https://neuronwriter.com/', image: 'https://picsum.photos/seed/neuronwriter/600/400', dataAiHint: 'nlp writing', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Ad Copy Generators",
        icon: <Megaphone className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'AdCreative.ai', description: 'Generate conversion-focused ad creatives.', url: 'https://www.adcreative.ai/', image: 'https://picsum.photos/seed/adcreative-copy/600/400', dataAiHint: 'ad creatives', pricing: 'Paid' },
            { name: 'Pencil', description: 'AI ad generator for e-commerce.', url: 'https://www.trypencil.com/', image: 'https://picsum.photos/seed/pencil-copy/600/400', dataAiHint: 'ecommerce ads', pricing: 'Paid' },
            { name: 'Omneky', description: 'AI-powered personalized advertising.', url: 'https://www.omneky.com/', image: 'https://picsum.photos/seed/omneky-copy/600/400', dataAiHint: 'personalized ads', pricing: 'Paid' },
            { name: 'Anyword', description: 'AI copywriting tool for marketing results.', url: 'https://anyword.com/', image: 'https://picsum.photos/seed/anyword-ad/600/400', dataAiHint: 'marketing copy', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Translation Tools",
        icon: <Languages className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'DeepL', description: 'The world\'s most accurate translator.', url: 'https://www.deepl.com/translator', image: 'https://picsum.photos/seed/deepl-trans/600/400', dataAiHint: 'accurate translation', pricing: 'Freemium' },
            { name: 'Google Translate', description: 'Instantly translates words, phrases, and web pages.', url: 'https://translate.google.com/', image: 'https://picsum.photos/seed/google-translate/600/400', dataAiHint: 'language translation', pricing: 'Free' },
            { name: 'Microsoft Translator', description: 'Translate text, speech, and images.', url: 'https://www.microsoft.com/en-us/translator/', image: 'https://picsum.photos/seed/ms-translator/600/400', dataAiHint: 'speech translation', pricing: 'Freemium' },
            { name: 'Reverso', description: 'Translate and learn millions of words and expressions.', url: 'https://www.reverso.net/text_translation.aspx?lang=EN', image: 'https://picsum.photos/seed/reverso-trans/600/400', dataAiHint: 'context translation', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Plagiarism Checkers",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Copyscape', description: 'Plagiarism checker for online content.', url: 'https://www.copyscape.com/', image: 'https://picsum.photos/seed/copyscape/600/400', dataAiHint: 'content check', pricing: 'Freemium' },
            { name: 'Turnitin', description: 'Plagiarism prevention and originality checking.', url: 'https://www.turnitin.com/', image: 'https://picsum.photos/seed/turnitin/600/400', dataAiHint: 'academic integrity', pricing: 'Paid' },
            { name: 'Grammarly Plagiarism Checker', description: 'Check your text for plagiarism.', url: 'https://www.grammarly.com/plagiarism-checker', image: 'https://picsum.photos/seed/grammarly-plag/600/400', dataAiHint: 'originality', pricing: 'Freemium' },
            { name: 'Quetext', description: 'Plagiarism checker with DeepSearch technology.', url: 'https://www.quetext.com/', image: 'https://picsum.photos/seed/quetext/600/400', dataAiHint: 'deepsearch', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Citation & Reference Generators",
        icon: <BookMarked className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Zotero', description: 'Your personal research assistant.', url: 'https://www.zotero.org/', image: 'https://picsum.photos/seed/zotero-ref/600/400', dataAiHint: 'reference manager', pricing: 'Free' },
            { name: 'Mendeley', description: 'Reference management software.', url: 'https://www.mendeley.com/', image: 'https://picsum.photos/seed/mendeley-ref/600/400', dataAiHint: 'citation tool', pricing: 'Free' },
            { name: 'MyBib', description: 'Free citation generator.', url: 'https://www.mybib.com/', image: 'https://picsum.photos/seed/mybib/600/400', dataAiHint: 'apa mla', pricing: 'Free' },
            { name: 'Cite This For Me', description: 'Free reference generator.', url: 'https://www.citethisforme.com/', image: 'https://picsum.photos/seed/ctfm/600/400', dataAiHint: 'bibliography', pricing: 'Freemium' },
        ]
    },
];

// Add stubs for the remaining categories to reach 30
const remainingCategories = [
    { title: "AI Rewriting Tools", icon: <Replace className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI Text Summarization Tools", icon: <Combine className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI Tone & Style Improvers", icon: <Palette className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI Keyword-Optimized Content Tools", icon: <Feather className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI Headline & Title Generators", icon: <Type className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI Social Media Caption Writers", icon: <AtSign className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI Proofreading Tools", icon: <Check className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI Language Simplification Tools", icon: <Globe className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI Prompt Writing Tools", icon: <Pencil className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI Long-Form Writing Tools", icon: <Milestone className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI Product Description Generators", icon: <ThumbsUp className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI Speech & Presentation Writing Tools", icon: <PenTool className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI Writing Analytics Tools", icon: <BarChart className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI Resume & Cover Letter Tools", icon: <User className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI Technical Writing Tools", icon: <Cpu className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI Article Generation Tools", icon: <FileClock className="w-5 h-5 text-primary"/>, tools: [] }
];

writingToolData.push(...remainingCategories);

// Populate some of the empty categories with relevant tools
const rewritingTools = [
    { name: 'QuillBot', description: 'Paraphrasing and summarizing tool.', url: 'https://quillbot.com/', image: 'https://picsum.photos/seed/quillbot-rewrite/600/400', dataAiHint: 'rephrasing tool', pricing: 'Freemium' },
    { name: 'Wordtune', description: 'Your personal writing assistant.', url: 'https://www.wordtune.com/', image: 'https://picsum.photos/seed/wordtune-rewrite/600/400', dataAiHint: 'rewrite sentences', pricing: 'Freemium' },
];
const summarizationTools = [
    { name: 'Scholarcy', description: 'AI-powered article summarizer.', url: 'https://www.scholarcy.com/', image: 'https://picsum.photos/seed/scholarcy-sum-write/600/400', dataAiHint: 'research paper', pricing: 'Freemium' },
    { name: 'SMMRY', description: 'Summarize articles, text, and websites.', url: 'https://smmry.com/', image: 'https://picsum.photos/seed/smmry-write/600/400', dataAiHint: 'article summarizer', pricing: 'Free' },
];
const headlineGenerators = [
    { name: 'Copy.ai Headline Generator', description: 'Generate headlines for your content.', url: 'https://www.copy.ai/tools/headline-generator', image: 'https://picsum.photos/seed/copyai-headline/600/400', dataAiHint: 'headline tool', pricing: 'Freemium' },
    { name: 'Jasper Headline Generator', description: 'AI-powered headline and title creation.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-headline/600/400', dataAiHint: 'title generation', pricing: 'Paid' },
];

writingToolData.find(c => c.title === "AI Rewriting Tools")!.tools = rewritingTools;
writingToolData.find(c => c.title === "AI Text Summarization Tools")!.tools = summarizationTools;
writingToolData.find(c => c.title === "AI Headline & Title Generators")!.tools = headlineGenerators;
    
