'use client';
import NumberAnimation from '@/components/animation/NumberAnimation';
import RevealAnimation from '@/components/animation/RevealAnimation';

const OutcomesStats = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[100px] dark:bg-black">
      <div className="main-container">
        <div className="text-center space-y-3 mb-10 md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Client Outcomes</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2>Measurable impact across the board.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="max-w-[680px] mx-auto text-secondary/70 dark:text-accent/70">
              Our AI and data solutions are designed to deliver tangible business value from day one.
            </p>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.5}>
          <div className="flex flex-col max-md:gap-y-10 max-lg:gap-x-4 md:flex-row justify-between bg-secondary dark:bg-background-8 rounded-[20px] px-3 lg:px-[60px] py-14">
            <div className="space-y-2 text-center">
              <h3 className="text-white flex items-center justify-center">
                <NumberAnimation number={500} speed={2000} interval={50} rooms={3} heightSpaceRatio={2} />K+
              </h3>
              <p className="text-white/60">Hours Automated</p>
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-white flex items-center justify-center">
                <NumberAnimation number={85} speed={2000} interval={100} rooms={2} heightSpaceRatio={2} />%
              </h3>
              <p className="text-white/60">Operational Efficiency Gain</p>
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-white flex items-center justify-center">
                <NumberAnimation number={30} speed={2000} interval={200} rooms={2} heightSpaceRatio={2} />+
              </h3>
              <p className="text-white/60">AI Workflows Built</p>
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-white flex items-center justify-center">
                <NumberAnimation number={150} speed={2000} interval={100} rooms={3} heightSpaceRatio={2} />+
              </h3>
              <p className="text-white/60">Systems Integrated</p>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

OutcomesStats.displayName = 'OutcomesStats';
export default OutcomesStats;
