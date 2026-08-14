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
    tags: ['Fraud Detection', 'Credit Risk', 'RegTech'],
    accentColor: 'bg-[#7E57FD]',
    tagColor: 'bg-[#7E57FD]/10 text-[#7E57FD] border-[#7E57FD]/20',
    iconColor: 'text-[#7E57FD]',
  },
  {
    id: '2',
    shapeClass: 'ns-shape-35',
    title: 'Healthcare',
    description: 'Clinical decision support, medical document intelligence, patient data pipelines, and HIPAA-compliant AI systems.',
    tags: ['Clinical AI', 'HIPAA', 'Doc Intelligence'],
    accentColor: 'bg-ns-green',
    tagColor: 'bg-ns-green/10 text-ns-green border-ns-green/20',
    iconColor: 'text-ns-green',
  },
  {
    id: '3',
    shapeClass: 'ns-shape-4',
    title: 'Retail & E-Commerce',
    description: 'AI-driven demand forecasting, dynamic pricing engines, personalized recommendations, and supply chain intelligence.',
    tags: ['Forecasting', 'Personalization', 'Pricing AI'],
    accentColor: 'bg-blue-500',
    tagColor: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    iconColor: 'text-blue-500',
  },
  {
    id: '4',
    shapeClass: 'ns-shape-32',
    title: 'Logistics & Supply Chain',
    description: 'Route optimization, real-time visibility platforms, predictive maintenance, and intelligent warehouse automation.',
    tags: ['Route Optimization', 'Predictive Ops', 'Automation'],
    accentColor: 'bg-orange-500',
    tagColor: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
    iconColor: 'text-orange-500',
  },
  {
    id: '5',
    shapeClass: 'ns-shape-41',
    title: 'Legal & Compliance',
    description: 'Contract analysis, document extraction, regulatory monitoring, and AI-assisted due diligence pipelines.',
    tags: ['Contract AI', 'Regulatory', 'Due Diligence'],
    accentColor: 'bg-pink-500',
    tagColor: 'bg-pink-500/10 text-pink-600 border-pink-500/20',
    iconColor: 'text-pink-500',
  },
  {
    id: '6',
    shapeClass: 'ns-shape-8',
    title: 'Manufacturing & Energy',
    description: 'Predictive quality control, energy optimization AI, equipment failure forecasting, and operational analytics.',
    tags: ['Quality Control', 'Energy AI', 'Predictive Ops'],
    accentColor: 'bg-ns-cyan',
    tagColor: 'bg-ns-cyan/10 text-ns-cyan border-ns-cyan/20',
    iconColor: 'text-ns-cyan',
  },
];

const IndustrySolutions = () => {
  return (
    <section
      className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]"
      aria-labelledby="industries-heading"
    >
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
              {/* Outer wrapper — preserves gradient border */}
              <div className="dark:bg-background-5 relative col-span-12 w-full overflow-hidden rounded-[20px] bg-white p-2 md:col-span-6 lg:col-span-4">
                {/* gradient border glow */}
                <figure className="pointer-events-none absolute top-[-95%] left-[-85%] size-[800px] rotate-[82deg] overflow-hidden select-none opacity-60">
                  <Image src={gradientBorder} alt="" aria-hidden="true" className="size-full" />
                </figure>

                {/* Card content */}
                <div className="bg-background-1 dark:bg-background-6 group relative z-10 flex h-full flex-col rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">

                  {/* Coloured accent top bar */}
                  <div className={`h-1 w-full ${industry.accentColor} opacity-80`} />

                  <div className="flex flex-col gap-5 p-7 sm:p-8 flex-1">
                    {/* Icon row */}
                    <div className="flex items-start justify-between">
                      <div className="flex size-12 items-center justify-center rounded-xl bg-secondary/5 dark:bg-white/5 group-hover:scale-110 transition-transform duration-300">
                        <span className={`${industry.shapeClass} ${industry.iconColor} text-[28px]`} />
                      </div>
                      {/* Sector number */}
                      <span className="text-[11px] font-bold tracking-[0.2em] text-secondary/25 dark:text-white/20">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Text */}
                    <div className="flex-1 space-y-2.5">
                      <h3 className="text-heading-5">{industry.title}</h3>
                      <p className="text-secondary/65 dark:text-accent/65 text-sm leading-relaxed">
                        {industry.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {industry.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wide ${industry.tagColor}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
              className="btn btn-secondary hover:btn-primary btn-md mx-auto w-[85%] md:w-auto"
            >
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
