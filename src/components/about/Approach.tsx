'use client';
import RevealAnimation from '../animation/RevealAnimation';

const steps = [
  { id: '01', title: 'Understand', desc: 'We start by understanding your business operations, data landscape, and core objectives.' },
  { id: '02', title: 'Design', desc: 'We architect a solution that balances technical feasibility, security, and measurable ROI.' },
  { id: '03', title: 'Build', desc: 'Our engineers develop the AI models, data pipelines, and infrastructure required.' },
  { id: '04', title: 'Deploy', desc: 'We securely launch the system into production with robust MLOps and monitoring.' },
  { id: '05', title: 'Scale', desc: 'As adoption grows, we scale the architecture to handle increased demand and data.' },
  { id: '06', title: 'Optimize', desc: 'We continuously refine the models and infrastructure to improve performance and lower costs.' },
];

const Approach = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="approach-heading">
      <div className="main-container">
        <div className="mx-auto mb-16 max-w-[750px] space-y-5 text-center md:mb-[80px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Our Approach</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 id="approach-heading">How we deliver results</h2>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-y-12">
          {steps.map((step, index) => (
            <RevealAnimation key={step.id} delay={0.2 + (index % 3) * 0.1}>
              <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-stroke-1/30 dark:before:bg-stroke-1/10">
                <div className="absolute left-[-4px] top-2 size-[9px] rounded-full bg-ns-green" />
                <span className="text-tagline-2 mb-2 block font-medium text-ns-green">{step.id}</span>
                <h3 className="mb-3 text-heading-5">{step.title}</h3>
                <p className="text-secondary/70 dark:text-accent/70">{step.desc}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

Approach.displayName = 'Approach';
export default Approach;
