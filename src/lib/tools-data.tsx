

import { 
    Briefcase, DollarSign, UserCog, CreditCard, Users, MessageSquare, Video, Megaphone, BarChart, GitBranch, ListChecks, Lightbulb, Cpu, Code, Filter, TrendingUp, Link2, Server, Layers,
    Paintbrush, Youtube, HelpCircle, Book, Zap, Calendar, Brain, Search, Type, Presentation, Wand2, Mic, File, GraduationCap, Scissors, Film, ImageIcon, Palette, Bot, Mic2, FileText,
    Terminal, Database, CloudCog, Bug, Box, TerminalSquare, PackageCheck, Shield, Smartphone, Gamepad2, TestTube, Gauge,
    LayoutDashboard, BookOpen, Contact, Gem, MonitorPlay, Wallet, Receipt, FileSignature, Folder, Workflow, Clock, Timer, Hourglass, Share, Copy, RotateCw, Cloud, Sparkles, BookCopy, Mail, ShoppingCart, Layout, ImagePlay, Shapes, UserCircle, BrainCircuit, Newspaper, BoxSelect, MousePointerClick, BookCopy as BookCopyIcon, Wallpaper, Car, Store, TowerControl, Truck, SquareParking, PenTool, Feather, Key, Quote, Tv, Building, FileCheck, Scale,
    Settings, Target, ClipboardCheck, Eye, UploadCloud, Globe, Webhook, HardDrive, Component, GanttChartSquare, FunctionSquare, RefreshCw, Laptop, Router, BarChart3
} from 'lucide-react';
import React from 'react';
import { businessToolData } from './business-tools-data';
import { studentToolData } from './student-tools-data';
import { contentCreationToolData } from './content-creation-data';
import { graphicDesignToolData } from './graphic-design-data';
import { codingToolData } from './coding-tools-data';
import { productivityToolData } from './productivity-tools-data';
import { writingToolData } from './writing-tools-data';
import { marketingSeoToolData } from './marketing-seo-tools-data';
import { videoEditingToolData } from './video-editing-tools-data';
import { imageEditingToolData } from './image-editing-tools-data';
import { voiceAudioToolData } from './voice-audio-tools-data';
import { chatbotAssistantToolData } from './chatbot-assistant-tools-data';
import { socialMediaToolData } from './social-media-tools-data';
import { dataAnalyticsToolData } from './data-analytics-tools-data';
import { eCommerceToolData } from './ecommerce-tools-data';
import { freelancerToolData } from './freelancer-tools-data';
import { startupToolData } from './startup-tools-data';
import { invoiceBillingToolData } from './invoice-billing-tools-data';
import { financeAccountingToolData } from './finance-accounting-tools-data';
import { pdfFileToolData } from './pdf-file-tools-data';
import { converterToolData } from './converter-tools-data';
import { securityPrivacyToolData } from './security-privacy-tools-data';


// Helper to get the correct icon for packaging since it's not in lucide-react by default
const Package = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
);

const FileHeart = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
        <path d="M12 18l-3-3a3 3 0 1 1 4.24-4.24l.76.76.76-.76A3 3 0 1 1 15 15l-3 3z"></path>
    </svg>
);


export type Tool = {
    name: string;
    description?: string;
    url: string;
    image: string;
    dataAiHint: string;
    icon?: string; 
    pricing?: 'Free' | 'Paid' | 'Freemium';
    isTrending?: boolean;
    category?: string;
};

export type QuickToolCategory = {
  name: string;
  image: string;
  dataAiHint: string;
  url: string;
  translationKey: string;
};

export type ToolCategory = {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
};


