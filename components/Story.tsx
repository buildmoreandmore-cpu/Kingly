
import React from 'react';
import { Award, Briefcase, Zap, Star } from 'lucide-react';

const milestones = [
  {
    year: "17 Years",
    title: "Case Management Trenches",
    desc: "Built deep expertise handling complex files, deadlines, and high-pressure legal environments.",
    icon: <Briefcase />
  },
  {
    year: "Turning Point",
    title: "The AI Discovery",
    desc: "Discovered that AI could eliminate 60-80% of tedious, repetitive manual tasks.",
    icon: <Zap />
  },
  {
    year: "Growth",
    title: "Subrogation Supervisor",
    desc: "Managed a team of 30+ employees, implementing optimized digital systems for massive scale.",
    icon: <Award />
  },
  {
    year: "Today",
    title: "Helping You Win",
    desc: "Taking that decade of lived experience to help modern law firms thrive through AI.",
    icon: <Star />
  }
];

const Story: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              A Trusted Advocate <br />
              <span className="text-[#C9A961]">Who's Been in Your Shoes.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              I didn't start as a consultant. I started as a case manager, just like your team. 
              I saw the late nights, the burnout, and the missed opportunities caused by manual processes.
            </p>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm italic tagline-font text-slate-700">
              "Kingly Consulting was born from a simple mission: to give legal professionals their lives back without sacrificing the quality of their work."
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {milestones.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-slate-900 text-[#C9A961] flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-[#C9A961] font-bold text-sm tracking-widest uppercase mb-2 block">{item.year}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
