import { Helmet } from 'react-helmet';
import {
  CheckCircle2,
  ShieldCheck,
  Star,
  Clock,
  Home as HomeIcon,
  Hammer,
  Building2,
  Droplets,
  Frame as RoofIcon,
  Sun,
  Phone
} from 'lucide-react';

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

  const flattenedLinks = Object.keys(services)
    .flatMap(serviceId =>
      Object.keys(suburbs).map(suburbId => ({
        serviceId,
        suburbId,
        serviceName: services[serviceId].name,
        suburbName: suburbs[suburbId].name,
        slug: `${serviceId}-${suburbId}`
      }))
    )
    .slice(0, 12);

  return (
    <>
      <Helmet>
        <title>
          Pressure Cleaning Brisbane & Sunshine Coast | Exterior Wash QLD
        </title>

        <meta
          name="description"
          content="Professional pressure cleaning and soft washing across Brisbane & Sunshine Coast. Roof cleaning, driveway cleaning, house washing, solar panel cleaning and commercial exterior cleaning."
        />

        <link rel="canonical" href="https://www.exteriorwashqld.com.au/" />

        <meta
          property="og:title"
          content="Pressure Cleaning Brisbane & Sunshine Coast | Exterior Wash QLD"
        />

        <meta
          property="og:description"
          content="Professional pressure cleaning and soft washing across Brisbane & Sunshine Coast."
        />

        <meta
          property="og:image"
          content="https://horizons-cdn.hostinger.com/29891a98-b64e-4d1a-a351-176254719b39/ba7da534f8b455c6f65783b8ba20c7b7.jpg"
        />

        <meta
          property="og:url"
          content="https://www.exteriorwashqld.com.au/"
        />

        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Exterior Wash QLD",
              "url": "${baseUrl}",
              "telephone": "0468 848 342",
              "areaServed": [
                "Brisbane",
                "Sunshine Coast",
                "Moreton Bay",
                "North Lakes",
                "Caboolture",
                "Bribie Island"
              ],
              "priceRange": "$$"
            }
          `}
        </script>
      </Helmet>

      <Header />

      <main role="main" id="main-content">

        {/* HERO */}
        <section
          className="hero-critical"
          aria-labelledby="hero-heading"
        >
          <img
            src="https://horizons-cdn.hostinger.com/29891a98-b64e-4d1a-a351-176254719b39/ba7da534f8b455c6f65783b8ba20c7b7.jpg?auto=format&fit=crop&q=80"
            srcSet="https://horizons-cdn.hostinger.com/29891a98-b64e-4d1a-a351-176254719b39/ba7da534f8b455c6f65783b8ba20c7b7.jpg?auto=format&fit=crop&q=80&w=600 600w, https://horizons-cdn.hostinger.com/29891a98-b64e-4d1a-a351-176254719b39/ba7da534f8b455c6f65783b8ba20c7b7.jpg?auto=format&fit=crop&q=80&w=768 768w, https://horizons-cdn.hostinger.com/29891a98-b64e-4d1a-a351-176254719b39/ba7da534f8b455c6f65783b8ba20c7b7.jpg?auto=format&fit=crop&q=80&w=1200 1200w, https://horizons-cdn.hostinger.com/29891a98-b64e-4d1a-a351-176254719b39/ba7da534f8b455c6f65783b8ba20c7b7.jpg?auto=format&fit=crop&q=80&w=1920 1920w"
            sizes="(max-width: 768px) 100vw, 1200px"
            alt="Professional pressure cleaning service"
            fetchpriority="high"
            decoding="async"
            width="1920"
            height="1080"
            className="hero-critical-img"
          />

          <div className="hero-critical-content">

            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight text-balance"
            >
              Professional Pressure Cleaning Brisbane & Sunshine Coast
            </h1>

            <p className="text-xl md:text-2xl text-slate-200 mb-4 max-w-3xl mx-auto leading-relaxed">
              House washing, roof cleaning, driveway pressure cleaning,
              solar panel cleaning and commercial exterior cleaning services.
            </p>

            <p className="text-lg md:text-xl text-primary font-semibold mb-10 max-w-3xl mx-auto">
              FREE quotes within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

              <QuoteButton className="text-lg px-8 py-4" />

              <a
                href="tel:0468848342"
                className="inline-flex items-center justify-center bg-white/10 text-white rounded-xl px-8 py-4 font-semibold border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 0468 848 342
              </a>

            </div>

            <div className="mt-8 flex flex-wrap gap-4 justify-center items-center text-sm text-slate-200">

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                Fully Insured
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Police Checked
              </div>

              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                5 Star Rated
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Fast Quotes
              </div>

            </div>
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <Suspense fallback={<div>Loading...</div>}>
          <SocialProof />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <ComparisonSection />
        </Suspense>

        {/* SERVICES */}
        <section
          className="section-spacing"
          aria-labelledby="services-heading"
        >
          <div className="section-container">

            <h2
              id="services-heading"
              className="text-3xl md:text-4xl font-bold mb-10"
            >
              Exterior Cleaning Services
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

              {Object.keys(services).map(key => {

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
                  <a
                    key={key}
                    href={`/${key}`}
                    className="service-card p-4 bg-card rounded-lg flex flex-col items-center text-center hover:shadow-md"
                  >
                    <div className="bg-primary/10 text-primary p-3 rounded-xl w-fit mb-3">
                      <Icon className="w-8 h-8" />
                    </div>

                    <div className="font-semibold text-foreground">
                      {services[key].name}
                    </div>
                  </a>
                );
              })}

            </div>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section
          className="section-spacing bg-background"
          aria-labelledby="service-areas-heading"
        >
          <div className="section-container">

            <h2
              id="service-areas-heading"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Brisbane & Sunshine Coast Service Areas
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-4xl">
              We proudly provide professional pressure cleaning and soft washing
              services across Brisbane, Moreton Bay and Sunshine Coast suburbs
              including North Lakes, Redcliffe, Caboolture, Bribie Island,
              Caloundra and Maroochydore.
            </p>

            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">

              {flattenedLinks.map(l => (
                <li key={l.slug}>
                  <a
                    href={`/${l.slug}`}
                    className="text-primary hover:underline"
                  >
                    {l.serviceName} — {l.suburbName}
                  </a>
                </li>
              ))}

            </ul>
          </div>
        </section>

        {/* SEO CONTENT */}
        <section
          className="section-spacing bg-background"
          aria-labelledby="why-choose-heading"
        >
          <div className="section-container">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              <div>

                <h2
                  id="why-choose-heading"
                  className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
                >
                  Why Choose Exterior Wash QLD?
                </h2>

                <div className="space-y-6 text-muted-foreground leading-relaxed prose-blog">

                  <p>
                    Exterior Wash QLD provides professional pressure cleaning,
                    soft washing and exterior cleaning services throughout
                    Brisbane, Moreton Bay and the Sunshine Coast.
                  </p>

                  <p>
                    We remove mould, algae, mildew, dirt, lichen and grime
                    from roofs, driveways, houses, render, solar panels
                    and commercial buildings using professional-grade equipment.
                  </p>

                  <p>
                    Queensland’s climate creates the perfect conditions for
                    exterior organic growth. Without regular cleaning,
                    mould and algae can permanently stain surfaces and
                    reduce property value.
                  </p>

                  <p>
                    Our soft washing systems safely clean delicate exterior
                    surfaces without causing unnecessary pressure damage.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 pt-4">

                    <a
                      href="/house-washing"
                      className="bg-card border border-border rounded-xl px-5 py-4 hover:border-primary transition"
                    >
                      <h3 className="font-semibold text-foreground mb-1">
                        House Washing
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        Safe soft washing for painted homes and render.
                      </p>
                    </a>

                    <a
                      href="/roof-cleaning"
                      className="bg-card border border-border rounded-xl px-5 py-4 hover:border-primary transition"
                    >
                      <h3 className="font-semibold text-foreground mb-1">
                        Roof Cleaning
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        Remove mould, algae and lichen safely.
                      </p>
                    </a>

                    <a
                      href="/driveway-cleaning"
                      className="bg-card border border-border rounded-xl px-5 py-4 hover:border-primary transition"
                    >
                      <h3 className="font-semibold text-foreground mb-1">
                        Driveway Cleaning
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        Restore concrete and pathways professionally.
                      </p>
                    </a>

                    <a
                      href="/commercial-cleaning"
                      className="bg-card border border-border rounded-xl px-5 py-4 hover:border-primary transition"
                    >
                      <h3 className="font-semibold text-foreground mb-1">
                        Commercial Cleaning
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        Professional commercial exterior cleaning services.
                      </p>
                    </a>

                  </div>

                  <ul className="not-prose space-y-3 mt-8">

                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">
                        Fully insured & police checked
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">
                        Commercial-grade equipment
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">
                        Safe soft washing systems
                      </span>
                    </li>

                  </ul>

                </div>
              </div>

              <div className="relative">

                <Suspense fallback={<div>Loading...</div>}>

                  <BeforeAfterSlider
                    beforeImage="/roof-before.svg"
                    afterImage="/roof-after.jpg"
                    altText="Roof cleaning before and after"
                  />

                </Suspense>

              </div>

            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section
          className="section-spacing bg-muted/30 border-y border-border overflow-hidden"
          aria-labelledby="reviews-heading"
        >
          <div className="section-container">

            <div className="text-center mb-12">

              <h2
                id="reviews-heading"
                className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
              >
                What Our Customers Say
              </h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See why Queensland locals rate us 5 stars.
              </p>

            </div>

            <Suspense fallback={<div>Loading reviews...</div>}>
              <ReviewWidget />
            </Suspense>

          </div>
        </section>

        {/* FAQ */}
        <section className="section-spacing bg-background border-t border-border">

          <div className="section-container max-w-5xl">

            <div className="text-center mb-12">

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Frequently Asked Questions
              </h2>

              <p className="text-lg text-muted-foreground">
                Common questions about pressure cleaning and soft washing.
              </p>

            </div>

            <div className="space-y-6">

              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  What is soft washing?
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Soft washing uses low-pressure cleaning systems designed
                  for delicate surfaces like painted exteriors, roofs and render.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Do you service Brisbane and Sunshine Coast?
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Yes — we service Brisbane, Moreton Bay, Bribie Island,
                  Caboolture, Caloundra, Maroochydore and surrounding areas.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  How often should I pressure clean my property?
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Most properties benefit from professional exterior cleaning
                  every 12–24 months depending on environmental conditions.
                </p>
              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
};

export default HomePage;