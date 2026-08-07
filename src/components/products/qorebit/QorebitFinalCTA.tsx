'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';

const QorebitFinalCTA = () => {
  return (
    <section className="bg-secondary relative overflow-hidden pb-16 pt-16 md:pb-20 md:pt-20 lg:pb-[100px] lg:pt-[100px]">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] h-[60%] w-[60%] rounded-full bg-ns-green/10 blur-[120px]" />
        <div className="absolute bottom-[10%] -right-[10%] h-[50%] w-[50%] rounded-full bg-primary-400/10 blur-[140px]" />
      </div>
      <div className="main-container relative z-10">
        <div className="mx-auto max-w-[760px] text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green bg-ns-green/20 text-ns-green border-none mb-5">Get Started</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-4 text-white">Build faster with Qorebit AI.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto mb-8 max-w-[620px] text-white/60">
              Stop managing multiple AI providers. Integrate once, access everything, and focus on building the product your customers love.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://qorebit.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-md w-[85%] sm:w-auto">
                Start Building Free
              </a>
              <a
                href="https://docs.qorebit.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-md border border-white/20 text-white hover:bg-white/10 transition-all duration-300 w-[85%] sm:w-auto">
                View Documentation
              </a>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              <p className="text-tagline-2 text-white/40"><span className="mr-2">✓</span>Free to get started</p>
              <p className="text-tagline-2 text-white/40"><span className="mr-2">✓</span>No credit card required</p>
              <p className="text-tagline-2 text-white/40"><span className="mr-2">✓</span>OpenAI compatible</p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

QorebitFinalCTA.displayName = 'QorebitFinalCTA';
export default QorebitFinalCTA;
