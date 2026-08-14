'use client';

import RevealAnimation from '../animation/RevealAnimation';

const differentiators = [
  { id: 1, text: 'End-to-end AI delivery' },
  { id: 2, text: 'AI + Data + Cloud under one roof' },
  { id: 3, text: 'Business-first approach' },
  { id: 4, text: 'Rapid implementation' },
  { id: 5, text: 'Enterprise-ready architecture' },
  { id: 6, text: 'Security & Governance built-in' },
  { id: 7, text: 'Reusable AI accelerators' },
  { id: 8, text: 'Focus on measurable ROI' },
];

const Differentiators = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="differentiators-heading">
      <div className="main-container">
        <div className="mx-auto mb-12 max-w-[750px] text-center md:mb-[60px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-4">What Makes Us Different</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 id="differentiators-heading">Why RockScale?</h2>
          </RevealAnimation>
        </div>
        
        <div className="mx-auto max-w-[900px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {differentiators.map((item, index) => (
              <RevealAnimation key={item.id} delay={0.2 + index * 0.05}>
                <div className="flex items-center gap-4 bg-white dark:bg-background-6 rounded-xl p-5 shadow-sm">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-ns-green/20 text-ns-green">
                    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-tagline-1 font-medium text-secondary dark:text-accent">
                    {item.text}
                  </span>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Differentiators.displayName = 'Differentiators';
export default Differentiators;
