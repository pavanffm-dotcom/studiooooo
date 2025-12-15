
'use client';

import React from 'react';
import { 
    Mic, Mic2, Voicemail, Bot, Music, Radio, AudioLines, Ear, BrainCircuit, Phone, Shield, FileText, Search, Video, Accessibility, FileAudio, BarChart, Settings, GitBranch, Headphones, PhoneCall, Workflow, Globe, Sparkles
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
        title: "AI Text-to-Speech Tools",
        icon: <Mic2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ElevenLabs', description: 'The most realistic AI speech software.', url: 'https://elevenlabs.io/', image: 'https://picsum.photos/seed/elevenlabs-tts-audio/600/400', dataAiHint: 'ai speech', pricing: 'Freemium' },
            { name: 'Murf.ai', description: 'Go from text to speech with a versatile AI voice generator.', url: 'https://murf.ai/', image: 'https://picsum.photos/seed/murf-tts-audio/600/400', dataAiHint: 'ai voiceover', pricing: 'Freemium' },
            { name: 'Play.ht', description: 'AI-powered text to voice generator.', url: 'https://play.ht/', image: 'https://picsum.photos/seed/playht-tts-audio/600/400', dataAiHint: 'tts audio', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Voice Generators",
        icon: <Voicemail className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Lovo.ai', description: 'AI voice generator and text-to-speech platform.', url: 'https://lovo.ai/', image: 'https://picsum.photos/seed/lovo-gen-audio/600/400', dataAiHint: 'realistic voices', pricing: 'Freemium' },
            { name: 'Speechify', description: 'The #1 text-to-speech reader.', url: 'https://speechify.com/', image: 'https://picsum.photos/seed/speechify-gen-audio/600/400', dataAiHint: 'text reader', pricing: 'Freemium' },
            { name: 'WellSaid Labs', description: 'Create voiceovers with realistic AI voices.', url: 'https://wellsaidlabs.com/', image: 'https://picsum.photos/seed/wellsaid-gen-audio/600/400', dataAiHint: 'studio quality', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Voice Cloning Tools",
        icon: <Voicemail className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Resemble.ai', description: 'AI voice generator for real-time voice cloning.', url: 'https://www.resemble.ai/', image: 'https://picsum.photos/seed/resemble-clone-audio/600/400', dataAiHint: 'voice cloning', pricing: 'Paid' },
            { name: 'Descript Overdub', description: 'Create a text-to-speech model of your voice.', url: 'https://www.descript.com/overdub', image: 'https://picsum.photos/seed/descript-clone-audio/600/400', dataAiHint: 'ai voice', pricing: 'Freemium' },
            { name: 'Voice.ai', description: 'Real-time voice changer with cloning capabilities.', url: 'https://voice.ai/', image: 'https://picsum.photos/seed/voiceai-clone/600/400', dataAiHint: 'real-time cloning', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Speech Synthesis Tools",
        icon: <BrainCircuit className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Cloud Text-to-Speech', description: 'Convert text into natural-sounding speech.', url: 'https://cloud.google.com/text-to-speech', image: 'https://picsum.photos/seed/google-synth/600/400', dataAiHint: 'developer api', pricing: 'Paid' },
            { name: 'Amazon Polly', description: 'Turn text into lifelike speech.', url: 'https://aws.amazon.com/polly/', image: 'https://picsum.photos/seed/polly-synth/600/400', dataAiHint: 'aws service', pricing: 'Paid' },
            { name: 'Microsoft Azure TTS', description: 'Lifelike speech synthesis for applications.', url: 'https://azure.microsoft.com/en-us/products/ai-services/text-to-speech/', image: 'https://picsum.photos/seed/azure-synth/600/400', dataAiHint: 'cognitive services', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Speech-to-Text Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'OpenAI Whisper', description: 'A general-purpose speech recognition model.', url: 'https://openai.com/research/whisper', image: 'https://picsum.photos/seed/whisper-stt/600/400', dataAiHint: 'speech recognition', pricing: 'Free' },
            { name: 'AssemblyAI', description: 'AI models for speech-to-text and more.', url: 'https://www.assemblyai.com/', image: 'https://picsum.photos/seed/assemblyai-stt/600/400', dataAiHint: 'transcription api', pricing: 'Paid' },
            { name: 'Deepgram', description: 'Automated speech recognition for enterprises.', url: 'https://deepgram.com/', image: 'https://picsum.photos/seed/deepgram-stt/600/400', dataAiHint: 'voice recognition', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Audio Transcription Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Otter.ai', description: 'AI meeting assistant that records and transcribes.', url: 'https://otter.ai/', image: 'https://picsum.photos/seed/otter-transcribe/600/400', dataAiHint: 'meeting notes', pricing: 'Freemium' },
            { name: 'Happy Scribe', description: 'Transcription &amp; Subtitles Services.', url: 'https://www.happyscribe.com/', image: 'https://picsum.photos/seed/happyscribe-transcribe/600/400', dataAiHint: 'audio transcription', pricing: 'Paid' },
            { name: 'Trint', description: 'AI audio transcription that makes audio searchable.', url: 'https://trint.com/', image: 'https://picsum.photos/seed/trint-transcribe/600/400', dataAiHint: 'searchable audio', pricing: 'Paid' },
        ]
    },
     {
        title: "AI Audio Translation Tools",
        icon: <Globe className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Dubverse', description: 'AI-powered video and audio dubbing.', url: 'https://dubverse.ai/', image: 'https://picsum.photos/seed/dubverse-translate/600/400', dataAiHint: 'video dubbing', pricing: 'Freemium' },
            { name: 'Papercup', description: 'AI dubbing and video translation.', url: 'https://www.papercup.com/', image: 'https://picsum.photos/seed/papercup-translate/600/400', dataAiHint: 'ai dubbing', pricing: 'Paid' },
            { name: 'Rask AI', description: 'AI Video Localization &amp; Dubbing Tool.', url: 'https://www.rask.ai/', image: 'https://picsum.photos/seed/rask-translate/600/400', dataAiHint: 'video localization', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Voice Changers",
        icon: <Radio className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Voicemod', description: 'Real-time AI voice changer and soundboard.', url: 'https://www.voicemod.net/', image: 'https://picsum.photos/seed/voicemod-changer/600/400', dataAiHint: 'voice changer', pricing: 'Freemium' },
            { name: 'Clownfish Voice Changer', description: 'Voice changing application for Windows.', url: 'https://clownfish-translator.com/voicechanger/', image: 'https://picsum.photos/seed/clownfish-changer/600/400', dataAiHint: 'windows voice', pricing: 'Free' },
            { name: 'MorphVOX', description: 'Voice changer software for online games.', url: 'https://screamingbee.com/morphvox-voice-changer', image: 'https://picsum.photos/seed/morphvox-changer/600/400', dataAiHint: 'online games', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Real-Time Voice AI",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Krisp', description: 'AI-powered noise cancelling app for real-time calls.', url: 'https://krisp.ai/', image: 'https://picsum.photos/seed/krisp-realtime/600/400', dataAiHint: 'noise cancellation', pricing: 'Freemium' },
             { name: 'NVIDIA Broadcast', description: 'Turn any room into a home studio.', url: 'https://www.nvidia.com/en-us/geforce/broadcasting/broadcast-app/', image: 'https://picsum.photos/seed/nvidia-broadcast/600/400', dataAiHint: 'virtual background', pricing: 'Free' },
        ]
    },
    {
        title: "AI Conversational Voice Bots",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Dialogflow', description: 'Build natural and rich conversational experiences.', url: 'https://cloud.google.com/dialogflow', image: 'https://picsum.photos/seed/dialogflow-bots/600/400', dataAiHint: 'nlp chatbot', pricing: 'Paid' },
            { name: 'Amazon Lex', description: 'Conversational AI for Chatbots.', url: 'https://aws.amazon.com/lex/', image: 'https://picsum.photos/seed/lex-bots/600/400', dataAiHint: 'chatbot builder', pricing: 'Paid' },
            { name: 'Rasa', description: 'Open source conversational AI.', url: 'https://rasa.com/', image: 'https://picsum.photos/seed/rasa-bots/600/400', dataAiHint: 'open source ai', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Audio Editing Tools",
        icon: <AudioLines className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Descript', description: 'All-in-one audio &amp; video editor.', url: 'https://www.descript.com/', image: 'https://picsum.photos/seed/descript-edit-audio/600/400', dataAiHint: 'podcast editing', pricing: 'Freemium' },
            { name: 'Audacity', description: 'Free, open source, cross-platform audio software.', url: 'https://www.audacityteam.org/', image: 'https://picsum.photos/seed/audacity-edit-audio/600/400', dataAiHint: 'free audio editor', pricing: 'Free' },
            { name: 'iZotope RX', description: 'The industry standard for audio repair.', url: 'https://www.izotope.com/en/products/rx.html', image: 'https://picsum.photos/seed/izotope-edit-audio/600/400', dataAiHint: 'audio repair', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Noise Reduction Tools",
        icon: <Ear className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Adobe Podcast Enhance', description: 'Remove noise and echo from voice recordings.', url: 'https://podcast.adobe.com/enhance', image: 'https://picsum.photos/seed/adobepodcast-noise-audio/600/400', dataAiHint: 'audio enhance', pricing: 'Free' },
            { name: 'Audo Studio', description: 'One-click audio cleaning and enhancement.', url: 'https://audo.ai/', image: 'https://picsum.photos/seed/audo-noise-audio/600/400', dataAiHint: 'noise removal', pricing: 'Freemium' },
            { name: 'Krisp', description: 'AI-powered noise cancelling app.', url: 'https://krisp.ai/', image: 'https://picsum.photos/seed/krisp-noise/600/400', dataAiHint: 'call clarity', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Audio Enhancement Tools",
        icon: <Sparkles className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'LANDR', description: 'AI-powered music mastering.', url: 'https://www.landr.com/', image: 'https://picsum.photos/seed/landr-enhance/600/400', dataAiHint: 'music mastering', pricing: 'Freemium' },
            { name: 'eMastered', description: 'Online audio mastering made by Grammy-winning engineers.', url: 'https://emastered.com/', image: 'https://picsum.photos/seed/emastered-enhance/600/400', dataAiHint: 'audio mastering', pricing: 'Paid' },
            { name: 'AudioMint', description: 'AI-powered audio post production.', url: 'https://audiomint.com/', image: 'https://picsum.photos/seed/audiomint/600/400', dataAiHint: 'post production', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Podcast Editing Tools",
        icon: <Headphones className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Descript', description: 'All-in-one editor for podcasters.', url: 'https://www.descript.com/', image: 'https://picsum.photos/seed/descript-podcast/600/400', dataAiHint: 'podcast editing', pricing: 'Freemium' },
            { name: 'Cleanvoice AI', description: 'Automatically edit your podcast episodes.', url: 'https://cleanvoice.ai/', image: 'https://picsum.photos/seed/cleanvoice-podcast/600/400', dataAiHint: 'remove filler words', pricing: 'Paid' },
            { name: 'Podcastle', description: 'Studio-quality recording, right from your computer.', url: 'https://podcastle.ai/', image: 'https://picsum.photos/seed/podcastle-podcast/600/400', dataAiHint: 'remote interview', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Music Generation Tools",
        icon: <Music className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Suno', description: 'Make any song you can imagine.', url: 'https://suno.com/', image: 'https://picsum.photos/seed/suno-music/600/400', dataAiHint: 'song generator', pricing: 'Freemium' },
            { name: 'Udio', description: 'Create extraordinary music in your style.', url: 'https://www.udio.com/', image: 'https://picsum.photos/seed/udio-music/600/400', dataAiHint: 'music style', pricing: 'Freemium' },
            { name: 'Soundraw', description: 'AI music generator.', url: 'https://soundraw.io/', image: 'https://picsum.photos/seed/soundraw-music/600/400', dataAiHint: 'royalty-free music', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Sound Effects Generators",
        icon: <AudioLines className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Artlist', description: 'Royalty-free music and sound effects.', url: 'https://artlist.io/sfx', image: 'https://picsum.photos/seed/artlist-sfx/600/400', dataAiHint: 'sound effects', pricing: 'Paid' },
             { name: 'Epidemic Sound', description: 'High-quality music and sound effects.', url: 'https://www.epidemicsound.com/', image: 'https://picsum.photos/seed/epidemic-sfx/600/400', dataAiHint: 'royalty-free', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Audio Mixing &amp; Mastering",
        icon: <Settings className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'LANDR', description: 'AI-powered music mastering.', url: 'https://www.landr.com/', image: 'https://picsum.photos/seed/landr-mastering/600/400', dataAiHint: 'music mastering', pricing: 'Freemium' },
            { name: 'iZotope Ozone', description: 'The future of mastering.', url: 'https://www.izotope.com/en/products/ozone.html', image: 'https://picsum.photos/seed/ozone-mastering/600/400', dataAiHint: 'mastering suite', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Background Music Generators",
        icon: <Music className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Mubert', description: 'Royalty-free music for your content.', url: 'https://mubert.com/', image: 'https://picsum.photos/seed/mubert-bgm/600/400', dataAiHint: 'royalty-free', pricing: 'Freemium' },
            { name: 'Beatoven.ai', description: 'Create unique royalty-free music.', url: 'https://www.beatoven.ai/', image: 'https://picsum.photos/seed/beatoven-bgm/600/400', dataAiHint: 'mood-based music', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Audio Separation Tools",
        icon: <GitBranch className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Lalal.ai', description: 'Stem splitter and voice cleaner.', url: 'https://www.lalal.ai/', image: 'https://picsum.photos/seed/lalalai-separate/600/400', dataAiHint: 'vocal remover', pricing: 'Freemium' },
            { name: 'Vocal Remover', description: 'Separate voice from music out of a song.', url: 'https://vocalremover.org/', image: 'https://picsum.photos/seed/vocalremover-separate/600/400', dataAiHint: 'karaoke maker', pricing: 'Free' },
        ]
    },
    {
        title: "AI Voice Emotion Analysis",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Call Center Voice AI",
        icon: <PhoneCall className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI IVR &amp; Phone Bot Tools",
        icon: <Phone className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Voice Analytics Tools",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Meeting Voice Assistants",
        icon: <Headphones className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Voice Accessibility Tools",
        icon: <Accessibility className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Dubbing &amp; Lip Sync Tools",
        icon: <Video className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Audiobook Creation Tools",
        icon: <FileAudio className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Singing Voice AI",
        icon: <Music className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Voice Biometrics &amp; Security",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Audio Search &amp; Indexing Tools",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [],
    }
];
