
'use client';

import React from 'react';
import Link from 'next/link';
import CoreServices from '@/components/services/CoreServices';

const sectionTitleClass = "text-4xl font-medium tracking-tight text-secondary md:text-5xl lg:text-[52px] lg:leading-[1.1]";
const sectionTextClass = "text-lg leading-relaxed text-secondary/70";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-[#061225] pt-32 pb-24 md:pt-40 md:pb-32">
    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay -z-20" />
    <div className="absolute -top-40 -right-40 -z-10 h-[800px] w-[800px] rounded-full bg-[#25CA22]/15 blur-[150px]" />
    <div className="absolute top-1/2 left-0 -z-10 h-[600px] w-[600px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-[#7E57FD]/15 blur-[120px]" />
    
    <div className="main-container relative z-10 text-center">
      <span className="badge badge-green-v2 mb-6 inline-block">Our Services</span>
      <h1 className="mx-auto max-w-4xl text-5xl font-medium tracking-tight text-white md:text-6xl lg:text-[72px] lg:leading-[1.05]">
        Enterprise AI <br className="hidden md:block"/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25CA22] to-[#7E57FD]">Engineering & Strategy</span>
      </h1>
      <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-white/70">
        We bridge the gap between AI ambition and execution. From high-level strategic roadmaps to deep technical implementation, we build systems that drive real business value.
      </p>
    </div>
  </section>
);

const MethodologySection = () => (
  <section className="relative z-0 overflow-hidden bg-white py-24 md:py-32 border-t border-secondary/5">
    
    <div className="main-container relative z-10">
      <div className="grid gap-16 lg:grid-cols-12">
        
        {/* Left: Sticky Header */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-fit">
          <span className="badge badge-green-v2 mb-6 inline-block">Delivery Methodology</span>
          <h2 className="text-4xl font-medium tracking-tight text-secondary md:text-5xl lg:text-[56px] lg:leading-[1.1]">
            How We <br className="hidden lg:block"/> Deliver
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-secondary/70 max-w-md">
            We follow a rigorous, engineering-first methodology to ensure that every AI system we build is secure, scalable, and actually creates business value.
          </p>
        </div>

        {/* Right: Vertical Stack */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {[
            { num: '01', title: 'Discovery & Blueprinting', desc: 'We assess your data maturity, evaluate technical constraints, and define strict KPIs before writing a single line of code.', color: '#25CA22' },
            { num: '02', title: 'Architecture & Prototyping', desc: 'We design the system architecture, select the right foundation models, and build high-fidelity prototypes to validate the technical approach.', color: '#7E57FD' },
            { num: '03', title: 'Engineering & Integration', desc: 'We build the production-grade application, wire up data pipelines, implement security guardrails, and integrate with your existing APIs.', color: '#f97316' },
            { num: '04', title: 'Handoff & Enablement', desc: 'We don\'t lock you in. We conduct extensive code reviews with your internal team and provide full technical documentation for seamless handoff.', color: '#5391f5' },
          ].map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-[32px] border border-secondary/5 bg-[#f4f5f8]/50 p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_40px_rgba(6,18,37,0.06)] hover:border-secondary/10">
              
              <div className="absolute -right-6 -top-10 z-0 text-[180px] font-black leading-none text-secondary/[0.03] transition-transform duration-700 group-hover:-translate-x-4 group-hover:scale-110">
                {item.num}
              </div>
              
              <div className="absolute left-0 top-0 z-10 h-full w-1.5 transition-all duration-500 group-hover:w-2" style={{ backgroundColor: item.color }} />
              
              <div className="relative z-20 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                 <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm border border-secondary/5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <span className="text-2xl font-black" style={{ color: item.color }}>{item.num}</span>
                 </div>
                 
                 <div className="pt-2">
                    <h3 className="text-2xl font-bold tracking-tight text-secondary mb-3">{item.title}</h3>
                    <p className="text-[15px] leading-relaxed text-secondary/70 max-w-lg">{item.desc}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const FinalCTASection = () => (
  <section className="relative overflow-hidden bg-[#061225] py-24 md:py-40">
    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay -z-20" />
    <div className="absolute left-0 top-0 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7E57FD]/20 blur-[150px]" />
    <div className="absolute bottom-0 right-0 -z-10 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 rounded-full bg-[#25CA22]/20 blur-[120px]" />
    
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none -z-10" />

    <div className="main-container relative z-10 text-center">
      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#25CA22] mb-8 inline-block shadow-sm">
        Start Your AI Journey
      </span>
      <h2 className="mx-auto max-w-4xl text-4xl font-medium tracking-tight text-white md:text-6xl lg:text-[72px] lg:leading-[1.05]">
        Ready to Build <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25CA22] to-[#7E57FD]">The Future?</span>
      </h2>
      <p className="mx-auto mt-8 max-w-2xl text-[19px] leading-relaxed text-white/60">
        Let's discuss your AI strategy, explore high-ROI use cases, and architect a solution that sets your enterprise apart.
      </p>
      
      <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
        <Link
          href="/contact-us"
          className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#25CA22] px-10 py-5 text-[15px] font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#20b21e] hover:shadow-[0_15px_30px_rgba(37,202,34,0.3)]">
          <span className="relative z-10">Schedule a Discovery Call</span>
          <svg className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  </section>
);

const ServicesIndexPageContent = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      
      {/* White spacing between Dark Hero and Core Services */}
      <div className="h-24 md:h-32 w-full bg-white border-b border-secondary/5" />
      
      <CoreServices />
      <MethodologySection />
      <FinalCTASection />
      
      {/* Small white spacing to transition into global footer */}
      <div className="h-12 w-full bg-white" />
    </div>
  );
};

export default ServicesIndexPageContent;
