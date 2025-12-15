
'use client';

import React from 'react';
import { 
    Scissors, Bot, Video, Film, Smartphone, Cloud, PenTool, Type, Text, Sparkles, Wand2, Crop, ZoomIn, Palette, GitBranch, Share, Trash2, User, Clapperboard, BarChart, Mic, Mic2, Globe
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
        title: "AI Auto Video Editor",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Wisecut', description: 'AI-powered video editor that automatically removes pauses.', url: 'https://www.wisecut.video/', image: 'https://picsum.photos/seed/wisecut-auto/600/400', dataAiHint: 'auto editor', pricing: 'Freemium' },
            { name: 'Gling', description: 'AI that cuts silences and bad takes for you.', url: 'https://gling.ai/', image: 'https://picsum.photos/seed/gling-auto/600/400', dataAiHint: 'youtube editor', pricing: 'Freemium' },
            { name: 'Timebolt', description: 'Automatically cut silences in videos.', url: 'https://www.timebolt.io/', image: 'https://picsum.photos/seed/timebolt-auto/600/400', dataAiHint: 'silence cutter', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Text-Based Video Editing",
        icon: <Type className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Descript', description: 'Edit video by editing text.', url: 'https://www.descript.com/', image: 'https://picsum.photos/seed/descript-text/600/400', dataAiHint: 'text based editing', pricing: 'Freemium' },
            { name: 'Veed.io', description: 'Online video editor with automatic transcription.', url: 'https://www.veed.io/', image: 'https://picsum.photos/seed/veed-text/600/400', dataAiHint: 'video transcription', pricing: 'Freemium' },
            { name: 'Type Studio', description: 'Text-based video editor.', url: 'https://www.typestudio.co/', image: 'https://picsum.photos/seed/typestudio-text/600/400', dataAiHint: 'video transcript', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Smart Cut & Trim Tools",
        icon: <Scissors className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Opus Clip', description: 'Turn long videos into viral shorts with AI.', url: 'https://www.opus.pro/', image: 'https://picsum.photos/seed/opus-trim/600/400', dataAiHint: 'short clips', pricing: 'Freemium' },
            { name: 'Kamua', description: 'Automated video editing for creators.', url: 'https://kamua.com/', image: 'https://picsum.photos/seed/kamua-trim/600/400', dataAiHint: 'creator tool', pricing: 'Paid' },
            { name: 'Jumpshot', description: 'Automated video editing with smart trimming.', url: 'https://jumpshot.ai/', image: 'https://picsum.photos/seed/jumpshot/600/400', dataAiHint: 'smart trim', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Scene Detection Tools",
        icon: <Film className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'DaVinci Resolve', description: 'Scene Cut Detection feature.', url: 'https://www.blackmagicdesign.com/products/davinciresolve', image: 'https://picsum.photos/seed/davinci-scene/600/400', dataAiHint: 'scene detection', pricing: 'Freemium' },
            { name: 'Adobe Premiere Pro', description: 'Scene Edit Detection for automatic cuts.', url: 'https://www.adobe.com/products/premiere.html', image: 'https://picsum.photos/seed/premiere-scene/600/400', dataAiHint: 'edit detection', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Highlight Generator",
        icon: <Sparkles className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Vidyo.ai', description: 'Make short videos from long ones instantly.', url: 'https://vidyo.ai/', image: 'https://picsum.photos/seed/vidyo-highlight/600/400', dataAiHint: 'repurpose content', pricing: 'Freemium' },
            { name: 'Eklipse', description: 'AI Clip Generator for Gaming Streamers.', url: 'https://eklipse.gg/', image: 'https://picsum.photos/seed/eklipse/600/400', dataAiHint: 'gaming clips', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Shorts / Reels / TikTok Maker",
        icon: <Smartphone className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Opus Clip', description: 'Turn long videos into viral shorts.', url: 'https://www.opus.pro/', image: 'https://picsum.photos/seed/opus-shorts/600/400', dataAiHint: 'viral shorts', pricing: 'Freemium' },
            { name: 'Vidyo.ai', description: 'Create social media clips from long videos.', url: 'https://vidyo.ai/', image: 'https://picsum.photos/seed/vidyo-shorts/600/400', dataAiHint: 'social clips', pricing: 'Freemium' },
            { name: 'ClipMaker.ai', description: 'AI tool to find the best moments in your videos.', url: 'https://clipmaker.ai/', image: 'https://picsum.photos/seed/clipmaker-shorts/600/400', dataAiHint: 'video moments', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Social Media Resize & Format",
        icon: <Crop className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Kapwing', description: 'Resize videos for any social media platform.', url: 'https://www.kapwing.com/tools/resize-video', image: 'https://picsum.photos/seed/kapwing-resize/600/400', dataAiHint: 'video resize', pricing: 'Freemium' },
            { name: 'Veed.io', description: 'Online video editor with preset canvas sizes.', url: 'https://www.veed.io/', image: 'https://picsum.photos/seed/veed-resize/600/400', dataAiHint: 'canvas sizes', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Viral Clip Generator",
        icon: <GitBranch className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Opus Clip', description: 'Generates viral clips from long videos.', url: 'https://www.opus.pro/', image: 'https://picsum.photos/seed/opus-viral/600/400', dataAiHint: 'viral generator', pricing: 'Freemium' },
             { name: 'Klap', description: 'Get ready-to-publish short videos from your long content.', url: 'https://klap.app/', image: 'https://picsum.photos/seed/klap/600/400', dataAiHint: 'short video', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Meme Video Generator",
        icon: <Clapperboard className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Kapwing', description: 'Online meme generator for images, GIFs, and videos.', url: 'https://www.kapwing.com/meme-maker', image: 'https://picsum.photos/seed/kapwing-meme/600/400', dataAiHint: 'meme maker', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Auto Caption Generator",
        icon: <Type className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Veed.io', description: 'Automatically add captions to your videos.', url: 'https://www.veed.io/tools/auto-subtitle-generator-sutitles', image: 'https://picsum.photos/seed/veed-caption/600/400', dataAiHint: 'auto caption', pricing: 'Freemium' },
            { name: 'CapCut', description: 'Auto-captions feature in the mobile and desktop app.', url: 'https://www.capcut.com/', image: 'https://picsum.photos/seed/capcut-caption/600/400', dataAiHint: 'mobile captions', pricing: 'Free' },
        ]
    },
    {
        title: "AI Auto Subtitle Generator",
        icon: <Text className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Descript', description: 'Automatic and human-powered transcription.', url: 'https://www.descript.com/transcription', image: 'https://picsum.photos/seed/descript-subtitle/600/400', dataAiHint: 'auto subtitle', pricing: 'Freemium' },
             { name: 'Happy Scribe', description: 'Transcription & Subtitles Services.', url: 'https://www.happyscribe.com/', image: 'https://picsum.photos/seed/happyscribe-sub/600/400', dataAiHint: 'transcription service', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Speech-to-Text Video Tools",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Descript', description: 'Transcribe audio and video to text.', url: 'https://www.descript.com/', image: 'https://picsum.photos/seed/descript-stt/600/400', dataAiHint: 'speech to text', pricing: 'Freemium' },
            { name: 'Otter.ai', description: 'Transcribe meetings and conversations.', url: 'https://otter.ai/', image: 'https://picsum.photos/seed/otter-stt/600/400', dataAiHint: 'audio transcription', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Text-to-Speech Video Tools",
        icon: <Mic2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Murf.ai', description: 'Go from text to speech with a versatile AI voice generator.', url: 'https://murf.ai/', image: 'https://picsum.photos/seed/murf-tts-vid/600/400', dataAiHint: 'ai voiceover', pricing: 'Freemium' },
            { name: 'Play.ht', description: 'AI-powered text to voice generator.', url: 'https://play.ht/', image: 'https://picsum.photos/seed/playht-tts-vid/600/400', dataAiHint: 'tts audio', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Voice Cloning for Video",
        icon: <Share className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ElevenLabs', description: 'Create a digital copy of your own voice.', url: 'https://elevenlabs.io/voice-cloning', image: 'https://picsum.photos/seed/elevenlabs-clone/600/400', dataAiHint: 'voice cloning', pricing: 'Paid' },
            { name: 'Respeecher', description: 'Voice cloning for content creators.', url: 'https://www.respeecher.com/', image: 'https://picsum.photos/seed/respeecher-clone/600/400', dataAiHint: 'speech to speech', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Video Translation & Dubbing",
        icon: <Globe className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Dubverse', description: 'AI-powered video dubbing.', url: 'https://dubverse.ai/', image: 'https://picsum.photos/seed/dubverse-dub/600/400', dataAiHint: 'video dubbing', pricing: 'Freemium' },
            { name: 'Papercup', description: 'AI dubbing and video translation.', url: 'https://www.papercup.com/', image: 'https://picsum.photos/seed/papercup-dub/600/400', dataAiHint: 'ai dubbing', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Video Upscaler & Enhancer",
        icon: <ZoomIn className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Topaz Video AI', description: 'Video enhancement and upscaling.', url: 'https://www.topazlabs.com/topaz-video-ai', image: 'https://picsum.photos/seed/topaz-upscale/600/400', dataAiHint: 'video enhance', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Noise Reduction & Stabilization",
        icon: <Wand2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Adobe Podcast Enhance', description: 'Remove noise and echo from voice recordings.', url: 'https://podcast.adobe.com/enhance', image: 'https://picsum.photos/seed/adobepodcast-noise/600/400', dataAiHint: 'audio enhance', pricing: 'Free' },
        ]
    },
    {
        title: "AI Color Grading & Correction",
        icon: <Palette className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'DaVinci Resolve', description: 'Industry-leading color correction tools.', url: 'https://www.blackmagicdesign.com/products/davinciresolve', image: 'https://picsum.photos/seed/davinci-color/600/400', dataAiHint: 'color grading', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Slow Motion & Frame Interpolation",
        icon: <Film className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Topaz Video AI', description: 'Frame interpolation for slow motion effects.', url: 'https://www.topazlabs.com/topaz-video-ai', image: 'https://picsum.photos/seed/topaz-slomo/600/400', dataAiHint: 'slow motion', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Face Enhancement Tools",
        icon: <Sparkles className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Topaz Video AI', description: 'AI models for face recovery in videos.', url: 'https://www.topazlabs.com/topaz-video-ai', image: 'https://picsum.photos/seed/topaz-face/600/400', dataAiHint: 'face recovery', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Background Removal / Replacement",
        icon: <Trash2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Runway', description: 'Green Screen tool for video background removal.', url: 'https://runwayml.com/', image: 'https://picsum.photos/seed/runway-bg/600/400', dataAiHint: 'background removal', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Green Screen (Without Green Screen)",
        icon: <Video className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Runway', description: 'AI rotoscoping for easy background removal.', url: 'https://runwayml.com/', image: 'https://picsum.photos/seed/runway-green/600/400', dataAiHint: 'rotoscoping', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Object Removal from Video",
        icon: <Wand2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Runway', description: 'Inpainting feature to remove objects from videos.', url: 'https://runwayml.com/', image: 'https://picsum.photos/seed/runway-inpaint/600/400', dataAiHint: 'video inpainting', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Face Swap Video Tools",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Reface', description: 'Face swap videos and GIFs.', url: 'https://reface.ai/', image: 'https://picsum.photos/seed/reface-vid/600/400', dataAiHint: 'video face swap', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Avatar / Talking Head Generator",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Synthesia', description: 'Create AI videos with AI avatars and voiceovers.', url: 'https://www.synthesia.io/', image: 'https://picsum.photos/seed/synthesia-avatar/600/400', dataAiHint: 'ai presenter', pricing: 'Paid' },
            { name: 'HeyGen AI', description: 'AI video generator with talking avatars.', url: 'https://www.heygen.com/', image: 'https://picsum.photos/seed/heygen-avatar/600/400', dataAiHint: 'talking avatar', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Text-to-Video Generator",
        icon: <Type className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Runway Gen-2', description: 'Generate video from text, images, or video clips.', url: 'https://runwayml.com/', image: 'https://picsum.photos/seed/runway-t2v/600/400', dataAiHint: 'ai video', pricing: 'Freemium' },
            { name: 'Pika Labs', description: 'AI video generator for creative ideas.', url: 'https://pika.art/', image: 'https://picsum.photos/seed/pikalabs-t2v/600/400', dataAiHint: 'creative video', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Image-to-Video Generator",
        icon: <Film className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Pika Labs', description: 'Animate your images to create videos.', url: 'https://pika.art/', image: 'https://picsum.photos/seed/pika-i2v/600/400', dataAiHint: 'image animation', pricing: 'Freemium' },
            { name: 'Runway Motion Brush', description: 'Add controlled motion to still images.', url: 'https://runwayml.com/motion-brush/', image: 'https://picsum.photos/seed/runway-i2v/600/400', dataAiHint: 'motion brush', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Stock Footage Video Creator",
        icon: <Video className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'InVideo', description: 'Access to millions of stock footage clips.', url: 'https://invideo.io/', image: 'https://picsum.photos/seed/invideo-stock/600/400', dataAiHint: 'stock footage', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Video Template Generator",
        icon: <Clapperboard className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'InVideo', description: 'Thousands of pre-made templates.', url: 'https://invideo.io/', image: 'https://picsum.photos/seed/invideo-template/600/400', dataAiHint: 'video templates', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Video Analytics & Optimization",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'vidIQ', description: 'Helps YouTube creators grow their channels.', url: 'https://vidiq.com/', image: 'https://picsum.photos/seed/vidiq-analytics/600/400', dataAiHint: 'youtube seo', pricing: 'Freemium' },
            { name: 'TubeBuddy', description: 'The best friend of every YouTube creator.', url: 'https://www.tubebuddy.com/', image: 'https://picsum.photos/seed/tubebuddy-analytics/600/400', dataAiHint: 'youtube tool', pricing: 'Freemium' },
        ]
    }
];
