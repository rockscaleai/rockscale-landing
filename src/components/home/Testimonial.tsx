'use client';
import reviews from '@/data/json/testimonials/testimonials.json';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

const Testimonial = () => {
  return (
    <section className="relative overflow-hidden bg-[#061225] py-24 md:py-32 lg:py-40">
      {/* ── Background Glows ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/2 left-0 h-[600px] w-[600px] -translate-x-1/4 -translate-y-1/2 rounded-full bg-[#7E57FD]/10 blur-[150px]" />
        <div className="absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/4 rounded-full bg-[#25CA22]/10 blur-[120px]" />
      </div>

      <div className="main-container relative z-10">
        {/* Header */}
        <div className="mx-auto mb-20 flex max-w-[800px] flex-col items-center text-center md:mb-24">
          <RevealAnimation delay={0.1}>
            <div className="mb-6">
              <span className="badge badge-green-v2">Testimonials</span>
            </div>
          </RevealAnimation>
          
          <RevealAnimation delay={0.2}>
            <h2 className="mb-6 text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-[56px] lg:leading-[1.1]">
              Trusted by businesses building with AI.
            </h2>
          </RevealAnimation>
          
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[650px] text-lg leading-relaxed text-white/70">
              From fast-moving startups to regulated enterprises, our clients trust RockScale to architect and accelerate their AI initiatives. Here is what they have to say.
            </p>
          </RevealAnimation>
        </div>
      </div>

      {/* Marquee Carousel */}
      <RevealAnimation delay={0.4}>
        <div className="relative">
          {/* Gradient fade on edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-40 h-full w-[10%] bg-gradient-to-r from-[#061225] to-transparent md:w-[15%]" />
          <div className="pointer-events-none absolute right-0 top-0 z-40 h-full w-[10%] bg-gradient-to-l from-[#061225] to-transparent md:w-[15%]" />

          <Marquee autoFill speed={40} pauseOnHover className="overflow-visible">
            <div className="flex items-stretch gap-6 px-3">
              {reviews.map((review, index) => {
                const isGreen = index % 2 === 0;
                const glowColor = isGreen ? 'hover:shadow-[0_20px_40px_rgba(37,202,34,0.15)]' : 'hover:shadow-[0_20px_40px_rgba(126,87,253,0.15)]';
                const borderColor = isGreen ? 'hover:border-[#25CA22]/30' : 'hover:border-[#7E57FD]/30';
                const quoteColor = isGreen ? 'text-[#25CA22]/40' : 'text-[#7E57FD]/40';

                return (
                  <div key={review.id} className={`group relative flex h-full w-[350px] flex-col overflow-hidden rounded-[24px] border border-white/5 bg-white/[0.02] p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] md:w-[400px] ${borderColor} ${glowColor}`}>
                    
                    {/* Large Quote Icon Background */}
                    <div className={`absolute top-6 right-6 ${quoteColor} opacity-50 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-80`}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.714 4.135-9.109 8.983-9.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v9h-9.983zm-14.017 21v-7.391c0-5.714 4.135-9.109 8.983-9.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v9h-9.983z" />
                      </svg>
                    </div>

                    {/* Review Text */}
                    <div className="relative z-10 flex-grow pt-4">
                      <p className="text-[17px] leading-relaxed text-white/80">
                        &quot;{review.quote}&quot;
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="relative z-10 mt-10 flex items-center gap-4 border-t border-white/10 pt-6 transition-colors duration-500 group-hover:border-white/20">
                      <figure className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-white/10 transition-all duration-500 group-hover:ring-white/30">
                        <Image
                          src={review.avatar}
                          fill
                          sizes="56px"
                          alt={review.name}
                          className="object-cover"
                        />
                      </figure>
                      <div>
                        <p className="text-[17px] font-semibold text-white">
                          {review.name}
                        </p>
                        <p className="text-[14px] text-white/50">
                          {review.position}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Marquee>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Testimonial;
