'use client';

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

const Hero = () => {
  return (
    <section
      className="relative z-0 overflow-hidden bg-secondary pt-[320px] pb-16 md:pt-[200px] md:pb-20 lg:pt-[200px] lg:pb-[120px] xl:pt-[260px] xl:pb-[150px]"
      id="scene">
      {/* Same background recipe as AIStrategyRoadmapHero */}
      <div className="absolute inset-0 bg-[url('/images/ns-img-495.png')] bg-cover bg-top bg-no-repeat opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(126,87,253,0.35),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.28),transparent_30%)]" />
      <div className="pointer-events-none absolute top-20 left-[8%] h-32 w-32 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[10%] top-[18%] h-56 w-56 rounded-full bg-primary/30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[8%] left-[18%] h-44 w-44 rounded-full bg-sky-400/20 blur-[100px]" />

      {/*Hero Title Content*/}
      <div className="main-container relative z-10 flex flex-col items-center space-y-[40px]">
        {/* Animated Background Elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* AI Data Flow Visualization (Moving Circle along SVG path) */}
          <div className="absolute top-[20%] left-[5%] h-full w-[80%] opacity-40 dark:opacity-60 md:left-[15%]">
            <svg viewBox="0 0 800 600" className="h-full w-full stroke-secondary/20 dark:stroke-white/10" fill="none">
              {/* Background Grid/Nodes */}
              <path id="ai-path-1" d="M 50 150 C 200 150 250 350 450 350 S 650 150 750 150" strokeWidth="2" strokeDasharray="5,5" />
              <path id="ai-path-2" d="M 100 450 C 300 450 350 200 550 200 S 700 400 750 400" strokeWidth="2" strokeDasharray="5,5" />

              {/* Node Points */}
              <circle cx="50" cy="150" r="4" className="fill-[#7E57FD]" />
              <circle cx="450" cy="350" r="6" className="fill-[#7E57FD]" />
              <circle cx="750" cy="150" r="4" className="fill-[#7E57FD]" />

              <circle cx="100" cy="450" r="4" className="fill-primary-400" />
              <circle cx="550" cy="200" r="6" className="fill-primary-400" />
              <circle cx="750" cy="400" r="4" className="fill-primary-400" />

              {/* Moving Data Packets (Circles) */}
              <circle r="6" className="fill-[#7E57FD] drop-shadow-[0_0_8px_rgba(126,87,253,0.8)]">
                <animateMotion dur="4s" repeatCount="indefinite">
                  <mpath href="#ai-path-1" />
                </animateMotion>
              </circle>

              <circle r="6" className="fill-primary-400 drop-shadow-[0_0_8px_rgba(100,217,253,0.8)]">
                <animateMotion dur="5s" repeatCount="indefinite" begin="1s">
                  <mpath href="#ai-path-2" />
                </animateMotion>
              </circle>
            </svg>
          </div>

          <RevealAnimation delay={0.5}>
            <div className="absolute top-[10%] left-[10%] size-16 animate-[pulse_4s_ease-in-out_infinite] rounded-full bg-primary-400/20 blur-xl mix-blend-screen md:size-24" />
          </RevealAnimation>
          <RevealAnimation delay={0.7}>
            <div className="absolute top-[40%] right-[15%] size-20 animate-[pulse_6s_ease-in-out_infinite_1s] rounded-full bg-[#7E57FD]/20 blur-2xl mix-blend-screen md:size-32" />
          </RevealAnimation>
        </div>

        <div className="relative z-10 text-left max-lg:pt-[100px] max-md:pt-[50px] md:text-center">
          <RevealAnimation delay={0.2}>
            <h1 className="mb-4 text-white">
              Launch and scale faster. <br className="hidden md:block" />
              With Enterprise AI.
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto mb-6 max-w-[650px] text-white/75">
              &nbsp;RockScale helps startups, SMEs, and mid-size companies accelerate growth by leveraging AI, data, and cloud infrastructure.
            </p>
          </RevealAnimation>
          <ul className="mb-14 flex w-fit list-none flex-col gap-4 md:mx-auto md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-9 lg:flex-nowrap">
            {benefits.map((item, idx) => (
              <RevealAnimation key={item.id} delay={0.4 + idx * 0.1}>
                <li className="flex items-center gap-2.5">
                  <span className="flex size-[19px] items-center justify-center rounded-full bg-white/20">
                    <CheckIcon className="h-[12px] w-[12px] fill-white" />
                  </span>
                  <span className="text-tagline-2 text-white/80">{item.text}</span>
                </li>
              </RevealAnimation>
            ))}
          </ul>
          <RevealAnimation delay={0.7}>
            <div className="block md:inline-block">
              <LinkButton
                href="/contact-us"
                className="btn btn-md mx-auto w-[90%] bg-white text-secondary hover:bg-primary hover:text-white md:w-auto"
                aria-label="Book a consultation">
                Book a consultation
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
