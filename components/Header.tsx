
import React from 'react';
import { Menu, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 py-6">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-extrabold tracking-tighter lowercase">
            kingly<span className="text-[#C9A961]">consulting</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-12">
          <a href="#services" className="text-[13px] font-bold uppercase tracking-widest text-gray-900 hover:text-[#C9A961] transition-colors">expertise</a>
          <a href="#difference" className="text-[13px] font-bold uppercase tracking-widest text-gray-900 hover:text-[#C9A961] transition-colors">approach</a>
          <a href="#audit" className="text-[13px] font-bold uppercase tracking-widest text-gray-900 hover:text-[#C9A961] transition-colors">audit</a>
        </div>

        <div className="flex items-center space-x-6">
          <a href="mailto:camisha@kingly-consulting4u.com" className="text-gray-900 hover:text-[#C9A961]"><Mail size={22} strokeWidth={2.5} /></a>
          <a href="tel:7703100670" className="text-gray-900 hover:text-[#C9A961]"><Phone size={22} strokeWidth={2.5} /></a>
          <button className="text-gray-900 md:hidden"><Menu size={24} strokeWidth={2.5} /></button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
