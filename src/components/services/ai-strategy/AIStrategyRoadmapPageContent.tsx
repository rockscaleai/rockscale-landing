'use client';

import Link from 'next/link';
import Navbar from '@/components/shared/navbar/Navbar';
import Footer from '@/components/shared/footer/Footer';
import AIStrategyRoadmapHero from '@/components/services/ai-strategy/AIStrategyRoadmapHero';

const sectionLabelClass = 'badge badge-green-v2 mb-4 inline-block';
const sectionTitleClass = 'text-4xl font-medium tracking-tight text-secondary md:text-5xl lg:text-[52px] lg:leading-[1.1]';
const sectionTitleDarkClass = 'text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-[52px] lg:leading-[1.1]';
const sectionTextClass = 'text-lg leading-relaxed text-secondary/70';
const sectionTextDarkClass = 'text-lg leading-relaxed text-white/70';

const TheProblemSection = () => (
  <section className="relative z-0 overflow-hidden bg-[#f4f5f8] py-24 md:py-32">
    {/* Ambient Glows */}
    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-multiply -z-20" />
    <div className="absolute -top-40 -right-40 -z-10 h-[600px] w-[600px] rounded-full bg-[#7E57FD]/5 blur-[100px]" />
    <div className="absolute -bottom-40 -left-40 -z-10 h-[600px] w-[600px] rounded-full bg-[#25CA22]/5 blur-[100px]" />
    
    <div className="main-container relative z-10">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        
        {/* Left: Copy */}
        <div className="pr-8">
          <span className="badge badge-green-v2 mb-6 inline-block">The Challenge</span>
          <h2 className="text-4xl font-medium tracking-tight text-secondary md:text-5xl lg:text-[56px] lg:leading-[1.1]">
            AI is easy to explore. <br />
            <span className="text-secondary/40">Knowing what to build is where most teams stall.</span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-secondary/70 max-w-xl">
            Organizations face too many AI tools, too many possible use cases, and too little clarity on where real business value lives. The result is scattered experimentation, unclear ROI, and initiatives disconnected from strategic priorities.
          </p>
          
          <div className="mt-12 flex items-center gap-4 border-t border-secondary/10 pt-8">
             <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                   <div key={i} className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#f4f5f8] bg-white shadow-sm">
                      <span className="text-secondary/40 text-xs font-bold">0{i}</span>
                   </div>
                ))}
             </div>
             <p className="text-sm font-medium text-secondary/50 max-w-[200px] leading-relaxed">
               The three main obstacles blocking enterprise AI adoption.
             </p>
          </div>
        </div>

        {/* Right: Glass Cards Grid */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#25CA22]/5 to-[#7E57FD]/5 blur-3xl rounded-full opacity-50" />
          <div className="relative grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Too Many Options',
                subtitle: 'tools & vendors',
                desc: 'The landscape changes weekly, making technical decisions paralyzing.',
                icon: 'ns-shape-23',
                color: 'text-[#7E57FD]',
                borderHover: 'hover:border-[#7E57FD]/30',
                shadowHover: 'hover:shadow-[0_20px_40px_rgba(126,87,253,0.08)]'
              },
              {
                title: 'Unclear ROI',
                subtitle: 'prioritization',
                desc: 'Without a framework, teams build AI that doesn’t impact the bottom line.',
                icon: 'ns-shape-8',
                color: 'text-[#25CA22]',
                borderHover: 'hover:border-[#25CA22]/30',
                shadowHover: 'hover:shadow-[0_20px_40px_rgba(37,202,34,0.08)]'
              },
              {
                title: 'Data Silos',
                subtitle: 'quality & access',
                desc: 'AI can only be as good as the underlying data architecture supporting it.',
                icon: 'ns-shape-41',
                color: 'text-secondary/80',
                borderHover: 'hover:border-secondary/20',
                shadowHover: 'hover:shadow-[0_20px_40px_rgba(6,18,37,0.05)]'
              },
              {
                title: 'Hard Path',
                subtitle: 'to production',
                desc: 'Moving from a Jupyter notebook to a scalable enterprise system is tough.',
                icon: 'ns-shape-35',
                color: 'text-secondary/80',
                borderHover: 'hover:border-secondary/20',
                shadowHover: 'hover:shadow-[0_20px_40px_rgba(6,18,37,0.05)]'
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`group flex flex-col justify-between rounded-[32px] border border-secondary/5 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 ${item.borderHover} ${item.shadowHover}`}
              >
                <div>
                  <span className={`${item.icon} ${item.color} text-4xl mb-6 block transition-transform group-hover:scale-110`} />
                  <h3 className="text-2xl font-semibold tracking-tight text-secondary">{item.title}</h3>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/40">{item.subtitle}</p>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-secondary/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  </section>
);

