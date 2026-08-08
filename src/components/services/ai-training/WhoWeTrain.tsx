'use client';
import RevealAnimation from '../../animation/RevealAnimation';

const audiences = [
  'Executives & Leadership',
  'Product Teams',
  'Software Engineers',
  'Data Teams',
  'Business Analysts',
  'Operations Teams',
  'Customer Support Teams',
  'Marketing Teams',
  'HR Teams',
  'Sales Teams',
  'Finance Teams',
  'And more...'
];

const WhoWeTrain = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[100px] dark:bg-[#0d0d1a]" aria-labelledby="who-we-train-heading">
      <div className="main-container">
        <div className="mx-auto mb-14 max-w-[750px] space-y-5 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Who We Train</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 id="who-we-train-heading">AI training for every role in the organization.</h2>
          </RevealAnimation>
           <RevealAnimation delay={0.3}>
              <p className="text-secondary/70 dark:text-accent/70 mx-auto max-w-[680px] text-lg leading-relaxed">
                Training can be customized based on the organization’s roles and existing workflows.
              </p>
            </RevealAnimation>
        </div>

        <div className="mx-auto max-w-[1000px]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {audiences.map((cap, index) => (
              <RevealAnimation key={cap} delay={0.2 + (index % 4) * 0.1}>
                <div className="bg-background-3 dark:bg-background-6 flex h-[100px] items-center justify-center rounded-[16px] p-4 text-center transition-transform hover:-translate-y-1">
                  <span className="text-tagline-1 font-medium text-secondary dark:text-accent">
                    {cap}
                  </span>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

WhoWeTrain.displayName = 'WhoWeTrain';
export default WhoWeTrain;
