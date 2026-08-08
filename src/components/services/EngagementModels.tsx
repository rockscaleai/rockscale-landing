'use client';
import gradient4 from '@public/images/ns-img-496.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const CheckIcon = () => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0">
    <rect width={18} height={18} rx={9} fill="" className="fill-ns-green dark:fill-ns-green" />
    <path
      d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
      fill=""
      className="fill-secondary dark:fill-secondary"
    />
  </svg>
);

const EngagementModels = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[100px] dark:bg-[#0d0d1a]" aria-labelledby="engagement-models-heading">
      <div className="main-container">
        <div className="mx-auto mb-16 max-w-[800px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Engagement Models</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 id="engagement-models-heading">Flexible ways to work with RockScale</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[600px] text-secondary/70 dark:text-accent/70">
              Whether you need strategic clarity, a complete software build, data infrastructure, or an embedded engineer — we have a model that fits.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Model 1: Strategy Workshop */}
          <RevealAnimation delay={0.3}>
            <div className="bg-background-3 dark:bg-background-6 flex h-full flex-col rounded-[20px] p-8 xl:p-10 border border-stroke-1/10 dark:border-white/5">
              <div className="mb-8">
                <p className="text-tagline-1 mb-2 font-medium text-secondary/60 dark:text-accent/60">Starting point</p>
                <h3 className="text-heading-5 mb-3 font-normal">AI Strategy Workshop</h3>
                <p className="text-secondary/70 dark:text-accent/70 text-sm">
                  For organizations beginning their AI journey or seeking a clear direction before committing to a build.
                </p>
              </div>
              <ul className="mb-10 flex-grow space-y-5">
                <li className="flex items-start gap-3"><CheckIcon /><span className="text-sm">2–4 week AI readiness assessment</span></li>
                <li className="flex items-start gap-3"><CheckIcon /><span className="text-sm">High-value use-case identification</span></li>
                <li className="flex items-start gap-3"><CheckIcon /><span className="text-sm">AI architecture blueprint</span></li>
                <li className="flex items-start gap-3"><CheckIcon /><span className="text-sm">ROI & cost modeling</span></li>
                <li className="flex items-start gap-3"><CheckIcon /><span className="text-sm">Phased implementation roadmap</span></li>
              </ul>
              <Link href="/contact-us" className="btn btn-white dark:btn-transparent border border-stroke-1/20 dark:border-white/20 hover:btn-primary w-full first-letter:uppercase before:content-none">
                Build Your Roadmap
              </Link>
            </div>
          </RevealAnimation>

          {/* Model 2: Fixed Scope (Featured) */}
          <RevealAnimation delay={0.4}>
            <div className="bg-secondary relative flex h-full flex-col overflow-hidden rounded-[20px] p-8 xl:p-10 border border-secondary dark:border-background-5">
              <div className="absolute -top-28 -right-20 z-0 h-full w-full opacity-60">
                <Image src={gradient4} alt="background gradient" priority />
              </div>
              <div className="relative z-10 mb-8">
                <p className="text-tagline-1 mb-2 font-medium text-ns-green">Most Popular</p>
                <h3 className="text-heading-5 mb-3 font-normal text-white">Fixed Scope Project</h3>
                <p className="text-white/70 text-sm">
                  End-to-end delivery of a specific AI application, data pipeline, or analytics solution with clear milestones.
                </p>
              </div>
              <ul className="relative z-10 mb-10 flex-grow space-y-5">
                <li className="flex items-start gap-3"><CheckIcon /><span className="text-sm text-white">Dedicated AI engineering team</span></li>
                <li className="flex items-start gap-3"><CheckIcon /><span className="text-sm text-white">Clear milestones & delivery dates</span></li>
                <li className="flex items-start gap-3"><CheckIcon /><span className="text-sm text-white">Production-ready deployment</span></li>
                <li className="flex items-start gap-3"><CheckIcon /><span className="text-sm text-white">Post-launch optimization</span></li>
                <li className="flex items-start gap-3"><CheckIcon /><span className="text-sm text-white">Comprehensive documentation</span></li>
              </ul>
              <Link href="/contact-us" className="btn btn-primary w-full relative z-10 first-letter:uppercase before:content-none hover:bg-white hover:text-secondary">
                Discuss Your Project
              </Link>
            </div>
          </RevealAnimation>

          {/* Model 3: Forward Deployed */}
          <RevealAnimation delay={0.5}>
            <div className="bg-background-3 dark:bg-background-6 flex h-full flex-col rounded-[20px] p-8 xl:p-10 border border-stroke-1/10 dark:border-white/5">
              <div className="mb-8">
                <p className="text-tagline-1 mb-2 font-medium text-secondary/60 dark:text-accent/60">Embedded partnership</p>
                <h3 className="text-heading-5 mb-3 font-normal">Forward Deployed Engineer</h3>
                <p className="text-secondary/70 dark:text-accent/70 text-sm">
                  An experienced AI engineer embedded directly within your team — working inside your environment to solve hard problems and accelerate delivery.
                </p>
              </div>
              <ul className="mb-10 flex-grow space-y-5">
                <li className="flex items-start gap-3"><CheckIcon /><span className="text-sm">Works directly with your CTO, product & engineering teams</span></li>
                <li className="flex items-start gap-3"><CheckIcon /><span className="text-sm">Turns PoCs into production systems</span></li>
                <li className="flex items-start gap-3"><CheckIcon /><span className="text-sm">Solves complex technical problems fast</span></li>
                <li className="flex items-start gap-3"><CheckIcon /><span className="text-sm">Builds internal AI capabilities</span></li>
                <li className="flex items-start gap-3"><CheckIcon /><span className="text-sm">Flexible engagement duration</span></li>
              </ul>
              <Link href="/contact-us" className="btn btn-white dark:btn-transparent border border-stroke-1/20 dark:border-white/20 hover:btn-primary w-full first-letter:uppercase before:content-none">
                Deploy an Engineer
              </Link>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

EngagementModels.displayName = 'EngagementModels';
export default EngagementModels;
