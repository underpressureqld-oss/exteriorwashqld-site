import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import GalleryItem from '@/components/GalleryItem.jsx';
import QuoteButton from '@/components/QuoteButton.jsx';

const GalleryPage = () => {
  const baseUrl = 'https://www.exteriorwashqld.com.au';

  const projects = [
    {
      title: 'Gutter & Fascia Cleaning',
      image: 'https://horizons-cdn.hostinger.com/29891a98-b64e-4d1a-a351-176254719b39/4ada1d5a243192b292cfc12a9c27cf3e.png'
    },
    {
      title: 'Metal Roof Cleaning',
      image: 'https://horizons-cdn.hostinger.com/29891a98-b64e-4d1a-a351-176254719b39/71fbffa741f4119546be70324354bf4e.png'
    },
    {
      title: 'House Exterior & Garage Cleaning',
      image: 'https://horizons-cdn.hostinger.com/29891a98-b64e-4d1a-a351-176254719b39/85249d14e5781f530f3bd5ccb2633897.png'
    },
    {
      title: 'Roof Soft Wash',
      image: 'https://horizons-cdn.hostinger.com/29891a98-b64e-4d1a-a351-176254719b39/e8ac80e40740341c167102ee5a67a848.png'
    },
    {
      title: 'Metal Roof (Soiled to Spotless)',
      image: 'https://horizons-cdn.hostinger.com/29891a98-b64e-4d1a-a351-176254719b39/d93c5c782a9cea3f0a9c231a0e181db3.png'
    },
    {
      title: 'Driveway Pressure Cleaning',
      image: 'https://images.unsplash.com/photo-1594611372993-761f31b97dae?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Gallery & Projects | Exterior Wash QLD – Pressure Cleaning Brisbane & Sunshine Coast</title>
        <meta
          name="description"
          content="View our professional pressure cleaning projects gallery across Brisbane & Sunshine Coast. Driveways, roofs, gutters, houses & solar panels restored."
        />
        <link rel="canonical" href="https://www.exteriorwashqld.com.au/gallery" />
        <meta property="og:title" content="Gallery & Projects | Exterior Wash QLD – Pressure Cleaning Brisbane & Sunshine Coast" />
        <meta property="og:description" content="View our professional pressure cleaning projects gallery across Brisbane & Sunshine Coast. Driveways, roofs, gutters, houses & solar panels restored." />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/29891a98-b64e-4d1a-a351-176254719b39/85249d14e5781f530f3bd5ccb2633897.png" />
        <meta property="og:image:alt" content="Pressure cleaning results gallery" />
        <meta property="og:url" content="https://www.exteriorwashqld.com.au/gallery" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gallery & Projects | Exterior Wash QLD – Pressure Cleaning Brisbane & Sunshine Coast" />
        <meta name="twitter:description" content="View our professional pressure cleaning projects gallery across Brisbane & Sunshine Coast. Driveways, roofs, gutters, houses & solar panels restored." />
        <meta name="twitter:image" content="https://horizons-cdn.hostinger.com/29891a98-b64e-4d1a-a351-176254719b39/85249d14e5781f530f3bd5ccb2633897.png" />
        <meta name="twitter:image:alt" content="Pressure cleaning results gallery" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Exterior Wash QLD",
              "image": "${baseUrl}/logo.png",
              "@id": "${baseUrl}",
              "url": "${baseUrl}",
              "telephone": "0468 848 342",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1234 Main Street",
                "addressLocality": "Brisbane",
                "addressRegion": "QLD",
                "postalCode": "4000",
                "addressCountry": "AU"
              }
            }
          `}
        </script>
      </Helmet>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-slate-950 text-white pt-20 pb-24 lg:pt-28 lg:pb-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-50 pointer-events-none"></div>
          <div className="section-container text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-balance">
                Our Work
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed text-balance">
                See the dramatic difference professional exterior cleaning makes for homes and businesses across Queensland.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="section-spacing bg-muted/20">
          <div className="section-container">
            {projects.length > 0 ? (
              <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 md:gap-8">
                {projects.map((project, index) => (
                  <GalleryItem
                    key={index}
                    image={project.image}
                    title={project.title}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-card rounded-2xl border border-border">
                <p className="text-muted-foreground text-lg">No gallery images available at the moment.</p>
              </div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mt-20 bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground text-balance">
                Ready to transform your property?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
                Get a free quote from Exterior Wash QLD and see how we can restore the beauty of your home or business.
              </p>
              <QuoteButton className="text-lg px-8 py-4" />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GalleryPage;