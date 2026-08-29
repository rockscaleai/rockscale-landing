const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src/components/about/MissionVision.tsx');

const content = `'use client';
import RevealAnimation from '../animation/RevealAnimation';

const MissionVision = () => {
  return (
    <section
      className="relative overflow-hidden py-32 md:py-40 lg:py-48 my-16 rounded-[40px] mx-4 md:mx-10"
      aria-labelledby="mission-vision-heading"
    >
      {/* Background Image with Fixed/Parallax attachment and Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/images/rockscale-ai-team-new.jpg)' }}
      >
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-[#061225]/85" />
      </div>

      <div className="main-container relative z-10">
        {/* ── Section Header ── */}
        <div className="mx-auto mb-16 max-w-[900px] space-y-5 text-center md:mb-24">
          <RevealAnimation delay={0.1}>
            <span className="text-[11px] font-bold tracking-widest text-white/50 uppercase">Global Reach</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 id="mission-vision-heading" className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              The ambition behind every RockScale engagement
            </h2>
          </RevealAnimation>
        </div>

        {/* ── Cards Grid (Glassmorphism) ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 xl:gap-10">
          
          {/* Mission Card */}
          <RevealAnimation delay={0.3}>
            <div className="group relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:bg-white/10 hover:border-white/20 xl:p-12">
              <div className="relative z-10">
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-px w-8 bg-[#7E57FD]/80" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7E57FD]">Our Mission</span>
                </div>
                
                <h3 className="mb-6 text-2xl font-bold tracking-tight text-white xl:text-3xl xl:leading-[1.4]">
                  Helping businesses unlock growth through AI, data, and cloud infrastructure.
                </h3>
                <p className="text-lg leading-relaxed text-white/70">
                  Every engagement starts with one question: how do we create tangible, lasting business
                  value? We measure success not by technical outputs alone, but by the operational and
                  commercial outcomes our clients achieve.
                </p>
              </div>
            </div>
          </RevealAnimation>

          {/* Vision Card */}
          <RevealAnimation delay={0.4}>
            <div className="group relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:bg-white/10 hover:border-white/20 xl:p-12">
              <div className="relative z-10">
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-px w-8 bg-[#25CA22]/80" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#25CA22]">Our Vision</span>
                </div>
                
                <h3 className="mb-6 text-2xl font-bold tracking-tight text-white xl:text-3xl xl:leading-[1.4]">
                  To become one of the world's most trusted AI consulting and engineering firms.
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
`;

fs.writeFileSync(targetFile, content);
console.log('MissionVision updated.');
