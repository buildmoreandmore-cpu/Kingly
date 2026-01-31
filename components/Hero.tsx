
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col-reverse md:flex-row bg-white overflow-hidden">
      {/* Content Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-24 bg-white">
        <div className="max-w-xl">
          <h1 className="hims-heading text-3xl sm:text-5xl lg:text-[5.5rem] mb-6 sm:mb-8 lg:mb-12 lowercase">
            ai-driven intelligence <br />for legal ops
          </h1>

          <div className="flex items-start gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 lg:mb-16">
            <div className="w-12 h-[2px] bg-gray-900 mt-4 flex-shrink-0"></div>
            <p className="text-lg lg:text-xl text-gray-800 leading-relaxed font-medium">
              With deep legal operations experience, I help law firms transform document intelligence and automate workflows. From medical records to matter routing—AI that actually understands your work.
            </p>
          </div>

          <a href="#audit" className="hims-link">
            Get Started
          </a>
        </div>
      </div>

      {/* Image Side */}
      <div className="w-full md:w-1/2 relative bg-neutral-warm min-h-[60vh] md:min-h-0">
        <img
          src="/camisha-alford.png"
          alt="Camisha Alford"
          className="absolute inset-0 h-full w-full object-cover object-top"
          style={{ imageRendering: 'auto' }}
        />

        {/* Bio Tag - Positioned at bottom */}
        <div className="absolute bottom-4 sm:bottom-8 left-0 bg-[#E8E2D9] p-4 sm:p-6 lg:p-8 w-[90%] sm:w-[85%] max-w-md shadow-sm">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Camisha Alford</h3>
          <p className="text-gray-600 text-xs sm:text-sm font-medium tracking-wide uppercase">Founder, Kingly Consulting LLC | AI Legal Ops</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
