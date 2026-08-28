const fs = require('fs');
const path = require('path');

const content = `'use client';

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
  <section className="relative overflow-hidden bg-[#f4f5f8] py-24 md:py-32">
    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-multiply -z-10" />
    <div className="main-container">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <span className={sectionLabelClass}>The Challenge</span>
          <h2 className={sectionTitleClass}>AI is easy to explore. Knowing what to build is where most teams stall.</h2>
          <p className={\`\${sectionTextClass} mt-6 max-w-xl\`}>
            Organizations face too many AI tools, too many possible use cases, and too little clarity on where real business value lives. The result is scattered experimentation, unclear ROI, and initiatives disconnected from strategic priorities.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3 border-t border-secondary/10 pt-10">
            {[
              { value: 'Too many', label: 'tools and vendors' },
              { value: 'Unclear', label: 'ROI & prioritization' },
              { value: 'Hard', label: 'path to production' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-3xl font-semibold text-secondary">{item.value}</p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wider text-secondary/50">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[#7E57FD]/10 blur-3xl" />
          <div className="absolute -right-6 -bottom-6 h-40 w-40 rounded-full bg-[#25CA22]/10 blur-3xl" />
          
          <div className="relative rounded-[32px] border border-secondary/5 bg-white p-8 shadow-[0_20px_80px_rgba(6,18,37,0.06)] md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#25CA22]">What gets in the way</p>
            <div className="mt-6 space-y-4">
              {[
                'Scattered experimentation without direction',
                'AI projects disconnected from business goals',
                'Poor-quality or inaccessible data',
                'Security and governance concerns',
                'Difficulty moving from PoC to production',
              ].map((item, index) => (
                <div key={item} className="flex items-start gap-4 rounded-2xl bg-[#f4f5f8] p-4 transition-colors hover:bg-secondary/5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-secondary shadow-sm">
                    {index + 1}
                  </div>
                  <p className="text-sm font-medium leading-relaxed text-secondary/80">{item}</p>
                </div>
              ))}
            </div>
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
          <span className={sectionLabelClass}>AI Readiness Assessment</span>
          <h2 className={\`\${sectionTitleClass} mt-6\`}>Understand where you stand before you build</h2>
        </div>
        <p className={\`\${sectionTextClass} max-w-xl\`}>
          We evaluate the capabilities that determine whether AI initiatives can succeed sustainably — from business clarity and data quality to governance and implementation readiness.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {[
          { title: 'Business', icon: '01', items: ['Goals', 'AI opportunities', 'Expected ROI'] },
          { title: 'Data', icon: '02', items: ['Availability', 'Quality', 'Accessibility'] },
          { title: 'Technology', icon: '03', items: ['Architecture', 'Infrastructure', 'Software'] },
          { title: 'People', icon: '04', items: ['Technical skills', 'AI literacy', 'Capacity'] },
          { title: 'Governance', icon: '05', items: ['Security', 'Privacy', 'Risk management'] },
        ].map((category) => (
          <div
            key={category.title}
            className="group rounded-[28px] border border-secondary/5 bg-[#f4f5f8] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_40px_rgba(6,18,37,0.05)]">
            <span className="text-sm font-bold tracking-[0.2em] text-secondary/30">{category.icon}</span>
            <h3 className="mt-6 text-xl font-semibold text-secondary">{category.title}</h3>
            <ul className="mt-5 space-y-3">
              {category.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-secondary/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#25CA22]" />
                  <span>{item}</span>
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
        <h2 className={\`\${sectionTitleDarkClass} mx-auto mt-6 max-w-4xl\`}>Not every AI idea deserves to be built</h2>
        <p className={\`\${sectionTextDarkClass} mx-auto mt-6 max-w-2xl\`}>
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
            className={\`rounded-[32px] border p-8 backdrop-blur-xl transition-all duration-300 hover:bg-white/10 \${item.className}\`}>
            <h3 className="text-3xl font-semibold tracking-tight text-white">{item.title}</h3>
            <p className={\`mt-2 text-sm font-bold uppercase tracking-wider \${item.accent}\`}>{item.subtitle}</p>
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
      <div className="mb-16 text-center">
        <span className={sectionLabelClass}>Execution Roadmap</span>
        <h2 className={\`\${sectionTitleClass} mx-auto mt-6 max-w-3xl\`}>From AI ideas to an executable roadmap</h2>
        <p className={\`\${sectionTextClass} mx-auto mt-6 max-w-2xl\`}>
          We translate strategy into a structured path that moves your organization from discovery to deployment and scale.
        </p>
      </div>

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-6 top-0 hidden h-full w-px bg-secondary/10 md:block" />
        <div className="grid gap-8">
          {[
            { phase: 'Discover', description: 'Assess readiness, locate data, and align AI with enterprise priorities.' },
            { phase: 'Prioritize', description: 'Filter use cases for maximum ROI and lowest technical risk.' },
            { phase: 'Validate', description: 'Run focused experiments and assess technical feasibility.' },
            { phase: 'Execute', description: 'Define the target architecture and the 90-day implementation path.' },
            { phase: 'Scale', description: 'Expand successful initiatives across teams and business units.' },
          ].map((item, index) => (
            <div key={item.phase} className="grid gap-6 md:grid-cols-[60px_1fr] md:gap-10">
              <div className="hidden md:flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-base font-bold text-white shadow-lg">
                  {index + 1}
                </div>
              </div>
              <div className="rounded-[32px] border border-secondary/5 bg-[#f4f5f8] p-8 transition-transform duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_50px_rgba(6,18,37,0.06)]">
                <div className="md:hidden mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-secondary">Phase {index + 1} — {item.phase}</h3>
                <p className="mt-3 text-base leading-relaxed text-secondary/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const NinetyDayAIPlanSection = () => (
  <section id="90-day-ai-plan" className="bg-[#f4f5f8] py-24 md:py-32">
    <div className="main-container">
      <div className="mb-16 text-center">
        <span className={sectionLabelClass}>90-Day Action Plan</span>
        <h2 className={\`\${sectionTitleClass} mx-auto mt-6 max-w-3xl\`}>Momentum in the next 90 days</h2>
        <p className={\`\${sectionTextClass} mx-auto mt-6 max-w-2xl\`}>
          A practical roadmap should create momentum immediately. We break the first 90 days into focused stages that turn strategy into action.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {[
          { title: 'Days 1–30', items: ['Assess', 'Discover', 'Prioritize'], accent: 'bg-[#7E57FD]' },
          { title: 'Days 31–60', items: ['Validate', 'Prototype', 'Prepare Architecture'], accent: 'bg-[#25CA22]' },
          { title: 'Days 61–90', items: ['Build', 'Deploy', 'Measure'], accent: 'bg-secondary' },
        ].map((period) => (
          <div
            key={period.title}
            className="overflow-hidden rounded-[32px] border border-secondary/5 bg-white shadow-[0_20px_50px_rgba(6,18,37,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(6,18,37,0.08)]">
            <div className={\`h-2.5 w-full \${period.accent}\`} />
            <div className="p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-secondary">{period.title}</h3>
              <ul className="mt-8 space-y-4">
                {period.items.map((item) => (
                  <li key={item} className="flex items-center gap-4 text-sm font-medium text-secondary/80">
                    <span className={\`h-2 w-2 rounded-full \${period.accent}\`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTASection = () => (
  <section className="bg-white py-24 md:py-32">
    <div className="main-container">
      <div className="relative overflow-hidden rounded-[40px] bg-[#061225] px-8 py-16 text-center shadow-[0_30px_100px_rgba(6,18,37,0.2)] md:px-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#25CA22]/20 blur-[120px]" />
        
        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="badge badge-green-v2 mb-6">Ready to move?</span>
          <h2 className="text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Turn AI Ambition into Execution
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Let&apos;s identify the opportunities worth pursuing, build a practical roadmap, and create a clear path from AI strategy to production.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-[#25CA22] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#20b21e] hover:shadow-[0_10px_20px_rgba(37,202,34,0.3)]">
              Build Your AI Roadmap
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/10 bg-transparent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/5 hover:border-white/20">
              Talk to an Expert
            </Link>
          </div>
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
`

fs.writeFileSync(path.join(__dirname, 'src/components/services/ai-strategy/AIStrategyRoadmapPageContent.tsx'), content);
