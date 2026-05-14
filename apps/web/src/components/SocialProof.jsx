import React from 'react';
import { Star, CheckCircle2, Clock, Users } from 'lucide-react';

const SocialProof = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-8 border-y border-border bg-muted/20">
      <div className="flex flex-col items-center justify-center text-center p-4">
        <Star className="w-8 h-8 text-accent fill-accent mb-2" />
        <div className="text-2xl font-bold text-foreground">4.8/5</div>
        <div className="text-sm text-muted-foreground">Google Rating</div>
      </div>
      <div className="flex flex-col items-center justify-center text-center p-4">
        <CheckCircle2 className="w-8 h-8 text-primary mb-2" />
        <div className="text-2xl font-bold text-foreground">2,500+</div>
        <div className="text-sm text-muted-foreground">Jobs Completed</div>
      </div>
      <div className="flex flex-col items-center justify-center text-center p-4">
        <Clock className="w-8 h-8 text-primary mb-2" />
        <div className="text-2xl font-bold text-foreground">8+ Years</div>
        <div className="text-sm text-muted-foreground">In Business</div>
      </div>
      <div className="flex flex-col items-center justify-center text-center p-4">
        <Users className="w-8 h-8 text-primary mb-2" />
        <div className="text-2xl font-bold text-foreground">100%</div>
        <div className="text-sm text-muted-foreground">Local QLD Team</div>
      </div>
    </div>
  );
};

export default SocialProof;