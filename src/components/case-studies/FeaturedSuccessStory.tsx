'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';

const FeaturedSuccessStory = () => {
  return (
    <section className="bg-background-3 py-16 md:py-20 lg:py-[100px] dark:bg-background-7">
      <div className="main-container">
        <div className="mb-10 space-y-5 text-center md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Featured Success Story</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2>Qorebit AI</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="mx-auto max-w-[680px]">
              An AI Infrastructure Platform built to simplify access to multiple AI providers through one unified API.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <RevealAnimation delay={0.5} direction="right">
            <div className="relative w-full overflow-hidden rounded-[20px] bg-secondary aspect-video shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <span className="text-4xl font-bold text-white tracking-widest uppercase">Qorebit AI</span>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.6} direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Challenge</h3>
                <p className="text-secondary/70 dark:text-accent/70">
                  Managing multiple AI APIs, handling complex fallbacks, and unpredictable cost tracking limited enterprise scalability and increased development friction.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Approach</h3>
                <p className="text-secondary/70 dark:text-accent/70">
                  We engineered a unified gateway and intelligent routing layer that standardizes interactions across OpenAI, Anthropic, Google, and more.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Impact</h3>
                <ul className="list-disc pl-5 text-secondary/70 dark:text-accent/70 space-y-1">
                  <li>Reduced integration time by 80%.</li>
                  <li>Lowered token costs through intelligent model routing.</li>
                  <li>Unified billing and analytics across all AI providers.</li>
                </ul>
              </div>
              <div className="pt-4">
                <LinkButton href="/case-studies/qorebit-ai" className="btn btn-primary btn-md">
                  Read Full Case Study
                </LinkButton>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

FeaturedSuccessStory.displayName = 'FeaturedSuccessStory';
export default FeaturedSuccessStory;
