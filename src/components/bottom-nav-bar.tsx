
'use client';

import React from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Home, LayoutGrid, Users, UserCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function BottomNavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getActiveTab = () => {
    const tab = searchParams.get('tab');
    if (pathname === '/') {
        if (tab === 'tools') return 'tools';
        return 'home';
    }
    if (pathname.startsWith('/community/my-profile')) return 'profile';
    if (pathname.startsWith('/community')) return 'community';
    // Add more conditions if other main tabs are added
    return '';
  };

  const activeTab = getActiveTab();
  
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push('/?tab=home');
  };

  const handleToolsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/?tab=tools');
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full max-w-md mx-auto bg-card/80 backdrop-blur-xl border-t border-border/50 shadow-t-lg z-50">
      <div className="flex justify-around items-center h-16">
        <Link href="/?tab=home" onClick={handleHomeClick} className="flex flex-col items-center justify-center h-full rounded-none flex-1">
            <Home className={cn("w-6 h-6", activeTab === 'home' ? 'text-primary' : 'text-muted-foreground')} />
            <span className={cn("text-xs", activeTab === 'home' ? 'text-primary' : 'text-muted-foreground')}>Home</span>
        </Link>
        <Button variant="ghost" className="flex flex-col items-center h-full rounded-none flex-1" onClick={handleToolsClick}>
            <LayoutGrid className={cn("w-6 h-6", activeTab === 'tools' ? 'text-primary' : 'text-muted-foreground')} />
            <span className={cn("text-xs", activeTab === 'tools' ? 'text-primary' : 'text-muted-foreground')}>Tools</span>
        </Button>
        <Link href="/community" className="flex flex-col items-center justify-center h-full rounded-none flex-1">
            <Users className={cn("w-6 h-6", activeTab === 'community' ? 'text-primary' : 'text-muted-foreground')} />
            <span className={cn("text-xs", activeTab === 'community' ? 'text-primary' : 'text-muted-foreground')}>Community</span>
        </Link>
        <Link href="/community/my-profile" className="flex flex-col items-center justify-center h-full rounded-none flex-1">
            <UserCircle className={cn("w-6 h-6", activeTab === 'profile' ? 'text-primary' : 'text-muted-foreground')} />
            <span className={cn("text-xs", activeTab === 'profile' ? 'text-primary' : 'text-muted-foreground')}>Profile</span>
        </Link>
      </div>
    </nav>
  );
}
