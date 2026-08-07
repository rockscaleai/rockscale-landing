'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';

const ContactHero = () => {
  return (
    <section
      className="relative bg-[url('/images/ns-img-169.png')] bg-top bg-no-repeat pt-[200px] pb-16 md:pt-[220px] md:pb-20 lg:pt-[260px] lg:pb-[100px]"
      aria-labelledby="contact-hero-heading">
      <div className="main-container relative z-10 flex flex-col items-center text-center space-y-8">
        <RevealAnimation delay={0.2}>
          <span className="badge badge-green">Let&apos;s Connect</span>
        </RevealAnimation>
        <RevealAnimation delay={0.3}>
          <h1 id="contact-hero-heading" className="mx-auto max-w-4xl text-4xl font-bold md:text-5xl lg:text-6xl text-primary">
            Let&apos;s Build Something Intelligent Together
          </h1>
        </RevealAnimation>
        <RevealAnimation delay={0.4}>
          <p className="mx-auto max-w-2xl text-lg text-secondary/80 dark:text-accent/80">
            Whether you are exploring AI, modernizing your data platform, or scaling cloud infrastructure — RockScale is ready to help you move from ambition to execution.
          </p>
        </RevealAnimation>
        <RevealAnimation delay={0.5}>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="#contact-form" className="btn btn-primary btn-xl w-full sm:w-auto" id="hero-book-call-btn">
              Book a Discovery Call
            </Link>
            <Link href="#contact-form" className="btn btn-secondary btn-xl w-full sm:w-auto" id="hero-send-message-btn">
              Send Us a Message
            </Link>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

ContactHero.displayName = 'ContactHero';
export default ContactHero;
