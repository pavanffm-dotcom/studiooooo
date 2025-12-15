
'use client';

import React from 'react';
import { 
    Image as ImageIcon, Sparkles, Wand2, Trash2, Crop, User, Sun, Camera, Palette, Filter,
    Type, Edit, GitBranch, Key, Square, Bot, Package, Users, Tv, ZoomIn, Smile, FileImage, 
    Text, ScanText, Settings
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
        title: "AI Photo Editor",
        icon: <ImageIcon className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Adobe Photoshop', description: 'Industry standard with AI features.', url: 'https://www.adobe.com/products/photoshop.html', image: 'https://picsum.photos/seed/photoshop-ai/600/400', dataAiHint: 'ai editor', pricing: 'Paid' },
            { name: 'Luminar Neo', description: 'AI-powered photo editor for stunning results.', url: 'https://skylum.com/luminar', image: 'https://picsum.photos/seed/luminar-ai/600/400', dataAiHint: 'photo ai', pricing: 'Paid' },
            { name: 'Fotor', description: 'All-in-one online photo editor with AI.', url: 'https://www.fotor.com/', image: 'https://picsum.photos/seed/fotor-ai/600/400', dataAiHint: 'online editor', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Background Removal Tools",
        icon: <Trash2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Remove.bg', description: 'Remove image backgrounds in 5 seconds.', url: 'https://www.remove.bg/', image: 'https://picsum.photos/seed/removebg-ai/600/400', dataAiHint: 'background remover', pricing: 'Freemium' },
            { name: 'PhotoRoom', description: 'Create product pictures & remove backgrounds.', url: 'https://www.photoroom.com/', image: 'https://picsum.photos/seed/photoroom-ai/600/400', dataAiHint: 'product photos', pricing: 'Freemium' },
            { name: 'Slazzer', description: 'Instantly remove background from any image.', url: 'https://www.slazzer.com/', image: 'https://picsum.photos/seed/slazzer-ai/600/400', dataAiHint: 'cutout tool', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Image Enhancement & Upscaler",
        icon: <Sparkles className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Topaz Photo AI', description: 'Maximize image quality on autopilot.', url: 'https://www.topazlabs.com/topaz-photo-ai', image: 'https://picsum.photos/seed/topaz-ai/600/400', dataAiHint: 'image upscaler', pricing: 'Paid' },
            { name: 'Let\'s Enhance', description: 'AI image enlarger & upscaler.', url: 'https://letsenhance.io/', image: 'https://picsum.photos/seed/letsenhance-ai/600/400', dataAiHint: 'image sharpener', pricing: 'Freemium' },
            { name: 'Remini', description: 'AI photo and video enhancer.', url: 'https://remini.ai/', image: 'https://picsum.photos/seed/remini-ai/600/400', dataAiHint: 'photo enhancer', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Object Removal (Magic Eraser)",
        icon: <Wand2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Magic Eraser', description: 'Remove unwanted things from images in seconds.', url: 'https://www.magiceraser.io/', image: 'https://picsum.photos/seed/magiceraser-io/600/400', dataAiHint: 'object remover', pricing: 'Freemium' },
            { name: 'Inpaint', description: 'Remove objects from your photos.', url: 'https://theinpaint.com/', image: 'https://picsum.photos/seed/inpaint-ai/600/400', dataAiHint: 'photo restoration', pricing: 'Paid' },
            { name: 'Cleanup.pictures', description: 'Remove any unwanted object, defect, people or text.', url: 'https://cleanup.pictures/', image: 'https://picsum.photos/seed/cleanup-ai/600/400', dataAiHint: 'remove defect', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Image Retouching Tools",
        icon: <Edit className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Facetune', description: 'The original selfie editor.', url: 'https://www.facetuneapp.com/', image: 'https://picsum.photos/seed/facetune-ai/600/400', dataAiHint: 'selfie editor', pricing: 'Freemium' },
            { name: 'AirBrush', description: 'Easy photo editor with pro retouch tools.', url: 'https://airbrush.com/', image: 'https://picsum.photos/seed/airbrush-ai/600/400', dataAiHint: 'pro retouch', pricing: 'Freemium' },
        ]
    },
     {
        title: "AI Portrait Editing Tools",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Luminar Neo', description: 'AI tools for portrait retouching.', url: 'https://skylum.com/luminar', image: 'https://picsum.photos/seed/luminar-portrait/600/400', dataAiHint: 'portrait ai', pricing: 'Paid' },
            { name: 'Evoto AI', description: 'Next-generation photo editor.', url: 'https://www.evoto.ai/', image: 'https://picsum.photos/seed/evoto-ai/600/400', dataAiHint: 'photo processing', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Face Enhancement & Skin Retouch",
        icon: <Smile className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'FaceApp', description: 'AI face editor with filters and transformations.', url: 'https://www.faceapp.com/', image: 'https://picsum.photos/seed/faceapp-enhance/600/400', dataAiHint: 'face filter', pricing: 'Freemium' },
             { name: 'YouCam Makeup', description: 'Virtual makeup and skin diagnostics.', url: 'https://www.perfectcorp.com/consumer/apps/ymk', image: 'https://picsum.photos/seed/youcam-enhance/600/400', dataAiHint: 'virtual makeup', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Photo Restoration (Old Photos)",
        icon: <Camera className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'MyHeritage Photo Tools', description: 'Colorize, enhance, and animate old photos.', url: 'https://www.myheritage.com/photo-enhancer', image: 'https://picsum.photos/seed/myheritage-restore/600/400', dataAiHint: 'old photos', pricing: 'Freemium' },
             { name: 'Hotpot.ai', description: 'AI tools for colorizing and restoring old photos.', url: 'https://hotpot.ai/', image: 'https://picsum.photos/seed/hotpot-restore/600/400', dataAiHint: 'photo restore', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Color Correction & Grading",
        icon: <Palette className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Palette.fm', description: 'AI colorizer for black and white photos.', url: 'https://palette.fm/', image: 'https://picsum.photos/seed/palettefm-color/600/400', dataAiHint: 'photo colorizer', pricing: 'Freemium' },
             { name: 'Colorize.cc', description: 'AI to colorize your black and white photos.', url: 'https://colorize.cc/', image: 'https://picsum.photos/seed/colorizecc/600/400', dataAiHint: 'colorize black white', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Image Filters & Effects",
        icon: <Filter className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Prisma', description: 'Turn your photos into art.', url: 'https://prisma-ai.com/', image: 'https://picsum.photos/seed/prisma-filter/600/400', dataAiHint: 'art filter', pricing: 'Freemium' },
             { name: 'DeepArt.io', description: 'Turn any photo into artwork using AI.', url: 'https://deepart.io/', image: 'https://picsum.photos/seed/deepart-filter/600/400', dataAiHint: 'neural style', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Text-to-Image Generator",
        icon: <Type className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Midjourney', description: 'AI art generator via Discord.', url: 'https://www.midjourney.com/', image: 'https://picsum.photos/seed/midjourney-generate/600/400', dataAiHint: 'discord art', pricing: 'Paid' },
            { name: 'DALL·E 3', description: 'OpenAI\'s image generation model.', url: 'https://openai.com/dall-e-3', image: 'https://picsum.photos/seed/dalle3-generate/600/400', dataAiHint: 'openai image', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Image-to-Image Editing Tools",
        icon: <GitBranch className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Stable Diffusion (img2img)', description: 'Transform images with text prompts.', url: 'https://stablediffusionweb.com/img2img', image: 'https://picsum.photos/seed/sd-img2img-edit/600/400', dataAiHint: 'image transform', pricing: 'Free' },
        ]
    },
    {
        title: "AI Photo Style Transfer Tools",
        icon: <Key className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'DeepArt.io', description: 'Transfer a style from one image to another.', url: 'https://deepart.io/', image: 'https://picsum.photos/seed/deepart-style/600/400', dataAiHint: 'style transfer', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Image Inpainting Tools",
        icon: <Square className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'RunwayML', description: 'Inpainting feature to remove objects.', url: 'https://runwayml.com/', image: 'https://picsum.photos/seed/runway-inpaint/600/400', dataAiHint: 'video inpainting', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Image Outpainting Tools",
        icon: <Square className="w-5 h-5 text-primary" style={{ transform: 'rotate(180deg)' }}/>,
        tools: [
            { name: 'DALL·E 2', description: 'Outpainting feature to expand images.', url: 'https://openai.com/blog/dall-e-2-outpainting', image: 'https://picsum.photos/seed/dalle-outpaint/600/400', dataAiHint: 'expand image', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Logo & Graphic Design Tools",
        icon: <Package className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Looka', description: 'AI-powered logo and brand identity.', url: 'https://looka.com/', image: 'https://picsum.photos/seed/looka-design/600/400', dataAiHint: 'logo maker', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Thumbnail & Banner Creator",
        icon: <Tv className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Canva', description: 'Design thumbnails and banners with AI.', url: 'https://www.canva.com/', image: 'https://picsum.photos/seed/canva-thumb/600/400', dataAiHint: 'youtube thumbnail', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Social Media Image Tools",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Microsoft Designer', description: 'Stunning designs in a flash for social media.', url: 'https://designer.microsoft.com/', image: 'https://picsum.photos/seed/ms-designer-social/600/400', dataAiHint: 'social media design', pricing: 'Free' },
        ]
    },
    {
        title: "AI Image Resize & Crop Tools",
        icon: <Crop className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Shutterstock Image Resizer', description: 'Easily resize images for any platform.', url: 'https://www.shutterstock.com/image-resizer', image: 'https://picsum.photos/seed/shutterstock-resize/600/400', dataAiHint: 'image resizer', pricing: 'Free' },
        ]
    },
    {
        title: "AI Image Compression Tools",
        icon: <ZoomIn className="w-5 h-5 text-primary" style={{ transform: 'scaleX(-1)' }}/>,
        tools: [
            { name: 'TinyPNG', description: 'Smart PNG and JPEG compression.', url: 'https://tinypng.com/', image: 'https://picsum.photos/seed/tinypng/600/400', dataAiHint: 'image compression', pricing: 'Free' },
        ]
    },
    {
        title: "AI Product Photo Editing Tools",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Pixelcut', description: 'AI graphic designer for product photos.', url: 'https://www.pixelcut.ai/', image: 'https://picsum.photos/seed/pixelcut-prod/600/400', dataAiHint: 'product photos', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI E-commerce Image Tools",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Glorify', description: 'Product-focused design tool for e-commerce.', url: 'https://www.glorify.com/', image: 'https://picsum.photos/seed/glorify-ecom/600/400', dataAiHint: 'ecommerce design', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Mockup & Template Generator",
        icon: <FileImage className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Smartmockups', description: 'Create stunning product mockups.', url: 'https://smartmockups.com/', image: 'https://picsum.photos/seed/smartmockups-gen/600/400', dataAiHint: 'product mockups', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Background Blur & Bokeh Tools",
        icon: <Sparkles className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Fotor Bokeh Effect', description: 'Add a professional blurred background effect.', url: 'https://www.fotor.com/features/bokeh', image: 'https://picsum.photos/seed/fotor-bokeh/600/400', dataAiHint: 'blur background', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Image Noise Reduction Tools",
        icon: <Wand2 className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Topaz DeNoise AI', description: 'Shoot anywhere in any light with no reservations.', url: 'https://www.topazlabs.com/denoise-ai', image: 'https://picsum.photos/seed/topaz-denoise/600/400', dataAiHint: 'noise reduction', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Cartoon / Anime Image Generator",
        icon: <Smile className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ToonMe', description: 'Turn your portrait into a cartoon.', url: 'https://toonme.com/', image: 'https://picsum.photos/seed/toonme-gen/600/400', dataAiHint: 'cartoon yourself', pricing: 'Freemium' },
            { name: 'Crypko', description: 'Generate high-quality anime characters.', url: 'https://crypko.ai/', image: 'https://picsum.photos/seed/crypko/600/400', dataAiHint: 'anime generator', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Face Swap Image Tools",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Reface', description: 'Face swap videos and GIFs.', url: 'https://reface.ai/', image: 'https://picsum.photos/seed/reface-swap/600/400', dataAiHint: 'face swap', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Avatar & Profile Picture Generator",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Lensa AI', description: 'Create Magic Avatars from your selfies.', url: 'https://prisma-ai.com/lensa', image: 'https://picsum.photos/seed/lensa-avatar/600/400', dataAiHint: 'magic avatars', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI OCR (Image to Text) Tools",
        icon: <ScanText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Cloud Vision AI', description: 'Derive insights from your images with OCR.', url: 'https://cloud.google.com/vision', image: 'https://picsum.photos/seed/gvision-ocr/600/400', dataAiHint: 'ocr api', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Image Metadata & Optimization Tools",
        icon: <Settings className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ImageOptim', description: 'Makes images load faster.', url: 'https://imageoptim.com/', image: 'https://picsum.photos/seed/imageoptim/600/400', dataAiHint: 'image optimization', pricing: 'Free' },
        ]
    }
];
