'use client';
import RevealAnimation from '../../animation/RevealAnimation';

const capabilities = [
  {
    icon: 'ns-bulb',
    title: 'AI Fundamentals',
    description: 'Understand how modern AI systems work and where they can create business value.',
  },
  {
    icon: 'ns-rocket',
    title: 'AI Productivity',
    description: 'Use AI to improve everyday tasks such as research, writing, analysis, communication and documentation.',
  },
  {
    icon: 'ns-pen',
    title: 'Prompt Engineering',
    description: 'Learn how to communicate effectively with AI systems and create reliable workflows.',
  },
  {
    icon: 'ns-settings',
    title: 'AI-Powered Workflows',
    description: 'Identify repetitive processes and redesign them using AI and automation.',
  },
  {
    icon: 'ns-computer',
    title: 'AI Tools & Copilots',
    description: 'Learn how to effectively use modern AI assistants and workplace tools.',
  },
  {
    icon: 'ns-brain',
    title: 'AI Agents',
    description: 'Understand how agentic systems can automate multi-step business workflows.',
  },
  {
    icon: 'ns-shield',
    title: 'Responsible AI',
    description: 'Understand privacy, security, hallucinations, verification and responsible AI usage.',
  },
  {
    icon: 'ns-team',
    title: 'AI Adoption',
    description: 'Learn how teams can integrate AI into existing business processes rather than treating it as an isolated tool.',
  },
];

const WhatWeTrain = () => {
  return (
    <section className="py-16 md:py-20 lg:py-[100px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-5 text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-yellow-v2">What We Train Teams To Do</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2 className="mx-auto max-w-[878px]">A curriculum designed for practical application.</h2>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-y-5 md:gap-8 xl:gap-8">
          {capabilities.map((service, index) => (
            <RevealAnimation key={service.title} delay={0.5 + index * 0.1}>
              <div className="col-span-12 md:col-span-6 xl:col-span-3">
                <div className="bg-background-3 dark:bg-background-7 grid items-center justify-center space-y-6 rounded-[20px] px-6 py-8 text-center transition-transform duration-500 ease-in-out hover:translate-y-[-10px] h-full">
                  <div className="flex items-center justify-center">
                    <span className={`${service.icon} text-secondary dark:text-accent text-[52px]`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5 line-clamp-1">{service.title}</h3>
                    <p className="mx-auto line-clamp-3 max-w-[361px]">{service.description}</p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeTrain;
