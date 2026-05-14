import React from 'react';
import { Star, ExternalLink, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const reviews = [
  { id: 1, name: 'Jason M.', rating: 5, date: '2 weeks ago', text: 'Incredible job on our driveway and roof. The team was professional, on time, and left the place spotless. Highly recommend for anyone in Brisbane.', suburb: 'Brisbane' },
  { id: 2, name: 'Sarah L.', rating: 5, date: '1 month ago', text: 'Fast quote and brilliant results. Our solar panels look brand new and we are already seeing an increase in efficiency. Great local business.', suburb: 'Sunshine Coast' },
  { id: 3, name: 'David W.', rating: 5, date: '2 months ago', text: 'I tried DIY pressure washing for years and never got these results. Exterior Wash QLD removed stains I thought were permanent. Well worth it!', suburb: 'Redcliffe' },
  { id: 4, name: 'Emma T.', rating: 5, date: '3 months ago', text: 'Very polite and respectful of our property. They took care not to damage our gardens while washing the house exterior. A+ service.', suburb: 'Logan' },
  { id: 5, name: 'Michael R.', rating: 5, date: '3 months ago', text: 'Booked them for our commercial storefront. The difference is night and day. Will be setting up a regular maintenance schedule with them.', suburb: 'Gold Coast' },
];

const ReviewWidget = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
        <div className="flex items-center gap-4">
          <div className="text-5xl font-bold text-foreground">4.8</div>
          <div>
            <div className="flex text-accent mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <div className="text-sm text-muted-foreground font-medium">Based on 127 Google Reviews</div>
          </div>
        </div>
        <a 
          href="https://share.google/AwGCinhgagxa8iSQa" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-secondary gap-2 whitespace-nowrap"
          onClick={() => window.gtag && window.gtag('event', 'click_google_reviews')}
        >
          View on Google <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
        {reviews.map((review) => (
          <div key={review.id} className="min-w-[300px] md:min-w-[350px] snap-center card-elevated flex flex-col h-full bg-card">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{review.name}</div>
                  <div className="text-xs text-muted-foreground">{review.date}</div>
                </div>
              </div>
              <Quote className="w-6 h-6 text-muted-foreground/20" />
            </div>
            
            <div className="flex text-accent mb-3">
              {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
              "{review.text}"
            </p>
            
            <div className="mt-4 text-xs font-medium text-primary bg-primary/5 w-fit px-2 py-1 rounded">
              Service in {review.suburb}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewWidget;