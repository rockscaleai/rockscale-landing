'use client';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    id: '1',
    layer: 'layer-1',
    icon: 'ns-shape-8',
    title: 'AI Strategy & Roadmap',
    description:
      'Understand where AI can create real business value. We help you identify high-value opportunities, assess readiness, and build practical AI roadmaps that move from strategy to production.',
    phase: 'THINK',
    href: '/services/ai-strategy-roadmap',
  },
  {
    id: '2',
    layer: 'layer-2',
    icon: 'ns-shape-23',
    title: 'AI-Powered Software Development',
    description:
      'Turn high-value opportunities into production-ready software. We build AI applications, agents, copilots and intelligent workflows custom-built to solve real business problems at scale.',
    phase: 'BUILD',
    href: '/services/ai-powered-software-development',
  },
  {
    id: '3',
    layer: 'layer-3',
    icon: 'ns-shape-41',
    title: 'Data Engineering & Analytics',
    description:
      'Build the data foundation that makes intelligent systems reliable. We create robust pipelines, modern data warehouses, analytics platforms and AI-ready data foundations.',
    phase: 'POWER',
    href: '/services/data-engineering-analytics',
  },
  {
    id: '4',
    layer: 'layer-4',
    icon: 'ns-shape-35',
    title: 'Forward Deployed Engineer',
    description:
      'Put experienced engineers directly inside your organization. Our specialists embed with your team to accelerate implementation, solve hard problems and move from idea to production.',
    phase: 'DEPLOY',
    href: '/services/forward-deployed-engineer',
  },
];

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Standard entrance animations (no pinning, no scrubbing) — 100% native scroll performance
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
      className="relative flex w-full flex-col overflow-hidden bg-secondary pt-20 md:pt-24 pb-20"
    >
      {/* Lightweight background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_10%,rgba(100,217,253,0.07),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_80%,rgba(126,87,253,0.07),transparent_60%)]" />
      </div>

      <div className="main-container relative z-10 flex h-full flex-col">
        {/* Header */}
        <div className="service-header mx-auto mb-16 max-w-[750px] space-y-5 text-center">
          <span className="badge badge-green bg-ns-green/20 text-ns-green border-ns-green/30">Services</span>
          <div>
            <h2 className="mb-4 text-white">What we build for you.</h2>
            <p className="mx-auto max-w-[600px] text-white/70">
              From AI strategy and roadmaps to production-ready software and embedded engineering — our four core services
              cover every stage of your AI transformation journey.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="service-grid mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Card — removed backdrop-blur (very expensive during scroll), use solid semi-transparent bg instead
const ServiceCard = ({ service }: { service: Omit<typeof services[0], 'layer'> }) => {
  const CardWrapper = service.href ? 'a' : 'div';
  const cardProps = service.href ? { href: service.href } : {};

  return (
    <CardWrapper
      {...cardProps}
      className="group relative flex h-full flex-col space-y-5 rounded-[24px] border border-white/10 bg-white/8 p-8 transition-all duration-300 ease-out hover:bg-white/12 hover:border-white/20 hover:scale-[1.02] cursor-pointer">
      <div className="flex items-start justify-between w-full">
        <span className={`${service.icon} text-white/90 text-[52px]`} />
        {service.phase && (
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/20">
            {service.phase}
          </span>
        )}
      </div>
      <div className="space-y-3 relative z-10 flex-1">
        <h5 className="text-white max-sm:text-heading-6">{service.title}</h5>
        <p className="text-white/70 leading-relaxed text-sm md:text-base">{service.description}</p>
      </div>
      {service.href && (
        <div className="pt-2">
          <span className="text-white/80 text-sm font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
            Learn more
            <span className="ns-shape-30 text-[16px]" />
          </span>
        </div>
      )}
    </CardWrapper>
  );
};

export default Services;
