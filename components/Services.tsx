
import React from 'react';

const services = [
  {
    title: "case file automation",
    description: "Eliminate repetitive data entry and keep all files current automatically. Our AI systems are built by a case manager, for case managers.",
    tag: "15+ hours back weekly"
  },
  {
    title: "workflow optimization",
    description: "Identify bottlenecks and streamline your process across departments. 40-60% faster case turnaround guaranteed.",
    tag: "Scale 2-3x output"
  },
  {
    title: "ai integration",
    description: "Tools designed for practice, not just theory. Fits perfectly into your existing systems with zero friction.",
    tag: "ROI in 60 days"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#F9F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24">
          <div className="max-w-2xl">
            <h2 className="hims-heading text-4xl lg:text-6xl lowercase mb-4 sm:mb-6 lg:mb-8">how we help law firms win time back</h2>
            <p className="text-lg text-gray-600">Most consultants have never managed a case. I spent 17 years doing exactly what your team does every day.</p>
          </div>
          <div className="hidden lg:block">
            <a href="#audit" className="hims-link">View all services</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-24">
          {services.map((service, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="w-full h-1 bg-gray-200 mb-10 group-hover:bg-[#C9A961] transition-colors"></div>
              <h3 className="hims-heading text-2xl lowercase mb-6">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 lg:mb-8">{service.description}</p>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C9A961]">{service.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
