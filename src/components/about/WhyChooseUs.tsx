'use client';
import featureImgTwo from '@public/images/ns-img-81.png';
import featureImgTwoDark from '@public/images/ns-img-dark-55.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const reasons = [
  { id: 1, icon: 'ns-shape-21', label: 'Business-first mindset' },
  { id: 2, icon: 'ns-shape-10', label: 'Experienced engineering team' },
  { id: 3, icon: 'ns-shape-19', label: 'Scalable cloud architecture' },
  { id: 4, icon: 'ns-shape-8', label: 'Modern AI technology stack' },
  { id: 5, icon: 'ns-shape-16', label: 'Enterprise-grade security' },
  { id: 6, icon: 'ns-shape-23', label: 'Long-term strategic partnerships' },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[100px] dark:bg-[#0d0d1a]" aria-labelledby="why-clients-choose-heading">
      <div className="main-container">
        <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-16 xl:gap-[80px]">
          {/* Left copy */}
          <div className="col-span-12 lg:col-span-6">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-5">Why Clients Choose Us</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="why-clients-choose-heading" className="mb-6">
                Built for mission-critical enterprise systems
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mb-10 text-secondary/70 dark:text-accent/70">
                Organizations trust us with their most sensitive data and core operations because
                we prioritize security, scalability, and measurable outcomes over hype. We are
                engineers, not just consultants.
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
                  src={featureImgTwo}
                  alt="Enterprise AI infrastructure"
                  className="h-full w-full object-cover dark:hidden"
                />
                <Image
                  src={featureImgTwoDark}
                  alt="Enterprise AI infrastructure"
                  className="hidden h-full w-full object-cover dark:block"
                />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

WhyChooseUs.displayName = 'WhyChooseUs';
export default WhyChooseUs;
