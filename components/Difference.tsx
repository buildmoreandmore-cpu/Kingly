
import React from 'react';
import { ShieldCheck, XCircle } from 'lucide-react';

const Difference: React.FC = () => {
  return (
    <section id="difference" className="py-24 bg-[#1A2B4A] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">The Kingly Difference</h2>
          <p className="text-[#C9A961] text-xl font-light">"Most AI consultants have never managed a case file. I spent 17 years doing it."</p>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="p-8 text-xl font-bold text-gray-900">Feature</th>
                <th className="p-8 text-xl font-bold text-gray-500 hidden sm:table-cell">Traditional Consultants</th>
                <th className="p-8 text-xl font-bold text-[#C9A961]">Kingly Consulting</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Foundation", "Theoretical knowledge", "Lived field experience"],
                ["Communication", "Technical jargon", "Plain English legal terms"],
                ["Approach", "One-size-fits-all", "Custom to your unique workflow"],
                ["Implementation", "Leave you to figure it out", "With you every step of the way"]
              ].map(([feature, trad, kingly], idx) => (
                <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-8 font-semibold text-gray-900">{feature}</td>
                  <td className="p-8 text-gray-500 hidden sm:table-cell">
                    <div className="flex items-center gap-2">
                       <XCircle size={18} className="text-red-500" />
                       {trad}
                    </div>
                  </td>
                  <td className="p-8 text-[#B8923F] font-bold">
                    <div className="flex items-center gap-2">
                       <ShieldCheck size={18} className="text-green-600" />
                       {kingly}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A961]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
    </section>
  );
};

export default Difference;
