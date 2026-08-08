'use client';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const ServiceHero = () => {
  return (
    <section
      className="relative z-0 overflow-hidden bg-[url('/images/ns-img-169.png')] bg-cover bg-top bg-no-repeat pt-36 pb-20 md:pt-44 md:pb-24 lg:pt-52 lg:pb-[120px] xl:pt-[220px] xl:pb-[140px]"
      aria-labelledby="service-hero-heading">
      {/* Brand Color Orb */}
      <RevealAnimation delay={0.1} direction="right" offset={200}>
        <div className="pointer-events-none absolute top-[-10%] right-[-15%] -z-10 h-[600px] w-[600px] select-none rounded-full bg-[#7E57FD]/20 blur-[120px]" />
      </RevealAnimation>

      <div className="main-container relative z-10">
        <div className="mx-auto max-w-[860px] text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-6 inline-block">Strategy → Software → Data → Engineering</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h1 id="service-hero-heading" className="mb-6">
              The Complete AI Implementation Partner
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/70 dark:text-accent/70 mx-auto mb-10 max-w-[680px] text-lg leading-relaxed">
              RockScale helps ambitious organizations move from AI strategy to production — building intelligent software, modernizing data infrastructure, and embedding experienced engineers directly into their teams.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <LinkButton
                href="/contact-us"
                className="btn btn-primary btn-md hover:btn-secondary w-[85%] sm:w-auto">
                Book a Discovery Call
              </LinkButton>
              <LinkButton
                href="#services"
                className="btn btn-secondary btn-md hover:btn-primary w-[85%] sm:w-auto">
                Explore Our Services
              </LinkButton>
            </div>
          </RevealAnimation>

          {/* Four service pills */}
          <RevealAnimation delay={0.5}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              {[
                { label: 'AI Strategy & Roadmap', phase: 'THINK', color: 'bg-[#7E57FD]/10 text-[#7E57FD] border-[#7E57FD]/20' },
                { label: 'AI-Powered Software', phase: 'BUILD', color: 'bg-ns-green/10 text-ns-green border-ns-green/20' },
                { label: 'Data Engineering', phase: 'POWER', color: 'bg-blue-500/10 text-blue-600 border-blue-500/20' },
                { label: 'Forward Deployed Engineer', phase: 'DEPLOY', color: 'bg-orange-500/10 text-orange-600 border-orange-500/20' },
              ].map((pill) => (
                <div key={pill.phase} className={`flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium ${pill.color}`}>
                  <span className="text-[9px] font-bold tracking-widest opacity-60">{pill.phase}</span>
                  <span>{pill.label}</span>
                </div>
              ))}
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

ServiceHero.displayName = 'ServiceHero';
export default ServiceHero;
