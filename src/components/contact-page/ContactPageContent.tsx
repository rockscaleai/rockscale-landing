
'use client';

import React from 'react';

const HeroSection = () => (
  <section className="relative overflow-hidden bg-[#061225] pt-32 pb-24 md:pt-40 md:pb-32">
    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay -z-20" />
    <div className="absolute -top-40 -left-40 -z-10 h-[800px] w-[800px] rounded-full bg-[#7E57FD]/20 blur-[150px]" />
    
    <div className="main-container relative z-10 text-center">
      <span className="badge badge-green-v2 mb-6 inline-block">Contact Us</span>
      <h1 className="mx-auto max-w-4xl text-5xl font-medium tracking-tight text-white md:text-6xl lg:text-[72px] lg:leading-[1.05]">
        Start a <br className="hidden md:block"/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25CA22] to-[#7E57FD]">Conversation</span>
      </h1>
      <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-white/70">
        Whether you have a specific technical challenge or just want to explore what's possible with AI, our team of enterprise architects is ready to talk.
      </p>
    </div>
  </section>
);

const ContactSection = () => (
  <section className="bg-[#f4f5f8] py-24 md:py-32">
    <div className="main-container max-w-6xl">
      
      <div className="grid gap-16 lg:grid-cols-12">
        
        {/* Left Side: Contact Info & Process */}
        <div className="lg:col-span-5">
           <h3 className="text-3xl font-bold tracking-tight text-secondary mb-6">Let's build something.</h3>
           <p className="text-lg leading-relaxed text-secondary/70 mb-10">
             Fill out the form to schedule a discovery call. We typically respond within 24 hours.
           </p>
           
           <div className="space-y-8 mb-12">
             <div className="flex gap-4 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm border border-secondary/5">
                   <span className="ns-shape-8 text-xl text-[#25CA22]" />
                </div>
                <div>
                   <p className="font-bold text-secondary text-[15px] mb-1">Email Us</p>
                   <p className="text-secondary/70 text-sm">hello@rockscale.ai</p>
                </div>
             </div>
             
             <div className="flex gap-4 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm border border-secondary/5">
                   <span className="ns-shape-41 text-xl text-[#7E57FD]" />
                </div>
                <div>
                   <p className="font-bold text-secondary text-[15px] mb-1">Global Delivery</p>
                   <p className="text-secondary/70 text-sm">Headquartered in the US, with engineering hubs worldwide.</p>
                </div>
             </div>
           </div>

           <div className="rounded-[24px] bg-white p-8 border border-secondary/5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <p className="font-bold text-secondary text-[15px] mb-6 uppercase tracking-wider">What happens next?</p>
              
              <div className="relative pl-6 border-l-2 border-secondary/10 space-y-6">
                 <div className="relative">
                    <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-[#25CA22]" />
                    <p className="font-bold text-secondary text-[14px]">1. Discovery Call</p>
                    <p className="text-secondary/60 text-[13px] mt-1">A 30-minute technical consultation.</p>
                 </div>
                 <div className="relative">
                    <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-[#7E57FD]" />
                    <p className="font-bold text-secondary text-[14px]">2. Blueprinting</p>
                    <p className="text-secondary/60 text-[13px] mt-1">We assess your architecture & data.</p>
                 </div>
                 <div className="relative">
                    <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-[#f97316]" />
                    <p className="font-bold text-secondary text-[14px]">3. Proposal & Execution</p>
                    <p className="text-secondary/60 text-[13px] mt-1">We define scope, KPIs, and start building.</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-7">
           <div className="rounded-[32px] bg-white p-8 md:p-12 border border-secondary/5 shadow-[0_20px_40px_rgba(6,18,37,0.06)]">
              <form className="space-y-6">
                 <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-wider text-secondary/60 ml-1">First Name</label>
                       <input type="text" placeholder="John" className="w-full rounded-xl border border-secondary/10 bg-[#f4f5f8]/50 px-4 py-3.5 text-sm text-secondary outline-none transition-all focus:border-[#25CA22] focus:bg-white focus:ring-1 focus:ring-[#25CA22]" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-wider text-secondary/60 ml-1">Last Name</label>
                       <input type="text" placeholder="Doe" className="w-full rounded-xl border border-secondary/10 bg-[#f4f5f8]/50 px-4 py-3.5 text-sm text-secondary outline-none transition-all focus:border-[#25CA22] focus:bg-white focus:ring-1 focus:ring-[#25CA22]" />
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-secondary/60 ml-1">Work Email</label>
                    <input type="email" placeholder="john@company.com" className="w-full rounded-xl border border-secondary/10 bg-[#f4f5f8]/50 px-4 py-3.5 text-sm text-secondary outline-none transition-all focus:border-[#25CA22] focus:bg-white focus:ring-1 focus:ring-[#25CA22]" />
                 </div>

                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-secondary/60 ml-1">Company</label>
                    <input type="text" placeholder="Company Name" className="w-full rounded-xl border border-secondary/10 bg-[#f4f5f8]/50 px-4 py-3.5 text-sm text-secondary outline-none transition-all focus:border-[#25CA22] focus:bg-white focus:ring-1 focus:ring-[#25CA22]" />
                 </div>
                 
                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-secondary/60 ml-1">How can we help?</label>
                    <textarea rows={5} placeholder="Tell us about your project or business challenge..." className="w-full rounded-xl border border-secondary/10 bg-[#f4f5f8]/50 px-4 py-3.5 text-sm text-secondary outline-none transition-all focus:border-[#25CA22] focus:bg-white focus:ring-1 focus:ring-[#25CA22] resize-none"></textarea>
                 </div>

                 <button type="submit" className="w-full group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-secondary px-8 py-4 text-[15px] font-bold text-white transition-all hover:bg-black hover:shadow-[0_15px_30px_rgba(6,18,37,0.2)] mt-2">
                    <span className="relative z-10">Send Message</span>
                 </button>
              </form>
           </div>
        </div>

      </div>
    </div>
  </section>
);

const ContactPageContent = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <ContactSection />
      <div className="h-12 w-full bg-white" />
    </div>
  );
};

export default ContactPageContent;
