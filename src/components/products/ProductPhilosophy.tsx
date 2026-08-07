'use client';
import RevealAnimation from '../animation/RevealAnimation';
import WhyUs1 from '@public/images/ns-img-176.png';
import WhyUs1Dark from '@public/images/ns-img-dark-44.png';
import Image from 'next/image';

const ProductPhilosophy = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="philosophy-heading">
      <div className="main-container">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <RevealAnimation delay={0.2} direction="right">
              <figure className="relative z-10 w-full max-w-[600px] overflow-hidden rounded-[20px] shadow-sm">
                <Image
                  src={WhyUs1}
                  alt="Product philosophy illustration"
                  className="w-full object-cover dark:hidden"
                  priority
                />
                <Image
                  src={WhyUs1Dark}
                  alt="Product philosophy illustration"
                  className="hidden w-full object-cover dark:block"
                  priority
                />
              </figure>
            </RevealAnimation>
          </div>
          
          <div className="order-1 space-y-6 lg:order-2">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Our Philosophy</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="philosophy-heading">Built from real consulting experience</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <div className="space-y-4 text-secondary/70 dark:text-accent/70 text-lg leading-relaxed">
                <p>
                  At RockScale, our consulting engagements have given us unique visibility into the most difficult technical challenges businesses face when adopting AI.
                </p>
                <p>
                  We consistently encountered the same hurdles: fragmented API integrations, complex billing across multiple model providers, and unpredictable infrastructure costs.
                </p>
                <p>
                  Rather than solving these problems from scratch for every client, we began building robust, enterprise-grade software platforms to standardize and accelerate AI adoption. These proprietary platforms are the engine behind our fastest deployments, and are available for modern engineering teams to leverage directly.
                </p>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

ProductPhilosophy.displayName = 'ProductPhilosophy';
export default ProductPhilosophy;
