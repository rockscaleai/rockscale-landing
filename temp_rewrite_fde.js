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
      <span className="badge badge-green-v2 mb-6 inline-block">Embedded Talent</span>
      <h1 className="mx-auto max-w-4xl text-5xl font-medium tracking-tight text-white md:text-6xl lg:text-[72px] lg:leading-[1.05]">
        Forward Deployed <br className="hidden md:block"/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25CA22] to-[#7E57FD]">Engineers</span>
      </h1>
      <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-white/70">
        Elite engineering talent embedded directly inside your team to solve complex technical problems and accelerate production deployment.
      </p>
      
      <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
        <Link
          href="/contact-us"
          className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#25CA22] px-9 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#20b21e] hover:shadow-[0_15px_30px_rgba(37,202,34,0.3)]">
          <span className="relative z-10">Hire an FDE</span>
        </Link>
        <Link
          href="#the-difference"
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-9 py-4 text-sm font-bold text-white transition-all hover:bg-white/5 hover:border-white/30">
          How It Works
        </Link>
      </div>
    </div>
  </section>
);

const TheDifferenceSection = () => (
  <section id="the-difference" className="bg-[#f4f5f8] py-24 md:py-32">
    <div className="main-container">
      <div className="mb-16 text-center">
        <span className="badge badge-green-v2 mb-6 inline-block">The Paradigm</span>
        <h2 className={\`\${sectionTitleClass} mx-auto max-w-3xl\`}>A Different Class of Engineer</h2>
        <p className={\`\${sectionTextClass} mx-auto mt-6 max-w-2xl\`}>
          Forward Deployed Engineers don't just write code from tickets. They own outcomes, navigate ambiguity, and drive projects from problem definition to production.
        </p>
      </div>

      <div className="mx-auto max-w-5xl rounded-[32px] border border-secondary/5 bg-white shadow-[0_20px_60px_rgba(6,18,37,0.04)] overflow-hidden">
         <div className="grid grid-cols-2 border-b border-secondary/5 bg-secondary/[0.02]">
            <div className="p-8 pb-6 font-bold text-secondary/50 uppercase tracking-widest text-xs">Traditional Outsourcing</div>
            <div className="p-8 pb-6 font-bold text-[#25CA22] uppercase tracking-widest text-xs">Forward Deployed Engineer</div>
         </div>
         
         <div className="divide-y divide-secondary/5">
            {[
              { trad: 'Receives predefined tasks', fde: 'Works directly with stakeholders to define and solve the right problem' },
              { trad: 'Operates within a narrow technical scope', fde: 'Works across product, software, data and infrastructure when needed' },
              { trad: 'Focuses primarily on implementation output', fde: 'Owns technical outcomes and business relevance' },
              { trad: 'Usually operates at arm’s length', fde: 'Collaborates inside your team, tools and workflows' },
              { trad: 'Success is measured by completed tasks', fde: 'Success is measured by production progress and business impact' },
            ].map((row, idx) => (
              <div key={idx} className="grid grid-cols-2 group hover:bg-[#f4f5f8]/30 transition-colors duration-300">
                <div className="p-8 flex items-start gap-4 border-r border-secondary/5">
                   <span className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-rose-500/10 text-rose-500">
                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                   </span>
                   <p className="text-secondary/70 font-medium">{row.trad}</p>
                </div>
                <div className="p-8 flex items-start gap-4 bg-[#25CA22]/[0.01]">
                   <span className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#25CA22]/10 text-[#25CA22]">
                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                   </span>
                   <p className="text-secondary font-semibold">{row.fde}</p>
                </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  </section>
);

const CapabilitiesSection = () => (
  <section className="relative z-0 overflow-hidden bg-[#0a162b] py-24 md:py-32 border-t border-white/5">
    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay -z-20" />
    <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-[#7E57FD]/10 blur-[150px]" />
    
    <div className="main-container relative z-10">
      <div className="grid gap-16 lg:grid-cols-12">
        {/* Left: Sticky Header */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-fit">
          <span className="badge badge-green-v2 mb-6 inline-block">FDE Capabilities</span>
          <h2 className="text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-[56px] lg:leading-[1.1]">
            End-to-End <br className="hidden lg:block"/> Expertise
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-white/70 max-w-md">
            Forward Deployed Engineers bring a multidisciplinary skillset. They are capable of architecting, building, and deploying entire systems from scratch.
          </p>
        </div>

        {/* Right: Grid of Capabilities */}
        <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
          {[
            { title: 'AI Engineering', desc: 'Build production AI applications, LLM systems, AI agents and intelligent workflows that solve real operational problems.', icon: 'ns-shape-23', color: 'text-[#25CA22]' },
            { title: 'Software Engineering', desc: 'Design and integrate production-grade web applications, APIs and internal platforms.', icon: 'ns-shape-41', color: 'text-[#7E57FD]' },
            { title: 'Data Engineering', desc: 'Create pipelines, analytics infrastructure and AI-ready data systems that make models usable.', icon: 'ns-shape-35', color: 'text-orange-500' },
            { title: 'Cloud & Infra', desc: 'Implement scalable cloud environments, deployment pipelines and platform architecture.', icon: 'ns-shape-8', color: 'text-blue-500' },
          ].map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.04] hover:border-white/20">
              <span className={\`\${item.icon} \${item.color} text-[40px] opacity-80 mb-6 block transition-transform duration-500 group-hover:scale-110\`} />
              <h3 className="text-xl font-bold tracking-tight text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const WhenToUseSection = () => (
  <section className="bg-white py-24 md:py-32">
    <div className="main-container">
      <div className="mb-16 text-center">
        <span className="badge badge-green-v2 mb-6 inline-block">Use Cases</span>
        <h2 className={\`\${sectionTitleClass} mx-auto max-w-3xl\`}>When to Hire an FDE</h2>
        <p className={\`\${sectionTextClass} mx-auto mt-6 max-w-2xl\`}>
          Specific scenarios where embedding elite talent accelerates your timeline.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {[
          { title: 'You Have an AI Prototype But Can’t Get It Into Production', desc: 'Turn promising prototypes into reliable production systems with the engineering discipline required for real-world deployment.', accent: 'bg-[#7E57FD]' },
          { title: 'Your Engineering Team Is Stretched', desc: 'Add specialized AI, data or cloud expertise directly into the team without waiting months to make the right internal hire.', accent: 'bg-[#25CA22]' },
          { title: 'You Need to Integrate AI Into Existing Systems', desc: 'Work within your current architecture and connect AI capabilities to the applications, workflows and data your business already runs on.', accent: 'bg-orange-500' },
          { title: 'You Have a Complex Technical Problem', desc: 'Bring in experienced engineers to investigate the system, diagnose constraints and implement the right solution end to end.', accent: 'bg-[#5391f5]' },
        ].map((item, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-[32px] border border-secondary/5 bg-[#f4f5f8]/50 p-10 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_40px_rgba(6,18,37,0.06)]">
            <div className="flex gap-6 items-start">
               <div className={\`shrink-0 h-3 w-3 rounded-full mt-2 \${item.accent}\`} />
               <div>
                  <h3 className="text-2xl font-bold tracking-tight text-secondary leading-tight mb-4">{item.title}</h3>
                  <p className="text-base leading-relaxed text-secondary/70">{item.desc}</p>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTASection = () => (
  <section className="relative overflow-hidden bg-white py-24 md:py-32 border-t border-secondary/5">
    <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#25CA22]/10 to-[#7E57FD]/10 blur-[100px]" />
    
    <div className="main-container relative z-10">
      <div className="mx-auto max-w-4xl rounded-[48px] border border-secondary/5 bg-white/60 p-10 text-center shadow-[0_20px_80px_rgba(6,18,37,0.06)] backdrop-blur-2xl md:p-20">
        
        <span className="badge badge-green-v2 mb-6 inline-block">Ready to augment your team?</span>
        <h2 className="text-4xl font-medium tracking-tight text-secondary md:text-5xl lg:text-[64px] lg:leading-[1.1]">
          Embed Elite Talent <br className="hidden md:block" />
          <span className="text-secondary/40">Into Your Mission</span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-secondary/70">
          Skip the long hiring cycles. Bring in senior engineers capable of solving complex problems and accelerating your timeline today.
        </p>
        
        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <Link
            href="/contact-us"
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#25CA22] px-9 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#20b21e] hover:shadow-[0_15px_30px_rgba(37,202,34,0.3)]">
            <span className="relative z-10">Hire an FDE</span>
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

const ForwardDeployedEngineerPageContent = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TheDifferenceSection />
      <CapabilitiesSection />
      <WhenToUseSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default ForwardDeployedEngineerPageContent;
`

fs.writeFileSync(path.join(__dirname, 'src/components/services/forward-deployed-engineer/ForwardDeployedEngineerPageContent.tsx'), content);
console.log('Successfully rewritten the Forward Deployed Engineer page.');
