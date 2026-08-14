'use client';


import RevealAnimation from '@/components/animation/RevealAnimation';


const QorebitHero = () => {
  return (
    <section
      className="relative z-0 overflow-hidden bg-secondary pt-36 pb-20 md:pt-44 md:pb-24 lg:pt-52 lg:pb-[120px] xl:pt-[220px] xl:pb-[140px]"
      aria-labelledby="qorebit-hero-heading">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] h-[60%] w-[60%] rounded-full bg-ns-green/10 blur-[120px]" />
        <div className="absolute bottom-[10%] -right-[10%] h-[50%] w-[50%] rounded-full bg-primary-400/10 blur-[140px]" />
        <div className="absolute top-[40%] left-[30%] h-[40%] w-[40%] rounded-full bg-ns-cyan/5 blur-[100px]" />
      </div>

      <div className="main-container relative z-10">
        <div className="mx-auto max-w-[900px] text-center">
          <RevealAnimation delay={0.1}>
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-ns-green">
                <span className="text-secondary font-bold text-lg">Q</span>
              </div>
              <span className="text-white/70 font-medium tracking-wider text-sm uppercase">Qorebit AI</span>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h1 id="qorebit-hero-heading" className="mb-6 text-white">
              The AI Infrastructure Platform for Modern Builders
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-white/70 mx-auto mb-10 max-w-[680px] text-lg leading-relaxed">
              Access OpenAI, Anthropic, Google, Mistral, and every frontier AI model through a single OpenAI-compatible API. One integration. Every model. Unified billing.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://qorebit.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-md w-[85%] sm:w-auto">
                Get Started Free
              </a>
              <a
                href="https://docs.qorebit.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-md border border-white/20 text-white hover:bg-white/10 transition-all duration-300 w-[85%] sm:w-auto">
                Read Documentation
              </a>
            </div>
          </RevealAnimation>
          {/* Trust signals */}
          <RevealAnimation delay={0.5}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              <p className="text-tagline-2 text-white/40"><span className="mr-2 text-ns-green">✓</span>OpenAI Compatible</p>
              <p className="text-tagline-2 text-white/40"><span className="mr-2 text-ns-green">✓</span>Enterprise Security</p>
              <p className="text-tagline-2 text-white/40"><span className="mr-2 text-ns-green">✓</span>No Lock-in</p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

QorebitHero.displayName = 'QorebitHero';
export default QorebitHero;
