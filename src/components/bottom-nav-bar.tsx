
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
        // The settings tab on the homepage should map to the profile icon
        if (tab === 'settings') return 'profile';
        return 'home';
    }
    if (pathname.startsWith('/community/my-profile')) return 'profile';
    if (pathname.startsWith('/community')) return 'community';
    // Add more conditions if other main tabs are added
    return '';
  };

  const activeTab = getActiveTab();
  
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    router.push(path);
  };

  const NavItem = ({ href, path, icon: Icon, label, currentActiveTab }: { href: string, path: string, icon: React.ElementType, label: string, currentActiveTab: string }) => {
    const isActive = currentActiveTab === path;
    return (
        <Link href={href} onClick={(e) => handleNavigation(e, href)} className="flex flex-col items-center justify-center h-full rounded-none flex-1 group">
            <div className={cn("p-3 rounded-full transition-all duration-300", isActive ? 'bg-primary/10' : 'group-hover:bg-primary/5')}>
                <Icon className={cn("w-6 h-6 transition-colors", isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary')} />
            </div>
            <span className={cn("text-xs font-medium transition-colors", isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary')}>{label}</span>
        </Link>
    );
  };


  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 w-full max-w-md mx-auto z-50">
        <div className="absolute inset-x-0 bottom-0 h-full bg-card/80 backdrop-blur-xl border-t border-border/50 shadow-t-lg">
          <div className="flex justify-around items-center h-full">
            <NavItem href="/?tab=home" path="home" icon={Home} label="Home" currentActiveTab={activeTab} />
            <NavItem href="/?tab=tools" path="tools" icon={LayoutGrid} label="Tools" currentActiveTab={activeTab} />
            <NavItem href="/community" path="community" icon={Users} label="Community" currentActiveTab={activeTab} />
            <NavItem href="/community/my-profile" path="profile" icon={UserCircle} label="Profile" currentActiveTab={activeTab} />
          </div>
        </div>
    </div>
  );
}
