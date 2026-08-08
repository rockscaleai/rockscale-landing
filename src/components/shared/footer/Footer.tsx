'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { footerLinks } from '@/data/footer-data';
import { cn } from '@/utils/cn';
import facebook from '@public/images/icons/facebook.svg';
import instagram from '@public/images/icons/instagram.svg';
import linkedin from '@public/images/icons/linkedin.svg';
import youtube from '@public/images/icons/youtube.svg';
import gradientImg from '@public/images/ns-img-532.png';
import darkLogo from '@public/images/Rockscale_logo.png';
import Image from 'next/image';
import Link from 'next/link';
import FooterDivider from './FooterDivider';

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={cn('bg-secondary relative z-0 overflow-hidden', className)}>
      <RevealAnimation delay={0.3} offset={50} direction="up">
        <figure className="pointer-events-none absolute -top-[1320px] left-1/2 -z-1 size-[1635px] -translate-x-1/2 select-none">
          <Image src={gradientImg} alt="footer gradient" className="size-full object-cover" />
        </figure>
      </RevealAnimation>

      <div className="main-container px-5">
        <div className="grid grid-cols-12 justify-between gap-x-0 gap-y-16 pt-16 pb-12 xl:pt-[90px]">

          {/* Brand column */}
          <RevealAnimation delay={0.1}>
            <div className="col-span-12 xl:col-span-3">
              <div className="max-w-[280px]">
                <figure className="mb-5">
                  <Image src={darkLogo} alt="RockScale Logo" className="h-auto w-[110px]" />
                </figure>
                <p className="text-accent/60 text-tagline-1 mb-6 font-normal">
                  Enterprise AI consulting, data engineering and cloud infrastructure for
                  ambitious growing companies.
                </p>
                {/* Newsletter */}
                <div className="mb-7">
                  <p className="text-tagline-2 text-accent/50 mb-3 font-medium uppercase tracking-wider">
                    Stay informed
                  </p>
                  <form
                    action="#"
                    method="post"
                    className="flex gap-2"
                    aria-label="newsletter-form"
                    suppressHydrationWarning>
                    <input
                      type="email"
                      name="email"
                      id="footerEmail"
                      placeholder="Your email"
                      className="placeholder:text-accent/40 border-stroke-1/20 text-accent focus:border-primary-400 h-10 flex-1 rounded-full border bg-white/5 px-4 text-sm font-normal placeholder:font-normal focus:outline-none"
                      aria-label="Email for newsletter"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary btn-sm h-10 rounded-full px-4 text-sm"
                      aria-label="Subscribe to newsletter">
                      Join
                    </button>
                  </form>
                </div>
                {/* Socials */}
                <div className="flex items-center gap-3">
                  <Link target="_blank" href="https://www.linkedin.com">
                    <span className="sr-only">LinkedIn</span>
                    <Image className="size-5 opacity-60 transition-opacity hover:opacity-100" src={linkedin} alt="LinkedIn" />
                  </Link>
                  <div className="bg-stroke-1/20 h-5 w-px" />
                  <Link target="_blank" href="https://www.facebook.com">
                    <span className="sr-only">Facebook</span>
                    <Image className="size-5 opacity-60 transition-opacity hover:opacity-100" src={facebook} alt="Facebook" />
                  </Link>
                  <div className="bg-stroke-1/20 h-5 w-px" />
                  <Link target="_blank" href="https://www.instagram.com">
                    <span className="sr-only">Instagram</span>
                    <Image className="size-5 opacity-60 transition-opacity hover:opacity-100" src={instagram} alt="Instagram" />
                  </Link>
                  <div className="bg-stroke-1/20 h-5 w-px" />
                  <Link target="_blank" href="https://www.youtube.com">
                    <span className="sr-only">Youtube</span>
                    <Image className="size-5 opacity-60 transition-opacity hover:opacity-100" src={youtube} alt="Youtube" />
                  </Link>
                </div>
              </div>
            </div>
          </RevealAnimation>

          {/* Nav columns */}
          <div className="col-span-12 grid grid-cols-12 gap-x-0 gap-y-10 xl:col-span-9">
            {footerLinks.map(({ title, links }, index) => (
              <div className="col-span-6 md:col-span-3" key={title}>
                <RevealAnimation delay={0.2 + index * 0.1}>
                  <div className="space-y-7">
                    <p className="sm:text-heading-6 text-tagline-1 text-primary-50 font-normal">{title}</p>
                    <ul className="space-y-4">
                      {links.map(({ label, href }) => (
                        <li key={label}>
                          <Link href={href} className="footer-link">
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealAnimation>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative pt-[26px] pb-[42px] text-center">
          <FooterDivider className="bg-accent/10 dark:bg-stroke-6" />
          <RevealAnimation delay={0.7} offset={10} start="top 105%">
            <p className="text-tagline-1 text-primary-50 font-normal">
              Copyright © RockScale {new Date().getFullYear()} · AI Solutions & Infrastructure
            </p>
          </RevealAnimation>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
export default Footer;
