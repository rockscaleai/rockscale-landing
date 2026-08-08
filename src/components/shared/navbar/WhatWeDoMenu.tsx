'use client';
import { cn } from '@/utils/cn';
import Link from 'next/link';

const menuData = [
  {
    title: 'CORE SERVICES',
    links: [
      { label: 'AI Strategy & Roadmap', href: '/services#strategy' },
      { label: 'AI-Powered Software Development', href: '/services#development' },
      { label: 'Data Engineering & Analytics', href: '/services#data' },
      { label: 'Forward Deployed Engineer', href: '/services#fde' },
    ],
  },
  {
    title: 'ACCELERATORS',
    links: [
      { label: 'Generative Driven Development™', href: '/services#gendd' },
      { label: 'AI Data Readiness & Governance Assessment', href: '/services#assessment' },
      { label: 'AI Solution Accelerator', href: '/services#accelerator' },
      { label: 'RAG Systems', href: '/services#rag' },
      { label: 'GenIQ', href: '/services#geniq' },
    ],
  },
  {
    title: 'AI TRAINING & WORKSHOPS',
    links: [
      { label: 'AI Training for Teams', href: '/services/ai-training' },
      { label: 'Executive AI Training', href: '/services#executive' },
      { label: 'AI Roadmap & ROI Workshop', href: '/services#roi-workshop' },
      { label: 'GenDD Training Workshop', href: '/services#gendd-workshop' },
    ],
  },
];

const WhatWeDoMenu = ({
  menuDropdownId,
  setMenuDropdownId,
}: {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}) => {
  const handleClose = () => setMenuDropdownId(null);

  return (
    <div>
      <div
        className={cn(
          'dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-3 w-full min-w-[1050px] -translate-x-1/2 bg-transparent',
          menuDropdownId === 'whatwedo-mega-menu' ? '!pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="whatwedo-mega-menu"
        className={cn(
          'dropdown-menu dark:bg-background-6 border-stroke-1 dark:border-background-7 pointer-events-none absolute top-full left-1/2 z-50 mt-2 flex w-full -translate-x-1/2 rounded-[20px] border bg-white p-10 pb-12 opacity-0 transition-all duration-300 md:w-[1050px]',
          menuDropdownId === 'whatwedo-mega-menu'
            ? '!pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 w-full">
          {menuData.map((column, idx) => (
            <div key={idx} className="flex flex-col">
              <h4 className="text-[12px] font-bold tracking-widest text-secondary/40 dark:text-accent/40 uppercase mb-8">
                {column.title}
              </h4>
              <ul className="flex flex-col space-y-6">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      onClick={handleClose}
                      className="text-secondary/80 dark:text-accent/80 hover:text-[#7E57FD] dark:hover:text-[#7E57FD] transition-colors text-[15px] font-medium leading-relaxed block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

WhatWeDoMenu.displayName = 'WhatWeDoMenu';
export default WhatWeDoMenu;
