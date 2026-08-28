const fs = require('fs');
const path = require('path');

const content = `
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
      <span className="badge badge-green-v2 mb-6 inline-block">AI-Powered Software Development</span>
      <h1 className="mx-auto max-w-4xl text-5xl font-medium tracking-tight text-white md:text-6xl lg:text-[72px] lg:leading-[1.05]">
        Building the Next Generation of <br className="hidden md:block"/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25CA22] to-[#7E57FD]">Intelligent Software</span>
      </h1>
      <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-white/70">
        We architect, build, and deploy enterprise-grade AI applications, autonomous agents, and AI copilots that transform how your business operates.
      </p>
      
      <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
        <Link
          href="/contact-us"
          className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#25CA22] px-9 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#20b21e] hover:shadow-[0_15px_30px_rgba(37,202,34,0.3)]">
          <span className="relative z-10">Start Your Project</span>
        </Link>
        <Link
          href="#what-we-build"
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-9 py-4 text-sm font-bold text-white transition-all hover:bg-white/5 hover:border-white/30">
          Explore Our Capabilities
        </Link>
      </div>
    </div>
  </section>
);

const WhatWeBuildSection = () => (
  <section id="what-we-build" className="bg-[#f4f5f8] py-24 md:py-32">
    <div className="main-container">
      <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <span className="badge badge-green-v2 mb-6 inline-block">Our Focus</span>
          <h2 className={sectionTitleClass}>What We Build</h2>
        </div>
        <p className={\`\${sectionTextClass} max-w-xl pb-2\`}>
          From workflow automation to autonomous agents, we build tailored software solutions that leverage the latest in AI engineering.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          { title: 'AI Applications', desc: 'Custom applications that use AI to solve specific business problems and automate complex tasks.', icon: 'ns-shape-8', color: 'text-[#7E57FD]' },
          { title: 'AI Copilots', desc: 'Intelligent assistants that help employees work faster, write code, or make better decisions.', icon: 'ns-shape-23', color: 'text-[#25CA22]' },
          { title: 'AI Agents', desc: 'Autonomous systems capable of executing multi-step tasks using tools, APIs and business data.', icon: 'ns-shape-41', color: 'text-blue-500' },
          { title: 'RAG Systems', desc: 'AI systems that securely retrieve information from company knowledge bases and documents.', icon: 'ns-shape-35', color: 'text-orange-500' },
          { title: 'Document Intelligence', desc: 'Systems that extract, classify, analyze and act on information contained in PDFs and forms.', icon: 'ns-shape-42', color: 'text-rose-500' },
          { title: 'Workflow Automation', desc: 'Intelligent automation that connects AI with existing business processes to reduce manual work.', icon: 'ns-shape-33', color: 'text-purple-500' },
        ].map((item, idx) => (
          <div key={idx} className="group flex flex-col justify-between rounded-[32px] border border-secondary/5 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(6,18,37,0.06)] hover:border-secondary/20">
            <div>
              <span className={\`\${item.icon} \${item.color} text-4xl mb-6 block transition-transform duration-500 group-hover:scale-110\`} />
              <h3 className="text-2xl font-semibold tracking-tight text-secondary">{item.title}</h3>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-secondary/70">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const IdeaToProductionSection = () => (
  <section className="relative z-0 overflow-hidden bg-[#0a162b] py-24 md:py-32 border-t border-white/5">
    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay -z-20" />
    <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-[#7E57FD]/10 blur-[150px]" />
    
    <div className="main-container relative z-10">
      <div className="mb-20 text-center">
        <span className="badge badge-green-v2 mb-6 inline-block">The Process</span>
        <h2 className={\`\${sectionTitleDarkClass} mx-auto max-w-3xl\`}>From Idea to Production</h2>
        <p className={\`\${sectionTextDarkClass} mx-auto mt-6 max-w-2xl\`}>
          A rigorous, engineering-first approach to ensure your AI software is secure, scalable, and reliable.
        </p>
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-6 top-8 hidden h-[calc(100%-80px)] w-[2px] rounded-full bg-gradient-to-b from-[#7E57FD] via-[#25CA22] to-white/10 md:block" />
        
        <div className="grid gap-10">
          {[
            { phase: 'Discover & Design', desc: 'Understand the business problem, users, and define system architecture.', accent: 'bg-[#7E57FD]', shadow: 'shadow-[0_0_15px_rgba(126,87,253,0.3)]' },
            { phase: 'Build & Integrate', desc: 'Develop the application, AI workflows, LLM integrations, and infrastructure.', accent: 'bg-[#5391f5]', shadow: 'shadow-[0_0_15px_rgba(83,145,245,0.3)]' },
            { phase: 'Evaluate & Guard', desc: 'Test model quality, latency, security guardrails, and user experience.', accent: 'bg-[#25CA22]', shadow: 'shadow-[0_0_15px_rgba(37,202,34,0.3)]' },
            { phase: 'Deploy & Optimize', desc: 'Move to production, monitor observability, and continuously refine performance.', accent: 'bg-orange-500', shadow: 'shadow-[0_0_15px_rgba(249,115,22,0.3)]' },
          ].map((item, index) => (
            <div key={item.phase} className="group grid gap-6 md:grid-cols-[60px_1fr] md:gap-12 relative z-10">
              <div className="hidden md:flex justify-center pt-2">
                <div className={\`flex h-12 w-12 items-center justify-center rounded-full text-base font-bold text-white transition-all duration-500 group-hover:scale-110 \${item.accent} \${item.shadow}\`}>
                  {index + 1}
                </div>
              </div>
              <div className="rounded-[32px] border border-white/10 bg-white/[0.02] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04]">
                <div className="md:hidden mb-6 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white shadow-lg bg-[#25CA22]">
                  {index + 1}
                </div>
                <div className="flex items-center gap-4 mb-4">
                   <h3 className="text-2xl font-bold tracking-tight text-white">Stage 0{index + 1}</h3>
                   <span className="h-px w-8 bg-white/20"></span>
                   <span className={\`text-sm font-bold uppercase tracking-[0.2em] \${item.accent.replace('bg-', 'text-')}\`}>{item.phase}</span>
                </div>
                <p className="text-base leading-relaxed text-white/70">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const CapabilitiesSection = () => (
  <section className="bg-white py-24 md:py-32">
    <div className="main-container">
      <div className="mb-16 text-center">
        <span className="badge badge-green-v2 mb-6 inline-block">Technical Expertise</span>
        <h2 className={\`\${sectionTitleClass} mx-auto max-w-3xl\`}>Enterprise AI Engineering</h2>
        <p className={\`\${sectionTextClass} mx-auto mt-6 max-w-2xl\`}>
          We blend traditional software engineering rigor with cutting-edge AI capabilities.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: 'Core AI',
            items: ['LLM Integration', 'Prompt Engineering', 'RAG Architecture', 'AI Agents'],
            color: 'text-[#7E57FD]',
            border: 'hover:border-[#7E57FD]/30'
          },
          {
            title: 'Advanced Capabilities',
            items: ['Tool & Function Calling', 'Model Routing', 'Streaming', 'Context Management'],
            color: 'text-[#25CA22]',
            border: 'hover:border-[#25CA22]/30'
          },
          {
            title: 'Quality & Ops',
            items: ['AI Evaluation', 'Structured Outputs', 'Security Guardrails', 'Observability'],
            color: 'text-blue-500',
            border: 'hover:border-blue-500/30'
          }
        ].map((category, idx) => (
          <div key={idx} className={\`group relative overflow-hidden rounded-[24px] border border-secondary/5 bg-[#f4f5f8]/50 p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_40px_rgba(6,18,37,0.06)] \${category.border}\`}>
            <div className="flex items-center justify-between mb-6">
               <h3 className="text-xl font-bold tracking-tight text-secondary">{category.title}</h3>
               <span className="text-xs font-bold text-secondary/20">0{idx + 1}</span>
            </div>
            
            <div className="mb-6 h-px w-full bg-secondary/5 transition-colors duration-500 group-hover:bg-secondary/10" />

            <ul className="space-y-4">
              {category.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-secondary/5">
                     <span className={\`h-1.5 w-1.5 rounded-full \${category.color.replace('text-', 'bg-')}\`} />
                  </div>
                  <span className="text-sm font-semibold text-secondary/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const QorebitSection = () => (
  <section className="relative z-0 overflow-hidden bg-[#061225] py-24 md:py-32">
    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay -z-20" />
    <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#25CA22]/10 blur-[150px]" />

    <div className="main-container relative z-10">
      <div className="rounded-[40px] border border-white/10 bg-white/[0.02] p-10 backdrop-blur-xl md:p-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="badge badge-green-v2 mb-6 inline-block">Our Product</span>
            <h3 className="text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-5xl lg:leading-[1.1]">
              Accelerating Enterprise AI with <span className="text-[#25CA22]">Qorebit</span>
            </h3>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Qorebit AI is our proprietary enterprise-grade AI engineering platform, built to streamline the development, deployment, and management of intelligent applications. It provides the tools and infrastructure for secure, scalable, and observable AI solutions.
            </p>
            <div className="mt-10 flex gap-4">
               <Link
                 href="/products/qorebit-ai"
                 className="inline-flex items-center justify-center rounded-full bg-[#25CA22] px-8 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#20b21e] hover:shadow-[0_10px_20px_rgba(37,202,34,0.3)]">
                 Explore Qorebit AI
               </Link>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 bg-gradient-to-r from-[#25CA22]/20 to-[#7E57FD]/20 blur-3xl opacity-50" />
            <Image
              src="/images/ns-img-391.png"
              alt="Qorebit AI Platform"
              width={500}
              height={300}
              className="relative z-10 rounded-[24px] border border-white/10 shadow-2xl"
            />
          </div>
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
        
        <span className="badge badge-green-v2 mb-6 inline-block">Ready to Build?</span>
        <h2 className="text-4xl font-medium tracking-tight text-secondary md:text-5xl lg:text-[64px] lg:leading-[1.1]">
          Have an AI Idea? <br className="hidden md:block" />
          <span className="text-secondary/40">Let's Build It.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-secondary/70">
          From early-stage concepts to production systems, RockScale helps businesses turn AI opportunities into reliable, scalable software.
        </p>
        
        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <Link
            href="/contact-us"
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#25CA22] px-9 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#20b21e] hover:shadow-[0_15px_30px_rgba(37,202,34,0.3)]">
            <span className="relative z-10">Start Your AI Project</span>
            <svg className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-full border border-secondary/20 bg-transparent px-9 py-4 text-sm font-bold text-secondary transition-all hover:bg-secondary/5 hover:border-secondary/30">
            Book a Discovery Call
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const AIPoweredSoftwareDevelopmentPageContent = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WhatWeBuildSection />
      <IdeaToProductionSection />
      <CapabilitiesSection />
      <QorebitSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default AIPoweredSoftwareDevelopmentPageContent;
`

fs.writeFileSync(path.join(__dirname, 'src/components/services/ai-powered-software-development/AIPoweredSoftwareDevelopmentPageContent.tsx'), content);
console.log('Successfully rewritten the AI Powered Software Development page.');
