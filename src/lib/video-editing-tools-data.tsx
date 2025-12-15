
'use client';

import React from 'react';
import { 
    Scissors, Bot, Video, Film, Smartphone, Cloud, PenTool
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

export const videoEditingToolData: ToolCategory[] = [
    {
        title: "Professional Editors",
        icon: <Scissors className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Adobe Premiere Pro', description: 'Industry-standard professional video editing.', url: 'https://www.adobe.com/products/premiere.html', image: 'https://picsum.photos/seed/premierepro-vid/600/400', dataAiHint: 'pro editing', pricing: 'Paid' },
            { name: 'DaVinci Resolve', description: 'All-in-one solution for editing, color, VFX, and audio.', url: 'https://www.blackmagicdesign.com/products/davinciresolve', image: 'https://picsum.photos/seed/davinci-vid/600/400', dataAiHint: 'color grading', pricing: 'Freemium' },
            { name: 'Final Cut Pro', description: 'Professional video editing for Apple devices.', url: 'https://www.apple.com/final-cut-pro/', image: 'https://picsum.photos/seed/finalcut-vid/600/400', dataAiHint: 'apple editing', pricing: 'Paid' },
            { name: 'Avid Media Composer', description: 'The industry’s most trusted video editing software.', url: 'https://www.avid.com/media-composer', image: 'https://picsum.photos/seed/avid-vid/600/400', dataAiHint: 'film editing', pricing: 'Paid' },
        ]
    },
    {
        title: "AI-Powered Tools",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Descript', description: 'Edit video by editing text.', url: 'https://www.descript.com/', image: 'https://picsum.photos/seed/descript-vid/600/400', dataAiHint: 'text-based editing', pricing: 'Freemium' },
            { name: 'Runway', description: 'AI Magic Tools for video makers.', url: 'https://runwayml.com/', image: 'https://picsum.photos/seed/runway-vid/600/400', dataAiHint: 'ai magic', pricing: 'Freemium' },
            { name: 'Wisecut', description: 'AI-powered video editor that automatically removes pauses.', url: 'https://www.wisecut.video/', image: 'https://picsum.photos/seed/wisecut-vid/600/400', dataAiHint: 'auto editor', pricing: 'Freemium' },
            { name: 'Opus Clip', description: 'Turn long videos into viral shorts.', url: 'https://www.opus.pro/', image: 'https://picsum.photos/seed/opusclip-vid/600/400', dataAiHint: 'short clips', pricing: 'Freemium' },
        ]
    },
    {
        title: "Online Video Editors",
        icon: <Cloud className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Veed.io', description: 'Online video editor with AI features.', url: 'https://www.veed.io/', image: 'https://picsum.photos/seed/veed-vid/600/400', dataAiHint: 'online editor', pricing: 'Freemium' },
            { name: 'Kapwing', description: 'Collaborative online video editor.', url: 'https://www.kapwing.com/', image: 'https://picsum.photos/seed/kapwing-vid/600/400', dataAiHint: 'team editor', pricing: 'Freemium' },
            { name: 'Clipchamp', description: 'Microsoft\'s free video editor.', url: 'https://clipchamp.com/', image: 'https://picsum.photos/seed/clipchamp-vid/600/400', dataAiHint: 'free editor', pricing: 'Free' },
            { name: 'InVideo', description: 'Online video editor and maker.', url: 'https://invideo.io/', image: 'https://picsum.photos/seed/invideo-vid/600/400', dataAiHint: 'video templates', pricing: 'Freemium' },
        ]
    },
    {
        title: "Mobile Video Editors",
        icon: <Smartphone className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'CapCut', description: 'Free all-in-one video editor for everyone.', url: 'https://www.capcut.com/', image: 'https://picsum.photos/seed/capcut-vid/600/400', dataAiHint: 'mobile editing', pricing: 'Free' },
            { name: 'LumaFusion', description: 'Professional video editing for mobile.', url: 'https://luma-touch.com/lumafusion-for-ios/', image: 'https://picsum.photos/seed/lumafusion-vid/600/400', dataAiHint: 'ios editing', pricing: 'Paid' },
            { name: 'InShot', description: 'Powerful all-in-one Video Editor and Video Maker.', url: 'https://inshot.com/', image: 'https://picsum.photos/seed/inshot-vid/600/400', dataAiHint: 'video maker', pricing: 'Freemium' },
            { name: 'VN Video Editor', description: 'Free and professional video editor.', url: 'https://www.vlognow.me/', image: 'https://picsum.photos/seed/vn-vid/600/400', dataAiHint: 'vlog editor', pricing: 'Free' },
        ]
    }
];
