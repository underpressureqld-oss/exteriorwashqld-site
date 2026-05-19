import { Helmet } from 'react-helmet';
import { CheckCircle2, ShieldCheck, Star, Clock, Home as HomeIcon, Hammer, Building2, Droplets, Frame as RoofIcon, Sun, Phone } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import QuoteButton from '@/components/QuoteButton.jsx';
import React, { Suspense } from 'react';
const SocialProof = React.lazy(() => import('@/components/SocialProof.jsx'));
const ComparisonSection = React.lazy(() => import('@/components/ComparisonSection.jsx'));
const BeforeAfterSlider = React.lazy(() => import('@/components/BeforeAfterSlider.jsx'));
const ReviewWidget = React.lazy(() => import('@/components/ReviewWidget.jsx'));
import { suburbs, services } from '../data/suburbServiceData.js';

const HomePage = () => {
  const baseUrl = 'https://www.exteriorwashqld.com.au';

  // Dynamic internal links for all services & suburbs (SEO benefit)
  const dynamicLinks = Object.keys(services).map(serviceId =>
    Object.keys(suburbs).map(suburbId => {
      const serviceName = services[serviceId].name;
      const suburbName = suburbs[suburbId].name;
      const slug = `${serviceId}-${suburbId}`;
      return (
        <li key={slug}>
          <a
            href={`/${slug}`}
            title={`${serviceName} in ${suburbName}`}
            className="text-primary hover:underline"
          >
            {serviceName} {suburbName}
          </a>
        </li>
      );
    })
  );

  // Flattened sample internal links (limit for homepage)
  const flattenedLinks = Object.keys(services)
    .flatMap(serviceId => Object.keys(suburbs).map(suburbId => ({
      serviceId,
      suburbId,
      serviceName: services[serviceId].name,
      suburbName: suburbs[suburbId].name,
      slug: `${serviceId}-${suburbId}`
    })))
    .slice(0, 12);

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
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How long does a roof clean take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most residential roofs take between 2–5 hours depending on size and level of growth. Coastal homes may take slightly longer due to salt and lichen build-up."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are you insured and police-checked?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes — we are fully insured and all technicians are police-checked for your peace of mind."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you use chemical cleaners?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We use safe, biodegradable cleaners where required and always recommend the least invasive method for your surface."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>

      <Header />

      <main role="main" id="main-content">

      {/* Hero Section */}
      <section className="hero-critical" aria-labelledby="hero-heading">
        {(() => {
          const hero = 'https://horizons-cdn.hostinger.com/29891a98-b64e-4d1a-a351-176254719b39/ba7da534f8b455c6f65783b8ba20c7b7.jpg?auto=format&fit=crop&q=80';
          const sizes = [480, 768, 1200, 1600, 1920];
          const buildSrcSet = (url, fmt) => sizes.map(w => `${url}${url.includes('?') ? '&' : '?'}w=${w}${fmt ? '&fm=' + fmt + '&q=80' : ''} ${w}w`).join(', ');
          const webpSrcSet = buildSrcSet(hero, 'webp');
          const fallbackSrcSet = buildSrcSet(hero, '');
          return (
            <picture>
              <source type="image/webp" srcSet={webpSrcSet} />
              <img src={hero} srcSet={fallbackSrcSet} sizes="(max-width: 768px) 100vw, 1200px" alt="Professional pressure cleaning service" fetchpriority="high" decoding="async" width="1920" height="1080" className="hero-critical-img" />
            </picture>
          );
        })()}

        <div className="hero-critical-content">
          <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight text-balance">
            Transform Your Property's Exterior Today
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-4 max-w-3xl mx-auto leading-relaxed">
            Professional pressure cleaning in Brisbane & Sunshine Coast. Driveways, roofs, gutters, solar panels & more.
          </p>
          <p className="text-lg md:text-xl text-primary font-semibold mb-10 max-w-3xl mx-auto">
            Get your FREE quote within 24 hours — No obligation, just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <QuoteButton className="text-lg px-8 py-4" onClick={() => window.gtag && window.gtag('event', 'click_quote_hero')} />
            <a 
              href="tel:0468848342" 
              onClick={() => window.gtag && window.gtag('event', 'click_call_hero')} 
              className="inline-flex items-center justify-center bg-white/10 text-white rounded-xl px-8 py-4 font-semibold border border-white/20 hover:bg-white/20 transition-all duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call 0468 848 342
            </a>
          </div>

          {/* Trust badges under CTAs */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center items-center text-sm text-slate-200">
            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> Fully Insured</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Police Checked</div>
            <div className="flex items-center gap-2"><Star className="w-5 h-5 text-primary" /> 5 Star Rated</div>
            <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /> 24hr Quotes</div>
          </div>
          
          {/* Urgency banner */}
          <div className="mt-6 inline-block bg-primary/20 border border-primary/40 rounded-lg px-6 py-3">
            <p className="text-white text-sm font-medium">
              🔥 Limited availability this week — Book now to secure your spot
            </p>
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA bar */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden z-50">
        <div className="bg-foreground/95 rounded-xl shadow-lg flex items-center gap-3 px-3 py-2">
          <a href="tel:0468848342" className="bg-primary text-white px-4 py-2 rounded-lg font-semibold flex-1 text-center">Call Now</a>
          <QuoteButton className="px-4 py-2 rounded-lg flex-1" onClick={() => window.gtag && window.gtag('event', 'click_quote_mobile')}>
            Get Free Quote
          </QuoteButton>
        </div>
      </div>

      <Suspense fallback={<div className="section-container">Loading...</div>}>
        <SocialProof />
        <ComparisonSection />
      </Suspense>

      {/* Quick Services Grid */}
      <section className="section-spacing" aria-labelledby="services-heading">
        <div className="section-container">
          <h2 id="services-heading" className="text-2xl md:text-3xl font-bold mb-6">Our Services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {Object.keys(services).map((key, idx) => {
              const IconMap = {
                'pressure-cleaning': Droplets,
                'roof-cleaning': RoofIcon,
                'driveway-cleaning': Droplets,
                'house-washing': HomeIcon,
                'solar-panel-cleaning': Sun,
                'gutter-cleaning': Hammer,
                'commercial-cleaning': Building2
              };
              const Icon = IconMap[key] || Droplets;
              return (
                <a key={key} href={`/${key}`} className="service-card p-4 bg-card rounded-lg flex flex-col items-center text-center hover:shadow-md">
                  <div className="bg-primary/10 text-primary p-3 rounded-xl w-fit mb-3">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="font-semibold text-foreground">{services[key].name}</div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Area Map & Links */}
      <section className="section-spacing bg-background" aria-labelledby="service-areas-heading">
        <div className="section-container">
          <div className="md:flex md:items-center md:gap-8">
            <div className="md:flex-1">
              <h2 id="service-areas-heading" className="text-2xl md:text-3xl font-bold mb-4">Service Areas — Brisbane & Sunshine Coast</h2>
              <p className="text-muted-foreground mb-4">We service Brisbane, Bribie Island, Caboolture, Sunshine Coast and surrounding suburbs. Select your suburb for a tailored quote.</p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                {flattenedLinks.map(l => (
                  <li key={l.slug}><a href={`/${l.slug}`} className="text-primary hover:underline">{l.serviceName} — {l.suburbName}</a></li>
                ))}
              </ul>
            </div>

            <div className="md:w-96 mt-6 md:mt-0">
              <a href="/service-area" className="block rounded-lg overflow-hidden shadow-md bg-gradient-to-br from-blue-50 to-teal-50 p-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" className="w-full h-auto" style={{minHeight: '200px'}} role="img" aria-label="Service area map Brisbane and Sunshine Coast">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1">
                      <stop offset="0%" stopColor="#dbeafe" />
                      <stop offset="100%" stopColor="#e6fffa" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#g1)" rx="8"/>
                  <path d="M120 420 C200 300 340 280 480 320 C620 360 760 320 880 260 C980 210 1060 180 1100 150 L1100 450 L120 450 Z" fill="#bfdbfe" stroke="#60a5fa" strokeWidth="2" opacity="0.95"/>
                  <circle cx="300" cy="350" r="8" fill="#2563eb" />
                  <circle cx="520" cy="330" r="8" fill="#2563eb" />
                  <circle cx="760" cy="300" r="8" fill="#2563eb" />
                  <text x="260" y="240" fill="#0f1724" fontSize="20" fontWeight="bold">Brisbane</text>
                  <text x="260" y="262" fill="#334155" fontSize="14">We cover inner &amp; outer suburbs</text>
                  <text x="680" y="220" fill="#0f1724" fontSize="20" fontWeight="bold">Sunshine Coast</text>
                  <text x="680" y="242" fill="#334155" fontSize="14">From Caloundra to Noosa</text>
                  <g transform="translate(40,40)">
                    <rect x="0" y="0" width="220" height="110" rx="8" fill="#ffffffcc" stroke="#e2e8f0"/>
                    <text x="16" y="28" fill="#0f1724" fontSize="20" fontWeight="bold">Service Area</text>
                    <circle cx="20" cy="58" r="8" fill="#2563eb" />
                    <text x="36" y="62" fill="#334155" fontSize="14">Priority suburbs</text>
                    <rect x="16" y="76" width="12" height="12" fill="#bfdbfe" stroke="#60a5fa"/>
                    <text x="36" y="86" fill="#334155" fontSize="14">Coverage area</text>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Section: Why Choose Us */}
      <section className="section-spacing bg-background" aria-labelledby="why-choose-heading">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="why-choose-heading" className="text-3xl md:text-4xl font-bold mb-6 text-foreground text-balance">
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
                beforeImage="/roof-before.jpg" 
                afterImage="/roof-after.jpg" 
                altText="Roof cleaning before and after"
              />
              <p className="text-center text-sm text-muted-foreground mt-4 font-medium">Drag slider to compare before and after</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-muted/30 border-y border-border overflow-hidden" aria-labelledby="reviews-heading">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 id="reviews-heading" className="text-3xl md:text-4xl font-bold mb-4 text-foreground">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">See why Queensland locals rate us 5 stars.</p>
          </div>
          <Suspense fallback={<div>Loading reviews...</div>}>
            <ReviewWidget />
          </Suspense>
        </div>
      </section>

      </main>

      <Footer />
    </>
  );
};

export default HomePage;