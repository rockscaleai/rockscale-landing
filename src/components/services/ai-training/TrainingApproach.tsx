'use client';
import { useGSAP } from '@gsap/react';
import step from '@public/images/ns-img-149.png';
import stepDark from '@public/images/ns-img-dark-103.png';
import Image from 'next/image';
import { useRef } from 'react';
import RevealAnimation from '../../animation/RevealAnimation';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const trainingSteps = [
    {
        step: 1,
        title: 'Assess',
        description: 'Understand the organization’s current AI maturity and employee needs.',
    },
    {
        step: 2,
        title: 'Design',
        description: 'Create a training program tailored to the organization’s roles and workflows.',
    },
    {
        step: 3,
        title: 'Train',
        description: 'Deliver practical sessions using real tools and real business scenarios.',
    },
    {
        step: 4,
        title: 'Apply',
        description: 'Participants apply AI directly to their actual workflows.',
    },
    {
        step: 5,
        title: 'Measure',
        description: 'Evaluate adoption, productivity improvements and areas for further automation.',
    },
    {
        step: 6,
        title: 'Scale',
        description: 'Help the organization continue building internal AI capabilities.',
    },
];

const TrainingApproach = () => {
  const stepLineRefs = useRef<(SVGSVGElement | null)[]>([]);

  const scopeRef = useRef<HTMLDivElement | null>(null);

  const animationInitialized = useRef(false);

  useGSAP(
    () => {
      if (animationInitialized.current) {
        return;
      }
      animationInitialized.current = true;

      const stepLines = stepLineRefs.current.filter(Boolean) as SVGSVGElement[];

      if (!stepLines.length) {
        return;
      }

      gsap.set(stepLines, { height: 0 });

      stepLines.forEach((line, index) => {
        gsap.to(line, {
          height: 380,
          duration: 1.5,
          ease: 'power3.out',
          delay: index * 0.2,
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
    <section ref={scopeRef} className="pt-[120px] pb-[120px] lg:pt-[160px] xl:pb-[200px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Our Training Approach</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>A structured approach to building AI capability.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[610px]">
              We follow a proven methodology to ensure our training is effective, relevant, and delivers measurable results for your organization.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <RevealAnimation delay={0.4}>
          <div className="process-steps">
            <div className="mx-auto mb-[100px] max-w-[870px]">
                {trainingSteps.map((process, index) => (
                    <div key={process.step} className="relative">
                        <div>
                            <div className="mx-auto flex size-[34px] items-center justify-center rounded-full bg-white drop-shadow-2xl dark:bg-black">
                                <figure className="size-7">
                                <Image src={step} alt="step" className="h-full w-full object-cover dark:hidden" />
                                <Image src={stepDark} alt="step" className="hidden h-full w-full object-cover dark:block" />
                                </figure>
                            </div>
                            {index < trainingSteps.length-1 && (
                                <div className="bg-stroke-2 dark:bg-stroke-6 mx-auto h-[320px] w-1 lg:h-[380px]">
                                    <svg
                                        ref={el => {stepLineRefs.current[index] = el}}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="step-line h-[0px] w-1"
                                        viewBox="0 0 2 222"
                                        fill="none">
                                        <path
                                            d="M1 1L0.99999 221"
                                            stroke={`url(#paint0_linear_1182_24963_step${index+1})`}
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />
                                        <defs>
                                            <linearGradient
                                            id={`paint0_linear_1182_24963_step${index+1}`}
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
                        <RevealAnimation delay={0.2 + index * 0.1}>
                            <div
                                className={`card-item dark:bg-background-6 max-sm:bg-background-4 absolute top-1/2 w-full max-w-[370px] -translate-y-1/2 space-y-3 rounded-[20px] p-6 lg:top-0 lg:translate-y-0 lg:rounded-none lg:bg-none lg:p-0 lg:dark:bg-transparent ${index % 2 === 0 ? 'left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0' : 'right-1/2 translate-x-1/2 lg:right-0 lg:translate-x-0'}`}>
                                <p className="text-tagline-2 text-primary-500">0{process.step}</p>
                                <div className="space-y-2">
                                <h3 className="text-heading-6 lg:text-heading-5">{process.title}</h3>
                                <p>
                                    {process.description}
                                </p>
                                </div>
                            </div>
                        </RevealAnimation>
                  </div>
                ))}
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default TrainingApproach;
