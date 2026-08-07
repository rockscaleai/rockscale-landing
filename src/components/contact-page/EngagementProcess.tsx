'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';

const engagementSteps = [
  {
    id: '1',
    number: 'STEP 01',
    title: 'Submit Your Enquiry',
    description: 'Complete the form above with details about your business challenge and goals.',
  },
  {
    id: '2',
    number: 'STEP 02',
    title: 'Initial Review',
    description: 'Our team reviews your enquiry and prepares context for the discovery conversation. We respond within one business day.',
  },
  {
    id: '3',
    number: 'STEP 03',
    title: 'Discovery Call',
    description: 'A 30–60 minute session with one of our AI strategy experts to understand your business deeply.',
  },
  {
    id: '4',
    number: 'STEP 04',
    title: 'Solution Proposal',
    description: 'We present a tailored approach, technology stack recommendations, timeline, and investment outline.',
  },
  {
    id: '5',
    number: 'STEP 05',
    title: 'Project Kickoff',
    description: 'Once aligned, we move fast. Your dedicated team is assembled and work begins immediately.',
  },
];

const EngagementProcess = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="process-heading">
      <div className="main-container">
        <div className="mx-auto mb-12 max-w-[750px] space-y-4 text-center md:mb-[60px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">What Happens Next?</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 id="process-heading">Your path from enquiry to execution</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[600px] text-secondary/70 dark:text-accent/70">
              We make starting easy. Here is exactly what happens after you reach out.
            </p>
          </RevealAnimation>
        </div>

        <div className="mx-auto max-w-4xl">
          {engagementSteps.map((step, index) => (
            <RevealAnimation key={step.id} delay={0.15 + index * 0.1}>
              <div className="relative flex gap-8 pb-10 last:pb-0">
                {/* Left connector */}
                <div className="flex flex-col items-center">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary text-white dark:bg-white dark:text-secondary font-bold text-sm">
                    {step.id}
                  </div>
                  {index < engagementSteps.length - 1 && (
                    <div className="mt-3 w-0.5 flex-1 bg-stroke-2 dark:bg-stroke-6" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-4 pt-2 space-y-2">
                  <p className="text-xs font-semibold tracking-widest text-primary uppercase">{step.number}</p>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-secondary/70 dark:text-accent/70 max-w-[560px]">{step.description}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

EngagementProcess.displayName = 'EngagementProcess';
export default EngagementProcess;
