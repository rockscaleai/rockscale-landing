const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src/components/shared/cta/CTA.tsx');
let content = fs.readFileSync(targetFile, 'utf8');

// Remove unwanted imports
content = content.replace("import CTACheckList from './CTACheckList';\n", "");
content = content.replace("import CtaInputForm from './CtaInputForm';\n", "");

// Add Link import
if (!content.includes("import Link from 'next/link';")) {
  content = content.replace("import { cn } from '@/utils/cn';", "import { cn } from '@/utils/cn';\nimport Link from 'next/link';");
}

// Replace the right side
const oldRightSide = `          {/* newsletter form  */}
          <div
            className={cn(
              'w-full max-w-[562px] space-y-6 lg:pl-9 xl:pl-[96px]',
              badgeText && 'mt-[40px] space-y-6 lg:mt-[67px]',
            )}>
            <CtaInputForm btnClass={btnClass} ctaBtnText={ctaBtnText} inputFieldClass={inputFieldClass} />
            <CTACheckList
              className="gap-x-4 gap-y-5 sm:gap-x-6 sm:gap-y-0 xl:justify-start"
              ctaCheckListData={[
                {
                  id: '1',
                  text: 'No credit card required',
                },
                {
                  id: '2',
                  text: '14-Day free trial',
                },
              ]}
              listTextClass={listTextClass}
              checkListVariant={checkListVariant}
            />
          </div>`;

const newRightSide = `          {/* Action Button */}
          <div className="flex w-full max-w-[562px] items-center justify-center xl:justify-end lg:pl-9 xl:pl-[96px]">
            <RevealAnimation delay={0.5}>
              <Link
                href="/contact-us"
                className={cn('btn btn-lg bg-secondary text-white hover:bg-primary px-8 py-4', btnClass)}
              >
                {ctaBtnText || 'Contact Us'}
              </Link>
            </RevealAnimation>
          </div>`;

content = content.replace(oldRightSide, newRightSide);
fs.writeFileSync(targetFile, content);
console.log('CTA component updated successfully globally.');
