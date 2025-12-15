
'use client';

import React from 'react';
import { 
    File, FileText, ImageIcon, Video, Mic, ScanText, Mic2, FileSpreadsheet, FileArchive, Code,
    Languages, Database, RefreshCw, Bot, Batch, Globe, DollarSign, Repeat, Box, Server,
    ChevronDown, ChevronUp, ChevronsUpDown, Replace, BringToFront, SendToBack, Layers3, Move,
    Type, Shuffle
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

export const converterToolData: ToolCategory[] = [
    {
        title: "AI File Converter Tools",
        icon: <File className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'CloudConvert', description: 'Online file converter for 200+ formats.', url: 'https://cloudconvert.com/', image: 'https://picsum.photos/seed/cloudconvert-file/600/400', dataAiHint: 'file converter', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI PDF Converter Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Smallpdf', description: 'Online PDF converter to Word, Excel, and more.', url: 'https://smallpdf.com/pdf-converter', image: 'https://picsum.photos/seed/smallpdf-pdf/600/400', dataAiHint: 'pdf conversion', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Image Converter Tools",
        icon: <ImageIcon className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Video Converter Tools",
        icon: <Video className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Audio Converter Tools",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Document Format Converter",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Image to Text Converter (OCR)",
        icon: <ScanText className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Text to Image Converter",
        icon: <Type className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Text to Speech Converter",
        icon: <Mic2 className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Speech to Text Converter",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Image to PDF Converter",
        icon: <File className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI PDF to Word Converter",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI PDF to Excel Converter",
        icon: <FileSpreadsheet className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI PDF to Image Converter",
        icon: <ImageIcon className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Word to PDF Converter",
        icon: <File className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Video to Audio Converter",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Audio to Text Converter",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Audio Format Converter",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Video Format Converter",
        icon: <Video className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Subtitle Converter Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Code Converter Tools",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Language Translation Converter",
        icon: <Languages className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Data Format Converter",
        icon: <Database className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI CSV / Excel Converter",
        icon: <FileSpreadsheet className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI JSON / XML Converter",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Unit Converter Tools",
        icon: <RefreshCw className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Currency Converter Tools",
        icon: <DollarSign className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI File Compression Converter",
        icon: <FileArchive className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Batch Conversion Tools",
        icon: <Box className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Online Conversion Platforms",
        icon: <Globe className="w-5 h-5 text-primary"/>,
        tools: [],
    }
];
