'use client';
import { ICaseStudy } from '@/interface';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

/* ─── Project Card ────────────────────────────────────────────────── */
const ProjectCard = ({
  project,
  index,
  size = 'normal',
}: {
  project: ICaseStudy;
  index: number;
  size?: 'hero' | 'normal';
}) => {
  const imageHeight = size === 'hero' ? 'h-[380px] lg:h-[580px]' : 'h-[300px] lg:h-[440px]';

  return (
    <RevealAnimation delay={0.3 + index * 0.1}>
      <Link
        href={`/case-study/${project.slug}`}
        className="group relative block w-full overflow-hidden rounded-[24px] outline-none"
      >
        {/* Image */}
        <div className={`relative w-full ${imageHeight} overflow-hidden rounded-[24px]`}>
          <Image
            src={project.thumbnail}
            fill
            priority={index < 2}
            alt={project.title}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Persistent gradient scrim — always visible at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

          {/* Index number — top right */}
          <div className="absolute top-5 right-5 flex size-9 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
            <span className="text-xs font-bold text-white/80">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Result metric pill — top left */}
          {project.result && (
            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-ns-green/30 bg-ns-green/20 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-ns-green" />
                {project.result.split(' ').slice(0, 4).join(' ')}
              </span>
            </div>
          )}

          {/* Bottom overlay — title + description + arrow */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-6 md:p-8">
            <div className="flex-1 min-w-0">
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                Case Study
              </p>
              <h3
                className={`font-medium text-white transition-colors group-hover:text-ns-green ${
                  size === 'hero' ? 'text-2xl md:text-3xl lg:text-4xl' : 'text-xl md:text-2xl'
                }`}
              >
                {project.title}
              </h3>
              <p className="mt-2 line-clamp-2 max-w-[520px] text-sm leading-relaxed text-white/60">
                {project.description}
              </p>
            </div>

            {/* Arrow button */}
            <div className="shrink-0 flex size-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-ns-green group-hover:border-ns-green group-hover:scale-110">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white -rotate-45"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </RevealAnimation>
  );
};

/* ─── Projects Section ────────────────────────────────────────────── */
const Projects = ({ featuredProjects }: { featuredProjects: ICaseStudy[] }) => {
  return (
    <section className="bg-white pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[90px] lg:pb-[90px] xl:pt-[130px] xl:pb-[130px] dark:bg-black">
      <div className="main-container">

        {/* Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-[60px] md:flex-row md:items-end">
          <div className="max-w-[640px] space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Projects</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-4xl font-medium tracking-tight md:text-5xl">
                AI solutions powering<br className="hidden sm:block" /> real businesses.
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="max-w-[520px] text-secondary/60 dark:text-accent/60">
                Explore how RockScale has helped startups, SMEs, and mid-size companies unlock
                growth, streamline operations, and future-proof their businesses through AI.
              </p>
            </RevealAnimation>
          </div>

          {/* Desktop CTA — top right */}
          <RevealAnimation delay={0.3}>
            <div className="hidden md:block shrink-0">
              <LinkButton
                href="/case-study"
                className="btn btn-secondary btn-md hover:btn-primary dark:btn-transparent"
              >
                View all projects
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>

        {/* Grid */}
        <div className="flex flex-col gap-5 lg:gap-6">
          {/* Row 1 — hero full-width */}
          {featuredProjects[0] && (
            <ProjectCard project={featuredProjects[0]} index={0} size="hero" />
          )}

          {/* Row 2 — two side-by-side */}
          {(featuredProjects[1] || featuredProjects[2]) && (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
              {featuredProjects[1] && (
                <ProjectCard project={featuredProjects[1]} index={1} />
              )}
              {featuredProjects[2] && (
                <ProjectCard project={featuredProjects[2]} index={2} />
              )}
            </div>
          )}

          {/* Row 3 — full-width again */}
          {featuredProjects[3] && (
            <ProjectCard project={featuredProjects[3]} index={3} size="hero" />
          )}
        </div>

        {/* Mobile CTA */}
        <RevealAnimation delay={0.9}>
          <div className="mt-10 text-center md:hidden">
            <LinkButton
              href="/case-study"
              className="btn btn-secondary btn-md hover:btn-primary dark:btn-transparent mx-auto w-[85%]"
            >
              View all projects
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Projects;
