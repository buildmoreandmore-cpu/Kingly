
import React from 'react';
import { Phone, Mail, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A2B4A] text-white pt-12 sm:pt-16 lg:pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-6">
              <div className="bg-white rounded-lg p-3 inline-block">
                <img
                  src="/kingly-logo.png"
                  alt="Kingly Consulting"
                  className="h-40 sm:h-52 lg:h-64 w-auto"
                />
              </div>
              <span className="block mt-3 text-xs tracking-widest text-slate-500 uppercase font-semibold">Legal Operations & AI Strategy</span>
            </div>
            <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
              Specializing in AI-powered case file automation and workflow optimization 
              built on real-world legal operations expertise.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/camisha-alford-a3264828" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#C9A961] transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#C9A961]">Contact Info</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center gap-3 text-slate-400">
                <Phone size={18} className="text-[#C9A961]" />
                <a href="tel:7703100670" className="hover:text-white transition-colors">(770) 310-0670</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail size={18} className="text-[#C9A961]" />
                <a href="mailto:camisha@kingly-consulting4u.com" className="hover:text-white transition-colors text-sm truncate">camisha@kingly-consulting4u.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#C9A961]">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#problem" className="text-slate-400 hover:text-white transition-colors">Who This Is For</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#difference" className="text-slate-400 hover:text-white transition-colors">The Difference</a></li>
              <li><a href="#audit" className="text-slate-400 hover:text-white transition-colors">Free Audit</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Kingly Consulting LLC. All rights reserved.
          </p>
          <div className="flex flex-col items-center md:items-end">
            <span className="tagline-font text-xl text-[#C9A961]">"Your Best Interests. My Only Mission."</span>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-[#C9A961] transition-colors"
            >
              Back to top <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
