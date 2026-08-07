'use client';
import gradientBorder from '@public/images/ns-img-523.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const industries = [
  {
    id: '1',
    shapeClass: 'ns-shape-19',
    title: 'Financial Services',
    description: 'Fraud detection, credit risk AI, intelligent automation for lending, trading, and compliance workflows.',
  },
  {
    id: '2',
    shapeClass: 'ns-shape-35',
    title: 'Healthcare',
    description: 'Clinical decision support, medical document intelligence, patient data pipelines, and HIPAA-compliant AI systems.',
  },
  {
    id: '3',
    shapeClass: 'ns-shape-4',
    title: 'Retail & E-Commerce',
    description: 'AI-driven demand forecasting, dynamic pricing engines, personalized recommendations, and supply chain intelligence.',
  },
  {
    id: '4',
    shapeClass: 'ns-shape-32',
    title: 'Logistics & Supply Chain',
    description: 'Route optimization, real-time visibility platforms, predictive maintenance, and intelligent warehouse automation.',
  },
  {
    id: '5',
    shapeClass: 'ns-shape-41',
    title: 'Legal & Compliance',
    description: 'Contract analysis, document extraction, regulatory monitoring, and AI-assisted due diligence pipelines.',
  },
  {
    id: '6',
    shapeClass: 'ns-shape-8',
    title: 'Manufacturing & Energy',
    description: 'Predictive quality control, energy optimization AI, equipment failure forecasting, and operational analytics.',
  },
];

const IndustrySolutions = () => {
  return (
    <section
      className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]"
      aria-labelledby="industries-heading">
      <div className="main-container">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-[750px] space-y-5 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Industries</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 id="industries-heading">Built for complex, regulated industries</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[600px]">
                We engineer AI solutions for sectors where data quality, security, and compliance are
                non-negotiable. Our domain expertise translates directly into better outcomes.
              </p>
            </RevealAnimation>
          </div>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-12 items-stretch justify-center gap-6 md:gap-8">
          {industries.map((industry, index) => (
            <RevealAnimation key={industry.id} delay={0.3 + index * 0.1}>
              <div className="dark:bg-background-5 relative col-span-12 w-full overflow-hidden rounded-[20px] bg-white p-2 md:col-span-6 lg:col-span-4">
                {/* gradient border glow */}
                <figure className="pointer-events-none absolute top-[-95%] left-[-85%] size-[800px] rotate-[82deg] overflow-hidden select-none opacity-60">
                  <Image src={gradientBorder} alt="" aria-hidden="true" className="size-full" />
                </figure>
                {/* card content */}
                <div className="bg-background-1 dark:bg-background-6 relative z-10 flex h-full flex-col gap-6 rounded-xl p-7 sm:p-8">
                  <div className="inline-block">
                    <span className={`${industry.shapeClass} text-secondary dark:text-accent text-[52px]`} />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-heading-5">{industry.title}</h3>
                    <p className="text-secondary/70 dark:text-accent/70">{industry.description}</p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        {/* CTA */}
        <RevealAnimation delay={0.8}>
          <div className="mt-14 flex items-center justify-center">
            <LinkButton
              href="/contact-us"
              className="btn btn-secondary hover:btn-primary btn-md mx-auto w-[85%] md:w-auto">
              Discuss your industry challenge
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

IndustrySolutions.displayName = 'IndustrySolutions';
export default IndustrySolutions;