const AIReadinessAssessmentSection = () => (
  <section className="bg-white py-24 md:py-32">
    <div className="main-container">
      <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <span className="badge badge-green-v2 mb-6 inline-block">AI Readiness Assessment</span>
          <h2 className="text-4xl font-medium tracking-tight text-secondary md:text-5xl lg:text-[52px] lg:leading-[1.1]">
            Understand where you stand before you build
          </h2>
        </div>
        <p className="text-lg leading-relaxed text-secondary/70 max-w-xl pb-2">
          We evaluate the core capabilities that determine whether AI initiatives succeed sustainably — from business clarity and data quality to governance and execution.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {[
          { title: 'Business', icon: 'ns-shape-8', color: 'text-[#7E57FD]', border: 'group-hover:border-[#7E57FD]/30', items: ['Strategic Goals', 'AI Opportunities', 'Expected ROI'] },
          { title: 'Data', icon: 'ns-shape-23', color: 'text-[#25CA22]', border: 'group-hover:border-[#25CA22]/30', items: ['Data Availability', 'Data Quality', 'Accessibility'] },
          { title: 'Technology', icon: 'ns-shape-41', color: 'text-blue-500', border: 'group-hover:border-blue-500/30', items: ['Architecture', 'Infrastructure', 'Current Software'] },
          { title: 'People', icon: 'ns-shape-35', color: 'text-orange-500', border: 'group-hover:border-orange-500/30', items: ['Technical Skills', 'AI Literacy', 'Team Capacity'] },
          { title: 'Governance', icon: 'ns-shape-42', color: 'text-rose-500', border: 'group-hover:border-rose-500/30', items: ['Security Models', 'Data Privacy', 'Risk Management'] },
        ].map((category, idx) => (
          <div
            key={category.title}
            className={`group relative overflow-hidden rounded-[24px] border border-secondary/5 bg-[#f4f5f8]/50 p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_40px_rgba(6,18,37,0.06)] ${category.border}`}>
            <div className="flex items-center justify-between mb-6">
               <span className={`${category.icon} ${category.color} text-3xl opacity-80 transition-transform duration-500 group-hover:scale-110`} />
               <span className="text-xs font-bold text-secondary/20">0{idx + 1}</span>
            </div>
            <h3 className="text-xl font-bold tracking-tight text-secondary">{category.title}</h3>
            
            <div className="mt-6 mb-6 h-px w-full bg-secondary/5 transition-colors duration-500 group-hover:bg-secondary/10" />
            
            <ul className="space-y-4">
              {category.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-secondary/5">
                     <span className={`h-1.5 w-1.5 rounded-full ${category.color.replace('text-', 'bg-')}`} />
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

const PrioritizationFrameworkSection = () => (
  <section className="relative overflow-hidden bg-[#061225] py-24 md:py-32">
    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay -z-10" />
    <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-[#7E57FD]/10 blur-[150px]" />
    
    <div className="main-container">
      <div className="mb-16 text-center">
        <span className={sectionLabelClass}>Prioritization Matrix</span>
        <h2 className={`${sectionTitleDarkClass} mx-auto mt-6 max-w-4xl`}>Not every AI idea deserves to be built</h2>
        <p className={`${sectionTextDarkClass} mx-auto mt-6 max-w-2xl`}>
          Our prioritization framework helps you focus on initiatives that balance strategic value with realistic execution effort, reducing technical risk and maximizing ROI.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {[
          {
            title: 'Quick Wins',
            subtitle: 'High value / Low complexity',
            note: 'Start here to prove momentum and capture measurable results early.',
            className: 'border-[#25CA22]/30 bg-[#25CA22]/5 shadow-[0_0_30px_rgba(37,202,34,0.05)]',
            accent: 'text-[#25CA22]',
          },
          {
            title: 'Strategic Bets',
            subtitle: 'High value / High complexity',
            note: 'Plan carefully and invest deliberately when the payoff is transformative.',
            className: 'border-[#7E57FD]/30 bg-[#7E57FD]/5 shadow-[0_0_30px_rgba(126,87,253,0.05)]',
            accent: 'text-[#7E57FD]',
          },
          {
            title: 'Experiments',
            subtitle: 'Low value / Low complexity',
            note: 'Test selectively to learn fast without overcommitting resources.',
            className: 'border-white/10 bg-white/5',
            accent: 'text-white/60',
          },
          {
            title: 'Avoid',
            subtitle: 'Low value / High complexity',
            note: 'Do not prioritize unless assumptions change significantly.',
            className: 'border-white/5 bg-white/[0.02] opacity-60',
            accent: 'text-white/40',
          },
        ].map((item) => (
          <div
            key={item.title}
            className={`rounded-[32px] border p-8 backdrop-blur-xl transition-all duration-300 hover:bg-white/10 ${item.className}`}>
            <h3 className="text-3xl font-semibold tracking-tight text-white">{item.title}</h3>
            <p className={`mt-2 text-sm font-bold uppercase tracking-wider ${item.accent}`}>{item.subtitle}</p>
            <p className="mt-5 text-base leading-relaxed text-white/70">{item.note}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const RoadmapSection = () => (
  <section className="bg-white py-24 md:py-32">
    <div className="main-container">
      <div className="mb-20 text-center">
        <span className="badge badge-green-v2 mb-6 inline-block">Execution Roadmap</span>
        <h2 className="text-4xl font-medium tracking-tight text-secondary md:text-5xl lg:text-[52px] lg:leading-[1.1] mx-auto max-w-3xl">
          From AI ideas to an executable roadmap
        </h2>
        <p className="text-lg leading-relaxed text-secondary/70 mx-auto mt-6 max-w-2xl">
          We translate strategy into a structured path that moves your organization from discovery to deployment and scale.
        </p>
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Connecting Gradient Line */}
        <div className="absolute left-6 top-8 hidden h-[calc(100%-80px)] w-[2px] rounded-full bg-gradient-to-b from-[#7E57FD] via-[#25CA22] to-secondary/10 md:block" />
        
        <div className="grid gap-10">
          {[
            { phase: 'Discover', description: 'Assess readiness, locate data, and align AI with enterprise priorities.', accent: 'bg-[#7E57FD]', shadow: 'shadow-[0_0_15px_rgba(126,87,253,0.3)]' },
            { phase: 'Prioritize', description: 'Filter use cases for maximum ROI and lowest technical risk.', accent: 'bg-[#5391f5]', shadow: 'shadow-[0_0_15px_rgba(83,145,245,0.3)]' },
            { phase: 'Validate', description: 'Run focused experiments and assess technical feasibility.', accent: 'bg-[#25CA22]', shadow: 'shadow-[0_0_15px_rgba(37,202,34,0.3)]' },
            { phase: 'Execute', description: 'Define the target architecture and the 90-day implementation path.', accent: 'bg-orange-500', shadow: 'shadow-[0_0_15px_rgba(249,115,22,0.3)]' },
            { phase: 'Scale', description: 'Expand successful initiatives across teams and business units.', accent: 'bg-secondary', shadow: 'shadow-[0_0_15px_rgba(6,18,37,0.3)]' },
          ].map((item, index) => (
            <div key={item.phase} className="group grid gap-6 md:grid-cols-[60px_1fr] md:gap-12 relative z-10">
              
              <div className="hidden md:flex justify-center pt-2">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full text-base font-bold text-white transition-all duration-500 group-hover:scale-110 ${item.accent} ${item.shadow}`}>
                  {index + 1}
                </div>
              </div>
              
              <div className="rounded-[32px] border border-secondary/5 bg-white p-8 shadow-[0_10px_30px_rgba(6,18,37,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(6,18,37,0.08)]">
                <div className="md:hidden mb-6 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white shadow-lg bg-secondary">
                  {index + 1}
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                   <h3 className="text-2xl font-bold tracking-tight text-secondary">Phase 0{index + 1}</h3>
                   <span className="h-px w-8 bg-secondary/20"></span>
                   <span className={`text-sm font-bold uppercase tracking-[0.2em] ${item.accent.replace('bg-', 'text-')}`}>{item.phase}</span>
                </div>
                
                <p className="text-base leading-relaxed text-secondary/70">{item.description}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const NinetyDayAIPlanSection = () => (
  <section id="90-day-ai-plan" className="relative z-0 overflow-hidden bg-[#061225] py-24 md:py-32">
    {/* Ambient Glows */}
    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay -z-20" />
    <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-[#7E57FD]/10 blur-[150px]" />
    <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] translate-y-1/2 -translate-x-1/3 rounded-full bg-[#25CA22]/10 blur-[150px]" />

    <div className="main-container relative z-10">
      <div className="mb-20 text-center">
        <span className="badge badge-green-v2 mb-6 inline-block">90-Day Action Plan</span>
        <h2 className="text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-[52px] lg:leading-[1.1] mx-auto max-w-3xl">
          Momentum in the next 90 days
        </h2>
        <p className="text-lg leading-relaxed text-white/70 mx-auto mt-6 max-w-2xl">
          A practical roadmap should create momentum immediately. We break the first 90 days into focused stages that turn strategy into action.
        </p>
      </div>

      <div className="relative grid gap-6 lg:grid-cols-3">
        {/* Connecting Line (Desktop) */}
        <div className="absolute top-[88px] left-8 hidden w-[calc(100%-64px)] border-t border-dashed border-white/20 lg:block" />

        {[
          { title: 'Days 1–30', subtitle: 'Discovery', items: ['Assess technical debt', 'Discover capabilities', 'Prioritize use cases'], accent: 'bg-[#7E57FD]', textColor: 'text-[#7E57FD]', glow: 'hover:shadow-[0_20px_60px_rgba(126,87,253,0.15)]', border: 'group-hover:border-[#7E57FD]/30' },
          { title: 'Days 31–60', subtitle: 'Validation', items: ['Validate assumptions', 'Build prototype', 'Prepare architecture'], accent: 'bg-[#25CA22]', textColor: 'text-[#25CA22]', glow: 'hover:shadow-[0_20px_60px_rgba(37,202,34,0.15)]', border: 'group-hover:border-[#25CA22]/30' },
          { title: 'Days 61–90', subtitle: 'Execution', items: ['Build foundation', 'Deploy to staging', 'Measure business impact'], accent: 'bg-[#5391f5]', textColor: 'text-[#5391f5]', glow: 'hover:shadow-[0_20px_60px_rgba(83,145,245,0.15)]', border: 'group-hover:border-[#5391f5]/30' },
        ].map((period, index) => (
          <div
            key={period.title}
            className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] ${period.glow} ${period.border}`}>
            
            <div className="flex items-center justify-between mb-8">
               <h3 className="text-3xl font-bold tracking-tight text-white">{period.title}</h3>
               <span className={`text-xs font-bold uppercase tracking-[0.2em] ${period.textColor}`}>{period.subtitle}</span>
            </div>

            <div className={`mb-8 h-[2px] w-full rounded-full opacity-50 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-opacity group-hover:opacity-100`} />

            <ul className="space-y-5">
              {period.items.map((item) => (
                <li key={item} className="flex items-center gap-4 text-sm font-medium text-white/80 transition-colors group-hover:text-white">
                  <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10`}>
                     <span className={`h-2 w-2 rounded-full ${period.accent}`} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTASection = () => (
  <section className="relative overflow-hidden bg-white py-24 md:py-32 border-t border-secondary/5">
    {/* Ambient Glows */}
    <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#25CA22]/10 to-[#7E57FD]/10 blur-[100px]" />
    
    <div className="main-container relative z-10">
      <div className="mx-auto max-w-4xl rounded-[48px] border border-secondary/5 bg-white/60 p-10 text-center shadow-[0_20px_80px_rgba(6,18,37,0.06)] backdrop-blur-2xl md:p-20">
        
        <span className="badge badge-green-v2 mb-6 inline-block">Ready to move?</span>
        <h2 className="text-4xl font-medium tracking-tight text-secondary md:text-5xl lg:text-[64px] lg:leading-[1.1]">
          Turn AI Ambition <br className="hidden md:block" />
          <span className="text-secondary/40">into Execution</span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-secondary/70">
          Let&apos;s identify the opportunities worth pursuing, build a practical roadmap, and create a clear path from AI strategy to production.
        </p>
        
        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <Link
            href="/contact-us"
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#25CA22] px-9 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#20b21e] hover:shadow-[0_15px_30px_rgba(37,202,34,0.3)]">
            <span className="relative z-10">Build Your AI Roadmap</span>
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

const AIStrategyRoadmapPageContent = () => {
  return (
    <main className="overflow-hidden bg-white">
      <Navbar />
      <AIStrategyRoadmapHero />
      <TheProblemSection />
      <AIReadinessAssessmentSection />
      <PrioritizationFrameworkSection />
      <RoadmapSection />
      <NinetyDayAIPlanSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default AIStrategyRoadmapPageContent;
