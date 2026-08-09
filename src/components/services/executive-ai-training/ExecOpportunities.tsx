'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';

const evaluationCriteria = [
  'Business value',
  'Feasibility',
  'Data availability',
  'Cost',
  'Risk',
  'Time to value',
  'Strategic importance',
];

const ExecOpportunities = () => {
  return (
    <section className="py-20 lg:py-[120px] bg-white dark:bg-background-7">
      <div className="main-container">
        <div className="text-center mb-12">
          <RevealAnimation>
            <h2 className="text-4xl lg:text-5xl font-bold">Find the AI Opportunities That Matter</h2>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <RevealAnimation>
              <div>
                <h3 className="text-2xl font-bold mb-4">Evaluation Criteria</h3>
                <ul className="grid grid-cols-2 gap-4">
                  {evaluationCriteria.map((criterion) => (
                    <li key={criterion} className="flex items-center gap-2">
                      <span className="ns-check text-green-500" />
                      <span>{criterion}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/services/ai-strategy-roadmap" className="btn btn-primary">
                    Explore AI Strategy & Roadmap
                  </Link>
                </div>
              </div>
            </RevealAnimation>
          </div>
          <div>
            <RevealAnimation delay={0.2}>
              <div className="relative aspect-square border-2 border-dashed border-secondary/20 dark:border-accent/20 rounded-2xl">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-secondary/20 dark:bg-accent/20"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-secondary/20 dark:bg-accent/20"></div>

                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-sm font-medium">High Value</div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-sm font-medium">Low Value</div>
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90 text-sm font-medium">Low Complexity</div>
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 rotate-90 text-sm font-medium">
                  High Complexity
                </div>

                <div className="absolute top-4 left-4 p-2 bg-green-200 rounded-full"></div>
                <div className="absolute top-8 right-8 p-2 bg-yellow-200 rounded-full"></div>
                <div className="absolute bottom-8 left-8 p-2 bg-red-200 rounded-full"></div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

ExecOpportunities.displayName = 'ExecOpportunities';
export default ExecOpportunities;