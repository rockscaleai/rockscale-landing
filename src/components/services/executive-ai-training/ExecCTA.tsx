'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { Button } from '@/components/ui/button/Button';
import Link from 'next/link';

const ExecCTA = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary-50 dark:bg-background-7">
      <div className="main-container">
        <div className="text-center max-w-4xl mx-auto">
          <RevealAnimation>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to Lead the AI-Powered Future?
              </h2>
              <p className="text-secondary/80 dark:text-accent/80 text-lg mb-8">
                Empower your leadership team with the strategic knowledge to navigate the AI landscape and drive
                impactful business outcomes.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

ExecCTA.displayName = 'ExecCTA';
export default ExecCTA;