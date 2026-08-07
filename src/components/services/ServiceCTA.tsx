'use client';
import gradient5 from '@public/images/ns-img-497.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import CTA from '../shared/cta/CTA';

const ServiceCTA = () => {
  return (
    <section className="py-[50px] md:py-20 lg:py-[100px]" aria-label="cta section wrapper">
      <div className="mx-auto px-5 lg:max-w-[980px] xl:max-w-[1260px] xl:px-0 2xl:max-w-[1440px]">
        <RevealAnimation delay={0.1}>
          <div className="bg-secondary dark:bg-background-8 relative overflow-hidden rounded-[20px] px-6 md:px-10 xl:px-20">
            <RevealAnimation delay={0.1} offset={200}>
              <div className="pointer-events-none absolute -bottom-52 left-7 -z-0 h-[600px] w-[600px] -translate-x-1/2 rotate-[120deg] select-none">
                <figure>
                  <Image src={gradient5} alt="cta-bg" className="h-full w-full object-cover" />
                </figure>
              </div>
            </RevealAnimation>

            <CTA
              className="py-[50px] md:py-20 lg:py-[100px]"
              description="Whether you're looking to automate a single workflow or modernize your entire data infrastructure, our engineers are ready to help you execute."
              headingClass="text-accent"
              descriptionClass="text-accent/60"
              ctaHeading="Ready to Build AI That Creates Real Business Value?"
              ctaBtnText="Book a Discovery Call"
              badgeText="Get Started"
              badgeClass="badge badge-blur text-ns-green"
              btnClass="hover:btn-white"
              inputFieldClass="hidden"
              listTextClass="text-accent font-normal text-tagline-3 sm:text-tagline-2"
              checkListVariant="gray"
            />
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

ServiceCTA.displayName = 'ServiceCTA';
export default ServiceCTA;
