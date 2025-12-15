
'use client';

import React from 'react';
import { 
    Image, Sparkles, Wand2, Trash2, Crop
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

export const imageEditingToolData: ToolCategory[] = [
    {
        title: "Professional Photo Editors",
        icon: <Image className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Adobe Photoshop', description: 'The industry standard for image editing and compositing.', url: 'https://www.adobe.com/products/photoshop.html', image: 'https://picsum.photos/seed/photoshop-img/600/400', dataAiHint: 'pro editor', pricing: 'Paid' },
            { name: 'Affinity Photo', description: 'Professional image editing software for desktop and iPad.', url: 'https://affinity.serif.com/en-us/photo/', image: 'https://picsum.photos/seed/affinity-img/600/400', dataAiHint: 'photo software', pricing: 'Paid' },
            { name: 'GIMP', description: 'A free & open-source image editor.', url: 'https://www.gimp.org/', image: 'https://picsum.photos/seed/gimp-img/600/400', dataAiHint: 'free editor', pricing: 'Free' },
            { name: 'Pixelmator Pro', description: 'An incredibly powerful, beautiful, and easy to use image editor for Mac.', url: 'https://www.pixelmator.com/pro/', image: 'https://picsum.photos/seed/pixelmator-img/600/400', dataAiHint: 'mac editor', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Image Enhancers",
        icon: <Sparkles className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Topaz Photo AI', description: 'Maximize image quality on autopilot.', url: 'https://www.topazlabs.com/topaz-photo-ai', image: 'https://picsum.photos/seed/topaz-img/600/400', dataAiHint: 'image quality', pricing: 'Paid' },
            { name: 'Luminar Neo', description: 'AI-powered photo editor.', url: 'https://skylum.com/luminar', image: 'https://picsum.photos/seed/luminar-img/600/400', dataAiHint: 'ai photo', pricing: 'Paid' },
            { name: 'Remini', description: 'AI photo and video enhancer.', url: 'https://remini.ai/', image: 'https://picsum.photos/seed/remini-img/600/400', dataAiHint: 'photo enhancer', pricing: 'Freemium' },
            { name: 'Let\'s Enhance', description: 'AI image enlarger & upscaler.', url: 'https://letsenhance.io/', image: 'https://picsum.photos/seed/letsenhance-img/600/400', dataAiHint: 'image upscaler', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Magic & Retouching Tools",
        icon: <Wand2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Adobe Firefly', description: 'Generative AI for creative expression, including Generative Fill.', url: 'https://firefly.adobe.com/', image: 'https://picsum.photos/seed/firefly-img/600/400', dataAiHint: 'generative fill', pricing: 'Freemium' },
            { name: 'Magic Eraser', description: 'Remove unwanted things from images in seconds.', url: 'https://www.magiceraser.io/', image: 'https://picsum.photos/seed/magiceraser-img/600/400', dataAiHint: 'object removal', pricing: 'Freemium' },
            { name: 'PhotoRoom', description: 'Create product pictures, remove backgrounds.', url: 'https://www.photoroom.com/', image: 'https://picsum.photos/seed/photoroom-img/600/400', dataAiHint: 'product photos', pricing: 'Freemium' },
            { name: 'FaceApp', description: 'AI face editor.', url: 'https://www.faceapp.com/', image: 'https://picsum.photos/seed/faceapp-img/600/400', dataAiHint: 'face editor', pricing: 'Freemium' },
        ]
    },
    {
        title: "Background Removers",
        icon: <Trash2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Remove.bg', description: 'Remove image backgrounds automatically.', url: 'https://www.remove.bg/', image: 'https://picsum.photos/seed/removebg-img/600/400', dataAiHint: 'auto remove', pricing: 'Freemium' },
            { name: 'Slazzer', description: 'Instantly remove background from image.', url: 'https://www.slazzer.com/', image: 'https://picsum.photos/seed/slazzer-img/600/400', dataAiHint: 'background remover', pricing: 'Freemium' },
            { name: 'Cutout.Pro', description: 'AI photo and video editing, including background removal.', url: 'https://www.cutout.pro/', image: 'https://picsum.photos/seed/cutoutpro-img/600/400', dataAiHint: 'video editing', pricing: 'Freemium' },
            { name: 'PhotoRoom', description: 'Create product pictures, remove backgrounds.', url: 'https://www.photoroom.com/', image: 'https://picsum.photos/seed/photoroom-bg/600/400', dataAiHint: 'product photos bg', pricing: 'Freemium' },
        ]
    },
    {
        title: "Online & Simple Editors",
        icon: <Crop className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Canva', description: 'Design anything. Publish anywhere.', url: 'https://www.canva.com/', image: 'https://picsum.photos/seed/canva-img/600/400', dataAiHint: 'design platform', pricing: 'Freemium' },
            { name: 'Fotor', description: 'Online photo editor for everyone.', url: 'https://www.fotor.com/', image: 'https://picsum.photos/seed/fotor-img/600/400', dataAiHint: 'photo editor', pricing: 'Freemium' },
            { name: 'Pixlr', description: 'Free online photo editor.', url: 'https://pixlr.com/', image: 'https://picsum.photos/seed/pixlr-img/600/400', dataAiHint: 'free online editor', pricing: 'Freemium' },
            { name: 'Befunky', description: 'All-in-one online Creative Platform.', url: 'https://www.befunky.com/', image: 'https://picsum.photos/seed/befunky-img/600/400', dataAiHint: 'creative platform', pricing: 'Freemium' },
        ]
    }
];
