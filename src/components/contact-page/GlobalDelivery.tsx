'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';

const GlobalDelivery = () => {
  return (
    <section className="bg-white dark:bg-black py-16 md:py-20 lg:py-[100px]">
      <div className="main-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text side */}
          <RevealAnimation delay={0.2} direction="right">
            <div className="space-y-6">
              <span className="badge badge-green">Global Delivery</span>
              <h2 className="text-3xl font-bold md:text-4xl leading-tight">
                Wherever your business operates, we deliver.
              </h2>
              <p className="text-lg text-secondary/70 dark:text-accent/70">
                RockScale works with organizations across North America, Europe, Africa, and beyond. All engagements are delivered remotely or in close collaboration with your on-site teams — whichever model works best for your project.
              </p>
              <ul className="space-y-4">
                {[
                  'Remote-first engineering with async and sync collaboration',
                  'Embedded on-site delivery for strategic programmes',
                  'Time-zone flexible team structure',
                  'Secure infrastructure across major cloud regions',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary text-white dark:bg-white dark:text-secondary">
                      <svg width="11" height="9" fill="none" viewBox="0 0 11 9">
                        <path d="M1 4.5L4 7.5L10 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-secondary/80 dark:text-accent/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Visual side */}
          <RevealAnimation delay={0.35} direction="left">
            <div className="relative overflow-hidden rounded-[24px] bg-secondary dark:bg-background-7 p-10 flex flex-col gap-6 border border-stroke-1 dark:border-stroke-7">
              {/* Simple globe illustration using CSS */}
              <div className="relative mx-auto flex size-52 items-center justify-center rounded-full border-4 border-white/20">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-white/5" />
                <svg width="180" height="180" viewBox="0 0 200 200" fill="none" className="opacity-60">
                  <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="1" strokeDasharray="4 4"/>
                  <ellipse cx="100" cy="100" rx="50" ry="90" stroke="white" strokeWidth="1" strokeDasharray="4 4"/>
                  <ellipse cx="100" cy="100" rx="90" ry="35" stroke="white" strokeWidth="1" strokeDasharray="4 4"/>
                  <circle cx="100" cy="100" r="5" fill="white"/>
                  {/* Location dots */}
                  <circle cx="60" cy="80" r="4" fill="#4ade80"/>
                  <circle cx="140" cy="70" r="4" fill="#4ade80"/>
                  <circle cx="80" cy="120" r="4" fill="#4ade80"/>
                  <circle cx="155" cy="110" r="4" fill="#4ade80"/>
                  <circle cx="45" cy="115" r="3" fill="#4ade80"/>
                </svg>
              </div>
              <div className="text-center space-y-2">
                <p className="text-white font-bold text-xl">4 Continents</p>
                <p className="text-white/60">Projects delivered globally with enterprise-grade security and compliance</p>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { label: 'Americas', count: '🌎' },
                  { label: 'Europe', count: '🌍' },
                  { label: 'Africa', count: '🌍' },
                ].map((region) => (
                  <div key={region.label} className="rounded-[12px] bg-white/10 px-3 py-4 space-y-1">
                    <p className="text-2xl">{region.count}</p>
                    <p className="text-white/80 text-xs font-medium">{region.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

GlobalDelivery.displayName = 'GlobalDelivery';
export default GlobalDelivery;
