'use client';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const metrics = [
  {
    value: 50,
    suffix: '+',
    label: 'AI solutions delivered',
    note: 'Across strategy, automation, LLM, and cloud transformation projects.',
    accent: 'from-[#7E57FD] to-[#9B8CFF]',
    glow: 'bg-[#7E57FD]/20',
    rooms: 2,
  },
  {
    value: 98,
    suffix: '%',
    label: 'Client satisfaction rate',
    note: 'Built on close collaboration, transparent delivery, and measurable outcomes.',
    accent: 'from-sky-400 to-cyan-300',
    glow: 'bg-sky-400/20',
    rooms: 2,
  },
  {
    value: 3,
    suffix: 'x',
    label: 'Average ROI for clients',
    note: 'A sharper focus on high-impact use cases and production-ready execution.',
    accent: 'from-emerald-400 to-lime-300',
    glow: 'bg-emerald-400/20',
    rooms: 1,
  },
  {
    value: 10,
    suffix: '+',
    label: 'Years of deep AI expertise',
    note: 'Hands-on experience building dependable data and AI systems that scale.',
    accent: 'from-amber-400 to-orange-300',
    glow: 'bg-amber-400/20',
    rooms: 2,
  },
];

const Counter = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-[100px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-10 h-40 w-40 rounded-full bg-[#7E57FD]/10 blur-[90px]" />
        <div className="absolute bottom-10 right-[8%] h-52 w-52 rounded-full bg-sky-400/10 blur-[110px]" />
      </div>

      <div className="main-container relative z-10">
        <div className="overflow-hidden rounded-[32px] border border-stroke-1/10 bg-white/80 shadow-[0_25px_80px_-30px_rgba(15,23,42,0.25)] backdrop-blur-sm dark:border-white/10 dark:bg-background-8/90">
          <div className="grid grid-cols-1 gap-0 xl:grid-cols-[0.95fr_1.35fr]">
            <div className="relative overflow-hidden border-b border-stroke-1/10 px-6 py-10 sm:px-8 lg:px-10 xl:border-r xl:border-b-0 xl:px-12 xl:py-14 dark:border-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(126,87,253,0.16),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.12),transparent_34%)]" />

              <div className="relative space-y-6">
                <RevealAnimation delay={0.15}>
                  <span className="inline-flex items-center rounded-full border border-[#7E57FD]/15 bg-[#7E57FD]/8 px-4 py-2 text-sm font-medium text-[#7E57FD] dark:border-[#A78BFA]/20 dark:bg-[#A78BFA]/10 dark:text-[#C4B5FD]">
                    Proven outcomes
                  </span>
                </RevealAnimation>

                <div className="space-y-4">
                  <RevealAnimation delay={0.2}>
                    <h2 className="max-w-[420px] text-4xl font-medium tracking-tight md:text-5xl">
                      Real results. Measurable impact.
                    </h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.28}>
                    <p className="max-w-[520px] text-base leading-7 text-secondary/65 dark:text-accent/65 md:text-lg">
                      Our work translates into faster launches, stronger retention, and AI systems engineered to deliver lasting business value.
                    </p>
                  </RevealAnimation>
                </div>

                <RevealAnimation delay={0.35}>
                  <div className="grid grid-cols-2 gap-3 sm:max-w-[420px]">
                    <div className="rounded-2xl border border-stroke-1/10 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/45 dark:text-accent/45">
                        Delivery speed
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-secondary dark:text-white">Faster to production</p>
                    </div>
                    <div className="rounded-2xl border border-stroke-1/10 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/45 dark:text-accent/45">
                        Business value
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-secondary dark:text-white">Built for ROI</p>
                    </div>
                  </div>
                </RevealAnimation>
              </div>
            </div>

            <div className="p-4 sm:p-6 lg:p-8 xl:p-10">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {metrics.map((metric, index) => (
                  <RevealAnimation key={metric.label} delay={0.4 + index * 0.08}>
                    <div className="group relative h-full overflow-hidden rounded-[28px] border border-stroke-1/10 bg-secondary p-6 text-white transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-background-7 md:p-7">
                      <div className={`absolute -right-8 -top-8 h-28 w-28 rounded-full blur-3xl ${metric.glow}`} />
                      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_42%,transparent)] opacity-60" />

                      <div className="relative flex h-full flex-col justify-between gap-8">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                              Performance metric
                            </p>
                            <h3 className="mt-3 flex items-end text-5xl font-semibold tracking-tight sm:text-6xl">
                              <NumberAnimation
                                number={metric.value}
                                speed={2000}
                                interval={200}
                                rooms={metric.rooms}
                                heightSpaceRatio={2}
                              />
                              <span className={`ml-1 inline-block bg-gradient-to-r ${metric.accent} bg-clip-text text-transparent`}>
                                {metric.suffix}
                              </span>
                            </h3>
                          </div>
                          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/55">
                            RockScale
                          </div>
                        </div>

                        <div className="space-y-3">
                          <p className="text-xl font-medium text-white">{metric.label}.</p>
                          <p className="max-w-[320px] text-sm leading-6 text-white/60">{metric.note}</p>
                        </div>
                      </div>
                    </div>
                  </RevealAnimation>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
