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
              <div className="space-y-5 pt-4">
                {differentiators.map((item, index) => (
                  <RevealAnimation key={item.id} delay={0.4 + index * 0.1}>
                    <div className="group relative overflow-hidden rounded-[24px] border border-secondary/5 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(6,18,37,0.06)] hover:border-secondary/10 flex items-start gap-6">
                      
                      {/* Ambient Hover Glow */}
                      <div className="absolute -right-8 -top-8 z-0 h-32 w-32 rounded-full bg-[#25CA22] opacity-0 blur-[40px] transition-opacity duration-500 group-hover:opacity-[0.08]" />
                      
                      <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#25CA22]/10 text-xl font-black text-[#25CA22] border border-[#25CA22]/20 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                        {item.id}
                      </div>
                      
                      <div className="relative z-10 pt-1">
                        <h3 className="mb-2 text-[19px] font-bold tracking-tight text-secondary">{item.title}</h3>
                        <p className="text-[15px] leading-relaxed text-secondary/70">{item.text}</p>
                      </div>
                      
                    </div>
                  </RevealAnimation>
                ))}
              </div>

              {/* CTA */}
              <RevealAnimation delay={0.9}>
                <div className="pt-6">
                  <LinkButton
                    href="/about"
                    className="btn btn-md border-none bg-secondary font-semibold text-white transition-colors hover:bg-[#25CA22] hover:text-white"
                  >
                    About Us
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
