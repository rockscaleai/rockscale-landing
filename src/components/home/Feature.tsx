'use client';
import feature1 from '@public/images/ns-img-175.png';
import feature2 from '@public/images/ns-img-176.png';
import feature3 from '@public/images/ns-img-177.png';
import feature4 from '@public/images/ns-img-178.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const Feature = () => {
  return (
    <section className="bg-white pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[90px] lg:pb-[90px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mx-auto mb-10 max-w-[750px] space-y-5 text-center md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Our Vision</span>
          </RevealAnimation>
          <div>
            <RevealAnimation delay={0.3}>
              <h2 className="mb-3">Vision & The Problems We Solve.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="text-secondary/60 mx-auto max-w-[600px]">
                To help startups, SMEs, and midsize companies scale their services, operations, and product offerings using AI, data, and cloud infrastructure.
              </p>
            </RevealAnimation>
          </div>
        </div>
        {/* feature Items */}
        <div className="mb-10 grid grid-cols-12 space-y-8 md:gap-8 md:space-y-0 xl:mb-18">
          <RevealAnimation delay={0.5}>
            <div className="bg-background-3 col-span-12 space-y-6 rounded-[20px] p-8 md:col-span-6 lg:col-span-8">
              <div className="space-y-2">
                <h5 className="max-sm:text-heading-6">Expensive Frontier Models.</h5>
                <p className="max-w-[450px]">
                  Access to advanced AI models is often too expensive, with significant payment bottlenecks for emerging markets.
                </p>
              </div>
              <figure className="w-full">
                <Image
                  src={feature1}
                  alt="Expensive frontier AI models problem"
                  className="w-full rounded-2xl object-cover"
                />
              </figure>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="bg-background-3 col-span-12 space-y-6 rounded-[20px] p-8 md:col-span-6 lg:col-span-4">
              <div className="space-y-2">
                <h5 className="max-sm:text-heading-6">Disconnected Systems.</h5>
                <p className="max-w-[220px]">Operational systems are disconnected and work in isolation, limiting efficiency.</p>
              </div>
              <figure className="w-full">
                <Image
                  src={feature2}
                  alt="Disconnected operational systems problem"
                  className="w-full rounded-2xl object-cover"
                />
              </figure>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.7}>
            <div className="bg-background-3 col-span-12 space-y-6 rounded-[20px] p-8 md:col-span-6 lg:col-span-4">
              <div className="space-y-2">
                <h5 className="max-sm:text-heading-6">Manual Workflows.</h5>
                <p className="">Reliance on manual, repetitive tasks slows down growth and stifles innovation.</p>
              </div>
              <figure className="w-full">
                <Image
                  src={feature3}
                  alt="Manual workflow problem"
                  className="w-full rounded-2xl object-cover"
                />
              </figure>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.8}>
            <div className="bg-background-3 col-span-12 space-y-6 rounded-[20px] p-8 md:col-span-6 lg:col-span-8">
              <div className="max-w-[285px] space-y-2">
                <h5 className="max-sm:text-heading-6">Wasteful Resource Utilization.</h5>
                <p className="max-w-[311px]">
                  A lack of integrated intelligence leads to the wasteful utilization of valuable resources.
                </p>
              </div>
              <figure className="w-full">
                <Image
                  src={feature4}
                  alt="Wasteful resource utilization problem"
                  className="h-full w-full rounded-2xl object-cover"
                />
              </figure>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Feature;
