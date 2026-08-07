'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';

const QorebitStory = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="story-heading">
      <div className="main-container">
        <div className="mx-auto mb-14 max-w-[750px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">What is Qorebit AI?</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 id="story-heading">One integration. Every frontier model.</h2>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <RevealAnimation delay={0.3}>
            <div className="bg-white dark:bg-background-6 rounded-[20px] p-8 border border-stroke-1/10 dark:border-white/5">
              <div className="flex size-12 items-center justify-center rounded-xl bg-background-3 dark:bg-background-7 mb-5">
                <span className="text-2xl font-bold text-secondary/40 dark:text-accent/40 font-mono">01</span>
              </div>
              <h3 className="text-heading-5 mb-3">The Problem</h3>
              <p className="text-secondary/70 dark:text-accent/70 text-sm leading-relaxed">
                Every AI provider has a different API, different billing system, and different SDK. Teams building serious AI products spend weeks managing integrations rather than building features. Costs are unpredictable. Switching providers is painful.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <div className="bg-secondary relative overflow-hidden rounded-[20px] p-8 border border-ns-green/20">
              <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-ns-green/20 blur-2xl" />
              <div className="flex size-12 items-center justify-center rounded-xl bg-ns-green/20 mb-5 relative z-10">
                <span className="text-2xl font-bold text-ns-green font-mono">Q</span>
              </div>
              <h3 className="text-heading-5 mb-3 text-white relative z-10">Qorebit AI</h3>
              <p className="text-white/70 text-sm leading-relaxed relative z-10">
                Qorebit is an AI Infrastructure Platform that sits between your application and every AI provider. Integrate once using the familiar OpenAI SDK interface, and instantly gain access to every frontier model — with unified billing, usage analytics, and enterprise management built in.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.5}>
            <div className="bg-white dark:bg-background-6 rounded-[20px] p-8 border border-stroke-1/10 dark:border-white/5">
              <div className="flex size-12 items-center justify-center rounded-xl bg-background-3 dark:bg-background-7 mb-5">
                <span className="text-2xl font-bold text-secondary/40 dark:text-accent/40 font-mono">03</span>
              </div>
              <h3 className="text-heading-5 mb-3">The Outcome</h3>
              <p className="text-secondary/70 dark:text-accent/70 text-sm leading-relaxed">
                Your team integrates once and accesses everything. Switch between GPT-4o, Claude 3.5, Gemini 2.0, and more with a single parameter change. Spend less time on infrastructure management. Ship faster, spend smarter, and scale confidently.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

QorebitStory.displayName = 'QorebitStory';
export default QorebitStory;
