
import React, { useState } from 'react';
import { TrendingUp, DollarSign, Clock, ArrowRight } from 'lucide-react';

const ROICalculator: React.FC = () => {
  const [managers, setManagers] = useState(5);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(75);

  const monthlyLostHours = managers * hoursPerWeek * 4;
  const monthlyCost = monthlyLostHours * hourlyRate;
  const yearlyCost = monthlyCost * 12;

  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-6 sm:p-8 lg:p-14 bg-white">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <TrendingUp className="text-[#C9A961]" />
              Time Savings Calculator
            </h3>
            
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">Number of Case Managers</label>
                <input 
                  type="range" 
                  min="1" 
                  max="50" 
                  value={managers}
                  onChange={(e) => setManagers(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#C9A961]"
                />
                <div className="flex justify-between mt-2 font-bold text-slate-700">
                  <span>1</span>
                  <span className="text-[#C9A961] text-lg">{managers} Managers</span>
                  <span>50</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">Manual Entry Hours / Week (per person)</label>
                <input 
                  type="range" 
                  min="5" 
                  max="25" 
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#C9A961]"
                />
                <div className="flex justify-between mt-2 font-bold text-slate-700">
                  <span>5h</span>
                  <span className="text-[#C9A961] text-lg">{hoursPerWeek} Hours</span>
                  <span>25h</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">Average Hourly Rate ($)</label>
                <div className="relative mt-2">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                  <input 
                    type="number" 
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(parseInt(e.target.value) || 0)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#C9A961] outline-none font-bold text-slate-900"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-6 sm:p-8 lg:p-14 bg-[#1A2B4A] text-white flex flex-col justify-center">
            <h4 className="text-xl font-bold mb-10 text-white uppercase tracking-widest">Your Potential Recovery:</h4>

            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
              <div className="flex items-center gap-6">
                 <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Clock size={32} className="text-[#C9A961]" />
                 </div>
                 <div>
                    <span className="text-sm font-bold text-gray-300 uppercase">Monthly Time Lost</span>
                    <p className="text-3xl font-bold text-white">{monthlyLostHours} Hours</p>
                 </div>
              </div>

              <div className="flex items-center gap-6">
                 <div className="w-16 h-16 bg-[#C9A961] rounded-2xl flex items-center justify-center shadow-lg shadow-[#C9A961]/20">
                    <DollarSign size={32} className="text-white" />
                 </div>
                 <div>
                    <span className="text-sm font-bold text-gray-300 uppercase">Annual Productivity Drain</span>
                    <p className="text-4xl lg:text-5xl font-bold text-[#C9A961] tracking-tight">
                      ${yearlyCost.toLocaleString()}
                    </p>
                 </div>
              </div>
            </div>

            <div className="mt-12 pt-10 border-t border-white/20">
              <p className="text-gray-300 mb-6 italic">"You aren't just losing money; you're losing the ability to focus on high-value litigation. Let's reclaim that time."</p>
              <a href="#audit" className="inline-flex items-center justify-center w-full bg-white text-[#1A2B4A] py-4 rounded-xl font-bold hover:bg-[#C9A961] hover:text-white transition-all gap-2">
                Let's Fix This <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
