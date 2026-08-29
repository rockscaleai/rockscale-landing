const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src/app/privacy-policy/page.tsx');

const content = `import PrivacyContent from '@/components/privacy/PrivacyContent';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Privacy Policy | RockScale',
};

const page = () => {
  return (
    <main className="bg-white">
      <PrivacyContent />
      <CTA
        className="bg-white border-t border-secondary/5"
        badgeClass="!badge-green-v2"
        badgeText="Any Questions?"
        ctaHeading="Need clarification on our policies?"
        description="Our legal and compliance team is happy to assist you."
        btnClass="hover:bg-primary"
        ctaBtnText="Contact Support"
      />
    </main>
  );
};

export default page;
`;

fs.writeFileSync(targetFile, content);
console.log('Privacy Policy page wrapper updated.');
