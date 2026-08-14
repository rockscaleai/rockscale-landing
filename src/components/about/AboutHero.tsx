'use client';

import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const AboutHero = () => {
  return (
    <section
      className="relative z-0 overflow-hidden bg-[url('/images/ns-img-169.png')] bg-cover bg-top bg-no-repeat pt-36 pb-20 md:pt-44 md:pb-24 lg:pt-52 lg:pb-[120px] xl:pt-[220px] xl:pb-[140px]"
      aria-labelledby="about-hero-heading">
      {/* Brand Color Orb */}
      <RevealAnimation delay={0.1} direction="right" offset={200}>
        <div className="pointer-events-none absolute top-[-10%] right-[-15%] -z-10 h-[600px] w-[600px] select-none rounded-full bg-[#7E57FD]/20 blur-[120px]" />
      </RevealAnimation>

      <div className="main-container relative z-10">
        <div className="mx-auto max-w-[860px] text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-6 inline-block">About RockScale</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h1 id="about-hero-heading" className="mb-6">
              Building Intelligent Businesses for the AI Era
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/70 dark:text-accent/70 mx-auto mb-10 max-w-[680px] text-lg leading-relaxed">
              RockScale is an AI engineering and consulting company. We help ambitious organizations
              automate operations, unlock data intelligence, and build AI systems that create
              measurable business value.
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
                href="/services"
                className="btn btn-secondary btn-md hover:btn-primary w-[85%] sm:w-auto">
                Explore Services
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

AboutHero.displayName = 'AboutHero';
export default AboutHero;
