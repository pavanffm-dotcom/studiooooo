'use client';

import { useUser } from '@/firebase';
import AuthPage from '@/app/auth/page';
import { ReactNode } from 'react';

export function AuthGate({ children }: { children: ReactNode }) {
  const { user, isUserLoading } = useUser();

  // Don't show a loading screen.
  // Immediately show the AuthPage if the user object isn't available yet.
  // If the user is already logged in, the `onAuthStateChanged` listener will
  // trigger a re-render and the `children` will be displayed.
  if (!user) {
    return <AuthPage />;
  }

  // If the user is loaded, show the main application.
  return <>{children}</>;
}
