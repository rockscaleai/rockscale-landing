'use client';
import teamImg from '@public/images/rockscale-ai-team-new.jpg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const storyHighlights = [
  'AI initiatives tied to real business priorities',
  'Engineering, data, and cloud expertise in one team',
  'Production-ready delivery with measurable business outcomes',
];

const OurStory = () => {
  return (
    <section
      className="relative overflow-hidden bg-background-3 py-16 md:py-24 lg:py-32"
      aria-labelledby="our-story-heading"
    >
      <div className="main-container relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          
          {/* Image Side */}
          <div className="order-2 lg:order-1">
            <RevealAnimation delay={0.2} direction="right" offset={60}>
              <div className="relative mx-auto max-w-[540px] lg:mx-0 lg:max-w-none">
                {/* Premium Image Container */}
                <figure className="relative overflow-hidden rounded-[24px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                  {/* Subtle inner border */}
                  <div className="absolute inset-0 z-10 rounded-[24px] border border-black/5" />
                  <Image
                    src={teamImg}
                    alt="Abstract visualization of global AI consulting and enterprise architecture"
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                    quality={90}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/10 to-transparent" />
                  
                  {/* Embedded Callout */}
                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-lg">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#25CA22]">
                        Why we exist
                      </p>
                      <p className="mt-2 text-xl font-medium text-white md:text-2xl">
                        Turn AI ambition into operational reality.
                      </p>
                    </div>
                  </div>
                </figure>

                {/* Decorative Glow Elements */}
                <div className="pointer-events-none absolute -bottom-10 -left-10 -z-10 h-64 w-64 rounded-full bg-[#25CA22]/15 blur-[80px]" />
                <div className="pointer-events-none absolute -top-10 -right-10 -z-10 h-64 w-64 rounded-full bg-[#7E57FD]/15 blur-[80px]" />
              </div>
            </RevealAnimation>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <div className="mx-auto max-w-[580px] lg:mx-0">
              <RevealAnimation delay={0.1}>
                <div className="mb-6">
                  <span className="badge badge-green-v2">Our Story</span>
                </div>
              </RevealAnimation>
              
              <RevealAnimation delay={0.2}>
                <h2 id="our-story-heading" className="mb-8 text-4xl font-medium tracking-tight text-secondary md:text-5xl lg:text-[56px] lg:leading-[1.1]">
                  Why RockScale exists
                </h2>
              </RevealAnimation>
              
              <RevealAnimation delay={0.3}>
                <p className="mb-6 text-lg leading-relaxed text-secondary/70">
                  Businesses today have more data than ever before, but most still operate with fragmented systems, manual processes, and underused intelligence. While AI adoption is accelerating, moving from experimentation to dependable business value remains the hard part.
                </p>
              </RevealAnimation>
              
              <RevealAnimation delay={0.4}>
                <p className="mb-10 text-lg leading-relaxed text-secondary/70">
                  RockScale was built to bridge that gap. We combine <strong className="font-semibold text-secondary">AI engineering, data infrastructure, and cloud expertise</strong> under one roof — giving organizations the technical depth and strategic clarity to move faster and build with confidence.
                </p>
              </RevealAnimation>

              <RevealAnimation delay={0.5}>
                <div className="space-y-4">
                  {storyHighlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="group flex items-center gap-4 rounded-2xl border border-stroke-3 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#25CA22]/30 hover:shadow-md"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#25CA22]/10 text-[#25CA22] transition-colors duration-300 group-hover:bg-[#25CA22] group-hover:text-white">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-base font-medium text-secondary">{item}</p>
                    </div>
                  ))}
                </div>
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
