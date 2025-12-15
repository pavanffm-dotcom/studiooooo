
'use client';

import React from 'react';
import { 
    Mic, Mic2, Voicemail, Bot, Music, Radio, AudioLines, Ear, BrainCircuit
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

export const voiceAudioToolData: ToolCategory[] = [
    {
        title: "Text-to-Speech & Voice Synthesis",
        icon: <Mic2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ElevenLabs', description: 'The most realistic AI speech software.', url: 'https://elevenlabs.io/', image: 'https://picsum.photos/seed/elevenlabs-audio/600/400', dataAiHint: 'ai speech', pricing: 'Freemium' },
            { name: 'Murf.ai', description: 'Go from text to speech with a versatile AI voice generator.', url: 'https://murf.ai/', image: 'https://picsum.photos/seed/murf-audio/600/400', dataAiHint: 'ai voiceover', pricing: 'Freemium' },
            { name: 'Lovo.ai', description: 'AI voice generator and text-to-speech platform.', url: 'https://lovo.ai/', image: 'https://picsum.photos/seed/lovo-audio/600/400', dataAiHint: 'realistic voices', pricing: 'Freemium' },
            { name: 'Play.ht', description: 'AI-powered text to voice generator.', url: 'https://play.ht/', image: 'https://picsum.photos/seed/playht-audio/600/400', dataAiHint: 'tts audio', pricing: 'Freemium' },
        ]
    },
    {
        title: "Voice Cloning & Changers",
        icon: <Voicemail className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Resemble.ai', description: 'AI voice generator for real-time voice cloning.', url: 'https://www.resemble.ai/', image: 'https://picsum.photos/seed/resemble-audio/600/400', dataAiHint: 'voice cloning', pricing: 'Paid' },
            { name: 'Voicemod', description: 'Real-time AI voice changer and soundboard.', url: 'https://www.voicemod.net/', image: 'https://picsum.photos/seed/voicemod-audio/600/400', dataAiHint: 'voice changer', pricing: 'Freemium' },
            { name: 'Altered Studio', description: 'Professional AI voice performance editor.', url: 'https://www.altered.ai/', image: 'https://picsum.photos/seed/altered-audio/600/400', dataAiHint: 'voice performance', pricing: 'Paid' },
            { name: 'Voice.ai', description: 'Real-time voice changer for PC.', url: 'https://voice.ai/', image: 'https://picsum.photos/seed/voiceai-audio/600/400', dataAiHint: 'pc voice changer', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Music Generation",
        icon: <Music className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Soundraw', description: 'AI music generator for videos.', url: 'https://soundraw.io/', image: 'https://picsum.photos/seed/soundraw-audio/600/400', dataAiHint: 'ai music', pricing: 'Freemium' },
            { name: 'Boomy', description: 'Make instant music with artificial intelligence.', url: 'https://boomy.com/', image: 'https://picsum.photos/seed/boomy-audio/600/400', dataAiHint: 'instant music', pricing: 'Freemium' },
            { name: 'AIVA', description: 'The AI composing emotional soundtrack music.', url: 'https://www.aiva.ai/', image: 'https://picsum.photos/seed/aiva-audio/600/400', dataAiHint: 'soundtrack music', pricing: 'Freemium' },
            { name: 'Mubert', description: 'Royalty-free music for your content.', url: 'https://mubert.com/', image: 'https://picsum.photos/seed/mubert/600/400', dataAiHint: 'royalty-free music', pricing: 'Freemium' },
        ]
    },
    {
        title: "Audio Editing & Enhancement",
        icon: <AudioLines className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Adobe Podcast Enhance', description: 'Remove noise and echo from voice recordings.', url: 'https://podcast.adobe.com/enhance', image: 'https://picsum.photos/seed/adobepodcast-audio/600/400', dataAiHint: 'audio enhance', pricing: 'Free' },
            { name: 'Audo Studio', description: 'One-click audio cleaning and enhancement.', url: 'https://audo.ai/', image: 'https://picsum.photos/seed/audo-audio/600/400', dataAiHint: 'noise removal', pricing: 'Freemium' },
            { name: 'Lalal.ai', description: 'Stem splitter and voice cleaner.', url: 'https://www.lalal.ai/', image: 'https://picsum.photos/seed/lalalai-audio/600/400', dataAiHint: 'vocal remover', pricing: 'Freemium' },
            { name: 'iZotope RX', description: 'The industry standard for audio repair.', url: 'https://www.izotope.com/en/products/rx.html', image: 'https://picsum.photos/seed/izotoperx-audio/600/400', dataAiHint: 'audio repair', pricing: 'Paid' },
        ]
    },
];
