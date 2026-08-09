'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import TestimonialLarge from '@/components/shared/testimonial/TestimonialLarge';
import TestimonialMobile from '@/components/shared/testimonial/TestimonialMobile';
import testimonials from '@/data/json/testimonials/executive-ai-training-testimonials.json';

const ExecTestimonials = () => {
  return (
    <section className="py-12 md:py-16 lg:py-22 xl:py-28" aria-labelledby="testimonials-heading">
      <div className="main-container">
        <div className="space-y-10 md:space-y-12 lg:space-y-14 xl:space-y-19">
          <RevealAnimation delay={0.1}>
            <h2 id="testimonials-heading" className="text-center">
              What Our Executive Clients Are Saying
            </h2>
          </RevealAnimation>
          {/* @ts-ignore */}
          <TestimonialLarge testimonialsData={testimonials} />
          {/* @ts-ignore */}
          <TestimonialMobile testimonialsData={testimonials} />
        </div>
      </div>
    </section>
  );
};
ExecTestimonials.displayName = 'ExecTestimonials';
export default ExecTestimonials;
