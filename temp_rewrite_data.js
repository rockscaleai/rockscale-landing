const fs = require('fs');
const path = require('path');

const content = `
'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/shared/navbar/Navbar';
import Footer from '@/components/shared/footer/Footer';

// Shared Classes for Premium Layout
const sectionTitleClass = "text-4xl font-medium tracking-tight text-secondary md:text-5xl lg:text-[52px] lg:leading-[1.1]";
const sectionTitleDarkClass = "text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-[52px] lg:leading-[1.1]";
const sectionTextClass = "text-lg leading-relaxed text-secondary/70";
const sectionTextDarkClass = "text-lg leading-relaxed text-white/70";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-[#061225] pt-32 pb-24 md:pt-40 md:pb-32">
    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay -z-20" />
    <div className="absolute -top-40 -right-40 -z-10 h-[800px] w-[800px] rounded-full bg-[#7E57FD]/20 blur-[150px]" />
    <div className="absolute top-1/2 left-0 -z-10 h-[600px] w-[600px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-[#25CA22]/15 blur-[120px]" />
    
    <div className="main-container relative z-10 text-center">
      <span className="badge badge-green-v2 mb-6 inline-block">Data Engineering & Analytics</span>
      <h1 className="mx-auto max-w-4xl text-5xl font-medium tracking-tight text-white md:text-6xl lg:text-[72px] lg:leading-[1.05]">
        The Foundation for <br className="hidden md:block"/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25CA22] to-[#7E57FD]">Enterprise AI & Insights</span>
      </h1>
      <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-white/70">
        We build robust data platforms, scalable pipelines, and analytics systems that turn fragmented data into a strategic asset.
      </p>
      
      <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
        <Link
          href="/contact-us"
          className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#25CA22] px-9 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#20b21e] hover:shadow-[0_15px_30px_rgba(37,202,34,0.3)]">
          <span className="relative z-10">Modernize Your Data</span>
        </Link>
        <Link
          href="#the-challenge"
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-9 py-4 text-sm font-bold text-white transition-all hover:bg-white/5 hover:border-white/30">
          Explore the Process
        </Link>
      </div>
    </div>
  </section>
);

const TheChallengeSection = () => (
  <section id="the-challenge" className="bg-[#f4f5f8] py-24 md:py-32">
    <div className="main-container">
      <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <span className="badge badge-green-v2 mb-6 inline-block">The Challenge</span>
          <h2 className={sectionTitleClass}>Why AI Initiatives Fail</h2>
        </div>
        <p className={\`\${sectionTextClass} max-w-xl pb-2\`}>
          Before you can build intelligent systems, you need reliable data. Most organizations struggle with the basics.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { title: 'Data Silos', desc: 'Data lives across disconnected systems and legacy infrastructure.', icon: 'ns-shape-42', color: 'text-[#7E57FD]' },
          { title: 'Inconsistent Quality', desc: 'Different teams work with different, unreliable versions of the truth.', icon: 'ns-shape-23', color: 'text-[#25CA22]' },
          { title: 'Manual Reporting', desc: 'Teams rely on spreadsheets and manual workflows that take too long.', icon: 'ns-shape-33', color: 'text-orange-500' },
          { title: 'AI Unreadiness', desc: 'AI initiatives stall because the underlying data architecture cannot support them.', icon: 'ns-shape-8', color: 'text-rose-500' },
        ].map((item, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-[24px] border border-secondary/5 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(6,18,37,0.06)] hover:border-secondary/20">
            <span className={\`\${item.icon} \${item.color} text-[40px] opacity-80 mb-6 block transition-transform duration-500 group-hover:scale-110\`} />
            <h3 className="text-xl font-bold tracking-tight text-secondary">{item.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-secondary/70">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhatWeDoSection = () => (
  <section className="relative z-0 overflow-hidden bg-[#0a162b] py-24 md:py-32 border-t border-white/5">
    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay -z-20" />
    <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-[#7E57FD]/10 blur-[150px]" />
    
    <div className="main-container relative z-10">
      <div className="mb-20 text-center">
        <span className="badge badge-green-v2 mb-6 inline-block">Core Capabilities</span>
        <h2 className={\`\${sectionTitleDarkClass} mx-auto max-w-3xl\`}>Engineering the Modern Data Stack</h2>
        <p className={\`\${sectionTextDarkClass} mx-auto mt-6 max-w-2xl\`}>
          We build the infrastructure that powers everything from executive dashboards to autonomous AI agents.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          { title: 'Data Integration', desc: 'Connect databases, SaaS platforms, APIs and legacy systems into a unified architecture.', icon: 'ns-shape-41', color: 'text-[#7E57FD]' },
          { title: 'Data Pipelines', desc: 'Build reliable ETL/ELT pipelines that move data seamlessly between systems.', icon: 'ns-shape-35', color: 'text-[#25CA22]' },
          { title: 'Data Warehousing', desc: 'Design scalable warehouses and lakehouses that provide a single source of truth.', icon: 'ns-shape-23', color: 'text-[#5391f5]' },
          { title: 'Data Modeling', desc: 'Transform raw data into clean, understandable, and analytics-ready dimensional models.', icon: 'ns-shape-8', color: 'text-orange-500' },
          { title: 'Analytics', desc: 'Turn business data into useful insights, dynamic reports, and decision-support systems.', icon: 'ns-shape-33', color: 'text-rose-500' },
          { title: 'Data Quality', desc: 'Implement automated monitoring to ensure the accuracy, consistency, and reliability of data.', icon: 'ns-shape-42', color: 'text-white' },
        ].map((item, idx) => (
          <div key={idx} className="group flex flex-col justify-between rounded-[32px] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04] hover:border-white/20">
            <div>
              <span className={\`\${item.icon} \${item.color} text-[40px] opacity-80 mb-6 block transition-transform duration-500 group-hover:scale-110\`} />
              <h3 className="text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const DataFlowSection = () => (
  <section className="bg-white py-24 md:py-32">
    <div className="main-container">
      <div className="mb-16 text-center">
        <span className="badge badge-green-v2 mb-6 inline-block">The Architecture</span>
        <h2 className={\`\${sectionTitleClass} mx-auto max-w-3xl\`}>The Data Value Chain</h2>
        <p className={\`\${sectionTextClass} mx-auto mt-6 max-w-2xl\`}>
          How we move raw information into strategic intelligence.
        </p>
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="grid gap-6 md:grid-cols-5 relative z-10">
          {[
            { title: 'Sources', items: ['CRM', 'ERP', 'SaaS', 'APIs', 'Databases'], accent: 'border-[#7E57FD]' },
            { title: 'Integration', items: ['ETL / ELT', 'Streaming', 'Batch Jobs'], accent: 'border-[#5391f5]' },
            { title: 'Platform', items: ['Warehouse', 'Data Lake', 'Lakehouse'], accent: 'border-[#25CA22]' },
            { title: 'Analytics', items: ['BI Tools', 'Dashboards', 'Metrics'], accent: 'border-orange-500' },
            { title: 'Intelligence', items: ['AI Agents', 'RAG Systems', 'Predictions'], accent: 'border-rose-500' },
          ].map((step, idx) => (
            <div key={idx} className={\`relative overflow-hidden rounded-[24px] border border-secondary/5 bg-[#f4f5f8]/50 p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_40px_rgba(6,18,37,0.06)]\`}>
              <div className={\`absolute top-0 left-0 w-full h-1 \${step.accent.replace('border-', 'bg-')}\`} />
              <div className="flex items-center justify-between mb-6 mt-2">
                 <h3 className="text-lg font-bold tracking-tight text-secondary">{step.title}</h3>
                 <span className="text-xs font-bold text-secondary/20">0{idx + 1}</span>
              </div>
              
              <ul className="space-y-3">
                {step.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className={\`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full \${step.accent.replace('border-', 'bg-')}\`} />
                    <span className="text-xs font-semibold text-secondary/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const FinalCTASection = () => (
  <section className="relative overflow-hidden bg-white py-24 md:py-32 border-t border-secondary/5">
    <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#25CA22]/10 to-[#7E57FD]/10 blur-[100px]" />
    
    <div className="main-container relative z-10">
      <div className="mx-auto max-w-4xl rounded-[48px] border border-secondary/5 bg-white/60 p-10 text-center shadow-[0_20px_80px_rgba(6,18,37,0.06)] backdrop-blur-2xl md:p-20">
        
        <span className="badge badge-green-v2 mb-6 inline-block">Ready to move?</span>
        <h2 className="text-4xl font-medium tracking-tight text-secondary md:text-5xl lg:text-[64px] lg:leading-[1.1]">
          Turn Raw Data <br className="hidden md:block" />
          <span className="text-secondary/40">into AI Readiness</span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-secondary/70">
          Let&apos;s evaluate your current data architecture, identify the bottlenecks, and build a platform that supports your most ambitious initiatives.
        </p>
        
        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <Link
            href="/contact-us"
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#25CA22] px-9 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#20b21e] hover:shadow-[0_15px_30px_rgba(37,202,34,0.3)]">
            <span className="relative z-10">Build Your Data Platform</span>
            <svg className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-full border border-secondary/20 bg-transparent px-9 py-4 text-sm font-bold text-secondary transition-all hover:bg-secondary/5 hover:border-secondary/30">
            Talk to an Expert
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const DataEngineeringAnalyticsPageContent = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TheChallengeSection />
      <WhatWeDoSection />
      <DataFlowSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default DataEngineeringAnalyticsPageContent;
`

fs.writeFileSync(path.join(__dirname, 'src/components/services/data-engineering-analytics/DataEngineeringAnalyticsPageContent.tsx'), content);
console.log('Successfully rewritten the Data Engineering page.');
