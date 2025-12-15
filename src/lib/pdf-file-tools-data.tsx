
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
            { name: 'Smallpdf', description: 'Easy-to-use online PDF tools.', url: 'https://smallpdf.com/', image: 'https://picsum.photos/seed/smallpdf-edit/600/400', dataAiHint: 'online pdf', pricing: 'Freemium' },
            { name: 'PDF Expert', description: 'The go-to PDF editor for Mac, iPhone and iPad.', url: 'https://pdfexpert.com/', image: 'https://picsum.photos/seed/pdfexpert/600/400', dataAiHint: 'apple pdf', pricing: 'Paid' },
        ]
    },
    {
        title: "AI PDF Reader & Viewer",
        icon: <Eye className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Adobe Acrobat Reader', description: 'The free global standard for reliably viewing PDFs.', url: 'https://get.adobe.com/reader/', image: 'https://picsum.photos/seed/acrobatreader/600/400', dataAiHint: 'pdf reader', pricing: 'Free' },
            { name: 'Foxit Reader', description: 'A small, fast, and feature-rich PDF viewer.', url: 'https://www.foxit.com/pdf-reader/', image: 'https://picsum.photos/seed/foxit-reader/600/400', dataAiHint: 'pdf viewer', pricing: 'Free' },
        ]
    },
    {
        title: "AI PDF Converter Tools",
        icon: <Repeat className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Smallpdf', description: 'Online PDF converter to Word, Excel, and more.', url: 'https://smallpdf.com/pdf-converter', image: 'https://picsum.photos/seed/smallpdf-convert-pdf/600/400', dataAiHint: 'pdf converter', pricing: 'Freemium' },
            { name: 'iLovePDF', description: 'Every tool you need to work with PDFs.', url: 'https://www.ilovepdf.com/', image: 'https://picsum.photos/seed/ilovepdf-pdf/600/400', dataAiHint: 'pdf tools', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI PDF Compressor Tools",
        icon: <Minimize2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'iLovePDF Compress', description: 'Compress PDF files to reduce their size.', url: 'https://www.ilovepdf.com/compress_pdf', image: 'https://picsum.photos/seed/ilovepdf-compress-pdf/600/400', dataAiHint: 'compress pdf', pricing: 'Free' },
            { name: 'Smallpdf Compress', description: 'Reduce the size of your PDF without losing quality.', url: 'https://smallpdf.com/compress-pdf', image: 'https://picsum.photos/seed/smallpdf-compress-pdf/600/400', dataAiHint: 'reduce size', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI PDF Merger Tools",
        icon: <Combine className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'iLovePDF Merge', description: 'Combine multiple PDF files into one.', url: 'https://www.ilovepdf.com/merge_pdf', image: 'https://picsum.photos/seed/ilovepdf-merge-pdf/600/400', dataAiHint: 'merge pdf', pricing: 'Free' },
             { name: 'Smallpdf Merge', description: 'Combine PDFs into one unified document.', url: 'https://smallpdf.com/merge-pdf', image: 'https://picsum.photos/seed/smallpdf-merge-pdf/600/400', dataAiHint: 'combine pdf', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI PDF Splitter Tools",
        icon: <Split className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'iLovePDF Split', description: 'Split one PDF file into multiple.', url: 'https://www.ilovepdf.com/split_pdf', image: 'https://picsum.photos/seed/ilovepdf-split-pdf/600/400', dataAiHint: 'split pdf', pricing: 'Free' },
            { name: 'Smallpdf Split', description: 'Extract pages from your PDF or save each page as a separate PDF.', url: 'https://smallpdf.com/split-pdf', image: 'https://picsum.photos/seed/smallpdf-split-pdf/600/400', dataAiHint: 'extract pages', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI OCR & Text Extraction Tools",
        icon: <ScanText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Cloud Vision AI', description: 'Derive insights from your images with OCR.', url: 'https://cloud.google.com/vision', image: 'https://picsum.photos/seed/gvision-ocr-pdf/600/400', dataAiHint: 'ocr api', pricing: 'Paid' },
            { name: 'Nanonets', description: 'Intelligent automation for business processes.', url: 'https://nanonets.com/', image: 'https://picsum.photos/seed/nanonets-pdf/600/400', dataAiHint: 'ocr automation', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Scan to PDF Tools",
        icon: <Camera className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Adobe Scan', description: 'Mobile scanner app to create PDFs.', url: 'https://www.adobe.com/acrobat/mobile/scanner-app.html', image: 'https://picsum.photos/seed/adobescan-pdf/600/400', dataAiHint: 'mobile scanner', pricing: 'Free' },
            { name: 'Microsoft Lens', description: 'A pocket scanner for documents and whiteboards.', url: 'https://www.microsoft.com/en-us/lens', image: 'https://picsum.photos/seed/mslens-pdf/600/400', dataAiHint: 'pocket scanner', pricing: 'Free' },
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
        tools: [
             { name: 'ChatPDF', description: 'Chat with any PDF.', url: 'https://www.chatpdf.com/', image: 'https://picsum.photos/seed/chatpdf-search/600/400', dataAiHint: 'pdf chat', pricing: 'Freemium' },
             { name: 'Humata AI', description: 'Your AI for files. Ask questions, get answers.', url: 'https://www.humata.ai/', image: 'https://picsum.photos/seed/humataai-search/600/400', dataAiHint: 'document ai', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI File Format Conversion",
        icon: <File className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'CloudConvert', description: 'Online file converter for 200+ formats.', url: 'https://cloudconvert.com/', image: 'https://picsum.photos/seed/cloudconvert-ff/600/400', dataAiHint: 'file converter', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI File Compression Tools",
        icon: <FileArchive className="w-5 h-5 text-primary"/>,
        tools: [
             { name: '7-Zip', description: 'A free and open-source file archiver.', url: 'https://www.7-zip.org/', image: 'https://picsum.photos/seed/7zip-compress/600/400', dataAiHint: 'file compression', pricing: 'Free' },
             { name: 'WinRAR', description: 'Powerful archiver and archive manager.', url: 'https://www.win-rar.com/', image: 'https://picsum.photos/seed/winrar-compress/600/400', dataAiHint: 'archive manager', pricing: 'Freemium' },
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
             { name: 'Google Drive', description: 'Cloud storage for your files.', url: 'https://www.google.com/drive/', image: 'https://picsum.photos/seed/gdrive-cloud/600/400', dataAiHint: 'cloud storage', pricing: 'Freemium' },
             { name: 'Dropbox', description: 'A modern workspace designed to reduce busywork.', url: 'https://www.dropbox.com/', image: 'https://picsum.photos/seed/dropbox-cloud/600/400', dataAiHint: 'file sharing', pricing: 'Freemium' },
             { name: 'Microsoft OneDrive', description: 'Save your files and photos to OneDrive.', url: 'https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage', image: 'https://picsum.photos/seed/onedrive-cloud/600/400', dataAiHint: 'online storage', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI File Sharing & Collaboration",
        icon: <Share className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Dropbox', description: 'A modern workspace designed to reduce busywork.', url: 'https://www.dropbox.com/', image: 'https://picsum.photos/seed/dropbox-share/600/400', dataAiHint: 'file sharing', pricing: 'Freemium' },
            { name: 'WeTransfer', description: 'The simplest way to send your files around the world.', url: 'https://wetransfer.com/', image: 'https://picsum.photos/seed/wetransfer/600/400', dataAiHint: 'send files', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Document Summarization Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Humata AI', description: 'Your AI for files. Ask questions, get answers.', url: 'https://www.humata.ai/', image: 'https://picsum.photos/seed/humataai-pdf/600/400', dataAiHint: 'document ai', pricing: 'Freemium' },
            { name: 'Scholarcy', description: 'AI-powered article summarizer.', url: 'https://www.scholarcy.com/', image: 'https://picsum.photos/seed/scholarcy-pdf/600/400', dataAiHint: 'research paper', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Document Translation Tools",
        icon: <Languages className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Translate', description: 'Translate documents instantly.', url: 'https://translate.google.com/docs', image: 'https://picsum.photos/seed/gtranslate-docs-pdf/600/400', dataAiHint: 'document translation', pricing: 'Free' },
            { name: 'DeepL', description: 'Translate documents with the world\'s most accurate translator.', url: 'https://www.deepl.com/translator', image: 'https://picsum.photos/seed/deepl-pdf/600/400', dataAiHint: 'accurate translation', pricing: 'Freemium' },
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
            { name: 'DocuSign', description: 'The #1 way to sign and send.', url: 'https://www.docusign.com/', image: 'https://picsum.photos/seed/docusign-pdf/600/400', dataAiHint: 'esignature', pricing: 'Paid' },
            { name: 'PandaDoc', description: 'Create, send, and e-sign documents.', url: 'https://www.pandadoc.com/', image: 'https://picsum.photos/seed/pandadoc-pdf/600/400', dataAiHint: 'document workflow', pricing: 'Freemium' },
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
