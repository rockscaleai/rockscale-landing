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

      {/* ── Abstract Global Data Network SVG (Animated Spiral) ── */}
      <div className="pointer-events-none absolute left-[70%] top-[40%] -z-10 w-full max-w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-90 mix-blend-screen drop-shadow-[0_0_15px_rgba(37,202,34,0.3)]">
        <svg viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto animate-[spin_90s_linear_infinite]">
          {/* Orbital Grid Lines */}
          <circle cx="500" cy="500" r="250" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 8" />
          <circle cx="500" cy="500" r="350" stroke="rgba(126,87,253,0.3)" strokeWidth="2" />
          <circle cx="500" cy="500" r="450" stroke="rgba(37,202,34,0.2)" strokeWidth="1.5" strokeDasharray="12 12" />
          <circle cx="500" cy="500" r="550" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          
          {/* Geometric Data Nodes representing global connection */}
          <g className="opacity-100">
            {/* Inner Hexagon */}
            <path d="M 500 200 L 759.8 350 L 759.8 650 L 500 800 L 240.2 650 L 240.2 350 Z" stroke="rgba(126,87,253,0.6)" strokeWidth="3" fill="rgba(126,87,253,0.05)" />
            {/* Outer Hexagon */}
            <path d="M 500 100 L 846.4 300 L 846.4 700 L 500 900 L 153.6 700 L 153.6 300 Z" stroke="rgba(37,202,34,0.5)" strokeWidth="2.5" fill="rgba(37,202,34,0.05)" />
            
            {/* Connecting Spoke Lines */}
            <line x1="500" y1="200" x2="500" y2="100" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
            <line x1="759.8" y1="350" x2="846.4" y2="300" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
            <line x1="759.8" y1="650" x2="846.4" y2="700" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
            <line x1="500" y1="800" x2="500" y2="900" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
            <line x1="240.2" y1="650" x2="153.6" y2="700" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
            <line x1="240.2" y1="350" x2="153.6" y2="300" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />

            {/* Cross Lines */}
            <line x1="240.2" y1="350" x2="759.8" y2="650" stroke="rgba(126,87,253,0.3)" strokeWidth="1" />
            <line x1="240.2" y1="650" x2="759.8" y2="350" stroke="rgba(126,87,253,0.3)" strokeWidth="1" />

            {/* Glowing Nodes */}
            <circle cx="500" cy="200" r="8" fill="#7E57FD" className="animate-pulse" />
            <circle cx="759.8" cy="350" r="8" fill="#7E57FD" className="animate-pulse" />
            <circle cx="759.8" cy="650" r="8" fill="#7E57FD" className="animate-pulse" />
            <circle cx="500" cy="800" r="8" fill="#7E57FD" className="animate-pulse" />
            <circle cx="240.2" cy="650" r="8" fill="#7E57FD" className="animate-pulse" />
            <circle cx="240.2" cy="350" r="8" fill="#7E57FD" className="animate-pulse" />

            <circle cx="500" cy="100" r="6" fill="#25CA22" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <circle cx="846.4" cy="300" r="6" fill="#25CA22" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <circle cx="846.4" cy="700" r="6" fill="#25CA22" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <circle cx="500" cy="900" r="6" fill="#25CA22" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <circle cx="153.6" cy="700" r="6" fill="#25CA22" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <circle cx="153.6" cy="300" r="6" fill="#25CA22" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            
            {/* Inner pulsating core */}
            <circle cx="500" cy="500" r="20" fill="rgba(37,202,34,0.8)" className="animate-[pulse_2s_ease-in-out_infinite]" />
            <circle cx="500" cy="500" r="40" fill="rgba(126,87,253,0.3)" className="animate-[ping_3s_ease-in-out_infinite]" />
          </g>
        </svg>
      </div>

      {/* ── Additional Floating Particles & Geometric Shapes ── */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Glowing Orbs */}
        <div className="absolute left-[15%] top-[20%] h-4 w-4 animate-[pulse_3s_ease-in-out_infinite] rounded-full bg-[#25CA22] opacity-80 shadow-[0_0_30px_rgba(37,202,34,1)]" />
        <div className="absolute left-[85%] top-[25%] h-5 w-5 animate-[pulse_4s_ease-in-out_infinite_1s] rounded-full bg-[#7E57FD] opacity-90 shadow-[0_0_35px_rgba(126,87,253,1)]" />
        <div className="absolute left-[70%] top-[70%] h-3 w-3 animate-[pulse_2.5s_ease-in-out_infinite_0.5s] rounded-full bg-[#25CA22] opacity-70 shadow-[0_0_25px_rgba(37,202,34,1)]" />
        <div className="absolute left-[20%] top-[65%] h-6 w-6 animate-[pulse_5s_ease-in-out_infinite] rounded-full bg-white opacity-60 shadow-[0_0_40px_rgba(255,255,255,1)]" />
        
        {/* Floating Rings */}
        <div className="absolute left-[10%] top-[45%] h-16 w-16 animate-[spin_10s_linear_infinite] rounded-full border-2 border-dashed border-[#25CA22]/40" />
        <div className="absolute left-[80%] top-[55%] h-24 w-24 animate-[spin_15s_linear_infinite_reverse] rounded-full border border-[#7E57FD]/50" />
        <div className="absolute left-[35%] top-[85%] h-12 w-12 animate-[spin_8s_linear_infinite] rounded-full border-4 border-dotted border-white/30" />

        {/* Floating Squares */}
        <div className="absolute left-[40%] top-[15%] h-8 w-8 animate-[spin_12s_linear_infinite] border border-[#25CA22]/60 bg-[#25CA22]/10 backdrop-blur-sm" />
        <div className="absolute left-[60%] top-[80%] h-10 w-10 animate-[spin_18s_linear_infinite_reverse] border border-[#7E57FD]/60 bg-[#7E57FD]/10 backdrop-blur-sm" />

        {/* Animated vertical data lines */}
        <div className="absolute left-[25%] top-[-10%] h-[120%] w-[2px] bg-gradient-to-b from-transparent via-[#25CA22]/40 to-transparent blur-[1px]" />
        <div className="absolute left-[75%] top-[-10%] h-[120%] w-[2px] bg-gradient-to-b from-transparent via-[#7E57FD]/40 to-transparent blur-[1px]" />
        <div className="absolute left-[50%] top-[-10%] h-[120%] w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>
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
