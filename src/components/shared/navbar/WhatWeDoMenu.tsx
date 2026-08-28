'use client';
import { cn } from '@/utils/cn';
import Link from 'next/link';

const menuData = [
          {
            title: 'CORE SERVICES',
            links: [
              { label: 'AI Strategy & Roadmap', href: '/services/ai-strategy' },
              { label: 'AI-Powered Software Development', href: '/services/ai-powered-software-development' },
              { label: 'Data Engineering & Analytics', href: '/services/data-engineering-analytics' },
              { label: 'Forward Deployed Engineer', href: '/services/forward-deployed-engineer' },
            ],
          },
      {
        title: 'AI TRAINING & WORKSHOPS',
        links: [
          { label: 'Corporate & Executive AI Training', href: '/services/ai-training' },
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
          'dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-3 w-full min-w-[700px] -translate-x-1/2 bg-transparent',
          menuDropdownId === 'whatwedo-mega-menu' ? '!pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="whatwedo-mega-menu"
        className={cn(
          'dropdown-menu pointer-events-none absolute top-full left-1/2 z-50 mt-2 flex w-full -translate-x-1/2 rounded-[20px] border border-white/10 bg-black/40 backdrop-blur-xl p-10 pb-12 opacity-0 shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300 md:w-[700px]',
          menuDropdownId === 'whatwedo-mega-menu'
            ? '!pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 w-full">
          {menuData.map((column, idx) => (
            <div key={idx} className="flex flex-col">
              <h4 className="text-[12px] font-bold tracking-widest text-white/50 uppercase mb-8">
                {column.title}
              </h4>
              <ul className="flex flex-col space-y-6">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      onClick={handleClose}
                      className="text-white/90 hover:text-white transition-colors text-[15px] font-medium leading-relaxed block"
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
