'use client';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import LinkButton from '../ui/button/LinkButton';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    id: '1',
    layer: 'layer-1', // Foreground
    icon: 'ns-shape-8',
    title: 'Custom AI Solutions',
    description:
      'Design and build bespoke AI applications — from GenAI copilots and LLM-powered tools to document intelligence and automated workflows.',
  },
  {
    id: '2',
    layer: 'layer-1', // Foreground
    icon: 'ns-shape-35',
    title: 'AI Copilots & LLM Integration',
    description:
      'Embed AI assistants into your products and operations using RAG, fine-tuning, and multi-agent frameworks built on leading foundation models.',
  },
  {
    id: '3',
    layer: 'layer-2', // Middle
    icon: 'ns-shape-41',
    title: 'Data Engineering',
    description:
      'Build the data foundation your AI needs — robust ELT/ETL pipelines, modern data warehouses, and governed data platforms at scale.',
  },
  {
    id: '4',
    layer: 'layer-2', // Middle
    icon: 'ns-shape-19',
    title: 'Business Intelligence',
    description:
      'Move beyond reporting to predictive analytics — ML-driven dashboards, customer segmentation, and forecasting models grounded in your data.',
  },
  {
    id: '5',
    layer: 'layer-3', // Background
    icon: 'ns-shape-31',
    title: 'Cloud Infrastructure',
    description:
      'Architect and manage secure, scalable cloud environments on AWS, GCP and Azure — with full MLOps pipelines for reliable model deployment.',
  },
  {
    id: '6',
    layer: 'layer-3', // Background
    icon: 'ns-shape-21',
    title: 'AI Strategy & Consulting',
    description:
      'Navigate your AI transformation with confidence — AI readiness assessments, vendor selection, compliance roadmaps, and executive alignment.',
  },
];

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Setup timeline for pinning and scrolling
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=150%', // 1.5x viewport height scrolling duration
          pin: true,
          scrub: 1.5,
        },
      });

      // 1. Animate header in quickly
      tl.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      );

      // We want all cards to start below screen and float up
      // Layer 3 (Background) - Slowest
      tl.fromTo(
        '.layer-3',
        { y: 600, opacity: 0, rotation: -1, scale: 0.95 },
        { y: 0, opacity: 1, rotation: 0, scale: 1, duration: 3, ease: 'none', stagger: 0.1 },
        0.5 // Start after header
      );

      // Layer 2 (Middle) - Medium speed
      tl.fromTo(
        '.layer-2',
        { y: 800, opacity: 0, rotation: 1, scale: 0.98 },
        { y: 0, opacity: 1, rotation: 0, scale: 1, duration: 3.5, ease: 'none', stagger: 0.1 },
        0.5
      );

      // Layer 1 (Foreground) - Fastest
      tl.fromTo(
        '.layer-1',
        { y: 1000, opacity: 0, rotation: -0.5, scale: 1 },
        { y: 0, opacity: 1, rotation: 0, scale: 1, duration: 4, ease: 'none', stagger: 0.1 },
        0.5
      );
      
      // Pause at the end before unpinning
      tl.to({}, { duration: 0.5 });
    },
    { scope: containerRef }
  );

  return (
    <section 
      ref={containerRef} 
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-secondary pt-20 md:pt-24 pb-10"
    >
      {/* Immersive Background Layers */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Soft noise texture */}
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
        
        {/* Radial gradients and blurred blobs */}
        <div className="absolute -top-[20%] -left-[10%] h-[60%] w-[60%] rounded-full bg-ns-green/10 blur-[120px] filter"></div>
        <div className="absolute bottom-[10%] -right-[10%] h-[50%] w-[50%] rounded-full bg-primary-400/10 blur-[140px] filter"></div>
        <div className="absolute top-[40%] left-[30%] h-[40%] w-[40%] rounded-full bg-ns-cyan/5 blur-[100px] filter"></div>
      </div>

      <div className="main-container relative z-10 flex h-full flex-col">
        
        {/* Header Section */}
        <div ref={headerRef} className="mx-auto mb-16 max-w-[750px] space-y-5 text-center opacity-0 will-change-transform">
          <span className="badge badge-green bg-ns-green/20 text-ns-green border-ns-green/30">Services</span>
          <div>
            <h2 className="mb-4 text-white">What we build for you.</h2>
            <p className="mx-auto max-w-[600px] text-white/70">
              From AI-powered copilots to enterprise data infrastructure — our six core service areas
              cover every layer of your AI transformation.
            </p>
          </div>
        </div>

        {/* Floating Cards Grid Container */}
        <div ref={gridRef} className="mx-auto mb-12 grid w-full max-w-[1100px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {services.map((service) => (
            <div key={service.id} className={`${service.layer} opacity-0 will-change-transform`}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// Glassmorphism Card Component
const ServiceCard = ({ service }: { service: Omit<typeof services[0], 'layer'> }) => {
  return (
    <div className="group relative flex h-full flex-col space-y-5 rounded-[24px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:bg-white/10 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
      {/* Subtle inner highlight for 3D effect */}
      <div className="pointer-events-none absolute inset-0 rounded-[24px] border border-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
      
      <div className="w-full">
        <span className={`${service.icon} text-white/90 text-[52px] transition-transform duration-500 group-hover:scale-110 group-hover:text-ns-green`} />
      </div>
      <div className="space-y-3 relative z-10">
        <h5 className="text-white max-sm:text-heading-6">{service.title}</h5>
        <p className="text-white/70 leading-relaxed text-sm md:text-base">{service.description}</p>
      </div>
    </div>
  );
};

export default Services;
