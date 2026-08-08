'use client';
import featureImg from '@/../public/images/ns-img-401.jpg';
import Image from 'next/image';
import RevealAnimation from '../../animation/RevealAnimation';

const reasons = [
  { id: 1, icon: 'ns-rocket', label: 'Real-World Project Experience' },
  { id: 2, icon: 'ns-bulb', label: 'Taught by Industry Experts' },
  { id: 3, icon: 'ns-code', label: 'Cutting-Edge Curriculum' },
  { id: 4, icon: 'ns-chart-pie', label: 'Focus on Business ROI' },
  { id: 5, icon: 'ns-team', label: 'Dedicated Team Support' },
  { id: 6, icon: 'ns-customize', label: 'Fully Customizable Programs' },
];

const WhyRockScale = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[100px] dark:bg-[#0d0d1a]" aria-labelledby="why-rockscale-heading">
      <div className="main-container">
        <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-16 xl:gap-[80px]">
          {/* Left copy */}
          <div className="col-span-12 lg:col-span-6">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-5">Why RockScale for AI Training</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="why-rockscale-heading" className="mb-6">
              Your Partner in Building a Future-Ready Workforce
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mb-10 text-secondary/70 dark:text-accent/70">
              We don't just teach AI, we partner with you to build a culture of innovation and continuous learning. Our programs are designed to empower your teams with the skills and confidence they need to drive AI adoption and create lasting business value.
              </p>
            </RevealAnimation>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((item, idx) => (
                <RevealAnimation key={item.id} delay={0.4 + idx * 0.1}>
                  <li className="flex items-center gap-3">
                    <span className={`${item.icon} text-secondary dark:text-accent text-[32px]`} />
                    <strong className="text-tagline-1 font-medium text-secondary dark:text-accent">
                      {item.label}
                    </strong>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
          </div>
          
          {/* Right visual */}
          <div className="col-span-12 lg:col-span-6">
            <RevealAnimation delay={0.4} direction="up" offset={80}>
              <figure className="mx-auto w-full max-w-[500px] overflow-hidden rounded-[20px] lg:mx-0 lg:max-w-[600px]">
                <Image
                  src={featureImg}
                  alt="Why Rockscale for AI Training"
                  className="h-full w-full object-cover"
                />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

WhyRockScale.displayName = 'WhyRockScale';
export default WhyRockScale;
