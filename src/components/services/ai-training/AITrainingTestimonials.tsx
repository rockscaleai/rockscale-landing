'use client';
import testimonials from '@/data/json/testimonials/ai-training-testimonials.json';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../../animation/RevealAnimation';

const AITrainingTestimonials = () => {
  return (
    <section className="pt-[50px] md:pt-[75px] lg:pt-[120px]">
      <div className="main-container">
        <div className="mb-[70px]">
          {/* heading  */}
          <div className="mx-auto max-w-[804px] space-y-5 text-center md:w-full">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan"> Testimonials </span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>Don't just take our word for it.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mx-auto max-w-[600px]">
                Hear from teams who have transformed their capabilities with RockScale's AI training programs.
                </p>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>

      {/* review cards  */}
      <div className="pb-[50px] md:pb-[75px] lg:pb-[100px]">
        <RevealAnimation delay={0.7} instant>
          <div className="space-y-8">
            <div className="relative">
              <div className="from-background-3 dark:from-background-7 absolute top-0 left-0 z-40 h-full w-[15%] bg-gradient-to-r to-transparent md:w-[20%]"></div>
              <div className="from-background-3 dark:from-background-7 absolute top-0 right-0 z-40 h-full w-[15%] bg-gradient-to-l to-transparent md:w-[20%]"></div>

              <Marquee autoFill speed={30} pauseOnHover>
                <div className="flex items-center gap-8 overflow-hidden">
                  {testimonials.map((testimonial, index) => (
                    <RevealAnimation key={testimonial.id} delay={0.4 + index * 0.1}>
                      <div className="bg-background-2 dark:bg-background-6 w-[358px] rounded-[20px] p-8 first:ml-8">
                        <h3 className="text-tagline-1 line-clamp-3 text-wrap">{testimonial.quote}</h3>
                        <div className="border-stroke-4 dark:border-stroke-7 my-8 border-b"></div>
                        {/* avatar  */}
                        <div className="flex items-center gap-3">
                          <figure className="size-12 overflow-hidden rounded-full bg-(image:--color-gradient-6)">
                            <Image
                              width={48}
                              height={48}
                              src={testimonial.avatar}
                              alt={`${testimonial.name} avatar`}
                              className="size-full object-cover"
                            />
                          </figure>
                          <div>
                            <p className="text-secondary dark:text-accent">{testimonial.name}</p>
                            <p className="text-tagline-2">{testimonial.position}</p>
                          </div>
                        </div>
                      </div>
                    </RevealAnimation>
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default AITrainingTestimonials;
