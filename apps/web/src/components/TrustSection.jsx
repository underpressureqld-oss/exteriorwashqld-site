import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, MapPin, Clock, Star } from 'lucide-react';

const TrustSection = () => {
  const stats = [
    { icon: CheckCircle, value: '2,500+', label: 'Jobs Completed' },
    { icon: Calendar, value: '8+ years', label: 'Servicing QLD' },
    { icon: MapPin, value: '50+', label: 'Suburbs Serviced' },
    { icon: Clock, value: '24-hour', label: 'Average Quote Time' },
    { icon: Star, value: '98%', label: 'Satisfaction Rate' }
  ];

  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="trust-badge"
            >
              <div className="bg-primary/10 text-primary p-3 rounded-full mb-3">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;