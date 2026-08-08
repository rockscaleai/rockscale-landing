'use client';
import RevealAnimation from '../animation/RevealAnimation';

const processSteps = [
  {
    id: '01',
    phase: 'THINK',
    title: 'AI Strategy & Roadmap',
    description: 'We begin by deeply understanding your business objectives, current technology landscape and data capabilities. Together we identify the highest-value AI opportunities and design a clear, phased roadmap from experimentation to production.',
  },
  {
    id: '02',
    phase: 'BUILD',
    title: 'AI-Powered Software Development',
    description: 'With a validated strategy in place, our engineers design and build production-ready AI applications, agents and intelligent workflows — custom-built to solve real business problems at scale.',
  },
  {
    id: '03',
    phase: 'POWER',
    title: 'Data Engineering & Analytics',
    description: 'Great AI requires reliable data. We build the pipelines, warehouses and analytics platforms that make your data accessible, trustworthy and ready to power intelligent systems and executive decision-making.',
  },
  {
    id: '04',
    phase: 'DEPLOY',
    title: 'Forward Deployed Engineer',
    description: 'Our engineers embed directly within your teams — working inside your environment alongside CTOs, product managers, engineers and operations leads — to accelerate implementation, solve hard problems and move PoCs into production.',
  },
];

const phaseColors: Record<string, string> = {
  THINK: 'bg-[#7E57FD] text-white',
  BUILD: 'bg-ns-green text-secondary',
  POWER: 'bg-blue-500 text-white',
  DEPLOY: 'bg-orange-500 text-white',
};

const DeliveryProcess = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="process-heading">
      <div className="main-container">
        <div className="mx-auto mb-16 max-w-[750px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">The AI Implementation Journey</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 id="process-heading">How RockScale delivers end-to-end AI transformation</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[600px] text-secondary/70 dark:text-accent/70">
              Our four core services are designed to work as a complete, complementary journey — from strategy through to embedded engineering execution.
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
                  {/* Phase Badge */}
                  <div className={`relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full text-xs font-bold tracking-widest shadow-[0_0_0_8px_var(--bg-3)] dark:shadow-[0_0_0_8px_var(--bg-7)] ${phaseColors[step.phase]}`}>
                    {step.phase}
                  </div>

                  {/* Content */}
                  <div className="bg-white dark:bg-background-6 flex-grow rounded-[20px] p-6 shadow-sm border border-stroke-1/10 dark:border-white/5 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-tagline-2 text-secondary/40 dark:text-accent/40 font-medium">{step.id}</span>
                      <h3 className="text-heading-5">{step.title}</h3>
                    </div>
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
