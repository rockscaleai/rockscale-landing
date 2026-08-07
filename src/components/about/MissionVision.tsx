import RevealAnimation from '../animation/RevealAnimation';

const MissionVision = () => {
  return (
    <section
      className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]"
      aria-labelledby="mission-vision-heading">
      <div className="main-container">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Mission */}
          <div className="col-span-12 md:col-span-6">
            <RevealAnimation delay={0.1}>
              <div className="bg-background-1 dark:bg-background-6 h-full rounded-[20px] p-8 xl:p-12">
                <div className="mb-6 inline-flex size-14 items-center justify-center rounded-full bg-white dark:bg-black">
                  <span className="ns-shape-8 text-secondary dark:text-accent text-[40px]" />
                </div>
                <span className="badge badge-green mb-5 block w-fit">Our Mission</span>
                <h2 id="mission-vision-heading" className="mb-4 text-heading-3">
                  Helping businesses unlock growth through AI, data and cloud infrastructure.
                </h2>
                <p>
                  Every engagement we take on is driven by one question: how do we create tangible,
                  lasting business value? We measure success not by outputs, but by the outcomes our
                  clients achieve.
                </p>
              </div>
            </RevealAnimation>
          </div>

          {/* Vision */}
          <div className="col-span-12 md:col-span-6">
            <RevealAnimation delay={0.2}>
              <div className="bg-secondary h-full rounded-[20px] p-8 xl:p-12">
                <div className="mb-6 inline-flex size-14 items-center justify-center rounded-full bg-white/10">
                  <span className="ns-shape-41 text-white text-[40px]" />
                </div>
                <span className="badge badge-blur text-ns-yellow mb-5 block w-fit">Our Vision</span>
                <h2 className="mb-4 text-heading-3 text-white">
                  To become one of the world&apos;s most trusted AI consulting and engineering firms.
                </h2>
                <p className="text-white/60">
                  We believe the organizations that will define the next decade are those that harness
                  intelligent systems at scale. Our ambition is to be the engineering partner that makes
                  that transformation possible — reliably, securely, and with real business precision.
                </p>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

MissionVision.displayName = 'MissionVision';
export default MissionVision;
