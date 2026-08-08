'use client';
import feature1 from '@/../public/images/ns-img-390.jpg';
import feature2 from '@/../public/images/ns-img-391.png';
import feature3 from '@/../public/images/ns-img-392.svg';
import Image from 'next/image';
import RevealAnimation from '../../animation/RevealAnimation';

const CustomizedForYourBusiness = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[100px]" aria-labelledby="customized-for-your-business-heading">
      <div className="main-container">
        <div className="mx-auto mb-10 max-w-[750px] space-y-5 text-center md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Customized for Your Business</span>
          </RevealAnimation>
          <div>
            <RevealAnimation delay={0.3}>
              <h2 id="customized-for-your-business-heading" className="mb-3">Training that speaks your language.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="text-secondary/60 mx-auto max-w-[600px]">
              We adapt our training to your specific business context, using your data, your tools, and your business challenges to make the learning relevant and immediately applicable.
              </p>
            </RevealAnimation>
          </div>
        </div>
        {/* feature Items */}
        <div className="mb-10 grid grid-cols-12 space-y-8 md:gap-8 md:space-y-0 xl:mb-18">
          <RevealAnimation delay={0.5} className="col-span-12 md:col-span-6 lg:col-span-8">
            <div className="bg-background-3 space-y-6 rounded-[20px] p-8">
              <div className="space-y-2">
                <h5 className="max-sm:text-heading-6">Custom Data & Use Cases</h5>
                <p className="max-w-[450px]">
                We work with you to incorporate your proprietary data and real-world use cases into our training exercises.
                </p>
              </div>
              <figure className="w-full">
                <Image
                  src={feature1}
                  alt="Custom data and use cases"
                  className="w-full rounded-2xl object-cover"
                />
              </figure>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6} className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="bg-background-3 space-y-6 rounded-[20px] p-8">
              <div className="space-y-2">
                <h5 className="max-sm:text-heading-6">Your Tools, Your Workflows</h5>
                <p className="max-w-[280px]">Our instructors tailor the curriculum to the software, platforms, and workflows your teams use every day.</p>
              </div>
              <figure className="w-full h-[220px] overflow-hidden rounded-2xl">
                <Image
                  src={feature2}
                  alt="Tools and workflows"
                  className="h-full w-full object-cover"
                />
              </figure>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.7} className="col-span-12">
            <div className="bg-background-3 space-y-6 rounded-[20px] p-8">
              <div className="space-y-2">
                <h5 className="max-sm:text-heading-6">Targeted to Your Business Goals</h5>
                <p className="max-w-[450px]">We align our training objectives with your strategic priorities, ensuring the skills we teach will directly support your business goals.</p>
              </div>
              <figure className="w-full">
                <Image
                  src={feature3}
                  alt="Targeted to your business goals"
                  className="w-full rounded-2xl object-contain h-64"
                />
              </figure>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default CustomizedForYourBusiness;