export const popularTools: Tool[] = [
  { name: 'Runway', icon: 'Video', url: 'https://runwayml.com/', image: 'https://picsum.photos/seed/runway-pop/300/200', category: 'Video', dataAiHint: 'abstract animation' },
  { name: 'Pika', icon: 'Clapperboard', url: 'https://pika.art/', image: 'https://picsum.photos/seed/pika-pop/300/200', category: 'Video', dataAiHint: 'cinematic video' },
  { name: 'ElevenLabs', icon: 'Mic', url: 'https://elevenlabs.io/', image: 'https://picsum.photos/seed/elevenlabs-pop/300/200', category: 'Audio', dataAiHint: 'sound waves' },
  { name: 'Lensa AI', icon: 'UserSquare', url: 'https://prisma-ai.com/lensa', image: 'https://picsum.photos/seed/lensa-pop/300/200', category: 'Image', dataAiHint: 'ai avatar' },
  { name: 'Midjourney', icon: 'ImageIcon', url: 'https://www.midjourney.com/', image: 'https://picsum.photos/seed/midjourney-pop/300/200', category: 'Image', dataAiHint: 'generative art' },
];

export const libraries = [
  { name: 'Image Library', gradient: 'from-pink-300 to-rose-300', icon: 'ImageIcon' },
  { name: 'Video Library', gradient: 'from-sky-300 to-blue-300', icon: 'Clapperboard' },
  { name: 'Audio Library', gradient: 'from-teal-200 to-emerald-300', icon: 'Mic' },
];

