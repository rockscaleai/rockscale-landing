
'use client';

import dynamic from 'next/dynamic';

const GlobalPresence = dynamic(() => import('@/components/about/GlobalPresence'), {
  ssr: false,
});

const GlobalPresenceClient = () => {
  return <GlobalPresence />;
};

export default GlobalPresenceClient;
