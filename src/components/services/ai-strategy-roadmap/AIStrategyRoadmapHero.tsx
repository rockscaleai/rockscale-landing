'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';

const AIStrategyRoadmapHero = () => {
  return (
    <section
      className="relative z-0 overflow-hidden bg-[url('/images/ns-img-495.png')] bg-cover bg-top bg-no-repeat pt-36 pb-20 md:pt-44 md:pb-24 lg:pt-52 lg:pb-[120px] xl:pt-[220px] xl:pb-[140px]"
      aria-labelledby="ai-strategy-roadmap-hero-heading">
      {/* Brand Color Orb */}
      <RevealAnimation delay={0.1} direction="right" offset={200}>
        <div className="pointer-events-none absolute top-[-10%] right-[-15%] -z-10 h-[600px] w-[600px] select-none rounded-full bg-[#7E57FD]/20 blur-[120px]" />
      </RevealAnimation>

      <div className="main-container relative z-10">
        <div className="mx-auto max-w-[860px] text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-6 inline-block">AI Strategy & Roadmap</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h1 id="ai-strategy-roadmap-hero-heading" className="mb-6">
              Turn AI Opportunities Into a Clear Roadmap
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/70 dark:text-accent/70 mx-auto mb-10 max-w-[680px] text-lg leading-relaxed">
              RockScale helps businesses identify high-value AI opportunities, prioritize what matters and create a practical roadmap for turning AI ideas into production systems.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <LinkButton
                href="/contact-us"
                className="btn btn-primary btn-md hover:btn-secondary w-[85%] sm:w-auto">
                Build Your AI Roadmap
              </LinkButton>
              <LinkButton
                href="#90-day-ai-plan"
                className="btn btn-secondary btn-md hover:btn-primary w-[85%] sm:w-auto">
                Discover Your 90-Day Plan
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

AIStrategyRoadmapHero.displayName = 'AIStrategyRoadmapHero';
export default AIStrategyRoadmapHero;