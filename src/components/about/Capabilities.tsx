'use client';
import RevealAnimation from '../animation/RevealAnimation';

const capabilities = [
  'AI Engineering',
  'Generative AI',
  'AI Agents',
  'Machine Learning',
  'Data Engineering',
  'Cloud Architecture',
  'Business Intelligence',
  'Automation',
  'Enterprise Integration',
  'Analytics',
  'MLOps',
  'AI Strategy',
];

const Capabilities = () => {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 md:py-28 lg:py-32" aria-labelledby="capabilities-heading">
      
      {/* ── Background Effects ── */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7E57FD]/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[600px] translate-x-1/4 translate-y-1/4 rounded-full bg-[#25CA22]/10 blur-[100px]" />

      <div className="main-container relative z-10">
        <div className="mx-auto mb-16 max-w-[800px] space-y-5 text-center md:mb-20">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green-v2">Our Capabilities</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 id="capabilities-heading" className="text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-[52px]">
              Deep technical expertise
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[620px] text-lg leading-relaxed text-white/70">
              We bring specialized engineering depth to every layer of the modern enterprise AI stack, from infrastructure to intelligent agents.
            </p>
          </RevealAnimation>
        </div>

        <div className="mx-auto max-w-[1100px]">
          <div className="flex flex-wrap justify-center gap-4 md:gap-5">
            {capabilities.map((cap, index) => (
              <RevealAnimation key={cap} delay={0.1 + (index % 6) * 0.05}>
                <div className="group relative flex cursor-default items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 backdrop-blur-md transition-all duration-400 hover:-translate-y-1 hover:border-[#25CA22]/50 hover:bg-white/10 hover:shadow-[0_10px_30px_-10px_rgba(37,202,34,0.25)] md:px-8 md:py-4">
                  {/* Glowing dot */}
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7E57FD] opacity-75 group-hover:bg-[#25CA22]" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7E57FD] group-hover:bg-[#25CA22]" />
                  </span>
                  
                  <span className="text-sm font-medium tracking-wide text-white/90 transition-colors duration-300 group-hover:text-white md:text-base">
                    {cap}
                  </span>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
      
      {/* ── Wave Transition to next section (WhyChooseUs) ── */}
      <div className="absolute bottom-0 left-0 w-full translate-y-px">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-12 w-full md:h-20" fill="none">
          <path d="M0 80 L0 40 Q360 0 720 40 Q1080 80 1440 40 L1440 80 Z" className="fill-white dark:fill-background-7" />
        </svg>
      </div>
    </section>
  );
};

Capabilities.displayName = 'Capabilities';
export default Capabilities;
