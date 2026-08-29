const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src/components/shared/cta/CTA.tsx');

const content = `import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';
import Link from 'next/link';

interface CTAProps {
  className?: string;
  badgeClass?: string;
  ctaHeading?: string;
  spanText?: string;
  description?: string;
  btnClass?: string;
  ctaBtnText?: string;
  badgeText?: string;
  descriptionClass?: string;
  headingClass?: string;
  listTextClass?: string;
  inputFieldClass?: string;
  checkListVariant?: 'default' | 'gray';
}

const CTA = ({
  className,
  badgeClass,
  ctaHeading,
  spanText,
  description,
  btnClass,
  ctaBtnText,
  badgeText,
  descriptionClass,
  headingClass,
}: CTAProps) => {
  return (
    <section className={cn('py-[50px] md:py-20 lg:py-28', className)} aria-label="cta section">
      <div className="main-container">
        <div className="xl:gap-0 flex flex-col items-center justify-between gap-8 xl:flex-row">
          <div className="mx-3 max-w-[649px] space-y-3 text-center sm:mx-0 md:w-full xl:text-left">
            {badgeText && (
              <RevealAnimation delay={0.3}>
                <span className={cn('badge badge-green', badgeClass)}>{badgeText}</span>
              </RevealAnimation>
            )}

            <div className="space-y-3">
              <RevealAnimation delay={badgeText ? 0.4 : 0.3}>
                <h2 className={cn('md:text-heading-2 text-heading-5', headingClass)} aria-label="cta-heading">
                  {ctaHeading}
                  {spanText && <span className="text-primary-500"> {spanText}</span>}
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={badgeText ? 0.5 : 0.4}>
                <p aria-label="cta-description" className={cn(descriptionClass)}>
                  {description}
                </p>
              </RevealAnimation>
            </div>
          </div>
          
          {/* Action Button */}
          <div className="flex w-full max-w-[562px] items-center justify-center xl:justify-end lg:pl-9 xl:pl-[96px]">
            <RevealAnimation delay={0.5}>
              <Link
                href="/contact-us"
                className={cn('btn btn-lg bg-secondary text-white hover:bg-primary px-8 py-4', btnClass)}
              >
                {ctaBtnText || 'Contact Us'}
              </Link>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};
CTA.displayName = 'CTA';
export default CTA;
`;

fs.writeFileSync(targetFile, content);
console.log('CTA component fixed.');
