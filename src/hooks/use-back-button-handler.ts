'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const useCustomBack = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Push a new state to the history stack when the component mounts
    // This ensures there's a state to pop when the back button is pressed.
    history.pushState(null, '', pathname);

    const handlePopState = (event: PopStateEvent) => {
        // Since we pushed a state, the user is still on the same page.
        // We need to push the state again so the next back press is also caught.
        history.pushState(null, '', pathname);

        // Check if we are on the home page.
        if (pathname === '/') {
            // If on the home page, show a confirmation dialog.
            const isConfirmed = window.confirm('Do you want to exit the app?');
            if (isConfirmed) {
                // If confirmed, allow the "real" back navigation to happen.
                // We go back twice because we pushed a state at the start of this handler.
                history.go(-2);
            }
        } else {
            // If not on the home page, navigate back within the app.
            router.back();
        }
    };

    window.addEventListener('popstate', handlePopState);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [pathname, router]);
};

export default useCustomBack;
