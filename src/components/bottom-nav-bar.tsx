'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Home, LayoutGrid, Users, UserCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function BottomNavBar() {
  const router = useRouter();
  const pathname = usePathname();

  const getActiveTab = () => {
    if (pathname === '/') return 'home';
    if (pathname.startsWith('/community/my-profile')) return 'profile';
    if (pathname.startsWith('/community')) return 'community';
    // Add more conditions if other main tabs are added
    return '';
  };

  const activeTab = getActiveTab();

  const handleToolsClick = () => {
    // If we are already on the homepage, just switch tabs.
    if (pathname === '/') {
        // You would need a way to communicate to the page to switch tabs.
        // This is a simple example, a more robust solution might use context.
        const toolsTab = document.querySelector('button[data-radix-collection-item][value="tools"]') as HTMLButtonElement | null;
        toolsTab?.click();
    } else {
        router.push('/?tab=tools');
    }
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full max-w-md mx-auto bg-card/80 backdrop-blur-xl border-t border-border/50 shadow-t-lg z-50">
      <div className="flex justify-around items-center h-16">
        <Link href="/" passHref>
          <Button variant="ghost" className="flex flex-col items-center h-full rounded-none">
            <Home className={cn("w-6 h-6", activeTab === 'home' ? 'text-primary' : 'text-muted-foreground')} />
            <span className={cn("text-xs", activeTab === 'home' ? 'text-primary' : 'text-muted-foreground')}>Home</span>
          </Button>
        </Link>
        <Button variant="ghost" className="flex flex-col items-center h-full rounded-none" onClick={handleToolsClick}>
            <LayoutGrid className={cn("w-6 h-6", activeTab === 'tools' ? 'text-primary' : 'text-muted-foreground')} />
            <span className={cn("text-xs", activeTab === 'tools' ? 'text-primary' : 'text-muted-foreground')}>Tools</span>
        </Button>
        <Link href="/community" passHref>
          <Button variant="ghost" className="flex flex-col items-center h-full rounded-none">
            <Users className={cn("w-6 h-6", activeTab === 'community' ? 'text-primary' : 'text-muted_foreground')} />
            <span className={cn("text-xs", activeTab === 'community' ? 'text-primary' : 'text-muted-foreground')}>Community</span>
          </Button>
        </Link>
        <Link href="/community/my-profile" passHref>
            <Button variant="ghost" className="flex flex-col items-center h-full rounded-none">
                <UserCircle className={cn("w-6 h-6", activeTab === 'profile' ? 'text-primary' : 'text-muted-foreground')} />
                <span className={cn("text-xs", activeTab === 'profile' ? 'text-primary' : 'text-muted-foreground')}>Profile</span>
            </Button>
        </Link>
      </div>
    </nav>
  );
}

    