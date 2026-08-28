
'use client';

import React from 'react';
import Link from 'next/link';

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
        Corporate & Executive <br className="hidden md:block"/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25CA22] to-[#7E57FD]">AI Training Programs</span>
      </h1>
      <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-white/70">
        Equip your engineers, product teams, and executives with the practical skills and strategic context needed to execute AI initiatives.
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
        <p className={`${sectionTextClass} max-w-xl pb-2`}>
          Buying AI tools is easy. Changing how your organization works is the real challenge.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { title: 'Superficial Knowledge', desc: 'Teams know the buzzwords but lack the deep technical understanding to execute.', icon: 'ns-shape-42', color: '#7E57FD' },
          { title: 'Security Risks', desc: 'Employees unknowingly expose proprietary data to public models.', icon: 'ns-shape-23', color: '#25CA22' },
          { title: 'Failed Prototypes', desc: 'Engineers can build a quick demo, but struggle to make it production-ready.', icon: 'ns-shape-33', color: '#f97316' },
          { title: 'Siloed Strategy', desc: 'Executives lack the technical context to align AI investments with business goals.', icon: 'ns-shape-8', color: '#f43f5e' },
        ].map((item, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-[24px] border border-secondary/5 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(6,18,37,0.06)] hover:border-secondary/10">
            
            {/* Soft Ambient Glow (Reveals on Hover) */}
            <div className="absolute -right-8 -top-8 z-0 h-32 w-32 rounded-full opacity-0 blur-[40px] transition-opacity duration-500 group-hover:opacity-[0.12]" style={{ backgroundColor: item.color }} />
            
            {/* Animated Bottom Border */}
            <div className="absolute bottom-0 left-0 z-10 h-1 w-0 transition-all duration-500 group-hover:w-full" style={{ backgroundColor: item.color }} />
            
            {/* Icon Container (Glass/Soft Background) */}
            <div className="relative z-10 mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/50 transition-all duration-500 group-hover:-rotate-3 group-hover:scale-110 group-hover:shadow-sm" style={{ backgroundColor: `${item.color}15` }}>
              <span className={`${item.icon} text-[26px]`} style={{ color: item.color }} />
            </div>
            
            <h3 className="relative z-10 text-[17px] font-bold tracking-tight text-secondary mb-3">{item.title}</h3>
            <p className="relative z-10 text-[14px] leading-relaxed text-secondary/70">{item.desc}</p>
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

        {/* Right: Asymmetric Bento Grid */}
        <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
          {[
            { 
              title: 'Software Engineers', 
              desc: 'LLM integration, Prompt Engineering, RAG Architectures, Tool Calling, and Production Guardrails.', 
              icon: 'ns-shape-41', 
              color: '#25CA22', 
              span: 'sm:col-span-2',
              badge: 'Technical Track'
            },
            { 
              title: 'Data Teams', 
              desc: 'Vector Databases, Semantic Search, and AI Data Pipelines.', 
              icon: 'ns-shape-35', 
              color: '#7E57FD', 
              span: 'sm:col-span-1',
              badge: 'Infra Track'
            },
            { 
              title: 'Product Managers', 
              desc: 'AI UX patterns, model limitations, and feature scoping.', 
              icon: 'ns-shape-8', 
              color: '#f97316', 
              span: 'sm:col-span-1',
              badge: 'Product Track'
            },
            { 
              title: 'Executive Leadership', 
              desc: 'Evaluating AI ROI, build vs. buy decisions, risk management, and enterprise AI strategy.', 
              icon: 'ns-shape-23', 
              color: '#3b82f6', 
              span: 'sm:col-span-2',
              badge: 'Corporate Track'
            },
          ].map((item, idx) => (
            <div 
              key={idx} 
              className={`group relative overflow-hidden rounded-[24px] border border-white/5 bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.04] hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] ${item.span}`}
            >
              {/* Soft Background Ambient Glow */}
              <div className="absolute -bottom-10 -right-10 z-0 h-40 w-40 rounded-full opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-[0.25]" style={{ backgroundColor: item.color }} />
              
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  {/* Header: Icon & Badge */}
                  <div className="flex items-center justify-between mb-8">
                     <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-lg">
                       <span className={`${item.icon} text-[22px]`} style={{ color: item.color }} />
                     </div>
                     <span className="rounded-full border border-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/40 bg-white/[0.02]">
                        {item.badge}
                     </span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold tracking-tight text-white mb-2">{item.title}</h3>
                  <p className="text-[14px] leading-relaxed text-white/60">{item.desc}</p>
                </div>
                
                {/* Reveal Link on Hover */}
                <div className="mt-8 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider opacity-0 transition-all duration-500 group-hover:opacity-100" style={{ color: item.color }}>
                  View Syllabus <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
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
      <div className="grid gap-16 lg:grid-cols-12">
        
        {/* Left: Sticky Header */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-fit">
          <span className="badge badge-green-v2 mb-6 inline-block">Our Approach</span>
          <h2 className={`${sectionTitleClass} max-w-xl`}>How We Teach</h2>
          <p className={`${sectionTextClass} mt-6 max-w-md`}>
            We don't do passive lectures. Our curriculum is practical, hands-on, and directly relevant to the codebase your team works on every day.
          </p>
        </div>

        {/* Right: Vertical Stack */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {[
            { num: '01', title: 'Hands-On Engineering', desc: 'No passive lectures. Teams write code, integrate APIs, and build actual AI workflows during the sessions.', color: '#25CA22' },
            { num: '02', title: 'Customized Scenarios', desc: 'We train your team using your own internal data and technical architecture, not generic datasets.', color: '#7E57FD' },
            { num: '03', title: 'Production Focused', desc: 'We focus heavily on the unglamorous reality of AI: security, latency, cost, and reliability.', color: '#f97316' },
            { num: '04', title: 'Tool Agnostic', desc: "We teach the underlying principles of AI architecture, not just how to use a specific vendor's API.", color: '#5391f5' },
          ].map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-[32px] border border-secondary/5 bg-[#f4f5f8]/50 p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_40px_rgba(6,18,37,0.06)]">
              
              {/* Giant Watermark Number */}
              <div className="absolute -right-6 -top-10 z-0 text-[180px] font-black leading-none text-secondary/[0.03] transition-transform duration-700 group-hover:-translate-x-4 group-hover:scale-110">
                {item.num}
              </div>
              
              {/* Colored Line (Animated on Hover) */}
              <div className="absolute left-0 top-0 z-10 h-full w-1.5 transition-all duration-500 group-hover:w-2" style={{ backgroundColor: item.color }} />
              
              <div className="relative z-20 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                 {/* Floating Number Icon */}
                 <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm border border-secondary/5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-md">
                    <span className="text-2xl font-black" style={{ color: item.color }}>{item.num}</span>
                 </div>
                 
                 {/* Content */}
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
    {/* Immersive Dark Background Noise & Glows */}
    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay -z-20" />
    <div className="absolute left-0 top-0 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7E57FD]/20 blur-[150px]" />
    <div className="absolute bottom-0 right-0 -z-10 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 rounded-full bg-[#25CA22]/20 blur-[120px]" />
    
    {/* Faint Background Grid */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none -z-10" />

    <div className="main-container relative z-10 text-center">
      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#25CA22] mb-8 inline-block shadow-sm">
        Ready to scale?
      </span>
      <h2 className="mx-auto max-w-4xl text-4xl font-medium tracking-tight text-white md:text-6xl lg:text-[72px] lg:leading-[1.05]">
        Upskill Your Team <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25CA22] to-[#7E57FD]">For the AI Era</span>
      </h2>
      <p className="mx-auto mt-8 max-w-2xl text-[19px] leading-relaxed text-white/60">
        Stop relying on external vendors for everything. Build internal competency and empower your team to own their AI future.
      </p>
      
      <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
        <Link
          href="/contact-us"
          className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#25CA22] px-10 py-5 text-[15px] font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#20b21e] hover:shadow-[0_15px_30px_rgba(37,202,34,0.3)]">
          <span className="relative z-10">Plan Your Training</span>
          <svg className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        <Link
          href="/contact-us"
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-10 py-5 text-[15px] font-bold text-white transition-all hover:bg-white/5 hover:border-white/30">
          Download Curriculum
        </Link>
      </div>
    </div>
  </section>
);

const AITrainingPageContent = () => {
  return (
    <main className="bg-white">
      <HeroSection />
      <TheChallengeSection />
      <CurriculumSection />
      <ApproachSection />
      <FinalCTASection />
      
      {/* Small white spacing between CTA and Footer */}
      <div className="h-12 w-full bg-white" />
    </main>
  );
};

export default AITrainingPageContent;
