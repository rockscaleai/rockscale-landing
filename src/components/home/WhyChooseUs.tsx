'use client';

import { cn } from '@/utils/cn';
import whyRockScaleImg from '@public/images/rockscale-why-exists-v2.jpg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const differentiators = [
  {
    id: '01',
    title: 'Enterprise-Grade Architecture',
    text: 'Robust, scalable, and secure AI solutions engineered for the enterprise from day one.',
  },
  {
    id: '02',
    title: 'End-to-End Delivery',
    text: 'Comprehensive support, from strategy and AI system design to full deployment.',
  },
  {
    id: '03',
    title: 'Multi-Cloud Expertise',
    text: 'Deep architectural expertise across AWS, Google Cloud, and Azure environments.',
  },
  {
    id: '04',
    title: 'Security & Compliance',
    text: 'Data security and compliance frameworks built into every layer of our infrastructure.',
  },
];

const stats = [
  { value: '90', unit: 'Days', label: 'Strategy to Production' },
  { value: '3×', unit: '', label: 'Faster AI Delivery' },
  { value: '100%', unit: '', label: 'Outcome Focused' },
];

const WhyChooseUs = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#ebecef] py-20 md:py-[120px] lg:py-[160px]"
      aria-labelledby="why-rockscale-heading"
    >
      {/* ── Ambient Background Glows ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-0 right-0 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/3 rounded-full bg-[#7E57FD]/5 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/3 rounded-full bg-[#25CA22]/5 blur-[120px]" />
      </div>

      <div className="main-container relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-20">
          
          {/* ── Left Column (Content) ── */}
          <div className="lg:col-span-6 lg:pr-8">
            <div className="space-y-10">
              
              {/* Header */}
              <div className="space-y-6">
                <RevealAnimation delay={0.1}>
                  <span className="badge badge-green">
                    Why RockScale
                  </span>
                </RevealAnimation>
                
                <RevealAnimation delay={0.2}>
                  <h2 id="why-rockscale-heading" className="text-4xl font-medium tracking-tight text-secondary md:text-5xl lg:text-[52px] lg:leading-[1.1]">
                    Why companies trust RockScale to deliver
                  </h2>
                </RevealAnimation>
                
                <RevealAnimation delay={0.3}>
                  <p className="max-w-[540px] text-lg leading-relaxed text-secondary/70">
                    AI projects fail when they are treated as technology experiments instead of business
                    programmes. We are engineers and strategists who focus on measurable outcomes — reduced
                    costs, faster operations, and sustainable competitive advantages.
                  </p>
                </RevealAnimation>
              </div>

              {/* Differentiators List */}
              <div className="space-y-6 pt-4">
                {differentiators.map((item, index) => (
                  <RevealAnimation key={item.id} delay={0.4 + index * 0.1}>
                    <div className="group flex items-start gap-5 rounded-[20px] border border-transparent p-4 transition-all duration-300 hover:border-stroke-3 hover:bg-white/50">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-lg font-bold text-[#25CA22] shadow-sm transition-colors duration-300 group-hover:bg-[#25CA22] group-hover:text-white">
                        {item.id}
                      </div>
                      <div className="pt-1">
                        <h3 className="mb-1 text-lg font-semibold tracking-tight text-secondary">{item.title}</h3>
                        <p className="text-[15px] leading-relaxed text-secondary/60">{item.text}</p>
                      </div>
                    </div>
                  </RevealAnimation>
                ))}
              </div>

              {/* CTA */}
              <RevealAnimation delay={0.9}>
                <div className="pt-6">
                  <LinkButton
                    href="/why-choose-us"
                    className="btn btn-md border-none bg-secondary font-semibold text-white transition-colors hover:bg-[#25CA22] hover:text-white"
                  >
                    See our approach
                  </LinkButton>
                </div>
              </RevealAnimation>
              
            </div>
          </div>

          {/* ── Right Column (Visuals) ── */}
          <div className="lg:col-span-6">
            <RevealAnimation delay={0.3} direction="left" offset={60}>
              <div className="relative mx-auto w-full max-w-[560px] lg:mx-0 lg:max-w-none">
                
                {/* Main Premium Image */}
                <figure className="relative z-0 overflow-hidden rounded-[32px] border border-black/5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
                  <Image
                    src={whyRockScaleImg}
                    alt="Enterprise AI Consulting Team"
                    className="h-auto w-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                    quality={95}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent opacity-80" />
                </figure>

                {/* Floating Metric Card */}
                <RevealAnimation delay={0.6} direction="up" offset={40}>
                  <div className="absolute -bottom-8 -left-4 z-10 rounded-[24px] border border-black/5 bg-white/90 p-6 shadow-xl backdrop-blur-xl md:-left-8 md:p-8">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#25CA22]">Avg. Project ROI</p>
                    <p className="mt-1 text-5xl font-bold tracking-tight text-secondary">+300<span className="text-[#25CA22]">%</span></p>
                    <div className="mt-4 flex items-end gap-1.5 h-12">
                      {[40, 60, 50, 80, 70, 90, 100].map((h, i) => (
                        <div
                          key={i}
                          className="w-2.5 rounded-sm bg-black/5"
                          style={{ height: '100%' }}
                        >
                          <div
                            className="w-full rounded-sm bg-[#25CA22] transition-all duration-1000"
                            style={{ height: `${h}%`, marginTop: `${100 - h}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </RevealAnimation>

                {/* Floating Stats Glass Panel */}
                <RevealAnimation delay={0.8} direction="right" offset={40}>
                  <div className="absolute -right-4 top-12 z-10 space-y-3 rounded-[20px] border border-black/5 bg-white/80 p-5 shadow-xl backdrop-blur-md md:-right-8">
                    {stats.slice(0, 2).map((s) => (
                      <div key={s.label} className="border-b border-stroke-3 pb-3 last:border-0 last:pb-0">
                        <p className="text-3xl font-bold tracking-tight text-secondary">
                          {s.value}<span className="text-lg text-[#7E57FD]">{s.unit}</span>
                        </p>
                        <p className="text-[11px] font-medium uppercase tracking-wider text-secondary/50">{s.label}</p>
                      </div>
                    ))}
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
