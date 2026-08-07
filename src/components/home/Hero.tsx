'use client';

import gradient12 from '@public/images/ns-img-504.png';
import scaleOpsImg from '@public/images/scale-operations-ai.jpg';
import Image from 'next/image';
import { CheckIcon } from '@/icons';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const benefits = [
  {
    id: 1,
    text: 'Custom AI & LLM Solutions',
  },
  {
    id: 2,
    text: 'Data Engineering & Analytics',
  },
  {
    id: 3,
    text: 'Enterprise Data Governance',
  },
];

const experienceList = [
  {
    id: 1,
    text: 'Deploy AI-driven tools that streamline operations',
  },
  {
    id: 2,
    text: 'Scale your ventures rapidly with custom analytics',
  },
  {
    id: 3,
    text: 'Future-proof your business with robust data infrastructure',
  },
];

const Hero = () => {
  return (
    <section
      className="relative z-0 bg-[url('/images/ns-img-169.png')] bg-top bg-no-repeat pt-[320px] pb-16 md:pt-[200px] md:pb-20 lg:pt-[200px] lg:pb-[120px] xl:pt-[260px] xl:pb-[150px]"
      id="scene">
      {/*Hero Title Content*/}
      <div className="main-container relative z-10 mb-[100px] flex flex-col items-center space-y-[40px] lg:mb-[120px] xl:mb-[150px]">
        <div className="text-left max-lg:pt-[100px] max-md:pt-[50px] md:text-center">
          <RevealAnimation delay={0.2}>
            <h1 className="mb-4">
              Launch and scale faster. <br className="hidden md:block" />
              With Enterprise AI.
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto mb-6 max-w-[650px]">
              &nbsp;RockScale helps startups, SMEs, and mid-size companies accelerate growth by leveraging AI, data, and cloud infrastructure.
            </p>
          </RevealAnimation>
          <ul className="mb-14 flex w-fit list-none flex-col gap-4 md:mx-auto md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-9 lg:flex-nowrap">
            {benefits.map((item, idx) => (
              <RevealAnimation key={item.id} delay={0.4 + idx * 0.1}>
                <li className="flex items-center gap-2.5">
                  <span className="bg-secondary size-[19px] rounded-full flex items-center justify-center">
                    <CheckIcon className="h-[12px] w-[12px] fill-white" />
                  </span>
                  <span className="text-tagline-2">{item.text}</span>
                </li>
              </RevealAnimation>
            ))}
          </ul>
          <RevealAnimation delay={0.7}>
            <div className="block md:inline-block">
              <LinkButton
                href="/contact-us"
                className="btn btn-primary btn-xl mx-auto w-[90%] md:w-auto"
                aria-label="Book a consultation">
                Book a consultation
              </LinkButton>
            </div>
          </RevealAnimation>
          {/* Hero image removed */}
        </div>
      </div>

      {/*Hero Bottom item — Scale Your Operations */}
      <div className="main-container">
        <div className="relative z-0">
          <div className="absolute -z-10 h-full w-full overflow-hidden rounded-[20px] bg-white">
            <RevealAnimation delay={0.7} useSpring offset={140} direction="right">
              <div className="pointer-events-none absolute -top-[75%] -right-[75%] -z-10 size-[1060px] rotate-[10deg] select-none md:-top-[65%] md:-right-[70%] md:rotate-[60deg] lg:-top-[155%] lg:-right-[40%]">
                <Image src={gradient12} alt="gradient" />
              </div>
            </RevealAnimation>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="py-16 max-lg:px-5 max-sm:overflow-hidden lg:flex-1/2 lg:pl-14">
              <div className="mb-9">
                <RevealAnimation delay={0.2}>
                  <h2 className="mb-3">Scale Your Operations.</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="max-w-[530px]">
                    We build scalable AI solutions and infrastructure that automate processes, unlock growth, and future-proof your business. With RockScale, you don't just grow—you launch and scale faster.
                  </p>
                </RevealAnimation>
              </div>
              <ul className="mb-14 list-none space-y-2">
                {experienceList.map((item, idx) => (
                  <RevealAnimation key={item.id} delay={0.4 + idx * 0.1}>
                    <li className="flex items-center gap-3">
                      <span className="bg-secondary flex size-[19px] items-center justify-center rounded-full">
                        <CheckIcon className="h-[12px] w-[12px] fill-white" />
                      </span>
                      <p className="text-secondary">{item.text}</p>
                    </li>
                  </RevealAnimation>
                ))}
              </ul>
              <RevealAnimation delay={0.7}>
                <div className="text-center sm:text-left">
                  <LinkButton
                    href="/about"
                    className="btn btn-secondary btn-md hover:btn-primary mx-auto w-[85%] md:w-auto">
                    Discover more about us
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
            <div className="lg:flex-1/2 lg:pe-[42px] flex items-center justify-center py-8 max-lg:px-5">
              <RevealAnimation delay={0.5} direction="left">
                <figure className="relative w-full max-w-[540px] overflow-hidden rounded-[20px] shadow-[0_20px_60px_-10px_rgba(6,18,37,0.18)]">
                  <Image
                    src={scaleOpsImg}
                    alt="Scale your operations with AI — enterprise dashboard"
                    className="w-full h-auto object-cover"
                    priority
                  />
                  {/* Subtle overlay to blend with the white card background */}
                  <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-secondary/10" />
                </figure>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
