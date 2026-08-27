'use client';
import missionCriticalImg from '@public/images/rockscale-mission-critical.jpg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const reasons = [
  {
    id: 1,
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    label: 'Business-first mindset',
  },
  {
    id: 2,
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    label: 'Experienced engineering team',
  },
  {
    id: 3,
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    label: 'Scalable cloud architecture',
  },
  {
    id: 4,
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: 'Enterprise-grade security',
  },
  {
    id: 5,
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    label: 'Modern AI technology stack',
  },
  {
    id: 6,
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    label: 'Long-term strategic partnerships',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28 lg:py-32" aria-labelledby="why-clients-choose-heading">
      <div className="main-container relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          
          {/* Left copy */}
          <div className="order-2 lg:order-1">
            <RevealAnimation delay={0.1}>
              <div className="mb-6">
                <span className="badge badge-green-v2">Why Clients Choose Us</span>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="why-clients-choose-heading" className="mb-8 text-4xl font-medium tracking-tight text-secondary md:text-5xl lg:text-[52px] lg:leading-[1.15]">
                Built for mission-critical enterprise systems
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mb-12 text-lg leading-relaxed text-secondary/70">
                Organizations trust us with their most sensitive data and core operations because
                we prioritize security, scalability, and measurable outcomes over hype. We are
                engineers, not just consultants.
              </p>
            </RevealAnimation>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4">
              {reasons.map((item, idx) => (
                <RevealAnimation key={item.id} delay={0.4 + (idx % 2) * 0.1}>
                  <li className="group flex items-center gap-4 rounded-xl border border-transparent p-2 transition-all hover:border-stroke-3 hover:bg-[#f4f5f8]">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#25CA22]/10 text-[#25CA22] transition-colors group-hover:bg-[#25CA22] group-hover:text-white">
                      {item.icon}
                    </div>
                    <strong className="text-[15px] font-semibold tracking-wide text-secondary/90">
                      {item.label}
                    </strong>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
          </div>
          
          {/* Right visual */}
          <div className="order-1 lg:order-2">
            <RevealAnimation delay={0.4} direction="up" offset={60}>
              <div className="relative mx-auto w-full max-w-[540px] lg:mx-0 lg:max-w-none">
                <figure className="relative overflow-hidden rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]">
                  <div className="absolute inset-0 z-10 rounded-[32px] border border-black/5" />
                  <Image
                    src={missionCriticalImg}
                    alt="Secure, mission-critical enterprise AI dashboard"
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
                </figure>
                
                {/* Decorative Glow Elements */}
                <div className="pointer-events-none absolute -bottom-12 -left-12 -z-10 h-64 w-64 rounded-full bg-[#25CA22]/10 blur-[80px]" />
                <div className="pointer-events-none absolute -right-12 -top-12 -z-10 h-64 w-64 rounded-full bg-[#7E57FD]/10 blur-[80px]" />
              </div>
            </RevealAnimation>
          </div>
          
        </div>
      </div>
    </section>
  );
};

WhyChooseUs.displayName = 'WhyChooseUs';
export default WhyChooseUs;
