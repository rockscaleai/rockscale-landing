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
    title: 'Custom AI Solutions',
    description:
      'Design and build bespoke AI applications — from GenAI copilots and LLM-powered tools to document intelligence and automated workflows.',
  },
  {
    id: '2',
    layer: 'layer-1',
    icon: 'ns-shape-35',
    title: 'AI Copilots & LLM Integration',
    description:
      'Embed AI assistants into your products and operations using RAG, fine-tuning, and multi-agent frameworks built on leading foundation models.',
  },
  {
    id: '3',
    layer: 'layer-2',
    icon: 'ns-shape-41',
    title: 'Data Engineering',
    description:
      'Build the data foundation your AI needs — robust ELT/ETL pipelines, modern data warehouses, and governed data platforms at scale.',
  },
  {
    id: '4',
    layer: 'layer-2',
    icon: 'ns-shape-19',
    title: 'Business Intelligence',
    description:
      'Move beyond reporting to predictive analytics — ML-driven dashboards, customer segmentation, and forecasting models grounded in your data.',
  },
  {
    id: '5',
    layer: 'layer-3',
    icon: 'ns-shape-31',
    title: 'Cloud Infrastructure',
    description:
      'Architect and manage secure, scalable cloud environments on AWS, GCP and Azure — with full MLOps pipelines for reliable model deployment.',
  },
  {
    id: '6',
    layer: 'layer-3',
    icon: 'ns-shape-21',
    title: 'AI Strategy & Consulting',
    description:
      'Navigate your AI transformation with confidence — AI readiness assessments, vendor selection, compliance roadmaps, and executive alignment.',
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
              From AI-powered copilots to enterprise data infrastructure — our six core service areas
              cover every layer of your AI transformation.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="service-grid mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
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
  return (
    <div className="group relative flex h-full flex-col space-y-5 rounded-[24px] border border-white/10 bg-white/8 p-8 transition-colors duration-300 ease-out hover:bg-white/12 hover:border-white/20">
      <div className="w-full">
        <span className={`${service.icon} text-white/90 text-[52px]`} />
      </div>
      <div className="space-y-3 relative z-10">
        <h5 className="text-white max-sm:text-heading-6">{service.title}</h5>
        <p className="text-white/70 leading-relaxed text-sm md:text-base">{service.description}</p>
      </div>
    </div>
  );
};

export default Services;