export const quickToolCategories: QuickToolCategory[] = [
    { name: 'Students Tools', image: 'https://picsum.photos/seed/students/600/400', dataAiHint: 'students studying', url: '/student-tools', translationKey: 'StudentsTools' },
    { name: 'Business Tools', image: 'https://picsum.photos/seed/business/600/400', dataAiHint: 'business meeting', url: '/business-tools', translationKey: 'BusinessTools' },
    { name: 'Content Creation Tools', image: 'https://picsum.photos/seed/content/600/400', dataAiHint: 'creator studio', url: '/content-creation', translationKey: 'ContentCreationTools' },
    { name: 'Graphic Design Tools', image: 'https://picsum.photos/seed/graphic-design/600/400', dataAiHint: 'design tablet', url: '/business-tools/graphic-design', translationKey: 'GraphicDesignTools' },
    { name: 'Coding & Developer Tools', image: 'https://picsum.photos/seed/coding/600/400', dataAiHint: 'coding screen', url: '/coding-tools', translationKey: 'CodingDeveloperTools' },
    { name: 'Productivity Tools', image: 'https://picsum.photos/seed/productivity/600/400', dataAiHint: 'focused work', url: '/productivity-tools', translationKey: 'ProductivityTools' },
    { name: 'Writing Tools', image: 'https://picsum.photos/seed/writing/600/400', dataAiHint: 'writing hand', url: '/writing-tools', translationKey: 'WritingTools' },
    { name: 'Marketing & SEO Tools', image: 'https://picsum.photos/seed/marketing/600/400', dataAiHint: 'seo chart', url: '/marketing-seo-tools', translationKey: 'MarketingSEOTools' },
    { name: 'Video Editing Tools', image: 'https://picsum.photos/seed/video-editing/600/400', dataAiHint: 'video editing', url: '/video-editing-tools', translationKey: 'VideoEditingTools' },
    { name: 'Image Editing Tools', image: 'https://picsum.photos/seed/image-editing/600/400', dataAiHint: 'image editing', url: '/image-editing-tools', translationKey: 'ImageEditingTools' },
    { name: 'Voice & Audio Tools', image: 'https://picsum.photos/seed/voice-audio/600/400', dataAiHint: 'audio waves', url: '/voice-audio-tools', translationKey: 'VoiceAudioTools' },
    { name: 'Chatbot & Assistant Tools', image: 'https://picsum.photos/seed/chatbot-assistant/600/400', dataAiHint: 'robot assistant', url: '/chatbot-assistant-tools', translationKey: 'ChatbotAssistantTools' },
    { name: 'Social Media Tools', image: 'https://picsum.photos/seed/social-media/600/400', dataAiHint: 'social network', url: '/social-media-tools', translationKey: 'SocialMediaTools' },
    { name: 'Data Analytics Tools', image: 'https://picsum.photos/seed/data-analytics/600/400', dataAiHint: 'data chart', url: '/data-analytics-tools', translationKey: 'DataAnalyticsTools' },
    { name: 'E-Commerce Tools', image: 'https://picsum.photos/seed/ecommerce-tools/600/400', dataAiHint: 'shopping cart', url: '/ecommerce-tools', translationKey: 'ECommerceTools' },
    { name: 'Freelancer Tools', image: 'https://picsum.photos/seed/freelancer-tools/600/400', dataAiHint: 'laptop work', url: '/freelancer-tools', translationKey: 'FreelancerTools' },
    { name: 'Startup Tools', image: 'https://picsum.photos/seed/startup-tools/600/400', dataAiHint: 'rocket launch', url: '/startup-tools', translationKey: 'StartupTools' },
    { name: 'Invoice & Billing Tools', image: 'https://picsum.photos/seed/invoice-billing/600/400', dataAiHint: 'invoice document', url: '/invoice-billing-tools', translationKey: 'InvoiceBillingTools' },
    { name: 'Finance & Accounting Tools', image: 'https://picsum.photos/seed/finance-accounting/600/400', dataAiHint: 'calculator money', url: '/finance-accounting-tools', translationKey: 'FinanceAccountingTools' },
    { name: 'PDF & File Tools', image: 'https://picsum.photos/seed/pdf-file/600/400', dataAiHint: 'document files', url: '/pdf-file-tools', translationKey: 'PdfFileTools' },
    { name: 'Converter Tools', image: 'https://picsum.photos/seed/converter-tools/600/400', dataAiHint: 'conversion arrows', url: '/converter-tools', translationKey: 'ConverterTools' },
    { name: 'Security & Privacy Tools', image: 'https://picsum.photos/seed/security-privacy/600/400', dataAiHint: 'security lock', url: '/security-privacy-tools', translationKey: 'SecurityPrivacyTools' },
    { name: 'Website Builder Tools', image: 'https://picsum.photos/seed/website-builder/600/400', dataAiHint: 'website code', url: '/website-builder-tools', translationKey: 'WebsiteBuilderTools' },
    { name: 'Research & Knowledge Tools', image: 'https://picsum.photos/seed/research-knowledge/600/400', dataAiHint: 'books library', url: '/research-knowledge-tools', translationKey: 'ResearchKnowledgeTools' },
    { name: 'Education & Learning Tools', image: 'https://picsum.photos/seed/education-learning/600/400', dataAiHint: 'graduation cap', url: '/education-learning-tools', translationKey: 'EducationLearningTools' },
    { name: 'Testing & QA Tools', image: 'https://picsum.photos/seed/testing-qa/600/400', dataAiHint: 'test tube', url: '/testing-qa-tools', translationKey: 'TestingQaTools' },
    { name: 'Advertising Tools', image: 'https://picsum.photos/seed/advertising-tools/600/400', dataAiHint: 'megaphone ad', url: '/advertising-tools', translationKey: 'AdvertisingTools' },
    { name: 'Email Tools', image: 'https://picsum.photos/seed/email-tools/600/400', dataAiHint: 'email envelope', url: '/email-tools', translationKey: 'EmailTools' },
    { name: 'Time Tracking Tools', image: 'https://picsum.photos/seed/time-tracking/600/400', dataAiHint: 'stopwatch clock', url: '/time-tracking-tools', translationKey: 'TimeTrackingTools' },
    { name: 'Project Management Tools', image: 'https://picsum.photos/seed/project-management/600/400', dataAiHint: 'gantt chart', url: '/project-management-tools', translationKey: 'ProjectManagementTools' },
    { name: 'HR & Recruitment Tools', image: 'https://picsum.photos/seed/hr-recruitment/600/400', dataAiHint: 'human resources', url: '/hr-recruitment-tools', translationKey: 'HrRecruitmentTools' },
    { name: 'Customer Support Tools', image: 'https://picsum.photos/seed/customer-support/600/400', dataAiHint: 'headset support', url: '/customer-support-tools', translationKey: 'CustomerSupportTools' },
    { name: 'Screen Recording Tools', image: 'https://picsum.photos/seed/screen-recording/600/400', dataAiHint: 'record screen', url: '/screen-recording-tools', translationKey: 'ScreenRecordingTools' },
    { name: 'Database & Backend Tools', image: 'https://picsum.photos/seed/database-backend/600/400', dataAiHint: 'database server', url: '/database-backend-tools', translationKey: 'DatabaseBackendTools' },
    { name: 'Automation & Workflow Tools', image: 'https://picsum.photos/seed/automation-workflow/600/400', dataAiHint: 'automation gears', url: '/automation-workflow-tools', translationKey: 'AutomationWorkflowTools' },
];

