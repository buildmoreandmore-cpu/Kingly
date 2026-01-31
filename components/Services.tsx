
import React from 'react';

const services = [
  {
    title: "medical record intelligence",
    description: "Instantly condense medical records, billing, and deposition transcripts into structured summaries. No more holding up demands waiting for records.",
    tag: "Never delay demands again"
  },
  {
    title: "critical date flagging",
    description: "Automatically identify and flag critical dates and parties from every document. Eliminate confusion and keep your team aligned.",
    tag: "Zero missed deadlines"
  },
  {
    title: "smart matter routing",
    description: "Automatically categorize new matters and route to the right team member by urgency and expertise. Stop the manual shuffle.",
    tag: "End overworking"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#F9F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-widest text-[#C9A961] mb-4 block">how we help law firms win</span>
            <h2 className="hims-heading text-4xl lg:text-6xl lowercase mb-4 sm:mb-6 lg:mb-8">shifting your firm from reactive legal work to proactive business management—reclaiming lapsed clients and eliminating the internal inefficiencies that drive churn</h2>
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
