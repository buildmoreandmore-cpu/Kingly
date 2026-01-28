
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col md:flex-row bg-white overflow-hidden">
      {/* Content Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 lg:p-24 bg-white">
        <div className="max-w-xl">
          <h1 className="hims-heading text-6xl lg:text-[5.5rem] mb-12 lowercase">
            consult with <br />a provider
          </h1>
          
          <div className="flex items-start gap-6 mb-16">
            <div className="w-12 h-[2px] bg-gray-900 mt-4 flex-shrink-0"></div>
            <p className="text-lg lg:text-xl text-gray-800 leading-relaxed font-medium">
              We’ll connect you directly to Camisha Alford—a legal operations expert with 17 years in the trenches—so you don't have to spend hours figuring out how to scale. You'll discuss your workflow symptoms and actionable AI treatment options.
            </p>
          </div>

          <a href="#audit" className="hims-link">
            Get Started
          </a>
        </div>
      </div>

      {/* Image Side */}
      <div className="w-full md:w-1/2 relative bg-neutral-warm">
        <div className="absolute inset-0 flex items-end justify-center">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
            alt="Camisha Alford" 
            className="h-full w-full object-cover object-center grayscale-[0.2]"
          />
        </div>
        
        {/* Bio Tag - Floating over the neutral background area */}
        <div className="absolute top-[15%] left-0 bg-[#E8E2D9] p-8 lg:p-12 w-[80%] max-w-sm shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-1">Camisha Alford</h3>
          <p className="text-gray-600 text-sm font-medium tracking-wide uppercase">Founder, Kingly Consulting LLC | AI Legal Ops</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
