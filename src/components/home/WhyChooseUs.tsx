'use client';
import { cn } from '@/utils/cn';
import rockscaleDesign from '@public/images/rockscale-design.jpeg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const differentiators = [
  {
    id: 'enterprise-ready',
    title: 'Enterprise-Grade Architecture',
    text: 'Robust, scalable, and secure AI solutions ready for the enterprise from day one.',
    iconClass: 'ns-shape-10',
    color: 'text-[#7E57FD]',
    bg: 'bg-[#7E57FD]/10',
    hoverBorder: 'hover:border-[#7E57FD]/30',
  },
  {
    id: 'end-to-end',
    title: 'End-to-End Delivery',
    text: 'End-to-end support, from strategy and design to implementation and deployment.',
    iconClass: 'ns-shape-12',
    color: 'text-ns-green',
    bg: 'bg-ns-green/10',
    hoverBorder: 'hover:border-ns-green/30',
  },
  {
    id: 'cloud',
    title: 'Multi-Cloud Expertise',
    text: 'Deep expertise across all major cloud platforms, including AWS, GCP, and Azure.',
    iconClass: 'ns-shape-14',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    hoverBorder: 'hover:border-blue-500/30',
  },
  {
    id: 'security',
    title: 'Security & Compliance',
    text: 'Security and compliance built into every layer, ensuring your data is always protected.',
    iconClass: 'ns-shape-16',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
    hoverBorder: 'hover:border-orange-500/30',
  },
  {
    id: 'outcomes',
    title: 'Business-Outcome Focus',
    text: 'A focus on delivering measurable business outcomes, not just technical solutions.',
    iconClass: 'ns-shape-18',
    color: 'text-pink-500',
    bg: 'bg-pink-500/10',
    hoverBorder: 'hover:border-pink-500/30',
  },
];

const stats = [
  { value: '90', unit: 'Days', label: 'Strategy to production' },
  { value: '3×', unit: '', label: 'Faster AI delivery' },
  { value: '100%', unit: '', label: 'Outcome focused' },
];

const WhyChooseUs = () => {
  return (
    <section
      className="relative overflow-hidden bg-background-3 py-20 dark:bg-background-7 md:py-[120px] lg:py-[160px]"
      aria-labelledby="why-rockscale-heading"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-[#7E57FD]/5 blur-[140px]" />
        <div className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-ns-green/5 blur-[120px]" />
      </div>

      <div className="main-container relative z-10">
        <div className="grid grid-cols-12 items-center gap-y-16 lg:gap-16 xl:gap-24">

          {/* ── Left column ── */}
          <div className="col-span-12 lg:col-span-6">
            <div className="mx-auto max-w-[540px] space-y-10 lg:mx-0 lg:max-w-full">

              {/* Header */}
              <div className="space-y-4">
                <RevealAnimation delay={0.1}>
                  <span className="badge badge-green">Why RockScale</span>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <h2 id="why-rockscale-heading" className="text-4xl font-medium tracking-tight md:text-5xl">
                    Why companies trust RockScale to deliver
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="max-w-[520px] text-lg leading-relaxed text-secondary/70 dark:text-accent/70">
                    AI projects fail when they are treated as technology experiments instead of business
                    programmes. We are engineers and strategists who focus on measurable outcomes — reduced
                    costs, faster operations, and sustainable competitive advantages.
                  </p>
                </RevealAnimation>
              </div>

              {/* Stats row */}
              <RevealAnimation delay={0.35}>
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl border border-stroke-1/10 bg-white p-5 text-center shadow-sm dark:border-white/5 dark:bg-background-6"
                    >
                      <p className="text-2xl font-bold text-secondary dark:text-white md:text-3xl">
                        {s.value}<span className="text-primary">{s.unit}</span>
                      </p>
                      <p className="mt-1 text-xs leading-5 text-secondary/50 dark:text-white/40">{s.label}</p>
                    </div>
                  ))}
                </div>
              </RevealAnimation>

              {/* Differentiator cards */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {differentiators.map((item, index) => (
                  <RevealAnimation key={item.id} delay={0.4 + index * 0.08}>
                    <div
                      className={cn(
                        'group flex h-full flex-col gap-4 rounded-2xl border border-stroke-1/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-white/5 dark:bg-background-6',
                        item.hoverBorder,
                      )}
                    >
                      <div className={cn('flex size-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110', item.bg)}>
                        <span className={cn('text-2xl', item.iconClass, item.color)} aria-hidden="true" />
                      </div>
                      <div className="space-y-1.5">
                        <h3 className="text-sm font-semibold text-secondary dark:text-accent">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-secondary/60 dark:text-accent/60">{item.text}</p>
                      </div>
                    </div>
                  </RevealAnimation>
                ))}
              </div>

              {/* CTA */}
              <RevealAnimation delay={0.9}>
                <div className="pt-2">
                  <LinkButton
                    href="/why-choose-us"
                    className="btn btn-secondary hover:btn-primary btn-md w-[85%] md:w-auto"
                  >
                    See our approach
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>

          {/* ── Right column — visual ── */}
          <div className="col-span-12 lg:col-span-6">
            <RevealAnimation delay={0.2} direction="up" offset={80}>
              <div className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:max-w-none">
                {/* Main image */}
                <figure className="group relative w-full overflow-hidden rounded-[32px] shadow-[0_30px_80px_-20px_rgba(15,23,42,0.2)] dark:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]">
                  <Image
                    src={rockscaleDesign}
                    alt="Enterprise AI consulting team reviewing architecture"
                    className="size-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  {/* Subtle overlay */}
                  <div className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-inset ring-black/5 dark:ring-white/5" />
                </figure>

                {/* Floating badge — top left */}
                <RevealAnimation delay={0.6} direction="right" offset={30}>
                  <div className="absolute -left-6 top-8 z-10 flex items-center gap-3 rounded-2xl border border-white/80 bg-white px-5 py-3.5 shadow-xl dark:border-white/10 dark:bg-background-6 md:-left-10">
                    <span className="relative flex size-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ns-green opacity-75" />
                      <span className="relative inline-flex size-3 rounded-full bg-ns-green" />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-secondary dark:text-white">Available Now</p>
                      <p className="text-[11px] text-secondary/50 dark:text-white/40">Taking new clients</p>
                    </div>
                  </div>
                </RevealAnimation>

                {/* Floating metric — bottom right */}
                <RevealAnimation delay={0.7} direction="left" offset={30}>
                  <div className="absolute -bottom-6 -right-4 z-10 rounded-2xl border border-white/80 bg-white p-5 shadow-xl dark:border-white/10 dark:bg-background-6 md:-right-10">
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">Avg. Project ROI</p>
                    <p className="mt-1 text-4xl font-bold text-secondary dark:text-white">+300<span className="text-primary">%</span></p>
                    <div className="mt-3 flex gap-1">
                      {[80, 60, 90, 75, 100, 85, 95].map((h, i) => (
                        <div
                          key={i}
                          className="w-2 rounded-sm bg-primary/20"
                          style={{ height: `${h * 0.36}px` }}
                        >
                          <div
                            className="w-full rounded-sm bg-primary"
                            style={{ height: `${h}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </RevealAnimation>
              </div>
            </RevealAnimation>
          </div>

        </div>
      </div>
    </section>
  );
};

WhyChooseUs.displayName = 'WhyChooseUs';
export default WhyChooseUs;
