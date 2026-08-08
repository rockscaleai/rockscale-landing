'use client';
import featureImg from '@/../public/images/ns-img-374.jpg';
import Image from 'next/image';
import RevealAnimation from '../../animation/RevealAnimation';

const learningMethods = [
  { id: 1, icon: 'ns-computer', label: 'Interactive workshops' },
  { id: 2, icon: 'ns-code', label: 'Live coding & demos' },
  { id: 3, icon: 'ns-collaboration', label: 'Peer collaboration' },
  { id: 4, icon: 'ns-pen', label: 'Hands-on assignments' },
  { id: 5, icon: 'ns-rocket', label: 'Real-world projects' },
  { id: 6, icon: 'ns-bulb', label: 'Instructor feedback' },
];

const HandsOnLearning = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[100px] dark:bg-[#0d0d1a]" aria-labelledby="hands-on-learning-heading">
      <div className="main-container">
        <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-16 xl:gap-[80px]">
          {/* Left copy */}
          <div className="col-span-12 lg:col-span-6">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-5">Hands-On Learning</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="hands-on-learning-heading" className="mb-6">
              Learn by doing, not by watching.
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mb-10 text-secondary/70 dark:text-accent/70">
              Our training emphasizes practical, hands-on learning. We believe the best way to learn AI is to build with it, so our programs are packed with interactive exercises, real-world projects, and collaborative workshops that ensure your team can apply their new skills immediately.
              </p>
            </RevealAnimation>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {learningMethods.map((item, idx) => (
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
                  alt="Hands-on AI training"
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

HandsOnLearning.displayName = 'HandsOnLearning';
export default HandsOnLearning;
