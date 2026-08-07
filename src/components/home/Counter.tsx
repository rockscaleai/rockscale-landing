import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const Counter = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-[90px] xl:pt-[100px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px]">
      <div className="main-container">
        <div className="text-center space-y-3 mb-10 md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <h2>Real results. Measurable impact.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="max-w-[680px] mx-auto">
              Our numbers reflect the value we deliver—faster deployments, higher retention, and AI systems built to last.
            </p>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.4}>
          <div className="flex flex-col max-md:gap-y-10 max-lg:gap-x-4 md:flex-row justify-between bg-secondary dark:bg-background-8 rounded-[20px] px-3 lg:px-[60px] py-14">
            <div className="space-y-2 text-center">
              <h3 className="text-white flex items-center justify-center">
                <NumberAnimation number={50} speed={2000} interval={200} rooms={2} heightSpaceRatio={2} />+
              </h3>
              <p className="text-white/60">AI solutions delivered.</p>
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-white flex items-center justify-center">
                <NumberAnimation number={98} speed={2000} interval={200} rooms={2} heightSpaceRatio={2} />%
              </h3>
              <p className="text-white/60">client satisfaction rate.</p>
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-white flex items-center justify-center">
                <NumberAnimation number={3} speed={2000} interval={200} rooms={1} heightSpaceRatio={2} />x
              </h3>
              <p className="text-white/60">average ROI for clients.</p>
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-white flex items-center justify-center">
                <NumberAnimation number={10} speed={2000} interval={200} rooms={2} heightSpaceRatio={2} />+
              </h3>
              <p className="text-white/60">years of deep AI expertise.</p>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Counter;
