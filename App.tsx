
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  ChevronRight, 
  Menu, 
  X, 
  Activity, 
  Users, 
  Zap, 
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Cpu
} from 'lucide-react';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Story from './components/Story';
import Services from './components/Services';
import Difference from './components/Difference';
import ROICalculator from './components/ROICalculator';
import AuditForm from './components/AuditForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showExitIntent, setShowExitIntent] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowExitIntent(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Header />
      
      <main>
        <Hero />
        <Problem />
        <Story />
        <Services />
        <ROICalculator />
        <Difference />
        <AuditForm />
      </main>

      <Footer />

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden">
        <a 
          href="tel:7703100670" 
          className="flex items-center justify-center w-full bg-[#C9A961] text-white py-4 rounded-xl shadow-2xl font-bold gap-2 animate-pulse hover:animate-none"
        >
          <Phone size={20} />
          Call (770) 310-0670
        </a>
      </div>

      {/* Exit Intent Modal */}
      {showExitIntent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy-dark/80 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-lg relative shadow-2xl border-t-4 border-[#C9A961]">
            <button 
              onClick={() => setShowExitIntent(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X size={24} />
            </button>
            <div className="text-center">
              <span className="bg-[#C9A961]/10 text-[#C9A961] px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                Wait Before You Go
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Free Guide: 5 Signs Your Case Management Needs AI</h3>
              <p className="text-slate-600 mb-6">
                Don't leave without learning the critical red flags that are costing your firm thousands in wasted billable hours every month.
              </p>
              <div className="flex flex-col gap-3">
                <button className="bg-navy-dark text-white py-3 px-6 rounded-lg font-semibold hover:bg-navy-dark/90 transition-all flex items-center justify-center gap-2">
                  Download Free Guide <ArrowRight size={18} />
                </button>
                <button 
                  onClick={() => setShowExitIntent(false)}
                  className="text-slate-500 text-sm hover:underline"
                >
                  No thanks, I'm just browsing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
