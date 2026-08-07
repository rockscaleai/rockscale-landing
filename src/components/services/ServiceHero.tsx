'use client';
import gradient12 from '@public/images/ns-img-504.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const ServiceHero = () => {
  return (
    <section
      className="relative z-0 overflow-hidden bg-[url('/images/ns-img-169.png')] bg-cover bg-top bg-no-repeat pt-36 pb-20 md:pt-44 md:pb-24 lg:pt-52 lg:pb-[120px] xl:pt-[220px] xl:pb-[140px]"
      aria-labelledby="service-hero-heading">
      {/* Gradient orb */}
      <RevealAnimation delay={0.1} direction="right" offset={200}>
        <figure className="pointer-events-none absolute top-[-10%] right-[-15%] -z-10 h-[700px] w-[700px] select-none opacity-60">
          <Image src={gradient12} alt="" aria-hidden="true" className="size-full object-cover" />
        </figure>
      </RevealAnimation>

      <div className="main-container relative z-10">
        <div className="mx-auto max-w-[860px] text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-6 inline-block">Our Services</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h1 id="service-hero-heading" className="mb-6">
              AI Solutions That Deliver Real Business Results
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/70 dark:text-accent/70 mx-auto mb-10 max-w-[680px] text-lg leading-relaxed">
              We automate complex workflows, improve operational efficiency, and help ambitious organizations scale using intelligent systems.
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
        </div>
      </div>
    </section>
  );
};

ServiceHero.displayName = 'ServiceHero';
export default ServiceHero;
