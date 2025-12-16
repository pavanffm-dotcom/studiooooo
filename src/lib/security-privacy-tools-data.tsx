
'use client';

import React from 'react';
import { 
    Shield, Cpu, Bug, Microscope, Fish, Network, Laptop, Cloud, FlaskConical, ShieldCheck,
    Key, Lock, Fingerprint, ScanSearch, Target, LockKeyhole, FileLock, FileKey, UserCheck, Bot,
    History, KeySquare, ShieldQuestion, CloudCog, Siren, Shuffle, Eye, Mail, Server, Fingerprint as FingerprintIcon,
    BarChart, Globe
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

export const securityPrivacyToolData: ToolCategory[] = [
    {
        title: "AI Cybersecurity Tools",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Darktrace', description: 'Cyber AI for the real world.', url: 'https://www.darktrace.com/', image: 'https://picsum.photos/seed/darktrace-sec/600/400', dataAiHint: 'cyber ai', pricing: 'Paid' },
            { name: 'Cynet', description: 'Autonomous XDR Platform.', url: 'https://www.cynet.com/', image: 'https://picsum.photos/seed/cynet-sec/600/400', dataAiHint: 'xdr platform', pricing: 'Paid' },
            { name: 'CrowdStrike', description: 'Cloud-native endpoint security.', url: 'https://www.crowdstrike.com/', image: 'https://picsum.photos/seed/crowdstrike-sec/600/400', dataAiHint: 'endpoint security', pricing: 'Paid' },
            { name: 'SentinelOne', description: 'AI-powered endpoint protection.', url: 'https://www.sentinelone.com/', image: 'https://picsum.photos/seed/sentinelone-sec/600/400', dataAiHint: 'ai security', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Threat Detection Tools",
        icon: <ScanSearch className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Vectra AI', description: 'AI-driven threat detection and response.', url: 'https://www.vectra.ai/', image: 'https://picsum.photos/seed/vectra-sec/600/400', dataAiHint: 'threat detection', pricing: 'Paid' },
            { name: 'ExtraHop', description: 'Cloud-native network detection and response.', url: 'https://www.extrahop.com/', image: 'https://picsum.photos/seed/extrahop/600/400', dataAiHint: 'ndr', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Malware Detection Tools",
        icon: <Bug className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Malwarebytes', description: 'Cybersecurity for home and business.', url: 'https://www.malwarebytes.com/', image: 'https://picsum.photos/seed/malwarebytes/600/400', dataAiHint: 'antivirus', pricing: 'Freemium' },
            { name: 'Sophos Intercept X', description: 'Next-gen endpoint protection.', url: 'https://www.sophos.com/en-us/products/endpoint-antivirus', image: 'https://picsum.photos/seed/sophos/600/400', dataAiHint: 'endpoint protection', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Phishing Detection Tools",
        icon: <Fish className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'IronScales', description: 'The AI-powered anti-phishing platform.', url: 'https://ironscales.com/', image: 'https://picsum.photos/seed/ironscales/600/400', dataAiHint: 'email security', pricing: 'Paid' },
            { name: 'Abnormal Security', description: 'Cloud email security platform.', url: 'https://abnormalsecurity.com/', image: 'https://picsum.photos/seed/abnormal/600/400', dataAiHint: 'email platform', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Intrusion Detection Systems",
        icon: <Siren className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Suricata', description: 'Open source-based intrusion detection system (IDS).', url: 'https://suricata.io/', image: 'https://picsum.photos/seed/suricata/600/400', dataAiHint: 'ids', pricing: 'Free' },
        ]
    },
    {
        title: "AI Network Security Tools",
        icon: <Network className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Endpoint Security Tools",
        icon: <Laptop className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Cloud Security Tools",
        icon: <Cloud className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Application Security Tools",
        icon: <Cpu className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Vulnerability Scanners",
        icon: <FlaskConical className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Data Privacy Tools",
        icon: <ShieldQuestion className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Data Loss Prevention (DLP)",
        icon: <FileLock className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Encryption Tools",
        icon: <Lock className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Secure File Sharing Tools",
        icon: <FileKey className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Identity & Access Management",
        icon: <FingerprintIcon className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Authentication Tools",
        icon: <UserCheck className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Biometric Security Tools",
        icon: <Fingerprint className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Fraud Detection Tools",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Risk Assessment Tools",
        icon: <Target className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Compliance & Governance Tools",
        icon: <ShieldCheck className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Privacy Monitoring Tools",
        icon: <Eye className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Anonymization & Masking",
        icon: <Shuffle className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Secure Backup Tools",
        icon: <CloudCog className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Incident Response Tools",
        icon: <Siren className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Security Analytics Tools",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Password Management Tools",
        icon: <KeySquare className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Secure Browsing Tools",
        icon: <Globe className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Email Security Tools",
        icon: <Mail className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Zero Trust Security Tools",
        icon: <Server className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Privacy-Focused AI Platforms",
        icon: <Cpu className="w-5 h-5 text-primary"/>,
        tools: [],
    }
];
