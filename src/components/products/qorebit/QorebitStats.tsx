'use client';
import NumberAnimation from '@/components/animation/NumberAnimation';
import RevealAnimation from '@/components/animation/RevealAnimation';

const stats = [
  { number: 15, suffix: '+', label: 'AI Models Available' },
  { number: 6, suffix: '+', label: 'Supported Providers' },
  { number: 99, suffix: '.9%', label: 'API Uptime' },
  { number: 5, suffix: ' min', label: 'Average Integration Time' },
];

const QorebitStats = () => {
  return (
    <section className="bg-white dark:bg-[#0d0d1a] py-16 md:py-20 lg:py-[100px]" aria-labelledby="stats-heading">
      <div className="main-container">
        <div className="text-center space-y-3 mb-10 md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Platform Statistics</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 id="stats-heading">Built for scale. Reliable by design.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="max-w-[600px] mx-auto text-secondary/70 dark:text-accent/70">
              Infrastructure numbers that tell the Qorebit story.
            </p>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.4}>
          <div className="flex flex-col max-md:gap-y-10 max-lg:gap-x-4 md:flex-row justify-between bg-secondary dark:bg-background-8 rounded-[20px] px-3 lg:px-[60px] py-14">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2 text-center">
                <h3 className="text-white flex items-center justify-center">
                  <NumberAnimation number={stat.number} speed={2000} interval={200} rooms={2} heightSpaceRatio={2} />
                  <span>{stat.suffix}</span>
                </h3>
                <p className="text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

QorebitStats.displayName = 'QorebitStats';
export default QorebitStats;
