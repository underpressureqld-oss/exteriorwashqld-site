import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Home,
  Hammer,
  Building2,
  Droplets,
  Frame as Roof,
  Sun,
  ArrowRight
} from 'lucide-react';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import QuoteButton from '@/components/QuoteButton.jsx';

const ServicesPage = () => {
  const baseUrl = 'https://www.exteriorwashqld.com.au';

  const services = [
    {
      icon: Home,
      title: 'House Washing',
      description: 'Professional exterior house washing to safely remove mould, dirt, algae and grime. Restore the appearance of your home with professional cleaning methods.',
      link: '/house-washing'
    },
    {
      icon: Droplets,
      title: 'Driveway Cleaning',
      description: 'High-pressure driveway and concrete cleaning to remove stains, dirt and years of built-up grime for a fresh, clean finish.',
      link: '/driveway-cleaning'
    },
    {
      icon: Roof,
      title: 'Roof Cleaning',
      description: 'Low-pressure roof cleaning to remove moss, lichen, algae and black streaks while helping protect and restore your roof.',
      link: '/roof-cleaning'
    },
    {
      icon: Sun,
      title: 'Solar Panel Cleaning',
      description: 'Professional solar panel cleaning to remove dust, dirt and grime and help maximise energy efficiency and system performance.',
      link: '/solar-panel-cleaning'
    },
    {
      icon: Hammer,
      title: 'Gutter Cleaning',
      description: 'Safe and effective gutter clearing to prevent water damage, protect foundations, and ensure proper drainage during heavy rain.',
      link: '/gutter-cleaning'
    },
    {
      icon: Building2,
      title: 'Commercial Cleaning',
      description: 'Professional pressure cleaning for storefronts, commercial buildings, pathways and outdoor business areas.',
      link: '/commercial-cleaning'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Professional Pressure Cleaning Services | Exterior Wash QLD</title>
        <meta name="description" content="Explore our pressure cleaning services in Brisbane & Sunshine Coast, including driveways, roofs, house washing, and commercial exterior cleaning." />
        <link rel="canonical" href={`${baseUrl}/services`} />
        <meta property="og:title" content="Professional Pressure Cleaning Services | Exterior Wash QLD" />
        <meta property="og:description" content="Explore our pressure cleaning services in Brisbane & Sunshine Coast, including driveways, roofs, house washing, and commercial exterior cleaning." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" />
        <meta property="og:image:alt" content="Exterior Wash QLD pressure cleaning services" />
        <meta property="og:url" content={`${baseUrl}/services`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Pressure Cleaning Services | Exterior Wash QLD" />
        <meta name="twitter:description" content="Explore our pressure cleaning services in Brisbane & Sunshine Coast, including driveways, roofs, house washing, and commercial exterior cleaning." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" />
        <meta name="twitter:image:alt" content="Exterior Wash QLD pressure cleaning services" />
      </Helmet>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-slate-950 text-white pt-20 pb-24 lg:pt-28 lg:pb-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-60"></div>
          <div className="section-container text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-balance">
                Our Services
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed text-balance">
                Comprehensive pressure cleaning and exterior maintenance solutions tailored for Queensland properties.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-spacing bg-muted/20">
          <div className="section-container">
            {services.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="h-full flex flex-col">
                    <ServiceCard
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      index={index}
                    />
                    {service.link && (
                      <Link 
                        to={service.link}
                        className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors ml-2 group"
                      >
                        View Service Details <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-card rounded-2xl border border-border">
                <p className="text-muted-foreground text-lg">Loading services...</p>
              </div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mt-16"
            >
              <QuoteButton className="text-lg px-8 py-4 shadow-lg shadow-primary/20" />
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-spacing bg-card border-t border-border">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground text-balance">
                Why choose Exterior Wash QLD?
              </h2>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  We use professional-grade equipment and safe cleaning methods to deliver reliable, high-quality results for residential and commercial properties across Brisbane and the Sunshine Coast.
                </p>
                <p>
                  Whether you need comprehensive driveway cleaning, sensitive roof restoration, or regular commercial maintenance, our fully insured and police-checked team is ready to help with fast quotes and reliable service.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;