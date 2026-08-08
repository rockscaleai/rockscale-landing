'use client';
import { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';
import RevealAnimation from '../animation/RevealAnimation';

const locations = [
  { id: 'ng', name: 'Nigeria, Africa', lat: 9.082, lng: 8.6753, flag: '🇳🇬' },
  { id: 'us', name: 'United States, America', lat: 37.0902, lng: -95.7129, flag: '🇺🇸' },
  { id: 'uk', name: 'United Kingdom, Europe', lat: 51.5074, lng: -0.1278, flag: '🇬🇧' },
];

const GlobalPresence = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeLocation, setActiveLocation] = useState(0);

  useEffect(() => {
    let phi = 0;
    
    if (!canvasRef.current) return;

    // Use a fixed high-resolution internal buffer.
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1000,
      height: 1000,
      phi: 0,
      theta: 0.3,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 20000,
      mapBrightness: 4,
      baseColor: [0.8, 0.8, 0.8], // Silver/Grey globe so it doesn't blend perfectly into white
      markerColor: [126 / 255, 87 / 255, 253 / 255],
      glowColor: [0.9, 0.9, 0.9],
      markers: locations.map((loc) => ({ location: [loc.lat, loc.lng], size: 0.08 })),
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
      },
    });

    const interval = setInterval(() => {
      setActiveLocation((prev) => (prev + 1) % locations.length);
    }, 3000);

    return () => {
      globe.destroy();
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="bg-white dark:bg-background-8 py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="space-y-8 relative z-10">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Global Reach</span>
            </RevealAnimation>
            
            <div className="space-y-4">
              <RevealAnimation delay={0.2}>
                <h2 className="text-secondary dark:text-white">Our Global Presence</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-secondary/70 dark:text-white/70 max-w-[500px]">
                  We deliver world-class AI consulting and infrastructure solutions across multiple continents. Wherever you are, our distributed enterprise teams are ready to scale your operations.
                </p>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.4}>
              <div className="space-y-4 mt-8">
                {locations.map((loc, idx) => (
                  <div 
                    key={loc.id} 
                    className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 border ${
                      activeLocation === idx 
                        ? 'bg-[#7E57FD]/10 border-[#7E57FD]/30 scale-[1.02]' 
                        : 'bg-background-2 dark:bg-background-7 border-transparent'
                    }`}
                  >
                    <div className="flex size-12 items-center justify-center rounded-full bg-white dark:bg-background-8 shadow-sm text-2xl">
                      {loc.flag}
                    </div>
                    <div>
                      <h4 className="text-secondary dark:text-white text-lg font-medium">{loc.name}</h4>
                      <p className="text-sm text-secondary/60 dark:text-white/60">
                        {activeLocation === idx ? 'Active Node' : 'Regional Hub'}
                      </p>
                    </div>
                    
                    {/* Pulsing dot indicator for active item */}
                    {activeLocation === idx && (
                      <div className="ml-auto flex size-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7E57FD] opacity-75"></span>
                        <span className="relative inline-flex rounded-full size-3 bg-[#7E57FD]"></span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </RevealAnimation>
          </div>

          {/* Right Side: Rotating Globe */}
          <RevealAnimation delay={0.5} direction="left">
            <div ref={containerRef} className="relative w-full max-w-[600px] mx-auto flex items-center justify-center">
              <canvas
                ref={canvasRef}
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '1 / 1',
                }}
                className="opacity-90 dark:opacity-70 dark:invert transition-opacity duration-1000 ease-in"
              />
              
              {/* Decorative Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#7E57FD]/10 dark:bg-[#7E57FD]/20 blur-[100px] rounded-full -z-10" />
            </div>
          </RevealAnimation>

        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
