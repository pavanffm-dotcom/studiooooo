
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
            { name: 'Zamzar', description: 'File conversion, made easy.', url: 'https://www.zamzar.com/', image: 'https://picsum.photos/seed/zamzar-file/600/400', dataAiHint: 'online conversion', pricing: 'Freemium' },
            { name: 'Online-Convert.com', description: 'Convert media files online from one format to another.', url: 'https://www.online-convert.com/', image: 'https://picsum.photos/seed/onlineconvert-file/600/400', dataAiHint: 'media converter', pricing: 'Free' },
            { name: 'Convertio', description: 'Convert files online from one format to another.', url: 'https://convertio.co/', image: 'https://picsum.photos/seed/convertio-file/600/400', dataAiHint: 'easy conversion', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI PDF Converter Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Smallpdf', description: 'Online PDF converter to Word, Excel, and more.', url: 'https://smallpdf.com/pdf-converter', image: 'https://picsum.photos/seed/smallpdf-pdf/600/400', dataAiHint: 'pdf conversion', pricing: 'Freemium' },
            { name: 'iLovePDF', description: 'Every tool you need to work with PDFs in one place.', url: 'https://www.ilovepdf.com/', image: 'https://picsum.photos/seed/ilovepdf-convert/600/400', dataAiHint: 'pdf tools', pricing: 'Freemium' },
            { name: 'PDFgear', description: 'Free PDF editor and converter with AI chat.', url: 'https://www.pdfgear.com/', image: 'https://picsum.photos/seed/pdfgear-convert/600/400', dataAiHint: 'ai pdf', pricing: 'Free' },
            { name: 'Adobe Acrobat', description: 'Convert PDFs to and from Microsoft Office formats.', url: 'https://www.adobe.com/acrobat/online/pdf-to-word.html', image: 'https://picsum.photos/seed/acrobat-convert/600/400', dataAiHint: 'pdf editor', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Image Converter Tools",
        icon: <ImageIcon className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'CloudConvert', description: 'Convert between PNG, JPG, GIF, WEBP and more.', url: 'https://cloudconvert.com/image-converter', image: 'https://picsum.photos/seed/cc-img-convert/600/400', dataAiHint: 'image formats', pricing: 'Freemium' },
            { name: 'Ezgif.com', description: 'Online GIF maker and image editor.', url: 'https://ezgif.com/webp-to-jpg', image: 'https://picsum.photos/seed/ezgif-img/600/400', dataAiHint: 'gif editor', pricing: 'Free' },
        ],
    },
    {
        title: "AI Video Converter Tools",
        icon: <Video className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'CloudConvert Video', description: 'Convert between MP4, WEBM, AVI, MOV and more.', url: 'https://cloudconvert.com/video-converter', image: 'https://picsum.photos/seed/cc-video-convert/600/400', dataAiHint: 'video formats', pricing: 'Freemium' },
            { name: 'HandBrake', description: 'The open-source video transcoder.', url: 'https://handbrake.fr/', image: 'https://picsum.photos/seed/handbrake-video/600/400', dataAiHint: 'video transcoder', pricing: 'Free' },
        ],
    },
    {
        title: "AI Audio Converter Tools",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'CloudConvert Audio', description: 'Convert between MP3, WAV, M4A, FLAC and more.', url: 'https://cloudconvert.com/audio-converter', image: 'https://picsum.photos/seed/cc-audio-convert/600/400', dataAiHint: 'audio formats', pricing: 'Freemium' },
            { name: 'Audacity', description: 'Free audio editor with conversion capabilities.', url: 'https://www.audacityteam.org/', image: 'https://picsum.photos/seed/audacity-convert/600/400', dataAiHint: 'audio editor', pricing: 'Free' },
        ],
    },
    {
        title: "AI Document Format Converter",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'CloudConvert Document', description: 'Convert between DOCX, PDF, TXT, HTML and more.', url: 'https://cloudconvert.com/document-converter', image: 'https://picsum.photos/seed/cc-doc-convert/600/400', dataAiHint: 'doc formats', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI Image to Text Converter (OCR)",
        icon: <ScanText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Cloud Vision AI', description: 'Derive insights from your images with OCR.', url: 'https://cloud.google.com/vision', image: 'https://picsum.photos/seed/gvision-ocr-convert/600/400', dataAiHint: 'ocr api', pricing: 'Paid' },
            { name: 'Adobe Scan', description: 'Mobile scanner app to create searchable PDFs.', url: 'https://www.adobe.com/acrobat/mobile/scanner-app.html', image: 'https://picsum.photos/seed/adobescan-ocr/600/400', dataAiHint: 'mobile scanner', pricing: 'Free' },
        ],
    },
    {
        title: "AI Text to Image Converter",
        icon: <Type className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Midjourney', description: 'AI art generator via Discord.', url: 'https://www.midjourney.com/', image: 'https://picsum.photos/seed/midjourney-convert/600/400', dataAiHint: 'discord art', pricing: 'Paid' },
            { name: 'DALL·E 3', description: 'OpenAI\'s image generation model.', url: 'https://openai.com/dall-e-3', image: 'https://picsum.photos/seed/dalle3-convert/600/400', dataAiHint: 'openai image', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI Text to Speech Converter",
        icon: <Mic2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ElevenLabs', description: 'The most realistic AI speech software.', url: 'https://elevenlabs.io/', image: 'https://picsum.photos/seed/elevenlabs-convert/600/400', dataAiHint: 'ai speech', pricing: 'Freemium' },
            { name: 'Murf.ai', description: 'Go from text to speech with a versatile AI voice generator.', url: 'https://murf.ai/', image: 'https://picsum.photos/seed/murf-convert/600/400', dataAiHint: 'ai voiceover', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI Speech to Text Converter",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'OpenAI Whisper', description: 'A general-purpose speech recognition model.', url: 'https://openai.com/research/whisper', image: 'https://picsum.photos/seed/whisper-convert/600/400', dataAiHint: 'speech recognition', pricing: 'Free' },
            { name: 'Otter.ai', description: 'Transcribe meetings and conversations.', url: 'https://otter.ai/', image: 'https://picsum.photos/seed/otter-convert/600/400', dataAiHint: 'audio transcription', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI Image to PDF Converter",
        icon: <File className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'iLovePDF JPG to PDF', description: 'Convert JPG images to PDF.', url: 'https://www.ilovepdf.com/jpg_to_pdf', image: 'https://picsum.photos/seed/ilovepdf-img2pdf/600/400', dataAiHint: 'jpg to pdf', pricing: 'Free' },
        ],
    },
    {
        title: "AI PDF to Word Converter",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Smallpdf PDF to Word', description: 'Convert your PDFs to Word files.', url: 'https://smallpdf.com/pdf-to-word', image: 'https://picsum.photos/seed/smallpdf-pdf2word/600/400', dataAiHint: 'pdf to word', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI PDF to Excel Converter",
        icon: <FileSpreadsheet className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'iLovePDF PDF to Excel', description: 'Convert PDF tables to Excel spreadsheets.', url: 'https://www.ilovepdf.com/pdf_to_excel', image: 'https://picsum.photos/seed/ilovepdf-pdf2excel/600/400', dataAiHint: 'pdf to excel', pricing: 'Free' },
        ],
    },
    {
        title: "AI PDF to Image Converter",
        icon: <ImageIcon className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Smallpdf PDF to JPG', description: 'Extract images from a PDF or save each page as a JPG.', url: 'https://smallpdf.com/pdf-to-jpg', image: 'https://picsum.photos/seed/smallpdf-pdf2jpg/600/400', dataAiHint: 'pdf to jpg', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI Word to PDF Converter",
        icon: <File className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Smallpdf Word to PDF', description: 'Convert Microsoft Word files to PDF.', url: 'https://smallpdf.com/word-to-pdf', image: 'https://picsum.photos/seed/smallpdf-word2pdf/600/400', dataAiHint: 'word to pdf', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI Video to Audio Converter",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'CloudConvert MP4 to MP3', description: 'Convert MP4 video files to MP3 audio.', url: 'https://cloudconvert.com/mp4-to-mp3', image: 'https://picsum.photos/seed/cc-mp4tomp3/600/400', dataAiHint: 'mp4 to mp3', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI Audio to Text Converter",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Happy Scribe', description: 'Transcription & Subtitles Services.', url: 'https://www.happyscribe.com/', image: 'https://picsum.photos/seed/happyscribe-convert/600/400', dataAiHint: 'audio transcription', pricing: 'Paid' },
        ],
    },
    {
        title: "AI Audio Format Converter",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Freac', description: 'Free audio converter and CD ripper.', url: 'https://www.freac.org/', image: 'https://picsum.photos/seed/freac/600/400', dataAiHint: 'cd ripper', pricing: 'Free' },
        ],
    },
    {
        title: "AI Video Format Converter",
        icon: <Video className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'FFmpeg', description: 'A complete, cross-platform solution to record, convert and stream audio and video.', url: 'https://ffmpeg.org/', image: 'https://picsum.photos/seed/ffmpeg/600/400', dataAiHint: 'command line video', pricing: 'Free' },
        ],
    },
    {
        title: "AI Subtitle Converter Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Subtitle Edit', description: 'An editor for video subtitles.', url: 'https://www.nikse.dk/subtitleedit', image: 'https://picsum.photos/seed/subtitleedit/600/400', dataAiHint: 'subtitle editor', pricing: 'Free' },
        ],
    },
    {
        title: "AI Code Converter Tools",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Language Translation Converter",
        icon: <Languages className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'DeepL', description: 'The world\'s most accurate translator.', url: 'https://www.deepl.com/translator', image: 'https://picsum.photos/seed/deepl-convert/600/400', dataAiHint: 'accurate translation', pricing: 'Freemium' },
            { name: 'Google Translate', description: 'Instantly translates words, phrases, and web pages.', url: 'https://translate.google.com/', image: 'https://picsum.photos/seed/gtranslate-convert/600/400', dataAiHint: 'language translation', pricing: 'Free' },
        ],
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
        tools: [
            { name: '7-Zip', description: 'A free and open-source file archiver.', url: 'https://www.7-zip.org/', image: 'https://picsum.photos/seed/7zip-compress/600/400', dataAiHint: 'file archiver', pricing: 'Free' },
        ],
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
