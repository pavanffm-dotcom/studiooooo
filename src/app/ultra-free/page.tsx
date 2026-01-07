
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardTitle, CardContent } from '@/components/ui/card';

const ultraFreeTools = [
  {
    name: 'Free Tool 1',
    description: 'An amazing free tool for everyone.',
    url: '#',
    image: 'https://picsum.photos/seed/free-tool-1/600/400',
    dataAiHint: 'abstract tech'
  },
  {
    name: 'Free Tool 2',
    description: 'Another fantastic free resource.',
    url: '#',
    image: 'https://picsum.photos/seed/free-tool-2/600/400',
    dataAiHint: 'nature landscape'
  },
  {
    name: 'Free Tool 3',
    description: 'Get this awesome tool for free.',
    url: '#',
    image: 'https://picsum.photos/seed/free-tool-3/600/400',
    dataAiHint: 'city skyline'
  },
];

export default function UltraFreePage() {

  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      <div className="relative z-10 w-full max-w-sm pt-6 px-4">
        <header className="flex items-center gap-4">
          <Link href="/" passHref>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-sm">
              <ArrowLeft />
            </Button>
          </Link>
          <div className='flex items-center gap-2'>
            <Gift className="w-6 h-6 text-foreground" />
            <h1 className="text-2xl font-bold text-foreground">
              Ultra Free Tools
            </h1>
          </div>
        </header>
      </div>

      <main className="relative z-10 w-full max-w-sm flex-1 bg-card/80 backdrop-blur-3xl rounded-t-[2.5rem] shadow-2xl flex flex-col min-h-0 border-t-2 border-white/50 soft-shadow mt-6">
        <div className="flex-grow overflow-y-auto no-scrollbar p-4">
          <div className="space-y-4">
            {ultraFreeTools.map((tool, index) => (
              <a href={tool.url} key={tool.name} target="_blank" rel="noopener noreferrer" className="block group">
                <Card 
                  className="bg-white/80 border-none rounded-3xl soft-shadow transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg overflow-hidden"
                >
                    <div className="relative">
                        <Image
                            src={tool.image}
                            alt={tool.name}
                            width={600}
                            height={400}
                            className="w-full h-auto aspect-[16/9] object-cover"
                            data-ai-hint={tool.dataAiHint}
                        />
                    </div>
                  <CardContent className='p-4'>
                    <CardTitle className="text-lg font-bold text-foreground">{tool.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{tool.description}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