export const imageToVideoTools: Tool[] = [];
export const textToVideoTools: Tool[] = [];
export const textToSpeechTools: Tool[] = [];
export const voiceCloningTools: Tool[] = [];
export const aiAvatarTools: Tool[] = [];
export const textToImageTools: Tool[] = [];


const allData = [
    ...popularTools,
    ...imageToVideoTools,
    ...textToVideoTools,
    ...textToSpeechTools,
    ...voiceCloningTools,
    ...aiAvatarTools,
    ...textToImageTools,
    ...businessToolData.flatMap(cat => cat.tools),
    ...graphicDesignToolData.flatMap(cat => cat.tools),
    ...marketingSeoToolData.flatMap(cat => cat.tools),
    ...productivityToolData.flatMap(cat => cat.tools),
    ...writingToolData.flatMap(cat => cat.tools),
    ...codingToolData.flatMap(cat => cat.tools),
    ...contentCreationToolData.flatMap(cat => cat.tools),
    ...studentToolData.flatMap(cat => cat.tools),
    ...videoEditingToolData.flatMap(cat => cat.tools),
    ...imageEditingToolData.flatMap(cat => cat.tools),
    ...voiceAudioToolData.flatMap(cat => cat.tools),
    ...chatbotAssistantToolData.flatMap(cat => cat.tools),
    ...socialMediaToolData.flatMap(cat => cat.tools),
    ...dataAnalyticsToolData.flatMap(cat => cat.tools),
    ...eCommerceToolData.flatMap(cat => cat.tools),
    ...freelancerToolData.flatMap(cat => cat.tools),
    ...startupToolData.flatMap(cat => cat.tools),
    ...invoiceBillingToolData.flatMap(cat => cat.tools),
    ...financeAccountingToolData.flatMap(cat => cat.tools),
    ...pdfFileToolData.flatMap(cat => cat.tools),
    ...converterToolData.flatMap(cat => cat.tools),
    ...securityPrivacyToolData.flatMap(cat => cat.tools),
];

export const allTools: Tool[] = Array.from(new Set(allData.map(t => t.name))).map(name => {
    return allData.find(t => t.name === name)!
});

export const toolCategories = [
    { name: 'All', icon: 'LayoutGrid', color: 'bg-primary text-primary-foreground' },
    { name: 'Img2vid', icon: 'ImageIcon', gradient: 'bg-gradient-to-br from-pink-400 to-rose-400' },
    { name: 'Txt2vid', icon: 'Video', gradient: 'bg-gradient-to-br from-sky-400 to-blue-400' },
    { name: 'Text to Speech', icon: 'Text', gradient: 'bg-gradient-to-br from-teal-400 to-emerald-400' },
    { name: 'Text to Image', icon: 'ImageDown', gradient: 'bg-gradient-to-br from-orange-400 to-amber-400' },
    { name: 'Voice Cloning', icon: 'Voicemail', gradient: 'bg-gradient-to-br from-purple-400 to-indigo-400' },
    { name: 'AI Avatar', icon: 'UserSquare', gradient: 'bg-gradient-to-br from-yellow-400 to-amber-400' },
];
