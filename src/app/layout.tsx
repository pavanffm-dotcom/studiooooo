
'use client';

import React, { ReactNode } from 'react';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseProviderWrapper } from '@/firebase/client-provider-wrapper';
import { LanguageProvider } from '@/lib/language';
import { UserPreferencesProvider } from '@/context/user-preferences-context';
import { ThemeProvider } from '@/context/theme-provider';

// This metadata is now static as it cannot be exported from a client component.
// If you need dynamic metadata, you would use the `generateMetadata` export
// in a server component further up the tree if possible.
// export const metadata: Metadata = {
//   title: 'AI Atlas',
//   description: 'Your Cute Guide to Creative AI Tools',
// };

function GlobalProviders({ children }: { children: ReactNode }) {
  return (
    <FirebaseProviderWrapper>
      <UserPreferencesProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </UserPreferencesProvider>
    </FirebaseProviderWrapper>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-size-medium">
      <head>
        <title>AI Atlas</title>
        <meta name="description" content="Your Cute Guide to Creative AI Tools" />
        <meta name="application-name" content="AI Atlas" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AI Atlas" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#8A2BE2" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#FFFFFF" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <NoScrollbarStyle />
      </head>
      <body className="font-body antialiased">
        <LanguageProvider>
           <GlobalProviders>
              {children}
            </GlobalProviders>
        </LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}

const NoScrollbarStyle = () => <style>{`
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
`}</style>;
