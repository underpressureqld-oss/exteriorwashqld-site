import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Star, Phone, CheckCircle2, ChevronDown, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import QuoteButton from '@/components/QuoteButton.jsx';
import BreadcrumbNav from '@/components/BreadcrumbNav.jsx';
import MapEmbed from '@/components/MapEmbed.jsx';
import { getPageData, parseSlug, getNearbySuburbs } from '@/data/suburbServiceData.js';
import { blogPosts } from '@/data/BlogData.js';

const SuburbServicePage = () => {
  const { slug } = useParams();
  const parsed = parseSlug(slug);
  
  if (!parsed) {
    return <Navigate to="/404" replace />;
  }

  const { service, suburb, serviceId, suburbId } = parsed;
  const pageData = getPageData(slug);

  if (!pageData) {
    return <Navigate to="/404" replace />;
  }

  const nearbySuburbs = getNearbySuburbs(suburbId);
  const currentUrl = `https://www.exteriorwashqld.com.au/${slug}`;
  const servicePageUrl = `/${serviceId}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.name,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Exterior Wash QLD",
      "telephone": "0468 848 342",
      "url": currentUrl
    },
    "areaServed": suburb.name,
    "description": pageData.metaDescription
  };

  // Select a couple related blogs based on service name matching loosely
  const relatedBlogs = (blogPosts || []).filter(post => 
    post.title.toLowerCase().includes(service.name.split(' ')[0].toLowerCase()) ||
    post.excerpt.toLowerCase().includes(service.name.split(' ')[0].toLowerCase())
  ).slice(0, 2);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Exterior Wash QLD - ${service.name} in ${suburb.name}`,
    "image": pageData.heroImage,
    "telephone": "0468848342",
    "url": currentUrl,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": suburb.name,
      "addressRegion": "QLD",
      "addressCountry": "AU"
    },
    "areaServed": [suburb.name, suburb.region],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": pageData.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen flex flex-col pb-16 md:pb-0">
      <Helmet>
        <title>{pageData.title}</title>
        <meta name="description" content={pageData.metaDescription} />
        <meta name="keywords" content={pageData.localKeywords.join(', ')} />
        <link rel="canonical" href={currentUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageData.title} />
        <meta property="og:description" content={pageData.metaDescription} />
        <meta property="og:image" content={pageData.heroImage} />
        <meta property="og:image:alt" content={`${service.name} in ${suburb.name}`} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.title} />
        <meta name="twitter:description" content={pageData.metaDescription} />
        <meta name="twitter:image" content={pageData.heroImage} />
        <meta name="twitter:image:alt" content={`${service.name} in ${suburb.name}`} />

        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Header />
      
      <BreadcrumbNav 
        serviceName={service.name} 
        suburbName={suburb.name} 
        currentUrl={currentUrl} 
      />

      <div className="section-container py-6">
        <div className="flex flex-wrap gap-3 text-sm text-primary font-medium">
          <Link to="/" className="hover:underline">Homepage</Link>
          <Link to={servicePageUrl} className="hover:underline">{service.name} Overview</Link>
          <Link to="/services" className="hover:underline">All Services</Link>
        </div>
      </div>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-slate-950">
          <div className="absolute inset-0 z-0">
            <img src={pageData.heroImage} alt={`${service.name} in ${suburb.name}`} loading="lazy" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
          </div>

          <div className="section-container relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 text-sm font-medium mb-6 backdrop-blur-sm">
                <MapPin className="w-4 h-4" /> Local to {suburb.name}, QLD
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                {pageData.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                {pageData.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <QuoteButton className="btn-primary text-lg px-8 py-4" onClick={() => window.gtag && window.gtag('event', 'click_quote_suburb', { suburb: suburb.name })} />
                <a href="tel:0468848342" onClick={() => window.gtag && window.gtag('event', 'click_call_suburb', { suburb: suburb.name })} className="inline-flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition-all duration-200 rounded-xl px-8 py-4 font-semibold backdrop-blur-sm border border-white/20 gap-2">
                  <Phone className="w-5 h-5" /> Call 0468 848 342
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-spacing bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground text-balance">Why choose us for {service.name.toLowerCase()} in {suburb.name}?</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{pageData.introParagraph}</p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{service.description}</p>
                <ul className="space-y-4 mb-8">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="text-foreground font-medium text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <MapEmbed 
                  embedUrl={`https://maps.google.com/maps?q=${encodeURIComponent(suburb.name + ' QLD')}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                  title={`Service Area: ${suburb.name}`}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-spacing bg-muted/30">
          <div className="section-container max-w-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-balance">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {pageData.faqs.map((faq, idx) => (
                <details key={idx} className="group bg-card border border-border rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-foreground hover:bg-muted/50 transition-colors">
                    {faq.question}
                    <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform duration-300" />
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground leading-relaxed border-t border-border/50 mt-2">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Linking / Nearby Suburbs & Blogs */}
        <section className="py-16 bg-background border-t border-border">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              <div className="lg:col-span-2">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Nearby Suburbs Serviced
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {nearbySuburbs.map(sub => (
                    <Link key={sub.id} to={`/${serviceId}-${sub.id}`} className="p-3 rounded-xl border border-border bg-card hover:border-primary hover:text-primary transition-colors text-sm font-medium flex items-center gap-2 group">
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" /> {sub.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {relatedBlogs.length > 0 ? relatedBlogs.map(blog => (
                    <Link key={blog.id} to={`/blog/${blog.slug}`} className="flex gap-4 group">
                      <img src={blog.featured_image} alt={blog.title} className="w-20 h-20 rounded-lg object-cover bg-muted" loading="lazy"/>
                      <div>
                        <h4 className="text-sm font-bold group-hover:text-primary transition-colors line-clamp-2">{blog.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{blog.excerpt}</p>
                      </div>
                    </Link>
                  )) : (
                    <Link to="/blog" className="text-primary text-sm font-medium hover:underline inline-flex items-center">
                      View all cleaning guides <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default SuburbServicePage;