
import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 py-6">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img
            src="/kingly-logo.png"
            alt="Kingly Consulting"
            className="h-10 sm:h-12 lg:h-14 w-auto"
          />
        </a>

        <div className="hidden md:flex items-center space-x-12">
          <a href="#services" className="text-[13px] font-bold uppercase tracking-widest text-gray-900 hover:text-[#C9A961] transition-colors">expertise</a>
          <a href="#difference" className="text-[13px] font-bold uppercase tracking-widest text-gray-900 hover:text-[#C9A961] transition-colors">approach</a>
          <a href="#audit" className="text-[13px] font-bold uppercase tracking-widest text-gray-900 hover:text-[#C9A961] transition-colors">audit</a>
        </div>

        <div className="flex items-center space-x-6">
          <a href="mailto:camisha@kingly-consulting4u.com" className="text-gray-900 hover:text-[#C9A961]"><Mail size={22} strokeWidth={2.5} /></a>
          <a href="tel:7703100670" className="text-gray-900 hover:text-[#C9A961]"><Phone size={22} strokeWidth={2.5} /></a>
          <button
            className="text-gray-900 md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-6 space-y-4">
            <a
              href="#services"
              onClick={handleLinkClick}
              className="block text-[13px] font-bold uppercase tracking-widest text-gray-900 hover:text-[#C9A961] transition-colors py-2"
            >
              expertise
            </a>
            <a
              href="#difference"
              onClick={handleLinkClick}
              className="block text-[13px] font-bold uppercase tracking-widest text-gray-900 hover:text-[#C9A961] transition-colors py-2"
            >
              approach
            </a>
            <a
              href="#audit"
              onClick={handleLinkClick}
              className="block text-[13px] font-bold uppercase tracking-widest text-gray-900 hover:text-[#C9A961] transition-colors py-2"
            >
              audit
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
