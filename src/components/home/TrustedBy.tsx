'use client';
import { cn } from '@/utils/cn';
import AsanaLogo from '@public/images/icons/asana-metal.svg';
import DiscordLogo from '@public/images/icons/discord-metal.svg';
import DropboxLogo from '@public/images/icons/dropbox-metal.svg';
import HotjarLogo from '@public/images/icons/hotjar-metal.svg';
import LatticeLogo from '@public/images/icons/lattice-metal.svg';
import NotionLogo from '@public/images/icons/notion-metal.svg';
import OutreachLogo from '@public/images/icons/outreach-metal.svg';
import SpotifyLogo from '@public/images/icons/spotify-metal.svg';
import StripeLogo from '@public/images/icons/stripe-metal.svg';
import Image, { StaticImageData } from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

interface ClientLogo {
  id: string;
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
  isFirst?: boolean;
}

const clientLogos: ClientLogo[] = [
  { id: '1', src: StripeLogo, alt: 'Stripe', width: 123, height: 40, isFirst: true },
  { id: '2', src: NotionLogo, alt: 'Notion', width: 128, height: 40 },
  { id: '3', src: AsanaLogo, alt: 'Asana', width: 128, height: 40 },
  { id: '4', src: DiscordLogo, alt: 'Discord', width: 150, height: 40 },
  { id: '5', src: DropboxLogo, alt: 'Dropbox', width: 154, height: 40 },
  { id: '6', src: HotjarLogo, alt: 'Hotjar', width: 124, height: 40 },
  { id: '7', src: LatticeLogo, alt: 'Lattice', width: 140, height: 40 },
  { id: '8', src: OutreachLogo, alt: 'Outreach', width: 158, height: 40 },
  { id: '9', src: SpotifyLogo, alt: 'Spotify', width: 130, height: 40 },
];

const TrustedBy = () => {
  return (
    <section
      className="border-b border-stroke-3 bg-background-3 py-16 md:py-24"
      aria-labelledby="trusted-by-heading">
      <div className="main-container relative">
        <RevealAnimation delay={0.1}>
          <div className="mb-14 flex flex-col items-center gap-4">
            <span className="badge badge-green-v2 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest">
              Global Scale
            </span>
            <h2
              id="trusted-by-heading"
              className="text-center text-xl font-medium text-secondary md:text-2xl">
              Trusted by leading enterprises worldwide
            </h2>
          </div>
        </RevealAnimation>
        
        <RevealAnimation delay={0.2} instant>
          <div className="relative overflow-hidden" aria-label="Logos of companies partnering with RockScale">
            <Marquee speed={35} autoFill pauseOnHover>
              <div className="flex items-center justify-center gap-x-20">
                {clientLogos.map((logo) => (
                  <figure
                    key={logo.id}
                    className={cn(
                      'shrink-0 opacity-40 mix-blend-multiply transition-all duration-500 hover:opacity-100',
                      {
                        'ml-20': logo.isFirst,
                      }
                    )}
                    style={{ width: `${logo.width}px`, height: `${logo.height}px` }}>
                    <Image
                      src={logo.src}
                      alt={`${logo.alt} logo`}
                      loading="lazy"
                    />
                  </figure>
                ))}
              </div>
            </Marquee>

            {/* Left fade - dynamically uses the background color */}
            <div
              className="pointer-events-none absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#f4f5f8] to-transparent md:w-40"
              aria-hidden="true"
            />
            {/* Right fade */}
            <div
              className="pointer-events-none absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#f4f5f8] to-transparent md:w-40"
              aria-hidden="true"
            />
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

TrustedBy.displayName = 'TrustedBy';
export default TrustedBy;
