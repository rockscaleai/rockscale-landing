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
      className="bg-background-3 dark:bg-background-7 py-14 md:py-16"
      aria-labelledby="trusted-by-heading">
      <div className="main-container relative">
        <RevealAnimation delay={0.1}>
          <p
            id="trusted-by-heading"
            className="text-tagline-2 text-secondary/50 dark:text-accent/50 mb-10 text-center font-medium uppercase tracking-widest">
            Trusted by forward-thinking teams
          </p>
        </RevealAnimation>
        <RevealAnimation delay={0.2} instant>
          <div className="overflow-hidden" aria-label="Logos of companies partnering with RockScale">
            <Marquee speed={38} autoFill pauseOnHover>
              <div className="flex items-center justify-center gap-x-16">
                {clientLogos.map((logo) => (
                  <figure
                    key={logo.id}
                    className={cn('shrink-0 opacity-60 transition-opacity duration-300 hover:opacity-100', {
                      'ml-16': logo.isFirst,
                    })}
                    style={{ width: `${logo.width}px`, height: `${logo.height}px` }}>
                    <Image
                      src={logo.src}
                      alt={`${logo.alt} logo`}
                      className="dark:invert"
                      loading="lazy"
                    />
                  </figure>
                ))}
              </div>
            </Marquee>
          </div>
        </RevealAnimation>
        {/* left fade */}
        <div
          className="dark:from-background-7 pointer-events-none absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-[#f5f4f2] to-transparent md:w-32"
          aria-hidden="true"
        />
        {/* right fade */}
        <div
          className="dark:to-background-7 pointer-events-none absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-[#f5f4f2] to-transparent md:w-32"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

TrustedBy.displayName = 'TrustedBy';
export default TrustedBy;
