import RevealAnimation from '../animation/RevealAnimation';

const MissionVision = () => {
  return (
    <section
      className="bg-white py-20 md:py-28 lg:py-36 relative overflow-hidden"
      aria-labelledby="mission-vision-heading"
    >
      {/* ── Decorative Background Pattern ── */}
      <div className="absolute inset-0 z-0 bg-[url('/images/noise.png')] opacity-[0.02]" />
      <div 
        className="absolute inset-0 z-0 opacity-[0.35]"
        style={{ backgroundImage: 'radial-gradient(#dfe4eb 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="main-container relative z-10">
        {/* ── Section Header ── */}
        <div className="mx-auto mb-16 max-w-[800px] space-y-5 text-center md:mb-20">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green-v2">Mission & Vision</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 id="mission-vision-heading" className="text-4xl font-medium tracking-tight text-secondary md:text-5xl lg:text-[52px]">
              The ambition behind every RockScale engagement
            </h2>
          </RevealAnimation>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 xl:gap-10">
          
          {/* Mission Card - Light Premium */}
          <RevealAnimation delay={0.15}>
            <div className="group relative h-full overflow-hidden rounded-[32px] border border-stroke-3 bg-white p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 hover:border-[#7E57FD]/30 hover:shadow-[0_20px_60px_-15px_rgba(126,87,253,0.15)] xl:p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4f5f8] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10">
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#7E57FD]/10 text-[#7E57FD] transition-transform duration-500 group-hover:-translate-y-2 group-hover:bg-[#7E57FD] group-hover:text-white">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-px w-8 bg-[#7E57FD]/40" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7E57FD]">Our Mission</span>
                </div>
                
                <h3 className="mb-6 text-3xl font-medium tracking-tight text-secondary xl:text-[34px] xl:leading-[1.3]">
                  Helping businesses unlock growth through AI, data, and cloud infrastructure.
                </h3>
                <p className="text-lg leading-relaxed text-secondary/70">
                  Every engagement starts with one question: how do we create tangible, lasting business
                  value? We measure success not by technical outputs alone, but by the operational and
                  commercial outcomes our clients achieve.
                </p>
              </div>
            </div>
          </RevealAnimation>

          {/* Vision Card - Dark Premium */}
          <RevealAnimation delay={0.25}>
            <div className="group relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-secondary p-8 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.5)] transition-all duration-500 hover:border-[#25CA22]/40 hover:shadow-[0_20px_60px_-15px_rgba(37,202,34,0.15)] xl:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,87,253,0.15),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(37,202,34,0.15),transparent_40%)] transition-opacity duration-500 group-hover:opacity-80" />
              
              <div className="relative z-10">
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#25CA22]/10 text-[#25CA22] transition-transform duration-500 group-hover:-translate-y-2 group-hover:bg-[#25CA22] group-hover:text-secondary">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-px w-8 bg-[#25CA22]/40" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#25CA22]">Our Vision</span>
                </div>
                
                <h3 className="mb-6 text-3xl font-medium tracking-tight text-white xl:text-[34px] xl:leading-[1.3]">
                  To become one of the world&apos;s most trusted AI consulting and engineering firms.
                </h3>
                <p className="text-lg leading-relaxed text-white/70">
                  We believe the organizations that define the next decade will be the ones that
                  harness intelligent systems at scale. Our role is to be the engineering partner that
                  makes that transformation possible — reliably, securely, and with business precision.
                </p>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
