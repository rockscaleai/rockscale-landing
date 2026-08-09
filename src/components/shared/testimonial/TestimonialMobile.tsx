import RevealAnimation from '@/components/animation/RevealAnimation';
import Image from 'next/image';
import Link from 'next/link';
import TestimonialStar from '../TestimonialStar';
import { Testimonial } from '@/types';

interface TestimonialMobileProps {
  testimonialsData: Testimonial[];
}

const TestimonialMobile: React.FC<TestimonialMobileProps> = ({ testimonialsData }) => {
  return (
    <div className="block lg:hidden" aria-label="Customer testimonials">
      <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2">
        {testimonialsData.map((testimonial, index) => (
          <RevealAnimation key={testimonial.name} delay={0.2 + index * 0.1}>
            <div
              key={testimonial.name}
              aria-label={`Testimonial from ${testimonial.name}, ${testimonial.title}`}
              className="max-sm:w-full">
              <div className="border-stroke-1 flex w-full flex-col items-start justify-center gap-y-6 rounded-[20px] border bg-white p-6 shadow-[0_6px_8px_0_rgba(4,10,51,0.03)] sm:w-[362px]">
                <div className="flex items-center justify-center gap-x-3">
                  <figure className="size-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar}
                      alt={`Profile photo of ${testimonial.name}`}
                      className="h-full w-full object-cover"
                      width={48}
                      height={48}
                      loading="lazy"
                    />
                  </figure>
                  <div>
                    <h3 className="text-secondary text-tagline-1 font-semibold">{testimonial.name}</h3>
                    <p className="text-tagline-2">{testimonial.title}</p>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <TestimonialStar />
                    <Link
                      href="https://x.com/"
                      target="_blank"
                      rel="noopener"
                      aria-label={`Follow ${testimonial.name} on Twitter`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 25 25" fill="none">
                        <path
                          d="M17.8441 5.15234H20.6042L14.5741 11.9297L21.668 21.1523H16.1136L11.7631 15.5589L6.7852 21.1523H4.02341L10.4731 13.9031L3.66797 5.15234H9.36342L13.2959 10.265L17.8441 5.15234ZM16.8753 19.5277H18.4048L8.53238 6.69162H6.89117L16.8753 19.5277Z"
                          fill="#12161F"
                        />
                      </svg>
                    </Link>
                  </div>
                  <blockquote
                    className="font-inter-tight text-tagline-1 text-secondary line-clamp-3 font-normal"
                    cite="https://x.com/">
                    {testimonial.testimonial}
                  </blockquote>
                </div>
              </div>
            </div>
          </RevealAnimation>
        ))}
      </div>
    </div>
  );
};

TestimonialMobile.displayName = 'TestimonialMobile';
export default TestimonialMobile;
