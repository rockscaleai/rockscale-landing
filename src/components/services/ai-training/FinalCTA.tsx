'use client';
import RevealAnimation from '../../animation/RevealAnimation';
import LinkButton from '../../ui/button/LinkButton';

const FinalCTA = () => {
  return (
    <section className="bg-secondary relative overflow-hidden py-16 md:py-20 lg:py-[100px]">
      <div className="main-container">
        <div className="mx-auto max-w-[760px] text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-blur mb-5 text-ns-yellow">Ready to Upskill Your Team?</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-4 text-white">
            Give your team the AI skills they need to succeed.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto mb-8 max-w-[620px] text-white/60">
            Invest in your team's future and empower them to drive innovation. Our training programs are tailored to your business needs, ensuring your team can start delivering value from day one.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <LinkButton
                href="/contact-us"
                className="btn btn-white btn-md w-[85%] hover:btn-primary sm:w-auto"
              >
                Schedule a Consultation
              </LinkButton>
              <LinkButton
                href="/services/ai-training#training-programs"
                className="btn btn-md w-[85%] border border-white/20 text-white hover:border-white/60 sm:w-auto"
              >
                Explore Our Curriculum
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
