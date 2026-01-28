
import React from 'react';
import { Quote, TrendingUp, Users } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Real Results from Real Law Firms</h2>
          <p className="text-xl text-slate-600">Proof that lived experience combined with AI works better than software alone.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Case Study Card */}
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 lg:p-14 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <TrendingUp size={120} />
            </div>
            <span className="inline-block bg-[#C9A961] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">Case Study</span>
            <h3 className="text-3xl font-bold mb-6">How One Subrogation Team Saved 600 Hours in 90 Days</h3>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <span className="text-[#C9A961] text-4xl font-bold block mb-1">600h</span>
                <span className="text-slate-400 text-sm font-semibold uppercase">Hours Reclaimed</span>
              </div>
              <div>
                <span className="text-[#C9A961] text-4xl font-bold block mb-1">45%</span>
                <span className="text-slate-400 text-sm font-semibold uppercase">Efficiency Boost</span>
              </div>
            </div>

            <div className="space-y-4 text-slate-300 leading-relaxed mb-10">
              <p>By automating the initial file intake and standard discovery requests, the team was able to shift focus from logistics to strategy.</p>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-sm italic">"The process Camisha implemented is the same one she used to scale her own team of 30+. It's battle-tested."</p>
              </div>
            </div>

            <a href="#audit" className="inline-flex items-center gap-2 text-[#C9A961] font-bold hover:gap-4 transition-all">
              See How We Did It <ArrowRight size={20} />
            </a>
          </div>

          {/* Testimonial Quote */}
          <div className="flex flex-col justify-center space-y-8">
             <div className="p-4 sm:p-6 lg:p-8 bg-slate-50 rounded-3xl border border-slate-100 relative">
               <Quote className="text-[#C9A961]/20 absolute top-6 left-6" size={60} />
               <div className="relative z-10">
                 <p className="text-xl text-slate-800 font-medium mb-8 leading-relaxed">
                   "We knew we needed to upgrade our tech, but every consultant we talked to was too academic. Camisha spoke our language. Within 30 days, our case managers stopped complaining about burnout and started hitting record closure numbers."
                 </p>
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-slate-200"></div>
                   <div>
                     <p className="font-bold text-slate-900">Operations Director</p>
                     <p className="text-slate-500 text-sm">Large Personal Injury Firm, Atlanta</p>
                   </div>
                 </div>
               </div>
             </div>

             <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm text-center">
                  <span className="text-2xl font-bold text-slate-900">100%</span>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Client Satisfaction</p>
                </div>
                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm text-center">
                  <span className="text-2xl font-bold text-slate-900">30-60</span>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Day ROI Target</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

export default SocialProof;
