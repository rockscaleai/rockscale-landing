'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';

const workshopTopics = [
  'Current state of AI',
  'AI for business value',
  'AI strategy & roadmap',
  'AI opportunities & use cases',
  'AI technology landscape',
  'AI adoption & change management',
  'AI tools & infrastructure',
  'AI governance & risk',
  'Building an AI-ready culture',
  'Measuring AI ROI',
];

const ExecWorkshop = () => {
  return (
    <section className="py-20 lg:py-[120px]">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <RevealAnimation>
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">Customized Executive Workshops</h2>
                <p className="text-secondary/70 dark:text-accent/70 text-lg leading-relaxed mb-8">
                  We design and deliver customized workshops for leadership teams. Each workshop is tailored to your
                  industry, business goals, and the specific challenges your team is facing.
                </p>
                <Link href="/contact" className="btn btn-primary">
                  Request a Workshop
                </Link>
              </div>
            </RevealAnimation>
          </div>
          <div>
            <RevealAnimation delay={0.2}>
              <div className="bg-white dark:bg-background-7 rounded-2xl p-8">
                <h4 className="font-bold text-xl mb-4">Sample Workshop Topics:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {workshopTopics.map((topic, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="ns-check text-green-500" />
                      <span dangerouslySetInnerHTML={{ __html: topic }} />
                    </li>
                  ))}
                </ul>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

ExecWorkshop.displayName = 'ExecWorkshop';
export default ExecWorkshop;