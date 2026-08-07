'use client';
import RevealAnimation from '../animation/RevealAnimation';

const processSteps = [
  {
    id: '01',
    title: 'Discovery',
    description: 'We analyze your business operations, data landscape, and core objectives to identify high-impact opportunities.',
  },
  {
    id: '02',
    title: 'Strategy',
    description: 'We develop a comprehensive roadmap aligning technology initiatives with your measurable business outcomes.',
  },
  {
    id: '03',
    title: 'Architecture',
    description: 'We design secure, scalable cloud and data foundations tailored for enterprise-grade AI deployment.',
  },
  {
    id: '04',
    title: 'Build',
    description: 'Our engineering teams develop the models, data pipelines, and infrastructure with rapid iteration cycles.',
  },
  {
    id: '05',
    title: 'Deploy',
    description: 'We launch systems securely into production, ensuring smooth integration with your existing workflows.',
  },
  {
    id: '06',
    title: 'Optimize',
    description: 'We provide ongoing monitoring, fine-tuning, and infrastructure scaling to maximize long-term ROI.',
  },
];

const DeliveryProcess = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="process-heading">
      <div className="main-container">
        <div className="mx-auto mb-16 max-w-[750px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Our Delivery Process</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 id="process-heading">How we deliver value</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[600px] text-secondary/70 dark:text-accent/70">
              A structured, transparent approach to transforming your business with intelligent systems.
            </p>
          </RevealAnimation>
        </div>

        <div className="relative mx-auto max-w-[900px]">
          {/* Vertical line connecting steps */}
          <div className="absolute left-[27px] top-[24px] bottom-[24px] hidden w-px bg-stroke-1/30 dark:bg-white/10 md:block" />
          
          <div className="space-y-8 md:space-y-12">
            {processSteps.map((step, index) => (
              <RevealAnimation key={step.id} delay={0.2 + index * 0.1}>
                <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
                  {/* Step Number Bubble */}
                  <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full bg-ns-green text-heading-5 text-secondary shadow-[0_0_0_8px_var(--bg-3)] dark:shadow-[0_0_0_8px_var(--bg-7)]">
                    {step.id}
                  </div>
                  
                  {/* Content */}
                  <div className="bg-white dark:bg-background-6 flex-grow rounded-[20px] p-6 shadow-sm border border-stroke-1/10 dark:border-white/5 md:p-8">
                    <h3 className="mb-3 text-heading-5">{step.title}</h3>
                    <p className="text-secondary/70 dark:text-accent/70">{step.description}</p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

DeliveryProcess.displayName = 'DeliveryProcess';
export default DeliveryProcess;
