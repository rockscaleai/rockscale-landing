'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';

const metrics = [
  { value: '90 Days', label: 'to a practical action plan' },
  { value: '6 Phases', label: 'from discovery to scale' },
  { value: 'End-to-End', label: 'strategy through implementation' },
];

const AIStrategyRoadmapHero = () => {
  return (
    <section
      className="relative z-0 overflow-hidden bg-secondary pt-36 pb-20 md:pt-44 md:pb-24 lg:pt-52 lg:pb-[120px] xl:pt-[220px] xl:pb-[140px]"
      aria-labelledby="ai-strategy-roadmap-hero-heading">
      <div className="absolute inset-0 bg-[url('/images/ns-img-495.png')] bg-cover bg-top bg-no-repeat opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(126,87,253,0.35),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.28),transparent_30%)]" />
      <div className="pointer-events-none absolute top-20 left-[8%] h-32 w-32 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[10%] top-[18%] h-56 w-56 rounded-full bg-primary/30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[8%] left-[18%] h-44 w-44 rounded-full bg-sky-400/20 blur-[100px]" />

      <div className="main-container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <RevealAnimation delay={0.1}>
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm font-semibold text-white/90 backdrop-blur-sm">
                AI Strategy & Roadmap
              </span>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h1
                id="ai-strategy-roadmap-hero-heading"
                className="mt-6 max-w-[760px] text-white lg:max-w-[820px]">
                Turn AI Ambition Into a Clear, Executable Roadmap
              </h1>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="mt-6 max-w-[680px] text-lg leading-relaxed text-white/75 md:text-xl">
                RockScale helps businesses identify high-value AI opportunities, prioritize what matters most and build a practical roadmap that moves from strategy to production.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <LinkButton
                  href="/contact-us"
                  className="btn btn-md w-[85%] bg-white text-secondary hover:bg-primary hover:text-white sm:w-auto">
                  Build Your AI Roadmap
                </LinkButton>
                <LinkButton
                  href="#90-day-ai-plan"
                  className="btn btn-md w-[85%] border border-white/20 bg-white/10 text-white hover:bg-white hover:text-secondary sm:w-auto">
                  Discover Your 90-Day Plan
                </LinkButton>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.5}>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[24px] border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                    <p className="text-2xl font-bold text-white">{metric.value}</p>
                    <p className="mt-2 text-sm leading-6 text-white/70">{metric.label}</p>
                  </div>
                ))}
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.35} direction="left" offset={120}>
            <div className="relative mx-auto max-w-[560px]">
              <div className="rounded-[32px] border border-white/10 bg-white/10 p-6 shadow-[0_30px_100px_rgba(15,23,42,0.35)] backdrop-blur-xl md:p-8">
                <div className="rounded-[28px] border border-white/10 bg-white/95 p-6 text-secondary shadow-inner md:p-7 dark:bg-background-7/95 dark:text-white">
                  <div className="flex items-center justify-between border-b border-secondary/10 pb-4 dark:border-white/10">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Roadmap Snapshot</p>
                      <h2 className="mt-2 text-2xl font-bold">How we structure the journey</h2>
                    </div>
                    <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Strategy → Scale</div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {[
                      { title: 'Discover', text: 'Assess readiness, identify opportunities and align AI to business priorities.' },
                      { title: 'Prioritize', text: 'Focus on the use cases with the best mix of impact, feasibility and speed.' },
                      { title: 'Execute', text: 'Define architecture, roadmap and implementation path to production.' },
                    ].map((item, index) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-4 rounded-2xl bg-secondary/[0.04] p-4 dark:bg-white/5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-lg font-semibold">{item.title}</p>
                          <p className="mt-1 text-sm leading-7 text-secondary/70 dark:text-white/70">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-primary/10 p-4 dark:bg-primary/20">
                      <p className="text-sm font-semibold text-primary">Outcome</p>
                      <p className="mt-2 text-sm leading-6 text-secondary/80 dark:text-white/80">
                        Clear use-case priorities, architecture direction and investment focus.
                      </p>
                    </div>
                    <div className="rounded-2xl bg-secondary/[0.05] p-4 dark:bg-white/5">
                      <p className="text-sm font-semibold text-primary">Next Step</p>
                      <p className="mt-2 text-sm leading-6 text-secondary/80 dark:text-white/80">
                        Move directly into data, software and implementation support with RockScale.
                      </p>
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

AIStrategyRoadmapHero.displayName = 'AIStrategyRoadmapHero';
export default AIStrategyRoadmapHero;
