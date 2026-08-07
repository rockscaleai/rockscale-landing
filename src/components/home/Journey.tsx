'use client';
import { useGSAP } from '@gsap/react';
import step from '@public/images/ns-img-149.png';
import stepDark from '@public/images/ns-img-dark-103.png';
import Image from 'next/image';
import { useRef } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    id: 'step-1',
    number: 'STEP 1',
    title: 'Discover',
    description:
      'We audit your existing systems, data assets, and business workflows to identify where AI can create the most meaningful impact.',
    side: 'left',
  },
  {
    id: 'step-2',
    number: 'STEP 2',
    title: 'Strategy',
    description:
      'We design a tailored AI roadmap — selecting the right models, tools, compliance frameworks, and architecture for your business context.',
    side: 'right',
  },
  {
    id: 'step-3',
    number: 'STEP 3',
    title: 'Data Foundation',
    description:
      'We build the data infrastructure your AI needs: secure pipelines, ELT architectures, data warehouses, and governance frameworks.',
    side: 'left',
  },
  {
    id: 'step-4',
    number: 'STEP 4',
    title: 'AI Development',
    description:
      'Our engineers build custom LLM applications, copilots, document intelligence, RAG pipelines, and predictive models tailored to your operations.',
    side: 'right',
  },
  {
    id: 'step-5',
    number: 'STEP 5',
    title: 'Deployment',
    description:
      'We deploy your AI systems into secure, cloud-native environments with full MLOps pipelines, monitoring, and rollback safety.',
    side: 'left',
  },
  {
    id: 'step-6',
    number: 'STEP 6',
    title: 'Optimization',
    description:
      'We continuously monitor model performance, data drift, infrastructure costs, and business outcomes to drive ongoing improvement.',
    side: 'right',
  },
];

const Journey = () => {
  const lineRefs = useRef<(SVGSVGElement | null)[]>([]);
  const scopeRef = useRef<HTMLDivElement | null>(null);
  const animationInitialized = useRef(false);

  useGSAP(
    () => {
      if (animationInitialized.current) return;
      animationInitialized.current = true;

      const stepLines = lineRefs.current.filter(Boolean) as SVGSVGElement[];
      if (!stepLines.length) return;

      gsap.set(stepLines, { height: 0 });

      stepLines.forEach((line, index) => {
        gsap.to(line, {
          height: 320,
          duration: 1.5,
          ease: 'power3.out',
          delay: index * 0.15,
          scrollTrigger: {
            trigger: line,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    },
    { scope: scopeRef },
  );

  return (
    <section className="py-20 md:py-[120px] lg:py-[160px]" aria-label="AI Transformation Journey">
      <div className="main-container" ref={scopeRef}>
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
              <p className="mx-auto max-w-[600px]">
                A structured, enterprise-grade process — from discovery to deployment and continuous
                optimization. We partner with you at every stage.
              </p>
            </RevealAnimation>
          </div>
        </div>

        {/* Steps */}
        <RevealAnimation delay={0.4}>
          <div className="mx-auto max-w-[870px]">
            {steps.map((s, i) => (
              <div key={s.id} className="relative">
                {/* Center node + line */}
                <div>
                  <div className="mx-auto flex size-[34px] items-center justify-center rounded-full bg-white drop-shadow-2xl dark:bg-black">
                    <figure className="size-7">
                      <Image src={step} alt="step" className="h-full w-full object-cover dark:hidden" />
                      <Image src={stepDark} alt="step" className="hidden h-full w-full object-cover dark:block" />
                    </figure>
                  </div>
                  {/* Only render line if not last step */}
                  {i < steps.length - 1 && (
                    <div className="bg-stroke-2 dark:bg-stroke-6 mx-auto h-[260px] w-1 lg:h-[320px]">
                      <svg
                        ref={(el) => { lineRefs.current[i] = el; }}
                        xmlns="http://www.w3.org/2000/svg"
                        className="step-line h-[0px] w-1"
                        viewBox="0 0 2 222"
                        fill="none">
                        <path
                          d="M1 1L0.99999 221"
                          stroke={`url(#journey-gradient-${i})`}
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient
                            id={`journey-gradient-${i}`}
                            x1="0.5"
                            y1={1}
                            x2="0.49999"
                            y2={221}
                            gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#64D9FD" />
                            <stop offset="0.25" stopColor="#7E57FD" />
                            <stop offset="0.5" stopColor="white" />
                            <stop offset={1} stopColor="#B04BFD" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  )}
                </div>

                {/* Content bubble — alternating left/right on lg */}
                <RevealAnimation delay={0.2 + i * 0.1}>
                  <div
                    className={`card-item dark:bg-background-6 max-sm:bg-background-4 absolute top-1/2 w-full max-w-[370px] -translate-y-1/2 space-y-3 rounded-[20px] p-6 lg:top-0 lg:translate-y-0 lg:rounded-none lg:bg-none lg:p-0 lg:dark:bg-transparent
                    ${s.side === 'left'
                      ? 'left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0'
                      : 'right-1/2 translate-x-1/2 lg:right-0 lg:translate-x-0'
                    }`}>
                    <p className="text-tagline-2 text-primary-500">{s.number}</p>
                    <div className="space-y-2">
                      <h3 className="text-heading-6 lg:text-heading-5">{s.title}</h3>
                      <p className="max-w-[320px]">{s.description}</p>
                    </div>
                  </div>
                </RevealAnimation>
              </div>
            ))}
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

Journey.displayName = 'Journey';
export default Journey;
