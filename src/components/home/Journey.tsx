'use client';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    id: '01',
    title: 'Discovery & Audit',
    description: 'We audit your existing systems, data assets, and business workflows to identify where AI can create the most meaningful impact.',
    icon: 'ns-shape-8',
    color: 'text-[#7E57FD]',
    bgColor: 'bg-[#7E57FD]/10',
  },
  {
    id: '02',
    title: 'Strategy & Roadmap',
    description: 'We design a tailored AI roadmap — selecting the right models, tools, compliance frameworks, and architecture for your business context.',
    icon: 'ns-shape-23',
    color: 'text-ns-green',
    bgColor: 'bg-ns-green/10',
  },
  {
    id: '03',
    title: 'Data Foundation',
    description: 'We build the data infrastructure your AI needs: secure pipelines, ELT architectures, data warehouses, and governance frameworks.',
    icon: 'ns-shape-41',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    id: '04',
    title: 'AI Development',
    description: 'Our engineers build custom LLM applications, copilots, document intelligence, RAG pipelines, and predictive models tailored to your operations.',
    icon: 'ns-shape-35',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    id: '05',
    title: 'Deployment & MLOps',
    description: 'We deploy your AI systems into secure, cloud-native environments with full MLOps pipelines, monitoring, and rollback safety.',
    icon: 'ns-shape-19',
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
  },
  {
    id: '06',
    title: 'Optimization & Scale',
    description: 'We continuously monitor model performance, data drift, infrastructure costs, and business outcomes to drive ongoing improvement.',
    icon: 'ns-shape-31',
    color: 'text-ns-cyan',
    bgColor: 'bg-ns-cyan/10',
  },
];

const Journey = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (lineRef.current) {
        gsap.to(lineRef.current, {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: 1,
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section className="bg-background-3 py-20 md:py-[120px] lg:py-[160px] dark:bg-background-7" aria-label="AI Transformation Journey">
      <div className="main-container" ref={containerRef}>
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-[740px] space-y-5 text-center md:mb-[80px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Our Process</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>Your AI Transformation Journey</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[600px] text-secondary/70 dark:text-accent/70">
                A structured, enterprise-grade process — from discovery to deployment and continuous
                optimization. We partner with you at every stage.
              </p>
            </RevealAnimation>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-[900px]">
          {/* Background Line */}
          <div className="absolute left-[27px] top-[24px] bottom-[24px] hidden w-px bg-stroke-1/30 dark:bg-white/10 md:block" />
          
          {/* Animated Fill Line */}
          <div 
            ref={lineRef}
            className="absolute left-[27px] top-[24px] bottom-[24px] hidden w-px bg-gradient-to-b from-[#7E57FD] via-ns-green to-blue-500 md:block origin-top scale-y-0" 
          />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <RevealAnimation key={step.id} delay={0.2 + (index * 0.1)}>
                <div className="group relative flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
                  {/* Node */}
                  <div className={`relative z-10 hidden md:flex size-14 shrink-0 items-center justify-center rounded-full border-[6px] border-background-3 dark:border-background-7 transition-transform duration-300 group-hover:scale-110 ${step.bgColor}`}>
                    <span className={`text-sm font-bold ${step.color}`}>{step.id}</span>
                  </div>

                  {/* Mobile Node */}
                  <div className={`md:hidden inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 ${step.bgColor}`}>
                     <span className={`text-sm font-bold ${step.color}`}>STEP {step.id}</span>
                  </div>

                  {/* Content Card */}
                  <div className="flex-grow rounded-[24px] border border-stroke-1/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/5 dark:bg-background-6">
                    <div className="mb-4 flex items-center gap-4">
                      <div className={`flex size-12 items-center justify-center rounded-xl ${step.bgColor}`}>
                        <span className={`${step.icon} text-2xl ${step.color}`} />
                      </div>
                      <h3 className="text-heading-6 lg:text-heading-5">{step.title}</h3>
                    </div>
                    <p className="text-secondary/70 dark:text-accent/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Journey.displayName = 'Journey';
export default Journey;
