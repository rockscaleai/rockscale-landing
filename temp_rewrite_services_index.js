const fs = require('fs');
const path = require('path');

const content = `
'use client';

import React from 'react';
import Link from 'next/link';

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

const CoreServicesGrid = () => (
  <section className="bg-[#f4f5f8] py-24 md:py-32">
    <div className="main-container">
      <div className="mb-16 text-center">
        <h2 className={sectionTitleClass}>What We Do</h2>
      </div>

      <div className="flex flex-col gap-8">
        {[
          { 
            title: 'AI Strategy & Roadmap', 
            desc: 'Stop running random POCs. We help executives identify high-ROI use cases, assess data readiness, and build a technical roadmap to safely scale AI across the enterprise.', 
            icon: 'ns-shape-42', 
            color: '#7E57FD',
            href: '/services/ai-strategy',
            label: 'Strategy'
          },
          { 
            title: 'AI-Powered Software Development', 
            desc: 'We build custom, production-ready AI applications. From complex RAG architectures to autonomous agent workflows, we engineer resilient systems that integrate seamlessly with your existing stack.', 
            icon: 'ns-shape-41', 
            color: '#25CA22',
            href: '/services/ai-powered-software-development',
            label: 'Engineering'
          },
          { 
            title: 'Data Engineering & Analytics', 
            desc: 'AI is only as good as the data feeding it. We modernize your data pipelines, implement vector databases, and build the critical infrastructure required for enterprise AI.', 
            icon: 'ns-shape-35', 
            color: '#f97316',
            href: '/services/data-engineering-analytics',
            label: 'Infrastructure'
          },
          { 
            title: 'Forward Deployed Engineer', 
            desc: 'Need velocity? We embed elite AI engineers directly into your technical teams. They sit in your codebase, adapt to your culture, and ship complex AI features immediately.', 
            icon: 'ns-shape-33', 
            color: '#3b82f6',
            href: '/services/forward-deployed-engineer',
            label: 'Augmentation'
          },
          { 
            title: 'Corporate & Executive AI Training', 
            desc: 'We upskill your entire organization. We provide highly technical curriculum for your engineers, data teams, product managers, and executive leadership.', 
            icon: 'ns-shape-23', 
            color: '#f43f5e',
            href: '/services/ai-training',
            label: 'Enablement'
          },
        ].map((item, idx) => (
          <Link key={idx} href={item.href} className="group relative overflow-hidden rounded-[32px] border border-secondary/5 bg-white p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(6,18,37,0.06)] hover:border-secondary/10 flex flex-col md:flex-row gap-8 md:items-center justify-between">
            
            {/* Hover Glow */}
            <div className="absolute -right-8 -top-8 z-0 h-40 w-40 rounded-full opacity-0 blur-[50px] transition-opacity duration-500 group-hover:opacity-[0.12]" style={{ backgroundColor: item.color }} />
            
            {/* Animated Bottom Border */}
            <div className="absolute bottom-0 left-0 z-10 h-1 w-0 transition-all duration-500 group-hover:w-full" style={{ backgroundColor: item.color }} />

            <div className="relative z-10 flex gap-8 md:gap-12 items-start md:items-center">
              {/* Icon */}
              <div className="hidden md:flex h-20 w-20 shrink-0 items-center justify-center rounded-[20px] border border-secondary/5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-sm" style={{ backgroundColor: \`\${item.color}15\` }}>
                <span className={\`\${item.icon} text-[32px]\`} style={{ color: item.color }} />
              </div>
              
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="md:hidden flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-secondary/5" style={{ backgroundColor: \`\${item.color}15\` }}>
                    <span className={\`\${item.icon} text-lg\`} style={{ color: item.color }} />
                  </div>
                  <span className="rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-white" style={{ borderColor: \`\${item.color}40\`, color: item.color }}>
                    {item.label}
                  </span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-secondary mb-3">{item.title}</h3>
                <p className="text-[16px] leading-relaxed text-secondary/70">{item.desc}</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="relative z-10 hidden lg:flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-secondary/10 text-secondary transition-all duration-500 group-hover:border-transparent group-hover:text-white" style={{ backgroundColor: 'transparent' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = item.color} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
              <svg className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const MethodologySection = () => (
  <section className="relative z-0 overflow-hidden bg-[#0a162b] py-24 md:py-32 border-t border-white/5">
    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay -z-20" />
    <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-[#7E57FD]/10 blur-[150px]" />
    
    <div className="main-container relative z-10">
      <div className="grid gap-16 lg:grid-cols-12">
        
        {/* Left: Sticky Header */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-fit">
          <span className="badge badge-green-v2 mb-6 inline-block">Delivery Methodology</span>
          <h2 className="text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-[56px] lg:leading-[1.1]">
            How We <br className="hidden lg:block"/> Deliver
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-white/70 max-w-md">
            We follow a rigorous, engineering-first methodology to ensure that every AI system we build is secure, scalable, and actually creates business value.
          </p>
        </div>

        {/* Right: Vertical Stack */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {[
            { num: '01', title: 'Discovery & Blueprinting', desc: 'We assess your data maturity, evaluate technical constraints, and define strict KPIs before writing a single line of code.', color: '#25CA22' },
            { num: '02', title: 'Architecture & Prototyping', desc: 'We design the system architecture, select the right foundation models, and build high-fidelity prototypes to validate the technical approach.', color: '#7E57FD' },
            { num: '03', title: 'Engineering & Integration', desc: 'We build the production-grade application, wire up data pipelines, implement security guardrails, and integrate with your existing APIs.', color: '#f97316' },
            { num: '04', title: 'Handoff & Enablement', desc: 'We don\\'t lock you in. We conduct extensive code reviews with your internal team and provide full technical documentation for seamless handoff.', color: '#5391f5' },
          ].map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-[32px] border border-white/5 bg-white/[0.02] backdrop-blur-xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.05] hover:border-white/10">
              
              <div className="absolute -right-6 -top-10 z-0 text-[180px] font-black leading-none text-white/[0.02] transition-transform duration-700 group-hover:-translate-x-4 group-hover:scale-110">
                {item.num}
              </div>
              
              <div className="absolute left-0 top-0 z-10 h-full w-1.5 transition-all duration-500 group-hover:w-2" style={{ backgroundColor: item.color }} />
              
              <div className="relative z-20 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                 <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/5 shadow-sm border border-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <span className="text-2xl font-black" style={{ color: item.color }}>{item.num}</span>
                 </div>
                 
                 <div className="pt-2">
                    <h3 className="text-2xl font-bold tracking-tight text-white mb-3">{item.title}</h3>
                    <p className="text-[15px] leading-relaxed text-white/60 max-w-lg">{item.desc}</p>
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
      <CoreServicesGrid />
      <MethodologySection />
      <FinalCTASection />
      
      {/* Small white spacing to transition into global footer */}
      <div className="h-12 w-full bg-white" />
    </div>
  );
};

export default ServicesIndexPageContent;
`

fs.writeFileSync(path.join(__dirname, 'src/components/services/ServicesIndexPageContent.tsx'), content);

const pageContent = `
import ServicesIndexPageContent from '@/components/services/ServicesIndexPageContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Services | RockScale - AI Solutions & Engineering',
  description: 'Automate operations, modernize infrastructure, and build AI-powered products with RockScale.',
};

const page = () => {
  return <ServicesIndexPageContent />;
};

export default page;
`

fs.writeFileSync(path.join(__dirname, 'src/app/services/page.tsx'), pageContent.trim() + '\n');
console.log('Done rewriting /services');
