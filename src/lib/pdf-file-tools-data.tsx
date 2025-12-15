
'use client';

import React from 'react';
import { 
    Edit, Eye, Repeat, Minimize2, Combine, Split, ScanText, Camera, Fingerprint, Search,
    File, FileArchive, Folder, Cloud, Share, FileText, Languages, Pen, Signature, CheckSquare,
    User, CaseSensitive, FileLock, GitBranch, RotateCw, FileSymlink, BarChart, FileJson
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

export const pdfFileToolData: ToolCategory[] = [
    {
        title: "AI PDF Editor Tools",
        icon: <Edit className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Adobe Acrobat Pro', description: 'The original and most powerful PDF editor.', url: 'https://www.adobe.com/acrobat.html', image: 'https://picsum.photos/seed/acrobatpro/600/400', dataAiHint: 'pdf editor', pricing: 'Paid' },
            { name: 'PDFgear', description: 'Free PDF editor with AI chat features.', url: 'https://www.pdfgear.com/', image: 'https://picsum.photos/seed/pdfgear/600/400', dataAiHint: 'ai pdf', pricing: 'Free' },
        ]
    },
    {
        title: "AI PDF Reader & Viewer",
        icon: <Eye className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Adobe Acrobat Reader', description: 'The free global standard for reliably viewing PDFs.', url: 'https://get.adobe.com/reader/', image: 'https://picsum.photos/seed/acrobatreader/600/400', dataAiHint: 'pdf reader', pricing: 'Free' },
        ]
    },
    {
        title: "AI PDF Converter Tools",
        icon: <Repeat className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Smallpdf', description: 'Online PDF converter to Word, Excel, and more.', url: 'https://smallpdf.com/pdf-converter', image: 'https://picsum.photos/seed/smallpdf-convert/600/400', dataAiHint: 'pdf converter', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI PDF Compressor Tools",
        icon: <Minimize2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'iLovePDF Compress', description: 'Compress PDF files to reduce their size.', url: 'https://www.ilovepdf.com/compress_pdf', image: 'https://picsum.photos/seed/ilovepdf-compress/600/400', dataAiHint: 'compress pdf', pricing: 'Free' },
        ]
    },
    {
        title: "AI PDF Merger Tools",
        icon: <Combine className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'iLovePDF Merge', description: 'Combine multiple PDF files into one.', url: 'https://www.ilovepdf.com/merge_pdf', image: 'https://picsum.photos/seed/ilovepdf-merge/600/400', dataAiHint: 'merge pdf', pricing: 'Free' },
        ]
    },
    {
        title: "AI PDF Splitter Tools",
        icon: <Split className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'iLovePDF Split', description: 'Split one PDF file into multiple.', url: 'https://www.ilovepdf.com/split_pdf', image: 'https://picsum.photos/seed/ilovepdf-split/600/400', dataAiHint: 'split pdf', pricing: 'Free' },
        ]
    },
    {
        title: "AI OCR & Text Extraction Tools",
        icon: <ScanText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Cloud Vision AI', description: 'Derive insights from your images with OCR.', url: 'https://cloud.google.com/vision', image: 'https://picsum.photos/seed/gvision-ocr/600/400', dataAiHint: 'ocr api', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Scan to PDF Tools",
        icon: <Camera className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Adobe Scan', description: 'Mobile scanner app to create PDFs.', url: 'https://www.adobe.com/acrobat/mobile/scanner-app.html', image: 'https://picsum.photos/seed/adobescan/600/400', dataAiHint: 'mobile scanner', pricing: 'Free' },
        ]
    },
    {
        title: "AI Document Digitization Tools",
        icon: <Fingerprint className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI PDF Search Tools",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI File Format Conversion",
        icon: <File className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'CloudConvert', description: 'Online file converter for 200+ formats.', url: 'https://cloudconvert.com/', image: 'https://picsum.photos/seed/cloudconvert/600/400', dataAiHint: 'file converter', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI File Compression Tools",
        icon: <FileArchive className="w-5 h-5 text-primary"/>,
        tools: [
             { name: '7-Zip', description: 'A free and open-source file archiver.', url: 'https://www.7-zip.org/', image: 'https://picsum.photos/seed/7zip/600/400', dataAiHint: 'file compression', pricing: 'Free' },
        ]
    },
    {
        title: "AI File Management Tools",
        icon: <Folder className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Cloud File Storage Tools",
        icon: <Cloud className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Google Drive', description: 'Cloud storage for your files.', url: 'https://www.google.com/drive/', image: 'https://picsum.photos/seed/gdrive/600/400', dataAiHint: 'cloud storage', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI File Sharing & Collaboration",
        icon: <Share className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Dropbox', description: 'A modern workspace designed to reduce busywork.', url: 'https://www.dropbox.com/', image: 'https://picsum.photos/seed/dropbox/600/400', dataAiHint: 'file sharing', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Document Summarization Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Humata AI', description: 'Your AI for files. Ask questions, get answers.', url: 'https://www.humata.ai/', image: 'https://picsum.photos/seed/humataai-pdf/600/400', dataAiHint: 'document ai', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Document Translation Tools",
        icon: <Languages className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Translate', description: 'Translate documents instantly.', url: 'https://translate.google.com/docs', image: 'https://picsum.photos/seed/gtranslate-docs/600/400', dataAiHint: 'document translation', pricing: 'Free' },
        ]
    },
    {
        title: "AI File Annotation Tools",
        icon: <Pen className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Digital Signature Tools",
        icon: <Signature className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'DocuSign', description: 'The #1 way to sign and send.', url: 'https://www.docusign.com/', image: 'https://picsum.photos/seed/docusign/600/400', dataAiHint: 'esignature', pricing: 'Paid' },
        ]
    },
    {
        title: "AI PDF Form Filling Tools",
        icon: <CheckSquare className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Resume & Document Parsing",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Contract & Legal PDF Tools",
        icon: <CaseSensitive className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Invoice & Receipt PDF Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Data Extraction from Files",
        icon: <FileJson className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI File Security & Encryption",
        icon: <FileLock className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Version Control for Files",
        icon: <GitBranch className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI File Backup & Recovery",
        icon: <RotateCw className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI File Comparison Tools",
        icon: <FileSymlink className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Large File Handling Tools",
        icon: <File className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI File Analytics & Insights",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [],
    }
];
