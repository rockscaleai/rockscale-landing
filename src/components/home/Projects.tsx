'use client';
import { ICaseStudy } from '@/interface';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const getMetricLabel = (result?: string) => {
  if (!result) {
    return 'Real-world impact';
  }

  return result.split(' ').slice(0, 5).join(' ');
};

const ProjectCard = ({
  project,
  index,
  featured = false,
}: {
  project: ICaseStudy;
  index: number;
  featured?: boolean;
}) => {
  return (
    <RevealAnimation delay={0.28 + index * 0.1}>
      <Link
        href={`/case-study/${project.slug}`}
        className="group relative block h-full overflow-hidden rounded-[30px] outline-none"
      >
        <div
          className={`relative h-full min-h-[420px] overflow-hidden rounded-[30px] border border-white/10 bg-secondary shadow-[0_30px_80px_-35px_rgba(15,23,42,0.45)] dark:bg-background-7 ${
            featured ? 'lg:min-h-[620px]' : 'lg:min-h-[300px]'
          }`}
        >
          <Image
            src={project.thumbnail}
            fill
            priority={index < 2}
            alt={project.title}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,15,35,0.15)_0%,rgba(8,15,35,0.4)_38%,rgba(8,15,35,0.88)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(126,87,253,0.28),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.18),transparent_30%)] opacity-90" />

          <div className="absolute left-5 top-5 right-5 flex items-start justify-between gap-3 md:left-6 md:top-6 md:right-6">
            <span className="inline-flex max-w-[70%] items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur-md">
              <span className="size-2 rounded-full bg-ns-green" />
              {getMetricLabel(project.result)}
            </span>
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xs font-bold text-white/85 backdrop-blur-md">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 lg:p-7">
            <div className="rounded-[26px] border border-white/12 bg-white/10 p-5 backdrop-blur-md md:p-6">
              <div className="mb-4 flex items-center justify-between gap-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55">
                  Case study
                </span>
                <div className="flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all duration-300 group-hover:scale-110 group-hover:border-ns-green group-hover:bg-ns-green">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="-rotate-45"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="space-y-3">
                <h3
                  className={`font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-ns-green ${
                    featured ? 'text-2xl md:text-3xl lg:text-[36px]' : 'text-xl md:text-2xl'
                  }`}
                >
                  {project.title}
                </h3>
                <p className={`text-white/65 ${featured ? 'max-w-[560px] text-base leading-7' : 'line-clamp-3 text-sm leading-6'}`}>
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </RevealAnimation>
  );
};

const Projects = ({ featuredProjects }: { featuredProjects: ICaseStudy[] }) => {
  const [featuredProject, secondProject, thirdProject] = featuredProjects;

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-[100px] xl:py-[130px] dark:bg-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-12 h-52 w-52 rounded-full bg-[#7E57FD]/8 blur-[120px]" />
        <div className="absolute bottom-10 right-[8%] h-64 w-64 rounded-full bg-sky-400/8 blur-[140px]" />
      </div>

      <div className="main-container relative z-10">
        <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[700px] space-y-5">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Projects</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
                AI solutions powering real business transformation.
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="max-w-[620px] text-base leading-7 text-secondary/65 dark:text-accent/65 md:text-lg">
                Three selected case studies showing how RockScale turns complex AI ideas into production-ready systems with measurable outcomes.
              </p>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.35}>
            <div className="hidden shrink-0 md:block">
              <LinkButton
                href="/case-study"
                className="btn btn-secondary btn-md hover:btn-primary dark:btn-transparent"
              >
                View all projects
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>

        <div className="overflow-hidden rounded-[36px] border border-stroke-1/10 bg-secondary p-4 shadow-[0_35px_100px_-45px_rgba(15,23,42,0.55)] dark:border-white/10 dark:bg-background-8 sm:p-5 lg:p-6">
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1.2fr_0.8fr] xl:gap-6">
            {featuredProject && <ProjectCard project={featuredProject} index={0} featured />}

            <div className="grid grid-cols-1 gap-4 lg:gap-6">
              {secondProject && <ProjectCard project={secondProject} index={1} />}
              {thirdProject && <ProjectCard project={thirdProject} index={2} />}
            </div>
          </div>
        </div>

        <RevealAnimation delay={0.7}>
          <div className="mt-10 text-center md:hidden">
            <LinkButton
              href="/case-study"
              className="btn btn-secondary btn-md mx-auto w-[85%] hover:btn-primary dark:btn-transparent"
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
