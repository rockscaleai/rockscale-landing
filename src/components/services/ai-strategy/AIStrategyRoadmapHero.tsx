'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';

const metrics = [
  { value: '90 Days', label: 'to an executable plan' },
  { value: 'Data-Driven', label: 'feasibility assessment' },
  { value: 'End-to-End', label: 'strategy to production' },
];

const AIStrategyRoadmapHero = () => {
  return (
    <section
      className="relative z-0 overflow-hidden bg-[#061225] pt-36 pb-20 md:pt-44 md:pb-24 lg:pt-52 lg:pb-[140px] xl:pt-[200px] xl:pb-[140px]"
      aria-labelledby="ai-strategy-roadmap-hero-heading">
      
      {/* ── Background & Texture ── */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay -z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(126,87,253,0.15),transparent_40%),radial-gradient(circle_at_bottom,rgba(37,202,34,0.1),transparent_50%)] -z-10" />

      {/* ── Ambient Glow Orbs ── */}
      <div className="pointer-events-none absolute top-[20%] left-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7E57FD]/20 blur-[150px] -z-10" />
      <div className="pointer-events-none absolute bottom-[10%] right-0 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-[#25CA22]/10 blur-[150px] -z-10" />

      <div className="main-container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <RevealAnimation delay={0.1}>
              <div className="mb-6">
                <span className="badge badge-green-v2">AI Strategy & Roadmap</span>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h1
                id="ai-strategy-roadmap-hero-heading"
                className="mt-6 max-w-[760px] text-5xl font-medium tracking-tight text-white md:text-6xl lg:text-[64px] lg:leading-[1.1]">
                Turn AI Ambition Into <br className="hidden lg:block"/> an Executable Plan
              </h1>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="mt-6 max-w-[640px] text-lg leading-relaxed text-white/70 md:text-xl">
                RockScale helps enterprise leaders identify high-value AI opportunities, prioritize based on data readiness, and build a precise roadmap that moves from strategic intent to production deployment.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <LinkButton
                  href="/contact-us"
                  className="btn btn-md w-[85%] bg-[#25CA22] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#20b21e] hover:shadow-[0_10px_20px_rgba(37,202,34,0.3)] sm:w-auto border-none">
                  Build Your Roadmap
                </LinkButton>
                <LinkButton
                  href="#90-day-ai-plan"
                  className="btn btn-md w-[85%] border border-white/20 bg-white/5 text-white transition-colors duration-300 hover:bg-white/10 hover:border-white/30 sm:w-auto">
                  Explore Deliverables
                </LinkButton>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.5}>
              <div className="mt-14 grid gap-6 sm:grid-cols-3 border-t border-white/10 pt-10">
                {metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-3xl font-semibold text-white">{metric.value}</p>
                    <p className="mt-1 text-sm font-medium uppercase tracking-wider text-white/40">{metric.label}</p>
                  </div>
                ))}
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.35} direction="left" offset={120}>
            <div className="relative mx-auto max-w-[560px]">
              {/* Floating decorative elements */}
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[#7E57FD]/20 blur-2xl" />
              <div className="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-[#25CA22]/20 blur-2xl" />
              
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl md:p-8">
                <div className="rounded-[28px] border border-white/5 bg-[#0a162b] p-6 shadow-inner md:p-7">
                  
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#25CA22]">Roadmap Snapshot</p>
                      <h2 className="mt-2 text-xl font-medium text-white">The Strategy Journey</h2>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {[
                      { title: 'Discover', text: 'Assess readiness, locate data, and align AI with enterprise priorities.' },
                      { title: 'Prioritize', text: 'Filter use cases for maximum ROI and lowest technical risk.' },
                      { title: 'Execute', text: 'Define the target architecture and the 90-day implementation path.' },
                    ].map((item, index) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-4 rounded-2xl bg-white/5 p-4 border border-white/5 transition-colors hover:border-white/10 hover:bg-white/10">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-[#25CA22]">
                          0{index + 1}
                        </div>
                        <div>
                          <p className="text-base font-semibold text-white">{item.title}</p>
                          <p className="mt-1 text-sm leading-relaxed text-white/60">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-[#25CA22]/20 bg-[#25CA22]/5 p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25CA22]/20 text-[#25CA22]">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">The Ultimate Outcome</p>
                        <p className="mt-0.5 text-xs text-white/70">A clear, phased implementation path.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default AIStrategyRoadmapHero;
