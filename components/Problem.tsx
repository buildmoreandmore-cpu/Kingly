
import React from 'react';

const Problem: React.FC = () => {
  return (
    <section className="py-32 bg-[#F9F7F5]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 lg:gap-20 items-center">
          <div className="w-full md:w-1/2">
            <div className="w-16 h-[2px] bg-[#C9A961] mb-6 sm:mb-8 lg:mb-12"></div>
            <h2 className="hims-heading text-3xl sm:text-4xl lg:text-7xl lowercase mb-6 sm:mb-8 lg:mb-12">
              the legal operation <br />bottleneck.
            </h2>
            <p className="text-xl text-gray-800 leading-relaxed font-medium mb-12">
              Most firms are drowning in manual data entry. It's not a lack of effort—it's a lack of leverage. We provide the leverage that turns operations from a cost center into your secret weapon.
            </p>
            <a href="#audit" className="hims-link">Identify Your Drains</a>
          </div>
          
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-[#F3EFEA] aspect-square flex flex-col items-center justify-center p-5 sm:p-6 lg:p-8 text-center">
              <span className="hims-heading text-4xl mb-4">15h</span>
              <p className="text-xs sm:text-sm uppercase font-bold tracking-widest text-gray-500">weekly average <br />hours saved</p>
            </div>
            <div className="bg-white aspect-square flex flex-col items-center justify-center p-5 sm:p-6 lg:p-8 text-center shadow-sm">
              <span className="hims-heading text-4xl mb-4">40%</span>
              <p className="text-xs sm:text-sm uppercase font-bold tracking-widest text-gray-500">faster case <br />turnaround</p>
            </div>
            <div className="bg-white aspect-square flex flex-col items-center justify-center p-5 sm:p-6 lg:p-8 text-center shadow-sm">
              <span className="hims-heading text-4xl mb-4">2x</span>
              <p className="text-xs sm:text-sm uppercase font-bold tracking-widest text-gray-500">team output <br />capacity</p>
            </div>
            <div className="bg-[#C9A961] aspect-square flex flex-col items-center justify-center p-5 sm:p-6 lg:p-8 text-center">
              <span className="hims-heading text-4xl mb-4 text-white">0</span>
              <p className="text-xs sm:text-sm uppercase font-bold tracking-widest text-white/80">manual data <br />entry needed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
