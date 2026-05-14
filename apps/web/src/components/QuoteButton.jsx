import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const QuoteButton = ({ className = '' }) => {
  return (
    <Link to="/contact">
      <Button className={`bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 group ${className}`}>
        Request a Quote
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
      </Button>
    </Link>
  );
};

export default QuoteButton;