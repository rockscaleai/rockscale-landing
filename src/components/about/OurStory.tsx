'use client';
import featureImgTwo from '@public/images/ns-img-81.png';
import featureImgTwoDark from '@public/images/ns-img-dark-55.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const OurStory = () => {
  return (
    <section
      className="overflow-hidden bg-white py-16 md:py-20 lg:py-[100px] dark:bg-[#0d0d1a]"
      aria-labelledby="our-story-heading">
      <div className="main-container">
        <div className="grid grid-cols-12 items-center gap-y-14 lg:gap-16 xl:gap-[100px]">
          {/* Left visual */}
          <div className="col-span-12 lg:col-span-6">
            <RevealAnimation delay={0.2} direction="up" offset={80}>
              <figure className="mx-auto w-full max-w-[500px] overflow-hidden rounded-[20px] lg:mx-0 lg:max-w-[600px]">
                <Image
                  src={featureImgTwo}
                  alt="RockScale engineering team working on AI infrastructure"
                  className="h-full w-full object-cover dark:hidden"
                />
                <Image
                  src={featureImgTwoDark}
                  alt="RockScale engineering team working on AI infrastructure"
                  className="hidden h-full w-full object-cover dark:block"
                />
              </figure>
            </RevealAnimation>
          </div>

          {/* Right copy */}
          <div className="col-span-12 lg:col-span-6">
            <div className="mx-auto max-w-[520px] space-y-6 lg:mx-0">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green">Our Story</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 id="our-story-heading">
                  Why RockScale exists
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p>
                  Businesses today have more data than ever before. Yet most organizations still
                  operate with fragmented systems, manual processes, and underutilized intelligence.
                  AI adoption is accelerating — but moving from experimentation to real, production-grade
                  business value remains the hard part.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p>
                  RockScale was built to bridge that gap. We bring together AI engineering, data
                  infrastructure, and cloud expertise under one roof — giving organizations the
                  technical depth and strategic clarity to turn AI ambition into measurable results.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <p>
                  We don&apos;t simply build AI. We help businesses transform how they operate using
                  intelligent technology.
                </p>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

OurStory.displayName = 'OurStory';
export default OurStory;
