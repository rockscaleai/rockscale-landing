const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src/app/NotFoundContent.tsx');

const content = `'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';
import React from 'react';

const NotFoundContent = () => {
  return (
    <main className="bg-[#061225] min-h-screen flex items-center justify-center relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay -z-20" />
      <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#25CA22]/10 blur-[150px]" />
      
      <div className="main-container text-center relative z-10 py-32">
        <RevealAnimation delay={0.1}>
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/5 border border-white/10 mb-8 shadow-[0_0_40px_rgba(37,202,34,0.15)]">
             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#25CA22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
        </RevealAnimation>
        
        <RevealAnimation delay={0.2}>
          <h1 className="text-8xl md:text-[140px] font-bold text-white mb-4 tracking-tight leading-none">
            404
          </h1>
        </RevealAnimation>
        
        <RevealAnimation delay={0.3}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            System Error: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25CA22] to-[#7E57FD]">Page Not Found</span>
          </h2>
        </RevealAnimation>
        
        <RevealAnimation delay={0.4}>
          <p className="text-lg text-white/60 max-w-lg mx-auto mb-12 leading-relaxed">
            The requested endpoint does not exist or has been moved. Please verify the URL or return to the main dashboard.
          </p>
        </RevealAnimation>
        
        <RevealAnimation delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Link href="/" className="btn btn-lg bg-[#25CA22] text-[#061225] hover:bg-white transition-colors px-8 py-4 font-bold w-full sm:w-auto">
               Return Home
             </Link>
             <Link href="/contact-us" className="btn btn-lg bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors px-8 py-4 font-bold w-full sm:w-auto">
               Contact Support
             </Link>
          </div>
        </RevealAnimation>
      </div>
    </main>
  );
};

NotFoundContent.displayName = 'NotFoundContent';
export default NotFoundContent;
`;

fs.writeFileSync(targetFile, content);
console.log('404 NotFoundContent updated.');
