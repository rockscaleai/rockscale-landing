'use client';

import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import heroBg from '@public/images/rockscale-hero-bg.jpg';

const Hero = () => {
  return (
    <section
      className="relative z-0 overflow-hidden pt-[180px] pb-24 md:pt-[240px] md:pb-32 lg:pt-[280px] lg:pb-[180px]"
      id="home-hero">
      
      {/* ── Background Image & Overlays ── */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={heroBg}
          alt="Enterprise AI Architecture"
          fill
          priority
          className="object-cover"
          quality={100}
        />
      </div>
      
      {/* Dark gradient overlay to ensure text readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-secondary/95 via-secondary/70 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-secondary/30" />
      
      {/* Ambient Glow Orbs for brand color integration */}
      <div className="pointer-events-none absolute top-[30%] left-0 h-[600px] w-[800px] -translate-x-1/4 -translate-y-1/2 rounded-full bg-[#7E57FD]/20 blur-[120px] -z-10" />

      {/* ── Main Content (Center Aligned) ── */}
      <div className="main-container relative z-10 flex flex-col items-center text-center">
        
        <RevealAnimation delay={0.1}>
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25CA22] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#25CA22]" />
            </span>
            Premium Global AI Consulting
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.2}>
          <h1 className="mx-auto mb-8 max-w-[900px] text-5xl font-medium tracking-tight text-white md:text-6xl lg:text-7xl xl:text-[84px] xl:leading-[1.05]">
            Build, Deploy, and Scale <br className="hidden md:block" />
            <span className="text-white">Enterprise AI.</span>
          </h1>
        </RevealAnimation>

        <RevealAnimation delay={0.3}>
          <p className="mx-auto mb-10 max-w-[700px] text-lg leading-relaxed text-white/80 md:text-xl">
            We partner with ambitious enterprises globally to engineer intelligent systems that automate operations, unlock data insights, and drive measurable business transformation.
          </p>
        </RevealAnimation>

        <RevealAnimation delay={0.4}>
          <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <LinkButton
              href="/contact-us"
              className="btn btn-md w-full border-none bg-[#25CA22] font-semibold text-secondary transition-colors duration-300 hover:bg-white hover:text-secondary sm:w-auto"
            >
              Talk to Our AI Experts
            </LinkButton>
            <LinkButton
              href="/services"
              className="btn btn-md w-full border border-white/20 bg-white/5 text-white transition-colors duration-300 hover:border-white/30 hover:bg-white/10 sm:w-auto"
            >
              Explore Our Services
            </LinkButton>
          </div>
        </RevealAnimation>
        
        {/* ── Sub-trust indicators (Center Aligned) ── */}
        <RevealAnimation delay={0.6}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-white/50">
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-[#25CA22]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              Custom AI & LLMs
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-[#25CA22]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              Data Engineering
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-[#25CA22]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              Cloud Infrastructure
            </span>
          </div>
        </RevealAnimation>
      </div>

      {/* ── Wave Transition ── */}
      <div className="absolute bottom-0 left-0 w-full translate-y-px">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-12 w-full md:h-20" fill="none">
          <path d="M0 80 L0 40 Q360 0 720 40 Q1080 80 1440 40 L1440 80 Z" className="fill-background-3 dark:fill-background-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
