'use client';
import RevealAnimation from '../animation/RevealAnimation';

const capabilities = [
  'AI Engineering',
  'Generative AI',
  'AI Agents',
  'Machine Learning',
  'Data Engineering',
  'Cloud Architecture',
  'Business Intelligence',
  'Automation',
  'Enterprise Integration',
  'Analytics',
  'MLOps',
  'AI Strategy',
];

const Capabilities = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[100px] dark:bg-[#0d0d1a]" aria-labelledby="capabilities-heading">
      <div className="main-container">
        <div className="mx-auto mb-14 max-w-[750px] space-y-5 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Our Capabilities</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 id="capabilities-heading">Deep technical expertise</h2>
          </RevealAnimation>
        </div>

        <div className="mx-auto max-w-[1000px]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {capabilities.map((cap, index) => (
              <RevealAnimation key={cap} delay={0.2 + (index % 4) * 0.1}>
                <div className="bg-background-3 dark:bg-background-6 flex h-[100px] items-center justify-center rounded-[16px] p-4 text-center transition-transform hover:-translate-y-1">
                  <span className="text-tagline-1 font-medium text-secondary dark:text-accent">
                    {cap}
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

Capabilities.displayName = 'Capabilities';
export default Capabilities;
