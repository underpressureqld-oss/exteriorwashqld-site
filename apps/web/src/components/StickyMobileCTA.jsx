import React from 'react';
import { Phone, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const StickyMobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border p-3 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.05)] flex gap-3 pb-safe">
      <a 
        href="tel:0468848342" 
        className="flex-1 flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 active:scale-[0.98] transition-all duration-200 rounded-xl py-3 font-semibold text-sm"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
      <Link 
        to="/contact" 
        className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 rounded-xl py-3 font-semibold text-sm shadow-sm"
      >
        <CalendarCheck className="w-4 h-4" />
        Get Quote
      </Link>
    </div>
  );
};

export default StickyMobileCTA;