'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';

const CaseStudiesHero = () => {
  return (
    <section
      className="relative z-0 bg-[url('/images/ns-img-169.png')] bg-top bg-no-repeat pt-[250px] pb-16 md:pt-[200px] md:pb-20 lg:pt-[200px] lg:pb-[120px] xl:pt-[260px] xl:pb-[150px]"
      id="scene">
      <div className="main-container relative z-10 flex flex-col items-center space-y-[40px]">
        <div className="text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green mb-4">Case Studies & Success Stories</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl text-primary">
              Real AI Solutions. Real Business Impact.
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="mx-auto mb-8 max-w-[700px] text-lg text-secondary/80">
              We partner with organizations to design, build, and scale intelligent systems that deliver measurable business outcomes. Explore how we transform industries.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <LinkButton
                href="/contact-us"
                className="btn btn-primary btn-xl w-full sm:w-auto"
                aria-label="Start Your AI Journey">
                Start Your AI Journey
              </LinkButton>
              <LinkButton
                href="/contact-us"
                className="btn btn-secondary btn-xl w-full sm:w-auto"
                aria-label="Book a Discovery Call">
                Book a Discovery Call
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

CaseStudiesHero.displayName = 'CaseStudiesHero';
export default CaseStudiesHero;
