
'use client';

import React from 'react';
import { 
    Cpu, Code, Bug, GitBranch, RefreshCw, Zap, Server, CloudCog, Database, TestTube,
    Shield, Key, FileText, Search, GitCommit, LineChart, Code2, Link2, Braces, BrainCircuit,
    Layers, Puzzle, GanttChartSquare, Route, MessageSquare, BookCopy, Users, Network, Lock,
    Terminal, TrendingUp, BarChart, Users as UsersIcon, Mail, Bot, Link2 as LinkIcon, ClipboardCheck, MessageCircle as MessageCircleIcon, Target, Eye, ThumbsUp, ZoomIn, CheckSquare, Palette, Film, Mic, UserPlus, DollarSign, Wallet, Receipt, FileSignature, CreditCard, UserCog, UploadCloud, Globe, Webhook, HardDrive, Component, Laptop, Router, BarChart3, Megaphone, Lightbulb, Presentation, Calendar, Store, ShoppingCart, BookOpen, Filter
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

export const marketingSeoToolData: ToolCategory[] = [
    {
        title: "AI Digital Marketing Tools",
        icon: <Lightbulb className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Jasper', description: 'AI content platform for marketing teams.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-dm/600/400', dataAiHint: 'ai writer', pricing: 'Paid' },
            { name: 'HubSpot Marketing Hub', description: 'All-in-one marketing software.', url: 'https://www.hubspot.com/products/marketing', image: 'https://picsum.photos/seed/hubspot-dm/600/400', dataAiHint: 'marketing automation', pricing: 'Freemium' },
            { name: 'AdCreative.ai', description: 'Generate conversion-focused ad creatives.', url: 'https://www.adcreative.ai/', image: 'https://picsum.photos/seed/adcreative-dm/600/400', dataAiHint: 'ad creatives', pricing: 'Paid' },
            { name: 'Flick', description: 'Social Media Marketing powered by AI.', url: 'https://www.flick.tech/', image: 'https://picsum.photos/seed/flick-dm/600/400', dataAiHint: 'social media', pricing: 'Paid' },
        ]
    },
    {
        title: "AI SEO Optimization Tools",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Surfer SEO', description: 'Content intelligence tool for SEO.', url: 'https://surferseo.com/', image: 'https://picsum.photos/seed/surferseo-seo/600/400', dataAiHint: 'seo content', pricing: 'Paid' },
            { name: 'SEMrush', description: 'Online visibility management platform.', url: 'https://www.semrush.com/', image: 'https://picsum.photos/seed/semrush-seo/600/400', dataAiHint: 'seo platform', pricing: 'Paid' },
            { name: 'Ahrefs', description: 'SEO tools & resources to grow your search traffic.', url: 'https://ahrefs.com/', image: 'https://picsum.photos/seed/ahrefs-seo/600/400', dataAiHint: 'backlink checker', pricing: 'Paid' },
            { name: 'Moz Pro', description: 'All-in-one suite of SEO tools.', url: 'https://moz.com/products/pro', image: 'https://picsum.photos/seed/mozpro-seo/600/400', dataAiHint: 'seo software', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Keyword Research Tools",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'AnswerThePublic', description: 'Discover what people are asking about.', url: 'https://answerthepublic.com/', image: 'https://picsum.photos/seed/answerthepublic/600/400', dataAiHint: 'search listening', pricing: 'Freemium' },
            { name: 'AlsoAsked', description: 'Discover the questions people are asking.', url: 'https://alsoasked.com/', image: 'https://picsum.photos/seed/alsoasked/600/400', dataAiHint: 'people also ask', pricing: 'Freemium' },
            { name: 'Keywords Everywhere', description: 'Browser addon for keyword research.', url: 'https://keywordseverywhere.com/', image: 'https://picsum.photos/seed/keywordseverywhere/600/400', dataAiHint: 'keyword tool', pricing: 'Paid' },
            { name: 'LowFruits', description: 'Find low competition keywords.', url: 'https://lowfruits.io/', image: 'https://picsum.photos/seed/lowfruits/600/400', dataAiHint: 'easy keywords', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Content Marketing Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'BuzzSumo', description: 'Find what content is performing best.', url: 'https://buzzsumo.com/', image: 'https://picsum.photos/seed/buzzsumo-cm/600/400', dataAiHint: 'content analysis', pricing: 'Paid' },
            { name: 'MarketMuse', description: 'AI content planning and optimization software.', url: 'https://www.marketmuse.com/', image: 'https://picsum.photos/seed/marketmuse-cm/600/400', dataAiHint: 'content strategy', pricing: 'Paid' },
            { name: 'Frase', description: 'AI for content that answers questions.', url: 'https://www.frase.io/', image: 'https://picsum.photos/seed/frase-cm/600/400', dataAiHint: 'content optimization', pricing: 'Paid' },
            { name: 'Copy.ai', description: 'AI-powered copywriter for marketing.', url: 'https://www.copy.ai/', image: 'https://picsum.photos/seed/copyai-cm/600/400', dataAiHint: 'marketing copy', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Copywriting for Marketing",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Anyword', description: 'AI copywriting tool for marketing results.', url: 'https://anyword.com/', image: 'https://picsum.photos/seed/anyword-copy-mkt/600/400', dataAiHint: 'performance copy', pricing: 'Paid' },
            { name: 'Copysmith', description: 'AI copywriting for e-commerce teams.', url: 'https://copysmith.ai/', image: 'https://picsum.photos/seed/copysmith-mkt/600/400', dataAiHint: 'ecommerce copy', pricing: 'Paid' },
            { name: 'Peppertype.ai', description: 'Virtual content assistant.', url: 'https://www.peppertype.ai/', image: 'https://picsum.photos/seed/peppertype-mkt/600/400', dataAiHint: 'content ideation', pricing: 'Freemium' },
            { name: 'Writesonic', description: 'AI writer for SEO-friendly content.', url: 'https://writesonic.com/', image: 'https://picsum.photos/seed/writesonic-mkt/600/400', dataAiHint: 'seo writer', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Blog SEO Tools",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Rank Math', description: 'WordPress SEO plugin.', url: 'https://rankmath.com/', image: 'https://picsum.photos/seed/rankmath/600/400', dataAiHint: 'wordpress seo', pricing: 'Freemium' },
            { name: 'Yoast SEO', description: 'The #1 WordPress SEO plugin.', url: 'https://yoast.com/', image: 'https://picsum.photos/seed/yoast/600/400', dataAiHint: 'seo plugin', pricing: 'Freemium' },
            { name: 'NeuronWriter', description: 'Content optimization with NLP.', url: 'https://neuronwriter.com/', image: 'https://picsum.photos/seed/neuronwriter-blog/600/400', dataAiHint: 'nlp writing', pricing: 'Paid' },
            { name: 'Scalenut', description: 'AI-powered content research and writing.', url: 'https://www.scalenut.com/', image: 'https://picsum.photos/seed/scalenut-blog/600/400', dataAiHint: 'content research', pricing: 'Paid' },
        ]
    },
    {
        title: "AI On-Page SEO Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Surfer SEO', description: 'Optimize your articles for top rankings.', url: 'https://surferseo.com/', image: 'https://picsum.photos/seed/surfer-onpage/600/400', dataAiHint: 'content audit', pricing: 'Paid' },
            { name: 'PageOptimizer Pro', description: 'On-page SEO tool for professionals.', url: 'https://pageoptimizer.pro/', image: 'https://picsum.photos/seed/pop/600/400', dataAiHint: 'seo professionals', pricing: 'Paid' },
            { name: 'Website Auditor', description: 'In-depth on-page SEO analysis.', url: 'https://www.link-assistant.com/website-auditor/', image: 'https://picsum.photos/seed/website-auditor/600/400', dataAiHint: 'site audit', pricing: 'Freemium' },
            { name: 'Frase', description: 'Optimize content for search intent.', url: 'https://www.frase.io/', image: 'https://picsum.photos/seed/frase-onpage/600/400', dataAiHint: 'search intent', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Technical SEO Tools",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Screaming Frog', description: 'The industry leading SEO Spider software.', url: 'https://www.screamingfrog.co.uk/seo-spider/', image: 'https://picsum.photos/seed/screamingfrog/600/400', dataAiHint: 'website crawler', pricing: 'Freemium' },
            { name: 'Sitebulb', description: 'Website auditing tool for SEOs.', url: 'https://sitebulb.com/', image: 'https://picsum.photos/seed/sitebulb/600/400', dataAiHint: 'seo audit', pricing: 'Paid' },
            { name: 'GTmetrix', description: 'See how your website performs.', url: 'https://gtmetrix.com/', image: 'https://picsum.photos/seed/gtmetrix/600/400', dataAiHint: 'page speed', pricing: 'Freemium' },
            { name: 'Google PageSpeed Insights', description: 'Analyze your site\'s performance.', url: 'https://pagespeed.web.dev/', image: 'https://picsum.photos/seed/pagespeed/600/400', dataAiHint: 'core web vitals', pricing: 'Free' },
        ]
    },
    {
        title: "AI Link Building Tools",
        icon: <LinkIcon className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Ahrefs', description: 'The best backlink checker.', url: 'https://ahrefs.com/backlink-checker', image: 'https://picsum.photos/seed/ahrefs-link/600/400', dataAiHint: 'backlink analysis', pricing: 'Paid' },
            { name: 'Majestic', description: 'The planet\'s largest Link Index database.', url: 'https://majestic.com/', image: 'https://picsum.photos/seed/majestic/600/400', dataAiHint: 'link index', pricing: 'Paid' },
            { name: 'Hunter', description: 'Find email addresses in seconds for outreach.', url: 'https://hunter.io/', image: 'https://picsum.photos/seed/hunter-link/600/400', dataAiHint: 'email finder', pricing: 'Freemium' },
            { name: 'Pitchbox', description: 'Influencer outreach and link building platform.', url: 'https://pitchbox.com/', image: 'https://picsum.photos/seed/pitchbox/600/400', dataAiHint: 'outreach platform', pricing: 'Paid' },
        ]
    },
    {
        title: "AI SEO Audit Tools",
        icon: <ClipboardCheck className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'SE Ranking', description: 'All-in-one SEO platform.', url: 'https://seranking.com/', image: 'https://picsum.photos/seed/seranking/600/400', dataAiHint: 'seo software', pricing: 'Paid' },
            { name: 'Netpeak Spider', description: 'Personal SEO crawler for audits.', url: 'https://netpeaksoftware.com/spider', image: 'https://picsum.photos/seed/netpeak/600/400', dataAiHint: 'seo crawler', pricing: 'Freemium' },
            { name: 'Woorank', description: 'Instant SEO checker and audit tool.', url: 'https://www.woorank.com/', image: 'https://picsum.photos/seed/woorank/600/400', dataAiHint: 'website review', pricing: 'Freemium' },
            { name: 'Seobility', description: 'All-in-one SEO software.', url: 'https://www.seobility.net/', image: 'https://picsum.photos/seed/seobility/600/400', dataAiHint: 'seo checker', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI PPC & Ads Optimization",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Optmyzr', description: 'PPC Management Software for Pros.', url: 'https://www.optmyzr.com/', image: 'https://picsum.photos/seed/optmyzr/600/400', dataAiHint: 'ppc management', pricing: 'Paid' },
            { name: 'WordStream', description: 'Online advertising made easy.', url: 'https://www.wordstream.com/', image: 'https://picsum.photos/seed/wordstream/600/400', dataAiHint: 'adwords tool', pricing: 'Paid' },
            { name: 'AdEspresso', description: 'Facebook and Google Ads management.', url: 'https://adespresso.com/', image: 'https://picsum.photos/seed/adespresso/600/400', dataAiHint: 'facebook ads', pricing: 'Paid' },
            { name: 'Madgicx', description: 'AI-Powered Ad Optimization Platform.', url: 'https://madgicx.com/', image: 'https://picsum.photos/seed/madgicx/600/400', dataAiHint: 'ad optimization', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Google Ads Tools",
        icon: <Globe className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Opteo', description: 'PPC management software for Google Ads.', url: 'https://www.opteo.com/', image: 'https://picsum.photos/seed/opteo/600/400', dataAiHint: 'google ads', pricing: 'Paid' },
            { name: 'Tenscores', description: 'Google Ads Quality Score software.', url: 'https://www.tenscores.com/', image: 'https://picsum.photos/seed/tenscores/600/400', dataAiHint: 'quality score', pricing: 'Paid' },
            { name: 'PPC Samurai', description: 'Google Ads Automation Software.', url: 'https://ppcsamurai.com/', image: 'https://picsum.photos/seed/ppcsamurai/600/400', dataAiHint: 'ads automation', pricing: 'Paid' },
            { name: 'SpyFu', description: 'Competitor keyword research tools.', url: 'https://www.spyfu.com/', image: 'https://picsum.photos/seed/spyfu-ads/600/400', dataAiHint: 'adwords competitor', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Social Media Marketing Tools",
        icon: <MessageCircleIcon className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Lately', description: 'AI-powered social media marketing platform.', url: 'https://www.lately.ai/', image: 'https://picsum.photos/seed/lately-social/600/400', dataAiHint: 'social content', pricing: 'Paid' },
            { name: 'Sprout Social', description: 'Social media management solutions.', url: 'https://sproutsocial.com/', image: 'https://picsum.photos/seed/sprout-social/600/400', dataAiHint: 'social media', pricing: 'Paid' },
            { name: 'Agorapulse', description: 'Social media management software.', url: 'https://www.agorapulse.com/', image: 'https://picsum.photos/seed/agorapulse-social/600/400', dataAiHint: 'social inbox', pricing: 'Paid' },
            { name: 'Buffer', description: 'Social media toolkit for small businesses.', url: 'https://buffer.com/', image: 'https://picsum.photos/seed/buffer-social/600/400', dataAiHint: 'social scheduling', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Social Media Scheduling",
        icon: <Calendar className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'MeetEdgar', description: 'Social media automation and scheduling.', url: 'https://meetedgar.com/', image: 'https://picsum.photos/seed/meetedgar/600/400', dataAiHint: 'content recycling', pricing: 'Paid' },
            { name: 'Later', description: 'Visually plan and schedule social media posts.', url: 'https://later.com/', image: 'https://picsum.photos/seed/later/600/400', dataAiHint: 'instagram scheduler', pricing: 'Freemium' },
            { name: 'SocialBee', description: 'AI-powered social media management tool.', url: 'https://socialbee.io/', image: 'https://picsum.photos/seed/socialbee/600/400', dataAiHint: 'content categories', pricing: 'Paid' },
            { name: 'Tailwind', description: 'Smart marketing for Pinterest & Instagram.', url: 'https://www.tailwindapp.com/', image: 'https://picsum.photos/seed/tailwind/600/400', dataAiHint: 'pinterest scheduler', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Influencer Marketing",
        icon: <UsersIcon className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Upfluence', description: 'All-in-one influencer marketing platform.', url: 'https://www.upfluence.com/', image: 'https://picsum.photos/seed/upfluence/600/400', dataAiHint: 'influencer platform', pricing: 'Paid' },
            { name: 'Grin', description: 'The #1 influencer marketing software.', url: 'https://grin.co/', image: 'https://picsum.photos/seed/grin/600/400', dataAiHint: 'creator management', pricing: 'Paid' },
            { name: 'Aspire', description: 'Influencer marketing for growing brands.', url: 'https://www.aspire.io/', image: 'https://picsum.photos/seed/aspire/600/400', dataAiHint: 'brand communities', pricing: 'Paid' },
            { name: 'HypeAuditor', description: 'The all-in-one platform for influencer marketing.', url: 'https://hypeauditor.com/', image: 'https://picsum.photos/seed/hypeauditor/600/400', dataAiHint: 'influencer analytics', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Email Marketing Tools",
        icon: <Mail className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Mailchimp', description: 'All-in-one marketing platform for small businesses.', url: 'https://mailchimp.com/', image: 'https://picsum.photos/seed/mailchimp-email/600/400', dataAiHint: 'email campaigns', pricing: 'Freemium' },
            { name: 'Klaviyo', description: 'Email and SMS marketing for e-commerce.', url: 'https://www.klaviyo.com/', image: 'https://picsum.photos/seed/klaviyo-email/600/400', dataAiHint: 'ecommerce marketing', pricing: 'Freemium' },
            { name: 'ActiveCampaign', description: 'Customer experience automation.', url: 'https://www.activecampaign.com/', image: 'https://picsum.photos/seed/activecampaign/600/400', dataAiHint: 'cx automation', pricing: 'Paid' },
            { name: 'ConvertKit', description: 'The creator marketing platform.', url: 'https://convertkit.com/', image: 'https://picsum.photos/seed/convertkit/600/400', dataAiHint: 'creator platform', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Marketing Automation Platforms",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'HubSpot', description: 'CRM, marketing, sales, and service software.', url: 'https://www.hubspot.com/', image: 'https://picsum.photos/seed/hubspot-auto/600/400', dataAiHint: 'inbound marketing', pricing: 'Freemium' },
            { name: 'Marketo', description: 'Adobe\'s marketing automation application.', url: 'https://business.adobe.com/products/marketo/adobe-marketo.html', image: 'https://picsum.photos/seed/marketo/600/400', dataAiHint: 'adobe marketing', pricing: 'Paid' },
            { name: 'Pardot', description: 'Salesforce B2B marketing automation.', url: 'https://www.pardot.com/', image: 'https://picsum.photos/seed/pardot/600/400', dataAiHint: 'b2b marketing', pricing: 'Paid' },
            { name: 'Ortto', description: 'Customer data and marketing automation.', url: 'https://ortto.com/', image: 'https://picsum.photos/seed/ortto/600/400', dataAiHint: 'customer journey', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Funnel & Conversion Optimization",
        icon: <Filter className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Unbounce', description: 'Landing page builder for higher conversions.', url: 'https://unbounce.com/', image: 'https://picsum.photos/seed/unbounce/600/400', dataAiHint: 'landing pages', pricing: 'Paid' },
            { name: 'Instapage', description: 'The most advanced landing page platform.', url: 'https://instapage.com/', image: 'https://picsum.photos/seed/instapage/600/400', dataAiHint: 'ad-to-page', pricing: 'Paid' },
            { name: 'Hotjar', description: 'Website heatmaps & behavior analytics.', url: 'https://www.hotjar.com/', image: 'https://picsum.photos/seed/hotjar/600/400', dataAiHint: 'heatmaps', pricing: 'Freemium' },
            { name: 'Crazy Egg', description: 'Website optimization.', url: 'https://www.crazyegg.com/', image: 'https://picsum.photos/seed/crazyegg/600/400', dataAiHint: 'website heatmap', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Landing Page Optimization",
        icon: <Target className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Instapage', description: 'Personalize landing pages at scale.', url: 'https://instapage.com/', image: 'https://picsum.photos/seed/instapage-lp/600/400', dataAiHint: 'page personalization', pricing: 'Paid' },
            { name: 'Leadpages', description: 'Build websites & landing pages.', url: 'https://www.leadpages.com/', image: 'https://picsum.photos/seed/leadpages/600/400', dataAiHint: 'code-free', pricing: 'Paid' },
            { name: 'Wishpond', description: 'Marketing made simple.', url: 'https://www.wishpond.com/', image: 'https://picsum.photos/seed/wishpond/600/400', dataAiHint: 'landing page contest', pricing: 'Paid' },
            { name: 'Landingi', description: 'Landing page builder.', url: 'https://landingi.com/', image: 'https://picsum.photos/seed/landingi/600/400', dataAiHint: 'page builder', pricing: 'Paid' },
        ]
    },
    {
        title: "AI A/B Testing Tools",
        icon: <GitBranch className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Optimizely', description: 'Digital Experience Platform.', url: 'https://www.optimizely.com/', image: 'https://picsum.photos/seed/optimizely/600/400', dataAiHint: 'experimentation', pricing: 'Paid' },
            { name: 'VWO', description: 'A/B testing and conversion optimization platform.', url: 'https://vwo.com/', image: 'https://picsum.photos/seed/vwo/600/400', dataAiHint: 'cro platform', pricing: 'Paid' },
            { name: 'Google Optimize', description: 'A/B testing tool (discontinued).', url: 'https://marketingplatform.google.com/about/optimize/', image: 'https://picsum.photos/seed/google-optimize/600/400', dataAiHint: 'google testing', pricing: 'Free' },
            { name: 'AB Tasty', description: 'Experience optimization and feature management.', url: 'https://www.abtasty.com/', image: 'https://picsum.photos/seed/abtasty/600/400', dataAiHint: 'feature management', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Analytics & Marketing Insights",
        icon: <BarChart3 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Analytics 4', description: 'Web analytics service.', url: 'https://marketingplatform.google.com/about/analytics/', image: 'https://picsum.photos/seed/ga4/600/400', dataAiHint: 'web analytics', pricing: 'Free' },
            { name: 'Amplitude', description: 'Product analytics for data-driven teams.', url: 'https://amplitude.com/', image: 'https://picsum.photos/seed/amplitude/600/400', dataAiHint: 'product analytics', pricing: 'Freemium' },
            { name: 'Mixpanel', description: 'Product analytics for converting and retaining users.', url: 'https://mixpanel.com/', image: 'https://picsum.photos/seed/mixpanel/600/400', dataAiHint: 'user analytics', pricing: 'Freemium' },
            { name: 'Heap', description: 'Digital insights for everyone.', url: 'https://heap.io/', image: 'https://picsum.photos/seed/heap/600/400', dataAiHint: 'digital insights', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Customer Behavior Analysis",
        icon: <Eye className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'FullStory', description: 'Digital experience intelligence.', url: 'https://www.fullstory.com/', image: 'https://picsum.photos/seed/fullstory/600/400', dataAiHint: 'session replay', pricing: 'Paid' },
            { name: 'Mouseflow', description: 'Behavior analytics software.', url: 'https://mouseflow.com/', image: 'https://picsum.photos/seed/mouseflow/600/400', dataAiHint: 'behavior analytics', pricing: 'Freemium' },
            { name: 'Inspectlet', description: 'Session recording and heatmaps.', url: 'https://www.inspectlet.com/', image: 'https://picsum.photos/seed/inspectlet/600/400', dataAiHint: 'user recording', pricing: 'Freemium' },
            { name: 'Lucky Orange', description: 'Conversion optimization and analytics.', url: 'https://www.luckyorange.com/', image: 'https://picsum.photos/seed/luckyorange/600/400', dataAiHint: 'cro tools', pricing: 'Paid' },
        ]
    },
    {
        title: "AI CRM & Marketing AI",
        icon: <UsersIcon className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Salesforce Einstein', description: 'AI for the world\'s #1 CRM.', url: 'https://www.salesforce.com/products/einstein/', image: 'https://picsum.photos/seed/einstein-crm/600/400', dataAiHint: 'salesforce ai', pricing: 'Paid' },
            { name: 'HubSpot AI', description: 'AI-powered tools for the HubSpot platform.', url: 'https://www.hubspot.com/artificial-intelligence', image: 'https://picsum.photos/seed/hubspot-crm/600/400', dataAiHint: 'hubspot tools', pricing: 'Freemium' },
            { name: 'Zoho Zia', description: 'An AI-powered assistant for your Zoho apps.', url: 'https://www.zoho.com/zia/', image: 'https://picsum.photos/seed/zia-crm/600/400', dataAiHint: 'zoho assistant', pricing: 'Freemium' },
            { name: 'Affinity', description: 'Relationship intelligence platform.', url: 'https://www.affinity.co/', image: 'https://picsum.photos/seed/affinity-crm/600/400', dataAiHint: 'relationship intelligence', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Brand Monitoring Tools",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Brandwatch', description: 'Consumer intelligence and social media listening.', url: 'https://www.brandwatch.com/', image: 'https://picsum.photos/seed/brandwatch-monitor/600/400', dataAiHint: 'consumer intelligence', pricing: 'Paid' },
            { name: 'Talkwalker', description: 'Consumer intelligence acceleration.', url: 'https://www.talkwalker.com/', image: 'https://picsum.photos/seed/talkwalker-monitor/600/400', dataAiHint: 'consumer insights', pricing: 'Paid' },
            { name: 'Mention', description: 'Social media and web monitoring.', url: 'https://mention.com/', image: 'https://picsum.photos/seed/mention-monitor/600/400', dataAiHint: 'web monitoring', pricing: 'Freemium' },
            { name: 'Brand24', description: 'Social media monitoring tool.', url: 'https://brand24.com/', image: 'https://picsum.photos/seed/brand24-monitor/600/400', dataAiHint: 'media monitoring', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Sentiment Analysis Tools",
        icon: <ThumbsUp className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'MonkeyLearn', description: 'Text analysis with machine learning.', url: 'https://monkeylearn.com/', image: 'https://picsum.photos/seed/monkeylearn/600/400', dataAiHint: 'text analysis', pricing: 'Freemium' },
            { name: 'Lexalytics', description: 'Text analytics and sentiment analysis.', url: 'https://www.lexalytics.com/', image: 'https://picsum.photos/seed/lexalytics/600/400', dataAiHint: 'nlp', pricing: 'Paid' },
            { name: 'MeaningCloud', description: 'Text analytics APIs.', url: 'https://www.meaningcloud.com/', image: 'https://picsum.photos/seed/meaningcloud/600/400', dataAiHint: 'text apis', pricing: 'Freemium' },
            { name: 'Repustate', description: 'Sentiment analysis and text analytics API.', url: 'https://www.repustate.com/', image: 'https://picsum.photos/seed/repustate/600/400', dataAiHint: 'sentiment api', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Local SEO Tools",
        icon: <Store className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'BrightLocal', description: 'Local SEO tools for agencies and businesses.', url: 'https://www.brightlocal.com/', image: 'https://picsum.photos/seed/brightlocal/600/400', dataAiHint: 'local search', pricing: 'Paid' },
            { name: 'Whitespark', description: 'Local SEO tools and services.', url: 'https://whitespark.ca/', image: 'https://picsum.photos/seed/whitespark/600/400', dataAiHint: 'citation builder', pricing: 'Paid' },
            { name: 'Yext', description: 'Deliver official answers everywhere people search.', url: 'https://www.yext.com/', image: 'https://picsum.photos/seed/yext/600/400', dataAiHint: 'listings management', pricing: 'Paid' },
            { name: 'Moz Local', description: 'Local presence management.', url: 'https://moz.com/products/local', image: 'https://picsum.photos/seed/moz-local/600/400', dataAiHint: 'local seo', pricing: 'Paid' },
        ]
    },
    {
        title: "AI E-commerce SEO Tools",
        icon: <ShoppingCart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Syndicate', description: 'E-commerce SEO automation.', url: 'https://syndicate.so/', image: 'https://picsum.photos/seed/syndicate/600/400', dataAiHint: 'seo automation', pricing: 'Paid' },
            { name: 'Searchspring', description: 'Site search, merchandising, and personalization.', url: 'https://searchspring.com/', image: 'https://picsum.photos/seed/searchspring/600/400', dataAiHint: 'ecommerce search', pricing: 'Paid' },
            { name: 'Klevu', description: 'AI-powered product discovery.', url: 'https://www.klevu.com/', image: 'https://picsum.photos/seed/klevu/600/400', dataAiHint: 'product discovery', pricing: 'Paid' },
            { name: 'Shogun', description: 'Headless commerce and page builder.', url: 'https://getshogun.com/', image: 'https://picsum.photos/seed/shogun/600/400', dataAiHint: 'page builder', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Voice Search Optimization",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'AnswerThePublic', description: 'Visualize search questions.', url: 'https://answerthepublic.com/', image: 'https://picsum.photos/seed/atp-voice/600/400', dataAiHint: 'search questions', pricing: 'Freemium' },
            { name: 'Frase', description: 'AI content for voice search.', url: 'https://www.frase.io/', image: 'https://picsum.photos/seed/frase-voice/600/400', dataAiHint: 'voice content', pricing: 'Paid' },
            { name: 'STAT', description: 'Enterprise rank tracking for voice.', url: 'https://getstat.com/', image: 'https://picsum.photos/seed/stat-voice/600/400', dataAiHint: 'rank tracking', pricing: 'Paid' },
            { name: 'Yext', description: 'Answers for voice search.', url: 'https://www.yext.com/', image: 'https://picsum.photos/seed/yext-voice/600/400', dataAiHint: 'search answers', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Growth Hacking Tools",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Phantombuster', description: 'Automate any action you can do on the web.', url: 'https://phantombuster.com/', image: 'https://picsum.photos/seed/phantombuster/600/400', dataAiHint: 'web automation', pricing: 'Freemium' },
            { name: 'Lemlist', description: 'Sales automation and cold email software.', url: 'https://www.lemlist.com/', image: 'https://picsum.photos/seed/lemlist/600/400', dataAiHint: 'cold email', pricing: 'Paid' },
            { name: 'ManyChat', description: 'Chat Marketing platform.', url: 'https://manychat.com/', image: 'https://picsum.photos/seed/manychat/600/400', dataAiHint: 'messenger bot', pricing: 'Freemium' },
            { name: 'OptinMonster', description: 'Lead generation software.', url: 'https://optinmonster.com/', image: 'https://picsum.photos/seed/optinmonster/600/400', dataAiHint: 'popup builder', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Marketing Strategy Tools",
        icon: <GanttChartSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Plannable', description: 'AI-powered marketing strategy planner.', url: 'https://plannable.io/', image: 'https://picsum.photos/seed/plannable/600/400', dataAiHint: 'strategy planner', pricing: 'Paid' },
            { name: 'Crayon', description: 'Market and competitive intelligence software.', url: 'https://www.crayon.co/', image: 'https://picsum.photos/seed/crayon-strategy/600/400', dataAiHint: 'competitive intel', pricing: 'Paid' },
            { name: 'Aha!', description: 'Product roadmap software.', url: 'https://www.aha.io/', image: 'https://picsum.photos/seed/aha/600/400', dataAiHint: 'product roadmap', pricing: 'Paid' },
            { name: 'Airtable', description: 'Low-code platform for building collaborative apps.', url: 'https://www.airtable.com/', image: 'https://picsum.photos/seed/airtable-strategy/600/400', dataAiHint: 'marketing calendar', pricing: 'Freemium' },
        ]
    }
];

// Add dummy entries for remaining categories to meet the 30-category requirement.
const placeholderCategories: ToolCategory[] = [
    // This can be filled in with real categories and tools later.
];

marketingSeoToolData.push(...placeholderCategories);
