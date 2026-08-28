'use client';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const ServiceHero = () => {
  return (
    <section
      className="relative z-0 overflow-hidden bg-[#f4f5f8] pt-36 pb-20 md:pt-44 md:pb-24 lg:pt-52 lg:pb-[140px] xl:pt-[220px] xl:pb-[160px]"
      aria-labelledby="service-hero-heading">
      
      {/* ── Background & Texture ── */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-multiply -z-20" />
      
      {/* Subtle abstract geometric lines in the background */}
      <div className="absolute left-0 top-0 z-0 h-full w-full opacity-30">
        <svg className="absolute left-[-10%] top-[-20%] h-[150%] w-[120%]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,100 C30,70 70,30 100,0 L100,100 Z" fill="url(#grad)" opacity="0.05" />
          <path d="M0,0 C30,40 70,80 100,100 L0,100 Z" fill="url(#grad)" opacity="0.02" />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7E57FD" />
              <stop offset="100%" stopColor="#25CA22" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Color Orbs */}
      <RevealAnimation delay={0.1} direction="right" offset={200}>
        <div className="pointer-events-none absolute top-[0%] right-[-10%] -z-10 h-[600px] w-[600px] select-none rounded-full bg-[#7E57FD]/10 blur-[150px]" />
      </RevealAnimation>
      <RevealAnimation delay={0.1} direction="left" offset={200}>
        <div className="pointer-events-none absolute bottom-[-10%] left-[-10%] -z-10 h-[500px] w-[500px] select-none rounded-full bg-[#25CA22]/10 blur-[150px]" />
      </RevealAnimation>

      <div className="main-container relative z-10">
        <div className="mx-auto max-w-[900px] text-center">
          <RevealAnimation delay={0.1}>
            <div className="mb-8">
              <span className="badge badge-green-v2">Strategy → Software → Data → Engineering</span>
            </div>
          </RevealAnimation>
          
          <RevealAnimation delay={0.2}>
            <h1 id="service-hero-heading" className="mb-8 text-5xl font-medium tracking-tight text-secondary md:text-6xl lg:text-[72px] lg:leading-[1.05]">
              The Complete AI <br className="hidden md:block"/> Implementation Partner
            </h1>
          </RevealAnimation>
          
          <RevealAnimation delay={0.3}>
            <p className="mx-auto mb-12 max-w-[720px] text-lg leading-relaxed text-secondary/70 md:text-xl">
              RockScale helps ambitious organizations move from AI strategy to production — building intelligent software, modernizing data infrastructure, and embedding experienced engineers directly into their teams.
            </p>
          </RevealAnimation>
          
          <RevealAnimation delay={0.4}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <LinkButton
                href="/contact-us"
                className="btn btn-md w-[85%] bg-[#25CA22] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#20b21e] hover:shadow-[0_10px_20px_rgba(37,202,34,0.3)] sm:w-auto border-none">
                Book a Discovery Call
              </LinkButton>
              <LinkButton
                href="#services"
                className="btn btn-md w-[85%] border-2 border-secondary/10 bg-transparent font-semibold text-secondary transition-all hover:-translate-y-1 hover:border-secondary/30 hover:bg-white hover:shadow-sm sm:w-auto">
                Explore Our Services
              </LinkButton>
            </div>
          </RevealAnimation>

          {/* Four service pills */}
          <RevealAnimation delay={0.5}>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-4 border-t border-secondary/10 pt-10">
              {[
                { label: 'AI Strategy & Roadmap', phase: 'THINK', color: 'bg-[#7E57FD]/5 text-secondary border-[#7E57FD]/20 shadow-[0_0_15px_rgba(126,87,253,0.05)]', phaseColor: 'text-[#7E57FD]' },
                { label: 'AI-Powered Software', phase: 'BUILD', color: 'bg-[#25CA22]/5 text-secondary border-[#25CA22]/20 shadow-[0_0_15px_rgba(37,202,34,0.05)]', phaseColor: 'text-[#25CA22]' },
                { label: 'Data Engineering', phase: 'POWER', color: 'bg-blue-500/5 text-secondary border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.05)]', phaseColor: 'text-blue-500' },
                { label: 'Forward Deployed Engineer', phase: 'DEPLOY', color: 'bg-orange-500/5 text-secondary border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.05)]', phaseColor: 'text-orange-500' },
              ].map((pill) => (
                <div key={pill.phase} className={`flex items-center gap-2.5 rounded-full border px-5 py-2 text-sm font-medium backdrop-blur-md transition-all hover:-translate-y-0.5 ${pill.color}`}>
                  <span className={`text-[10px] font-bold tracking-[0.15em] ${pill.phaseColor}`}>{pill.phase}</span>
                  <div className="h-3 w-px bg-secondary/10" />
                  <span>{pill.label}</span>
                </div>
              ))}
            </div>
          </RevealAnimation>
        </div>
      </div>
      
      {/* ── Wave Transition ── */}
      <div className="absolute bottom-0 left-0 w-full translate-y-px">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-12 w-full md:h-20" fill="none">
          <path d="M0 80 L0 40 Q360 0 720 40 Q1080 80 1440 40 L1440 80 Z" className="fill-white dark:fill-[#0d0d1a]" />
        </svg>
      </div>
    </section>
  );
};

export default ServiceHero;
