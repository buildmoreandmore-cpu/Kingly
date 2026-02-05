
import React, { useState } from 'react';

const AuditForm: React.FC = () => {
  const [name, setName] = useState('');
  const [firm, setFirm] = useState('');
  const [email, setEmail] = useState('');
  const [timeDrain, setTimeDrain] = useState('biggest time drain: data entry');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Free Audit Request – ${firm || 'New Inquiry'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nFirm: ${firm}\nEmail: ${email}\nBiggest Time Drain: ${timeDrain}`
    );
    window.location.href = `mailto:camisha@kingly-consulting4u.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="audit" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10 sm:mb-16 lg:mb-20">
          <h2 className="hims-heading text-4xl lg:text-6xl lowercase mb-8">request your <br />free audit</h2>
          <div className="w-16 h-[2px] bg-[#C9A961] mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-xl mx-auto italic">Book a 30-minute case file diagnostic. No obligation. Limited to 5 audits per month.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10 md:gap-x-12 md:gap-y-12">
            <div className="border-b border-gray-200 pb-4">
              <input type="text" placeholder="your name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full bg-transparent outline-none hims-heading text-lg lowercase placeholder:text-gray-300" />
            </div>
            <div className="border-b border-gray-200 pb-4">
              <input type="text" placeholder="firm name" value={firm} onChange={(e) => setFirm(e.target.value)} required className="w-full bg-transparent outline-none hims-heading text-lg lowercase placeholder:text-gray-300" />
            </div>
            <div className="border-b border-gray-200 pb-4">
              <input type="email" placeholder="email address" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-transparent outline-none hims-heading text-lg lowercase placeholder:text-gray-300" />
            </div>
            <div className="border-b border-gray-200 pb-4">
              <select value={timeDrain} onChange={(e) => setTimeDrain(e.target.value)} className="w-full bg-transparent outline-none hims-heading text-lg lowercase appearance-none text-gray-800">
                <option>biggest time drain: data entry</option>
                <option>file updates</option>
                <option>client communication</option>
                <option>other</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center pt-8">
            <button type="submit" className="px-8 py-4 sm:px-12 sm:py-5 lg:px-16 lg:py-6 bg-gray-900 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#C9A961] transition-all">
              Schedule Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AuditForm;
