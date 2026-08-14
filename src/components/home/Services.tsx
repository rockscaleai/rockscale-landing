'use client';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    id: '1',
    icon: 'ns-shape-8',
    title: 'AI Strategy & Roadmap',
    description:
      'Understand where AI can create real business value. We help you identify high-value opportunities, assess readiness, and build practical AI roadmaps that move from strategy to production.',
    phase: 'THINK',
    href: '/services/ai-strategy-roadmap',
    bgClass: 'from-[#7E57FD]/10 to-transparent',
    textClass: 'text-[#7E57FD]',
    borderClass: 'group-hover:border-[#7E57FD]/40',
  },
  {
    id: '2',
    icon: 'ns-shape-23',
    title: 'AI-Powered Software Development',
    description:
      'Turn high-value opportunities into production-ready software. We build AI applications, agents, copilots and intelligent workflows custom-built to solve real business problems at scale.',
    phase: 'BUILD',
    href: '/services/ai-powered-software-development',
    bgClass: 'from-ns-green/10 to-transparent',
    textClass: 'text-ns-green',
    borderClass: 'group-hover:border-ns-green/40',
  },
  {
    id: '3',
    icon: 'ns-shape-41',
    title: 'Data Engineering & Analytics',
    description:
      'Build the data foundation that makes intelligent systems reliable. We create robust pipelines, modern data warehouses, analytics platforms and AI-ready data foundations.',
    phase: 'POWER',
    href: '/services/data-engineering-analytics',
    bgClass: 'from-blue-500/10 to-transparent',
    textClass: 'text-blue-500',
    borderClass: 'group-hover:border-blue-500/40',
  },
  {
    id: '4',
    icon: 'ns-shape-35',
    title: 'Forward Deployed Engineer',
    description:
      'Put experienced engineers directly inside your organization. Our specialists embed with your team to accelerate implementation, solve hard problems and move from idea to production.',
    phase: 'DEPLOY',
    href: '/services/forward-deployed-engineer',
    bgClass: 'from-orange-500/10 to-transparent',
    textClass: 'text-orange-500',
    borderClass: 'group-hover:border-orange-500/40',
  },
];

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.service-header', {
        scrollTrigger: {
          trigger: '.service-header',
          start: 'top 85%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
      });

      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: '.service-grid',
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative flex w-full flex-col overflow-hidden bg-secondary pt-24 md:pt-32 pb-24 lg:pb-32"
    >
      {/* Premium Background FX */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute -top-[20%] -left-[10%] h-[70%] w-[50%] rounded-full bg-[#7E57FD]/10 blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] h-[70%] w-[50%] rounded-full bg-ns-green/10 blur-[120px]" />
      </div>

      <div className="main-container relative z-10 flex h-full flex-col">
        {/* Header */}
        <div className="service-header mx-auto mb-16 max-w-[800px] space-y-6 text-center md:mb-24">
          <span className="badge badge-green bg-ns-green/10 text-ns-green border-ns-green/20 backdrop-blur-md">
            Core Services
          </span>
          <div className="space-y-4">
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl tracking-tight font-medium">
              What we build for you.
            </h2>
            <p className="mx-auto max-w-[660px] text-white/60 text-lg md:text-xl leading-relaxed">
              From AI strategy and roadmaps to production-ready software and embedded engineering — our four core pillars 
              cover every stage of your AI transformation journey.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="service-grid mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((service) => (
            <Link key={service.id} href={service.href} className="service-card group block h-full outline-none">
              <div className={`relative flex h-full flex-col overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] p-8 md:p-10 xl:p-12 transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-white/[0.03] ${service.borderClass} hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]`}>
                
                {/* Subtle Hover Gradient Background */}
                <div className={`absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-gradient-to-br ${service.bgClass}`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Card Header (Icon & Phase) */}
                  <div className="flex items-start justify-between w-full mb-10">
                    <div className="flex size-16 md:size-20 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <span className={`${service.icon} text-3xl md:text-4xl ${service.textClass}`} />
                    </div>
                    {service.phase && (
                      <span className={`text-[11px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full bg-white/5 border border-white/10 ${service.textClass}`}>
                        {service.phase}
                      </span>
                    )}
                  </div>
                  
                  {/* Card Body */}
                  <div className="space-y-4 flex-1">
                    <h3 className="text-2xl md:text-3xl font-medium text-white">{service.title}</h3>
                    <p className="text-white/60 leading-relaxed text-base md:text-lg">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Card Footer */}
                  <div className="pt-8 mt-8 flex items-center justify-between border-t border-white/5 group-hover:border-white/10 transition-colors">
                    <span className="text-white/70 font-medium text-sm group-hover:text-white transition-colors">Explore service</span>
                    <div className="flex size-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/50 group-hover:bg-white/10 group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

Services.displayName = 'Services';
export default Services;
