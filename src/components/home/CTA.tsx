'use client';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#f4f5f8] py-24 md:py-32 lg:py-40">
      
      {/* ── Background Noise & Subtle Accents ── */}
      <div className="absolute inset-0 z-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-multiply" />
      
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

      <div className="main-container relative z-10">
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
          
          <RevealAnimation delay={0.1}>
            <div className="mb-6">
              <span className="badge badge-green-v2">Start your AI journey</span>
            </div>
          </RevealAnimation>
          
          <RevealAnimation delay={0.2}>
            <h2 className="mb-6 text-4xl font-medium tracking-tight text-secondary md:text-5xl lg:text-[56px] lg:leading-[1.1]">
              Let&apos;s build your enterprise AI strategy.
            </h2>
          </RevealAnimation>
          
          <RevealAnimation delay={0.3}>
            <p className="mx-auto mb-10 max-w-[680px] text-lg leading-relaxed text-secondary/70">
              Partner with RockScale to automate complex business workflows, design custom LLM architectures, and scale your intelligent systems securely. We work with you from initial strategy through to production deployment.
            </p>
          </RevealAnimation>
          
          <RevealAnimation delay={0.4}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <LinkButton
                href="/contact-us"
                className="btn btn-md bg-[#25CA22] font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#20b21e] hover:shadow-[0_10px_20px_rgba(37,202,34,0.3)] sm:w-auto"
              >
                Book a Discovery Call
              </LinkButton>
              <LinkButton
                href="/services"
                className="btn btn-md border-2 border-secondary/10 bg-transparent font-semibold text-secondary transition-all hover:-translate-y-1 hover:border-secondary/30 hover:bg-white hover:shadow-sm sm:w-auto"
              >
                Explore Services
              </LinkButton>
            </div>
          </RevealAnimation>
          
          {/* Trust signals */}
          <RevealAnimation delay={0.5}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-secondary/10 pt-8">
              <p className="flex items-center text-[15px] font-medium text-secondary/60">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#25CA22]/20 text-[10px] text-[#25CA22]">✓</span>
                No commitment required
              </p>
              <p className="flex items-center text-[15px] font-medium text-secondary/60">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#25CA22]/20 text-[10px] text-[#25CA22]">✓</span>
                Response within 24 hours
              </p>
              <p className="flex items-center text-[15px] font-medium text-secondary/60">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#25CA22]/20 text-[10px] text-[#25CA22]">✓</span>
                Strict confidentiality
              </p>
            </div>
          </RevealAnimation>

        </div>
      </div>
    </section>
  );
};

export default CTA;
