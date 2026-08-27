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
    description: 'We audit your existing systems, data assets, and business workflows to identify where AI can create the most meaningful impact and ROI.',
    color: '#7E57FD',
  },
  {
    id: '02',
    title: 'Strategy & Roadmap',
    description: 'We design a tailored enterprise AI roadmap — selecting the right models, tools, compliance frameworks, and architecture for your exact business context.',
    color: '#25CA22',
  },
  {
    id: '03',
    title: 'Data Foundation',
    description: 'We build the robust data infrastructure your AI needs: secure pipelines, ELT architectures, data warehouses, and rigorous governance frameworks.',
    color: '#7E57FD',
  },
  {
    id: '04',
    title: 'AI Development',
    description: 'Our engineers build custom LLM applications, autonomous agents, document intelligence pipelines, and predictive models tailored to your operations.',
    color: '#25CA22',
  },
  {
    id: '05',
    title: 'Deployment & MLOps',
    description: 'We deploy your intelligent systems into secure, cloud-native environments with full MLOps pipelines, performance monitoring, and rollback safety.',
    color: '#7E57FD',
  },
  {
    id: '06',
    title: 'Optimization & Scale',
    description: 'We continuously monitor model performance, data drift, infrastructure costs, and business outcomes to drive ongoing improvement and scale.',
    color: '#25CA22',
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
            start: 'top 50%',
            end: 'bottom 80%',
            scrub: 1,
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section className="relative overflow-hidden bg-[#f4f5f8] py-24 md:py-32 lg:py-40" aria-label="AI Transformation Journey">
      
      {/* ── Background Noise ── */}
      <div className="absolute inset-0 z-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-multiply" />

      <div className="main-container relative z-10" ref={containerRef}>
        {/* Header */}
        <div className="mx-auto mb-20 max-w-[800px] text-center md:mb-28">
          <RevealAnimation delay={0.1}>
            <div className="mb-6">
              <span className="badge badge-green-v2">Our Process</span>
            </div>
          </RevealAnimation>
          <div className="space-y-6">
            <RevealAnimation delay={0.2}>
              <h2 className="text-4xl font-medium tracking-tight text-secondary md:text-5xl lg:text-[56px] lg:leading-[1.1]">
                Your AI Transformation Journey
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[650px] text-lg leading-relaxed text-secondary/70">
                A structured, enterprise-grade engineering process — from initial technical discovery to secure deployment and continuous optimization. We partner with you at every stage.
              </p>
            </RevealAnimation>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-[850px]">
          
          {/* Background Track Line */}
          <div className="absolute left-[39px] top-[10px] bottom-[20px] hidden w-[2px] bg-secondary/10 md:block" />
          
          {/* Animated Fill Line */}
          <div 
            ref={lineRef}
            className="absolute left-[39px] top-[10px] bottom-[20px] hidden w-[2px] bg-gradient-to-b from-[#7E57FD] via-[#25CA22] to-[#7E57FD] md:block origin-top scale-y-0" 
          />

          <div className="space-y-6 md:space-y-10">
            {steps.map((step, index) => {
              const isGreen = step.color === '#25CA22';
              const textHighlight = isGreen ? 'text-[#25CA22]' : 'text-[#7E57FD]';
              const borderHighlight = isGreen ? 'group-hover:border-[#25CA22]/30' : 'group-hover:border-[#7E57FD]/30';
              const shadowHighlight = isGreen ? 'group-hover:shadow-[0_15px_40px_rgba(37,202,34,0.15)]' : 'group-hover:shadow-[0_15px_40px_rgba(126,87,253,0.15)]';
              const indicatorBg = isGreen ? 'bg-[#25CA22]' : 'bg-[#7E57FD]';

              return (
                <RevealAnimation key={step.id} delay={0.2 + (index * 0.1)}>
                  <div className="group relative flex flex-col gap-6 md:flex-row md:items-stretch md:gap-12">
                    
                    {/* Desktop Node Indicator */}
                    <div className="relative z-10 hidden md:flex w-[80px] shrink-0 items-start justify-center pt-2">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-[#f4f5f8] bg-white text-lg font-bold text-secondary shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:shadow-md">
                        {step.id}
                        {/* Glow dot behind number on hover */}
                        <div className={`absolute inset-0 -z-10 rounded-xl opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-40 ${indicatorBg}`} />
                      </div>
                    </div>

                    {/* Mobile Node Indicator */}
                    <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2 shadow-sm md:hidden">
                       <span className={`text-sm font-bold tracking-widest ${textHighlight}`}>STEP {step.id}</span>
                    </div>

                    {/* Content Card */}
                    <div className={`flex-grow rounded-[24px] border border-transparent bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-500 ease-out md:p-10 ${borderHighlight} ${shadowHighlight} hover:-translate-y-1`}>
                      <div className="mb-4 flex items-center gap-4">
                        <h3 className="text-2xl font-semibold tracking-tight text-secondary md:text-[26px]">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-[17px] leading-relaxed text-secondary/70">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
};

Journey.displayName = 'Journey';
export default Journey;
