'use client';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const CTA = () => {
  return (
    <section className="bg-secondary relative overflow-hidden pb-16 pt-16 md:pb-20 md:pt-20 lg:pb-[100px] lg:pt-[100px]">
      <div className="main-container">
        <div className="mx-auto max-w-[760px] text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-blur mb-5 text-ns-yellow">Start your AI journey</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-4 text-white">
              Let&apos;s build your enterprise AI strategy.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto mb-8 max-w-[620px] text-white/60">
              Partner with RockScale to automate complex business workflows, design custom AI
              and LLM solutions, and scale your cloud infrastructure securely. We work
              with you from strategy through to production deployment.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <LinkButton
                href="/contact-us"
                className="btn btn-white btn-md w-[85%] hover:btn-primary sm:w-auto">
                Book a Discovery Call
              </LinkButton>
              <LinkButton
                href="/services"
                className="btn btn-md w-[85%] border border-white/20 text-white hover:border-white/60 sm:w-auto">
                Explore Services
              </LinkButton>
            </div>
          </RevealAnimation>
          {/* Trust signals */}
          <RevealAnimation delay={0.5}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              <p className="text-tagline-2 text-white/40">
                <span className="mr-2">✓</span>No commitment required
              </p>
              <p className="text-tagline-2 text-white/40">
                <span className="mr-2">✓</span>Response within 24 hours
              </p>
              <p className="text-tagline-2 text-white/40">
                <span className="mr-2">✓</span>Confidentiality guaranteed
              </p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default CTA;
