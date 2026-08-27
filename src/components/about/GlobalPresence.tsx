'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import globeImg from '@public/images/rockscale-globe.jpg';

const locations = [
  { id: 'ng', name: 'Nigeria, Africa', flag: '🇳🇬' },
  { id: 'us', name: 'United States, America', flag: '🇺🇸' },
  { id: 'uk', name: 'United Kingdom, Europe', flag: '🇬🇧' },
];

const GlobalPresence = () => {
  const [activeLocation, setActiveLocation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLocation((prev) => (prev + 1) % locations.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background-3 py-20 md:py-28 lg:py-32">
      <div className="absolute inset-0 z-0 bg-[url('/images/noise.png')] opacity-[0.03]" />
      
      <div className="main-container relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          
          {/* Left Side: Content */}
          <div className="space-y-10">
            <div>
              <RevealAnimation delay={0.1}>
                <div className="mb-6">
                  <span className="badge badge-green-v2">Global Reach</span>
                </div>
              </RevealAnimation>
              
              <RevealAnimation delay={0.2}>
                <h2 className="mb-6 text-4xl font-medium tracking-tight text-secondary md:text-5xl lg:text-[52px] lg:leading-[1.1]">
                  Our Global Presence
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-lg leading-relaxed text-secondary/70">
                  We deliver world-class AI consulting and infrastructure solutions across multiple continents. Wherever you are, our distributed enterprise teams are ready to scale your operations.
                </p>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.4}>
              <div className="space-y-4">
                {locations.map((loc, idx) => (
                  <div 
                    key={loc.id} 
                    className={`group relative flex items-center gap-5 overflow-hidden rounded-[24px] border p-5 transition-all duration-500 ${
                      activeLocation === idx 
                        ? 'border-[#25CA22]/30 bg-white shadow-[0_15px_40px_-10px_rgba(37,202,34,0.15)]' 
                        : 'border-stroke-3 bg-white/50 hover:bg-white hover:shadow-sm'
                    }`}
                  >
                    {/* Background subtle pulse for active */}
                    {activeLocation === idx && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#25CA22]/5 to-transparent opacity-50" />
                    )}

                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-[16px] bg-[#f4f5f8] text-2xl shadow-inner transition-transform duration-500 group-hover:scale-105">
                      {loc.flag}
                    </div>
                    
                    <div className="relative z-10">
                      <h4 className="text-xl font-semibold tracking-tight text-secondary">{loc.name}</h4>
                      <p className="mt-0.5 text-sm font-medium text-secondary/60">
                        {activeLocation === idx ? (
                          <span className="text-[#25CA22] font-semibold tracking-wide uppercase text-[11px]">Active Data Node</span>
                        ) : (
                          <span className="uppercase tracking-wide text-[11px]">Regional Hub</span>
                        )}
                      </p>
                    </div>
                    
                    {/* Pulsing dot indicator for active item */}
                    {activeLocation === idx && (
                      <div className="relative z-10 ml-auto flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25CA22] opacity-75" />
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-[#25CA22]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </RevealAnimation>
          </div>

          {/* Right Side: Static Globe Image */}
          <div className="order-first lg:order-last">
            <RevealAnimation delay={0.5} direction="left" offset={60}>
              <div className="relative mx-auto w-full max-w-[500px]">
                <figure className="relative overflow-hidden rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
                  <div className="absolute inset-0 z-10 rounded-[32px] border border-black/5" />
                  <Image
                    src={globeImg}
                    alt="Global Enterprise Network Architecture"
                    className="w-full h-auto object-cover transition-transform duration-1000 hover:scale-105"
                    quality={95}
                    priority
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background-3/80 via-transparent to-transparent mix-blend-multiply" />
                </figure>
                
                {/* Decorative Background Glows */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#25CA22]/15 blur-[100px]" />
                <div className="pointer-events-none absolute right-0 top-0 -z-10 h-64 w-64 rounded-full bg-[#7E57FD]/15 blur-[80px]" />
              </div>
            </RevealAnimation>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
