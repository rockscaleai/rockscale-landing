const fs = require('fs');
const path = require('path');

const content = `
'use client';
import { cn } from '@/utils/cn';
import Link from 'next/link';

const CoreServices = [
  { 
    label: 'AI Strategy & Roadmap', 
    href: '/services/ai-strategy',
    desc: 'Assess maturity and build an execution plan.',
    icon: 'ns-shape-42',
    color: '#7E57FD'
  },
  { 
    label: 'AI Software Development', 
    href: '/services/ai-powered-software-development',
    desc: 'Custom ML pipelines and LLM applications.',
    icon: 'ns-shape-41',
    color: '#25CA22'
  },
  { 
    label: 'Data Engineering', 
    href: '/services/data-engineering-analytics',
    desc: 'Modernize pipelines and vector databases.',
    icon: 'ns-shape-35',
    color: '#f97316'
  },
  { 
    label: 'Forward Deployed Engineer', 
    href: '/services/forward-deployed-engineer',
    desc: 'Elite AI engineers embedded in your team.',
    icon: 'ns-shape-33',
    color: '#3b82f6'
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
          'dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-3 w-full min-w-[900px] -translate-x-1/2 bg-transparent',
          menuDropdownId === 'whatwedo-mega-menu' ? '!pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="whatwedo-mega-menu"
        className={cn(
          'dropdown-menu pointer-events-none absolute top-full left-1/2 z-50 mt-2 flex w-full -translate-x-1/2 rounded-[24px] border border-white/10 bg-[#061225]/90 backdrop-blur-2xl p-8 opacity-0 shadow-[0_30px_60px_rgba(0,0,0,0.4)] transition-all duration-300 md:w-[900px]',
          menuDropdownId === 'whatwedo-mega-menu'
            ? '!pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>

        <div className="flex w-full gap-8">
          {/* Left Column: Core Services (Grid of 2x2) */}
          <div className="w-2/3 pr-4 border-r border-white/10">
            <h4 className="text-[11px] font-bold tracking-widest text-white/40 uppercase mb-6 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
              Core Services
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-8">
              {CoreServices.map((service, idx) => (
                <Link key={idx} href={service.href} onClick={handleClose} className="group block">
                   <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-white/10" style={{ color: service.color }}>
                         <span className={\`\${service.icon} text-[22px]\`} />
                      </div>
                      <div>
                         <p className="text-[14px] font-bold text-white group-hover:text-white/90 transition-colors mb-1">{service.label}</p>
                         <p className="text-[13px] text-white/50 leading-snug">{service.desc}</p>
                      </div>
                   </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10">
               <Link href="/services" onClick={handleClose} className="text-[13px] font-bold uppercase tracking-wider text-white/60 hover:text-white transition-colors flex items-center gap-2 w-fit">
                  View All Services <span>→</span>
               </Link>
            </div>
          </div>

          {/* Right Column: Training Featured Card */}
          <div className="w-1/3">
             <h4 className="text-[11px] font-bold tracking-widest text-white/40 uppercase mb-6 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-rose-500/50" />
              Enablement
            </h4>
            
            <Link href="/services/ai-training" onClick={handleClose} className="group block relative overflow-hidden rounded-[16px] bg-white/5 border border-white/10 p-6 transition-all duration-500 hover:bg-white/10 hover:border-white/20 h-full max-h-[220px]">
               <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-rose-500/20 blur-[40px] transition-all duration-500 group-hover:bg-rose-500/30" />
               
               <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <span className="badge badge-green bg-white/10 text-white border-none mb-4 uppercase tracking-wider text-[10px] font-bold w-fit">Corporate Training</span>
                    <p className="text-[16px] font-bold text-white mb-2 leading-snug">Executive & Team AI Training</p>
                    <p className="text-[13px] text-white/60 leading-relaxed">Highly technical curriculum to upskill your entire organization for the AI era.</p>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-4 text-[12px] font-bold uppercase tracking-wider text-rose-400 group-hover:text-rose-300 transition-colors">
                     Explore Programs <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
               </div>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};

WhatWeDoMenu.displayName = 'WhatWeDoMenu';
export default WhatWeDoMenu;
`

fs.writeFileSync(path.join(__dirname, 'src/components/shared/navbar/WhatWeDoMenu.tsx'), content);
console.log('Redesigned WhatWeDoMenu.');
