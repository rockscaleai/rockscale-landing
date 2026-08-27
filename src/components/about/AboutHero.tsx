'use client';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const AboutHero = () => {
  return (
    <section
      className="relative z-0 overflow-hidden bg-secondary pt-36 pb-20 md:pt-44 md:pb-24 lg:pt-52 lg:pb-[140px] xl:pt-[200px] xl:pb-[160px]"
      aria-labelledby="about-hero-heading"
    >
      {/* ── Background & Texture ── */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(126,87,253,0.15),transparent_40%),radial-gradient(circle_at_bottom,rgba(37,202,34,0.1),transparent_50%)]" />

      {/* ── Abstract Global Data Network SVG ── */}
      <div className="pointer-events-none absolute left-1/2 top-[40%] -z-10 w-full max-w-[1400px] -translate-x-1/2 -translate-y-1/2 opacity-[0.35]">
        <svg viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto animate-[spin_180s_linear_infinite]">
          {/* Orbital Grid Lines */}
          <circle cx="500" cy="500" r="300" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <circle cx="500" cy="500" r="400" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="500" cy="500" r="500" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
          
          {/* Geometric Data Nodes representing global connection */}
          <g className="opacity-70">
            {/* Inner Hexagon */}
            <path d="M 500 200 L 759.8 350 L 759.8 650 L 500 800 L 240.2 650 L 240.2 350 Z" stroke="rgba(126,87,253,0.3)" strokeWidth="1" />
            {/* Outer Hexagon */}
            <path d="M 500 100 L 846.4 300 L 846.4 700 L 500 900 L 153.6 700 L 153.6 300 Z" stroke="rgba(37,202,34,0.2)" strokeWidth="1" />
            
            {/* Connecting Spoke Lines */}
            <line x1="500" y1="200" x2="500" y2="100" stroke="rgba(255,255,255,0.1)" />
            <line x1="759.8" y1="350" x2="846.4" y2="300" stroke="rgba(255,255,255,0.1)" />
            <line x1="759.8" y1="650" x2="846.4" y2="700" stroke="rgba(255,255,255,0.1)" />
            <line x1="500" y1="800" x2="500" y2="900" stroke="rgba(255,255,255,0.1)" />
            <line x1="240.2" y1="650" x2="153.6" y2="700" stroke="rgba(255,255,255,0.1)" />
            <line x1="240.2" y1="350" x2="153.6" y2="300" stroke="rgba(255,255,255,0.1)" />

            {/* Glowing Nodes */}
            <circle cx="500" cy="200" r="4" fill="#7E57FD" />
            <circle cx="759.8" cy="350" r="4" fill="#7E57FD" />
            <circle cx="759.8" cy="650" r="4" fill="#7E57FD" />
            <circle cx="500" cy="800" r="4" fill="#7E57FD" />
            <circle cx="240.2" cy="650" r="4" fill="#7E57FD" />
            <circle cx="240.2" cy="350" r="4" fill="#7E57FD" />

            <circle cx="500" cy="100" r="3" fill="#25CA22" />
            <circle cx="846.4" cy="300" r="3" fill="#25CA22" />
            <circle cx="846.4" cy="700" r="3" fill="#25CA22" />
            <circle cx="500" cy="900" r="3" fill="#25CA22" />
            <circle cx="153.6" cy="700" r="3" fill="#25CA22" />
            <circle cx="153.6" cy="300" r="3" fill="#25CA22" />
          </g>
        </svg>
      </div>
      
      {/* ── Ambient Glow Orbs ── */}
      <div className="pointer-events-none absolute top-[15%] left-[20%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7E57FD]/20 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-[10%] right-[10%] h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-[#25CA22]/10 blur-[150px]" />

      {/* ── Main Content ── */}
      <div className="main-container relative z-10">
        <div className="mx-auto max-w-[960px] text-center">
          <RevealAnimation delay={0.1}>
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25CA22] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#25CA22]" />
              </span>
              Global AI Engineering & Consulting
            </div>
          </RevealAnimation>
          
          <RevealAnimation delay={0.2}>
            <h1 id="about-hero-heading" className="mb-8 text-5xl font-medium tracking-tight text-white md:text-6xl lg:text-7xl xl:text-[80px] xl:leading-[1.1]">
              Building What's Next <br className="hidden sm:block" /> with AI
            </h1>
          </RevealAnimation>
          
          <RevealAnimation delay={0.3}>
            <p className="mx-auto mb-12 max-w-[720px] text-lg leading-relaxed text-white/70 md:text-xl">
              We are a global AI engineering and consulting company helping organizations adopt, build, and scale intelligent solutions. From strategic roadmaps to production-grade infrastructure, we engineer systems that drive measurable business impact.
            </p>
          </RevealAnimation>
          
          <RevealAnimation delay={0.4}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <LinkButton
                href="/contact-us"
                className="btn btn-md w-[85%] border-none bg-white text-secondary hover:bg-[#25CA22] hover:text-white sm:w-auto transition-colors duration-300"
              >
                Book a Discovery Call
              </LinkButton>
              <LinkButton
                href="/services"
                className="btn btn-md w-[85%] border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 sm:w-auto transition-colors duration-300"
              >
                Explore Our Expertise
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>

        {/* ── Global Presence & Trust Indicators ── */}
        <RevealAnimation delay={0.6}>
          <div className="mt-20 flex flex-wrap items-center justify-center gap-10 border-t border-white/10 pt-12 md:gap-20 lg:mt-32">
            <div className="flex flex-col items-center gap-2">
              <span className="text-4xl font-semibold text-white">50+</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Enterprises Transformed</span>
            </div>
            <div className="hidden h-14 w-px bg-white/10 md:block" />
            <div className="flex flex-col items-center gap-2">
              <span className="text-4xl font-semibold text-white">Global</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Delivery Capabilities</span>
            </div>
            <div className="hidden h-14 w-px bg-white/10 md:block" />
            <div className="flex flex-col items-center gap-2">
              <span className="text-4xl font-semibold text-[#25CA22]">100%</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Production Focus</span>
            </div>
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

AboutHero.displayName = 'AboutHero';
export default AboutHero;
