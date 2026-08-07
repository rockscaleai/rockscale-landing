'use client';
import { cn } from '@/utils/cn';
import nsImg208 from '@public/images/ns-img-208.png';
import nsImgDark141 from '@public/images/ns-img-dark-141.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const differentiators = [
  {
    id: 'enterprise-ready',
    text: 'Enterprise-grade architecture from day one',
    iconClass: 'ns-shape-10',
  },
  {
    id: 'end-to-end',
    text: 'End-to-end delivery — strategy through deployment',
    iconClass: 'ns-shape-12',
  },
  {
    id: 'cloud',
    text: 'Multi-cloud expertise across AWS, GCP and Azure',
    iconClass: 'ns-shape-14',
  },
  {
    id: 'security',
    text: 'Security, compliance, and data governance built in',
    iconClass: 'ns-shape-16',
  },
  {
    id: 'outcomes',
    text: 'Business-outcome focus, not just model benchmarks',
    iconClass: 'ns-shape-18',
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]"
      aria-labelledby="why-rockscale-heading">
      <div className="main-container">
        <div className="grid grid-cols-12 items-center gap-y-16 lg:gap-20 xl:gap-[100px]">
          {/* Left — copy */}
          <div className="col-span-12 lg:col-span-6">
            <div className="mx-auto max-w-[500px] space-y-6 sm:space-y-8 lg:mx-0 lg:max-w-full">
              <div className="space-y-3">
                <RevealAnimation delay={0.1}>
                  <span className="badge badge-green">Why RockScale</span>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <h2 id="why-rockscale-heading">
                    Why companies trust RockScale to deliver
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p>
                    AI projects fail when they are treated as technology experiments instead of business
                    programmes. We are engineers and strategists who focus on measurable outcomes — reduced
                    costs, faster operations, and sustainable competitive advantages.
                  </p>
                </RevealAnimation>
              </div>
              <ul className="space-y-1 sm:space-y-2">
                {differentiators.map((item, index) => (
                  <RevealAnimation key={item.id} delay={0.4 + index * 0.1}>
                    <li className="flex items-center gap-4 p-2">
                      <span
                        className={cn('text-secondary dark:text-accent text-[36px]', item.iconClass)}
                        aria-hidden="true"
                      />
                      <span className="text-tagline-1 text-secondary dark:text-accent font-medium">
                        {item.text}
                      </span>
                    </li>
                  </RevealAnimation>
                ))}
              </ul>
              <RevealAnimation delay={0.9}>
                <div className="pt-2">
                  <LinkButton
                    href="/why-choose-us"
                    className="btn btn-secondary hover:btn-primary btn-md w-[85%] md:w-auto">
                    See our approach
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>

          {/* Right — visual */}
          <div className="col-span-12 lg:col-span-6">
            <RevealAnimation delay={0.2} direction="up" offset={80}>
              <figure className="mx-auto w-full max-w-[500px] lg:mx-0 lg:max-w-[620px]">
                <Image
                  src={nsImg208}
                  alt="Enterprise AI consulting team reviewing architecture"
                  className="size-full dark:hidden"
                />
                <Image
                  src={nsImgDark141}
                  alt="Enterprise AI consulting team reviewing architecture in dark mode"
                  className="hidden size-full dark:block"
                />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

WhyChooseUs.displayName = 'WhyChooseUs';
export default WhyChooseUs;
