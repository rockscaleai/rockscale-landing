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
        href={`/case-studies/${project.slug}`}
        className="group relative block h-full overflow-hidden rounded-[24px] outline-none"
      >
        <div
          className={`relative h-full min-h-[420px] w-full overflow-hidden rounded-[24px] bg-white transition-all duration-700 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] ${
            featured ? 'lg:min-h-[640px]' : 'lg:min-h-[310px]'
          }`}
        >
          {/* Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={project.thumbnail}
              fill
              priority={index < 2}
              alt={project.title}
              className="object-cover object-left-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105 group-hover:blur-[2px]"
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061225]/80 via-[#061225]/10 to-transparent transition-opacity duration-700 group-hover:opacity-90" />
            <div className="absolute inset-0 bg-[#25CA22]/10 opacity-0 mix-blend-color transition-opacity duration-700 group-hover:opacity-100" />
          </div>

          {/* Top Badges */}
          <div className="absolute left-6 top-6 right-6 z-10 flex items-start justify-between gap-3">
            <span className="inline-flex max-w-[75%] items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white backdrop-blur-md transition-colors duration-500 group-hover:border-[#25CA22]/40 group-hover:bg-[#25CA22]/20">
              <span className="size-2 rounded-full bg-[#25CA22] shadow-[0_0_10px_rgba(37,202,34,0.8)]" />
              {getMetricLabel(project.result)}
            </span>
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs font-bold text-white backdrop-blur-md transition-colors duration-500 group-hover:border-[#7E57FD]/40 group-hover:bg-[#7E57FD]/20">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Bottom Content Area */}
          <div className="absolute inset-x-0 bottom-0 z-10 p-6 lg:p-8">
            <div className="rounded-[20px] border border-white/10 bg-black/40 p-6 backdrop-blur-xl transition-all duration-500 group-hover:border-white/20 group-hover:bg-black/60">
              <div className="mb-4 flex items-center justify-between gap-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-white/60 transition-colors duration-500 group-hover:text-white/80">
                  Case study
                </span>
                <div className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-[#25CA22]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="space-y-3">
                <h3
                  className={`font-semibold tracking-tight text-white transition-colors duration-500 group-hover:text-[#25CA22] ${
                    featured ? 'text-2xl md:text-3xl lg:text-[34px] lg:leading-[1.2]' : 'text-xl md:text-2xl'
                  }`}
                >
                  {project.title}
                </h3>
                <p className={`text-white/70 ${featured ? 'max-w-[580px] text-[15px] leading-relaxed' : 'line-clamp-2 text-sm leading-6'}`}>
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
    <section className="relative overflow-hidden bg-[#f4f5f8] py-24 md:py-32 lg:py-40">
      
      {/* ── Background Noise ── */}
      <div className="absolute inset-0 z-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-multiply" />

      <div className="main-container relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 flex flex-col gap-10 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[720px] space-y-6">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Our Work</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-4xl font-medium tracking-tight text-secondary md:text-5xl lg:text-[56px] lg:leading-[1.1]">
                AI solutions powering real business transformation.
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="max-w-[650px] text-lg leading-relaxed text-secondary/70">
                A selection of enterprise case studies showcasing how RockScale engineers turn complex AI architectures into secure, production-ready systems with measurable ROI.
              </p>
            </RevealAnimation>
          </div>

          
        </div>

        {/* Project Grid */}
        <div className="relative z-10">
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.3fr_0.7fr]">
            {/* Featured Left Column */}
            {featuredProject && <ProjectCard project={featuredProject} index={0} featured />}

            {/* Stacked Right Column */}
            <div className="grid grid-cols-1 gap-6">
              {secondProject && <ProjectCard project={secondProject} index={1} />}
              {thirdProject && <ProjectCard project={thirdProject} index={2} />}
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Projects;
