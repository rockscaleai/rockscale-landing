'use client';
import RevealAnimation from '../animation/RevealAnimation';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    id: '01',
    title: 'AI Strategy & Roadmap',
    description: 'Identify high-value AI opportunities, assess technical readiness, and build practical deployment roadmaps tailored to your enterprise goals.',
    phase: 'THINK',
    href: '/services/ai-strategy-roadmap',
    color: '#25CA22',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )
  },
  {
    id: '02',
    title: 'AI-Powered Software Development',
    description: 'Turn high-value opportunities into production-ready systems. We build LLM applications, custom agents, and intelligent workflows.',
    phase: 'BUILD',
    href: '/services/ai-powered-software-development',
    color: '#7E57FD',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: '03',
    title: 'Data Engineering & Analytics',
    description: 'Construct the robust data foundations that make intelligent systems reliable. Modern pipelines, warehouses, and RAG architectures.',
    phase: 'POWER',
    href: '/services/data-engineering-analytics',
    color: '#25CA22',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  },
  {
    id: '04',
    title: 'Forward Deployed Engineer',
    description: 'Embed elite AI specialists directly into your organization to accelerate implementation and solve your hardest technical challenges.',
    phase: 'DEPLOY',
    href: '/services/forward-deployed-engineer',
    color: '#7E57FD',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
];

const Services = () => {
  return (
    <section className="relative overflow-hidden bg-[#061225] py-24 md:py-32 lg:py-40">
      
      {/* ── Background Noise & Ambient Glows ── */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40 mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.1]" />
      </div>
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-1/4 -left-1/4 h-[800px] w-[800px] rounded-full bg-[#7E57FD]/10 blur-[150px]" />
        <div className="absolute top-1/2 right-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-[#25CA22]/10 blur-[150px]" />
      </div>

      <div className="main-container relative z-10">
        {/* Header Section */}
        <div className="mx-auto mb-20 max-w-[800px] text-center md:mb-24">
          <RevealAnimation delay={0.1}>
            <div className="mb-6">
              <span className="badge badge-green-v2">Core Services</span>
            </div>
          </RevealAnimation>
          
          <RevealAnimation delay={0.2}>
            <h2 className="mb-6 text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-[64px] lg:leading-[1.1]">
              What we build for you.
            </h2>
          </RevealAnimation>
          
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[700px] text-lg leading-relaxed text-white/70 md:text-xl">
              From foundational AI strategy to production-ready multi-agent systems and embedded engineering — our four core pillars cover every stage of your AI transformation journey.
            </p>
          </RevealAnimation>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:gap-10">
          {services.map((service, index) => {
            const isGreen = service.color === '#25CA22';
            const hoverBgColor = isGreen ? 'group-hover:bg-[#25CA22]/5' : 'group-hover:bg-[#7E57FD]/5';
            const iconBgColor = isGreen ? 'bg-[#25CA22]/10' : 'bg-[#7E57FD]/10';
            const textColor = isGreen ? 'text-[#25CA22]' : 'text-[#7E57FD]';
            const borderColor = isGreen ? 'group-hover:border-[#25CA22]/30' : 'group-hover:border-[#7E57FD]/30';
            
            return (
              <RevealAnimation key={service.id} delay={0.2 + index * 0.1}>
                <Link href={service.href} className="group block h-full outline-none">
                  <div className={`relative flex h-full flex-col overflow-hidden rounded-[32px] border border-white/5 bg-white/[0.02] p-10 transition-all duration-500 ease-out hover:-translate-y-2 ${hoverBgColor} ${borderColor} hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]`}>
                    
                    {/* Top Section (Icon & Phase) */}
                    <div className="mb-12 flex items-start justify-between">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${iconBgColor} ${textColor} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                        {service.icon}
                      </div>
                      
                      <div className="flex flex-col items-end gap-2">
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${textColor} opacity-60`}>
                          Phase {service.id}
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold tracking-widest text-white backdrop-blur-md">
                          {service.phase}
                        </span>
                      </div>
                    </div>
                    
                    {/* Body Content */}
                    <div className="flex-1 space-y-4">
                      <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                        {service.title}
                      </h3>
                      <p className="text-lg leading-relaxed text-white/60">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Footer / CTA */}
                    <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-8 transition-colors group-hover:border-white/20">
                      <span className="text-sm font-medium tracking-wide text-white/50 transition-colors group-hover:text-white">
                        Explore service details
                      </span>
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 ${textColor} transition-all duration-300 group-hover:bg-white/10 group-hover:translate-x-1`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Decorative Background Lines */}
                    <svg className="absolute -bottom-10 -right-10 z-[-1] opacity-5 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-10" width="300" height="300" viewBox="0 0 100 100">
                      <path d="M0 100 L100 0 M20 100 L100 20 M40 100 L100 40 M60 100 L100 60 M80 100 L100 80" stroke="currentColor" strokeWidth="1" className={textColor} />
                    </svg>
                  </div>
                </Link>
              </RevealAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

Services.displayName = 'Services';
export default Services;
