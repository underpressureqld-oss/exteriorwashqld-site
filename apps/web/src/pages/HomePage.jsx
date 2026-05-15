import React from 'react';
import { Helmet } from 'react-helmet';
import { CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import QuoteButton from '@/components/QuoteButton.jsx';
import SocialProof from '@/components/SocialProof.jsx';
import ComparisonSection from '@/components/ComparisonSection.jsx';
import BeforeAfterSlider from '@/components/BeforeAfterSlider.jsx';
import ReviewWidget from '@/components/ReviewWidget.jsx';
import { suburbs, services } from '../data/suburbServiceData.js';

const HomePage = () => {
  const baseUrl = 'https://www.exteriorwashqld.com.au';

  // Dynamic internal links (optional section for SEO)
  const dynamicLinks = Object.keys(services).map(serviceId =>
    Object.keys(suburbs).map(suburbId => {
      const serviceName = services[serviceId].name;
      const suburbName = suburbs[suburbId].name;
      const slug = `${serviceId}-${suburbId}`;
      return (
        <li key={slug}>
          <a href={`/${slug}`} title={`${serviceName} in ${suburbName}`} className="text-primary hover:underline">
            {serviceName} {suburbName}
          </a>
        </li>
      );
    })
  );

  return (
    <>
      <Helmet>
        <title>Pressure Cleaning Brisbane & Sunshine Coast | Exterior Wash QLD</title>
        <meta
          name="description"
          content="Pressure cleaning in Brisbane & Sunshine Coast. Driveways, roofs, gutters, solar panels. Fully insured. Call 0468 848 342 for free quotes!"
        />
        <link rel="canonical" href="https://www.exteriorwashqld.com.au/" />
        <meta property="og:title" content="Pressure Cleaning Brisbane & Sunshine Coast | Exterior Wash QLD" />
        <meta property="og:description" content="Pressure cleaning in Brisbane & Sunshine Coast. Driveways, roofs, gutters, solar panels. Fully insured. Call 0468 848 342 for free quotes!" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/29891a98-b64e-4d1a-a351-176254719b39/ba7da534f8b455c6f65783b8ba20c7b7.jpg" />
        <meta property="og:image:alt" content="Exterior Wash QLD pressure cleaning hero preview" />
        <meta property="og:url" content="https://www.exteriorwashqld.com.au/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pressure Cleaning Brisbane & Sunshine Coast | Exterior Wash QLD" />
        <meta name="twitter:description" content="Pressure cleaning in Brisbane & Sunshine Coast. Driveways, roofs, gutters, solar panels. Fully insured. Call 0468 848 342 for free quotes!" />
        <meta name="twitter:image" content="https://horizons-cdn.hostinger.com/29891a98-b64e-4d1a-a351-176254719b39/ba7da534f8b455c6f65783b8ba20c7b7.jpg" />
        <meta name="twitter:image:alt" content="Exterior Wash QLD pressure cleaning hero preview" />
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
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -27.4698,
                "longitude": 153.0251
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                "opens": "07:00",
                "closes": "18:00"
              }
            }
          `}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="hero-critical">
        <picture>
          <source 
            media="(max-width: 768px)"
            srcSet="https://horizons-cdn.hostinger.com/29891a98-b64e-4d1a-a351-176254719b39/ba7da534f8b455c6f65783b8ba20c7b7.jpg" 
            type="image/webp" 
          />
          <img 
            src="https://horizons-cdn.hostinger.com/29891a98-b64e-4d1a-a351-176254719b39/ba7da534f8b455c6f65783b8ba20c7b7.jpg" 
            alt="Professional pressure cleaning service" 
            fetchPriority="high"
            decoding="sync"
            width="1920"
            height="1080"
            className="hero-critical-img"
          />
        </picture>

        <div className="hero-critical-content">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight text-balance">
            Professional Exterior Cleaning Brisbane & Sunshine Coast
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Driveways, Roofs, Gutters, Solar Panels, House Washes & Commercial Cleaning. Fully insured & Police checked.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <QuoteButton className="text-lg px-8 py-4" onClick={() => window.gtag && window.gtag('event', 'click_quote_hero')} />
            <a 
              href="tel:0468848342" 
              onClick={() => window.gtag && window.gtag('event', 'click_call_hero')} 
              className="inline-flex items-center justify-center bg-white/10 text-white rounded-xl px-8 py-4 font-semibold border border-white/20"
            >
              Call 0468 848 342
            </a>
          </div>
        </div>
      </section>

      <SocialProof />
      <ComparisonSection />

      {/* SEO Section: Why Choose Us */}
      <section className="section-spacing bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground text-balance">
                Why Choose Exterior Wash QLD for Your Exterior Cleaning?
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed prose-blog">
                <p>
                  Maintaining the exterior of your property is essential for curb appeal and long-term integrity. We provide top-tier <strong>Brisbane pressure cleaning</strong> and <strong>Sunshine Coast pressure cleaning</strong> services.
                </p>
                <ul className="not-prose space-y-3 mt-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">Fully insured & police checked team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">Commercial-grade professional equipment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">Fast quotes within 24 hours</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <BeforeAfterSlider 
                beforeImage="/roof-after.jpg" 
                afterImage="/roof-after.jpg" 
                altText="Roof cleaning before and after"
              />
              <p className="text-center text-sm text-muted-foreground mt-4 font-medium">Drag slider to compare before and after</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-muted/30 border-y border-border overflow-hidden">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">See why Queensland locals rate us 5 stars.</p>
          </div>
          <ReviewWidget />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;