'use client';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import SocialIcon, { Platform } from '../shared/SocialIcon';


const teamMembers = [
  {
    name: 'Eleanor Sterling',
    location: 'Chief Executive Officer',
    image: '/images/ns-avatar-5.png',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Marcus Vance',
    location: 'Chief Technology Officer',
    image: '/images/ns-avatar-2.png',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Dr. Aisha Rahman',
    location: 'Head of AI Engineering',
    image: '/images/ns-avatar-1.png',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Jonathan Hayes',
    location: 'VP of Data Infrastructure',
    image: '/images/ns-avatar-3.png',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
];

const Team = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 py-[100px] lg:py-[150px] xl:py-[200px]" aria-labelledby="team-heading">
      <div className="main-container">
        <div>
          <div className="mx-auto mb-[70px] max-w-[620px] text-center md:w-full">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-5">Leadership</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="team-heading" className="mb-3">Expertise at the helm</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                Our leadership team brings decades of combined experience across enterprise engineering, AI research, and scalable cloud architectures.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="mb-14 grid grid-cols-1 items-center justify-center gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <RevealAnimation key={member.name} delay={0.4 + index * 0.1}>
                <div className="mx-auto h-[312px] w-[298px] space-y-[34px]">
                  <figure className="mx-auto flex size-[156px] items-center justify-center overflow-hidden rounded-full bg-[#d5dbe3]">
                    <Image
                      src={member.image}
                      className="size-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
                      alt={`${member.name} profile img`}
                      loading="lazy"
                      width={156}
                      height={156}
                      quality={100}
                    />
                  </figure>
                  <div className="space-y-[27px]">
                    <div className="text-center">
                      <h3 className="text-heading-5 mb-1">{member.name}</h3>
                      <p className="text-tagline-2 text-secondary/70 dark:text-accent/70">{member.location}</p>
                    </div>
                    <div className="flex items-center justify-center gap-2.5">
                      {['github', 'linkedin'].map((platform) => {
                        const href = member.social[platform as keyof typeof member.social];
                        if (!href) { return null; }
                        return (
                          <Link
                            key={platform}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group border-secondary/10 dark:border-accent/10 hover:bg-ns-green hover:border-ns-green flex size-10 items-center justify-center rounded-full border p-2.5 transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-lg"
                            aria-label={`${member.name} on ${platform}`}>
                            <span>
                              <SocialIcon platform={platform as Platform} />
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Team.displayName = 'Team';
export default Team;
