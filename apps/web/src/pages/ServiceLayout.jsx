import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import QuoteButton from '@/components/QuoteButton.jsx';
import BeforeAfterSlider from '@/components/BeforeAfterSlider.jsx';
import ReviewWidget from '@/components/ReviewWidget.jsx';
import MapEmbed from '@/components/MapEmbed.jsx';

// Generate consistent slugs matching the logic in suburbServiceData.js
const generateSlug = (serviceName, suburbName) => {
  const serviceSlug = serviceName.toLowerCase().replace(/ /g, '-');
  const suburbSlug = suburbName.toLowerCase().replace(/ /g, '-');
  return `/${serviceSlug}-${suburbSlug}`;
};

// Shared layout for the specific core service pages
const ServiceLayout = ({ 
  title, 
  metaDescription, 
  heroImage, 
  serviceName, 
  description, 
  benefits, 
  process,
  beforeImage,
  afterImage,
  faqs,
  relatedSuburbs,
  mapEmbedUrl
}) => {
  const baseUrl = 'https://www.exteriorwashqld.com.au';
  const serviceSlug = serviceName.toLowerCase().replace(/\s+/g, '-');
  const canonicalUrl = `${baseUrl}/${serviceSlug}`;
  const imageAlt = `${serviceName} preview`;

  const pageFaqs = faqs && faqs.length > 0 ? faqs : [
    {
      question: `What does ${serviceName.toLowerCase()} include?`,
      answer: `Our ${serviceName.toLowerCase()} includes a full inspection, professional cleaning, and a final rinse to leave your surfaces clean and protected.`
    },
    {
      question: `How long does ${serviceName.toLowerCase()} take?`,
      answer: `Most ${serviceName.toLowerCase()} jobs are completed in a few hours depending on the size and condition of the surface.`
    },
    {
      question: `Is ${serviceName.toLowerCase()} safe for my property?`,
      answer: `Yes. We use tailored pressure, specialized equipment, and eco-friendly solutions to protect all surface types.`
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Exterior Wash QLD"
    },
    "areaServed": "Queensland",
    "description": metaDescription
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": pageFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={heroImage} />
        <meta property="og:image:alt" content={imageAlt} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={heroImage} />
        <meta name="twitter:image:alt" content={imageAlt} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-slate-950">
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt={serviceName} fetchpriority="high" decoding="async" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
          </div>
          <div className="section-container relative z-10 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight text-balance">{serviceName}</h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed text-balance">{metaDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton className="btn-primary text-lg px-8 py-4" />
              <a href="tel:0468848342" onClick={() => window.gtag && window.gtag('event', 'click_call_hero')} className="inline-flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition-all rounded-xl px-8 py-4 font-semibold backdrop-blur-sm border border-white/20 gap-2">
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </div>
        </section>

        {/* Content & Before/After */}
        <section className="section-spacing bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-balance">Professional {serviceName}</h2>
                <div className="prose prose-slate dark:prose-invert mb-8 text-muted-foreground" dangerouslySetInnerHTML={{ __html: description }} />
                <h3 className="text-xl font-semibold mb-4 text-foreground">Benefits:</h3>
                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <h3 className="text-xl font-bold mb-4 text-center">See The Difference</h3>
                <BeforeAfterSlider beforeImage={beforeImage} afterImage={afterImage} altText={serviceName} />
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-muted/30 border-y border-border">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {process.map((step, i) => (
                <div key={i} className="bg-card p-8 rounded-2xl border border-border relative z-10 transition-all hover:shadow-md hover:-translate-y-1">
                  <div className="w-12 h-12 bg-primary/10 text-primary font-bold text-xl rounded-full flex items-center justify-center mb-4">{i + 1}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 bg-muted/10 border-t border-border">
          <div className="section-container max-w-4xl mx-auto text-center">
            <p className="text-base text-muted-foreground mb-4">Want more local detail? Visit the main service page or return to the homepage.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/" className="inline-flex items-center justify-center rounded-full border border-primary px-5 py-3 text-sm font-semibold text-primary hover:bg-primary/10 transition">Homepage</Link>
              <Link to={`/${serviceSlug}`} className="inline-flex items-center justify-center rounded-full border border-primary px-5 py-3 text-sm font-semibold text-primary hover:bg-primary/10 transition">{serviceName} Page</Link>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="section-spacing bg-background overflow-hidden">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
            <ReviewWidget />
          </div>
        </section>

        {/* Service FAQ */}
        <section className="py-16 bg-card border-t border-border">
          <div className="section-container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {pageFaqs.map((faq, index) => (
                <details key={index} className="group bg-background border border-border rounded-2xl overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-foreground hover:bg-muted/50 transition-colors">
                    {faq.question}
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground leading-relaxed border-t border-border/50 mt-2">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area Map */}
        {mapEmbedUrl && (
          <section className="py-16 bg-muted/30 border-t border-border">
            <div className="section-container max-w-5xl">
              <h2 className="text-3xl font-bold text-center mb-8">Our Service Area</h2>
              <MapEmbed embedUrl={mapEmbedUrl} title={`Service Area for ${serviceName}`} />
            </div>
          </section>
        )}

        {/* Related Areas */}
        <section className="py-16 bg-muted/50 border-t border-border">
          <div className="section-container max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">Service Areas for {serviceName}</h2>
            <div className="flex flex-wrap gap-3">
              {relatedSuburbs.map(suburb => (
                <Link 
                  key={suburb} 
                  to={generateSlug(serviceName, suburb)} 
                  className="bg-card px-4 py-2 rounded-full border border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors flex items-center gap-1 group"
                >
                  {suburb} <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceLayout;