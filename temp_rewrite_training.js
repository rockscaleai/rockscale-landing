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
      <span className="badge badge-green-v2 mb-6 inline-block">Workforce Enablement</span>
      <h1 className="mx-auto max-w-4xl text-5xl font-medium tracking-tight text-white md:text-6xl lg:text-[72px] lg:leading-[1.05]">
        Enterprise AI <br className="hidden md:block"/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25CA22] to-[#7E57FD]">Training Programs</span>
      </h1>
      <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-white/70">
        Equip your teams with the practical skills, technical depth, and engineering discipline needed to build and manage AI in production.
      </p>
      
      <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
        <Link
          href="/contact-us"
          className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#25CA22] px-9 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#20b21e] hover:shadow-[0_15px_30px_rgba(37,202,34,0.3)]">
          <span className="relative z-10">Upskill Your Team</span>
        </Link>
        <Link
          href="#the-challenge"
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-9 py-4 text-sm font-bold text-white transition-all hover:bg-white/5 hover:border-white/30">
          View Curriculum
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
          <span className="badge badge-green-v2 mb-6 inline-block">The Skills Gap</span>
          <h2 className={sectionTitleClass}>Why AI Adoption Stalls</h2>
        </div>
        <p className={\`\${sectionTextClass} max-w-xl pb-2\`}>
          Buying AI tools is easy. Changing how your organization works is the real challenge.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { title: 'Superficial Knowledge', desc: 'Teams know the buzzwords but lack the deep technical understanding to execute.', icon: 'ns-shape-42', color: 'text-[#7E57FD]' },
          { title: 'Security Risks', desc: 'Employees unknowingly expose proprietary data to public models.', icon: 'ns-shape-23', color: 'text-[#25CA22]' },
          { title: 'Failed Prototypes', desc: 'Engineers can build a quick demo, but struggle to make it production-ready.', icon: 'ns-shape-33', color: 'text-orange-500' },
          { title: 'Siloed Strategy', desc: 'Executives lack the technical context to align AI investments with business goals.', icon: 'ns-shape-8', color: 'text-rose-500' },
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

const CurriculumSection = () => (
  <section className="relative z-0 overflow-hidden bg-[#0a162b] py-24 md:py-32 border-t border-white/5">
    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay -z-20" />
    <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-[#7E57FD]/10 blur-[150px]" />
    
    <div className="main-container relative z-10">
      <div className="grid gap-16 lg:grid-cols-12">
        {/* Left: Sticky Header */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-fit">
          <span className="badge badge-green-v2 mb-6 inline-block">Curriculum</span>
          <h2 className="text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Role-Based <br className="hidden lg:block"/> Enablement
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-white/70 max-w-md">
            We don't do generic webinars. We deliver targeted, highly technical training tailored specifically to what each role needs to succeed.
          </p>
        </div>

        {/* Right: Grid of Capabilities */}
        <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
          {[
            { title: 'For Software Engineers', desc: 'LLM integration, Prompt Engineering, RAG Architectures, Tool Calling, and Production Guardrails.', icon: 'ns-shape-41', color: 'text-[#25CA22]' },
            { title: 'For Data Teams', desc: 'Vector Databases, Semantic Search, Data Pipelines for AI, and Output Evaluation.', icon: 'ns-shape-35', color: 'text-[#7E57FD]' },
            { title: 'For Product Managers', desc: 'AI UX patterns, model limitations, scoping AI features, and managing AI project lifecycles.', icon: 'ns-shape-8', color: 'text-orange-500' },
            { title: 'For Leadership', desc: 'Evaluating AI ROI, build vs. buy decisions, risk management, and enterprise AI strategy.', icon: 'ns-shape-23', color: 'text-blue-500' },
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

const ApproachSection = () => (
  <section className="bg-white py-24 md:py-32">
    <div className="main-container">
      <div className="mb-16 text-center">
        <span className="badge badge-green-v2 mb-6 inline-block">Our Approach</span>
        <h2 className={\`\${sectionTitleClass} mx-auto max-w-3xl\`}>How We Teach</h2>
        <p className={\`\${sectionTextClass} mx-auto mt-6 max-w-2xl\`}>
          Practical, hands-on, and directly relevant to your codebase.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {[
          { title: 'Hands-On Engineering', desc: 'No passive lectures. Teams write code, integrate APIs, and build actual AI workflows during the sessions.', accent: 'bg-[#25CA22]' },
          { title: 'Customized Scenarios', desc: 'We train your team using your own internal data and technical architecture, not generic datasets.', accent: 'bg-[#7E57FD]' },
          { title: 'Production Focused', desc: 'We focus heavily on the unglamorous reality of AI: security, latency, cost, and reliability.', accent: 'bg-orange-500' },
          { title: 'Tool Agnostic', desc: 'We teach the underlying principles of AI architecture, not just how to use a specific vendor\'s API.', accent: 'bg-[#5391f5]' },
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
        
        <span className="badge badge-green-v2 mb-6 inline-block">Ready to scale?</span>
        <h2 className="text-4xl font-medium tracking-tight text-secondary md:text-5xl lg:text-[64px] lg:leading-[1.1]">
          Upskill Your Team <br className="hidden md:block" />
          <span className="text-secondary/40">For the AI Era</span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-secondary/70">
          Stop relying on external vendors for everything. Build internal competency and empower your team to own their AI future.
        </p>
        
        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <Link
            href="/contact-us"
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#25CA22] px-9 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#20b21e] hover:shadow-[0_15px_30px_rgba(37,202,34,0.3)]">
            <span className="relative z-10">Plan Your Training</span>
            <svg className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-full border border-secondary/20 bg-transparent px-9 py-4 text-sm font-bold text-secondary transition-all hover:bg-secondary/5 hover:border-secondary/30">
            Download Curriculum
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const AITrainingPageContent = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TheChallengeSection />
      <CurriculumSection />
      <ApproachSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default AITrainingPageContent;
`

fs.writeFileSync(path.join(__dirname, 'src/components/services/ai-training/AITrainingPageContent.tsx'), content);
console.log('Successfully rewritten the AI Training page.');
