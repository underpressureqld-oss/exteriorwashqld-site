import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { blogPosts } from '@/data/BlogData.js';

const BlogPage = () => {
  const baseUrl = 'https://www.exteriorwashqld.com.au';

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Exterior Cleaning Blog & Tips | Exterior Wash QLD</title>

        <meta
          name="description"
          content="Expert pressure cleaning tips, roof cleaning guides, driveway maintenance advice, and exterior cleaning insights for Brisbane & Sunshine Coast properties."
        />

        <link rel="canonical" href="https://www.exteriorwashqld.com.au/blog" />
        <meta property="og:title" content="Exterior Cleaning Blog & Tips | Exterior Wash QLD" />
        <meta property="og:description" content="Expert pressure cleaning tips, roof cleaning guides, driveway maintenance advice, and exterior cleaning insights for Brisbane & Sunshine Coast properties." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1594611372993-761f31b97dae?auto=format&fit=crop&q=80" />
        <meta property="og:image:alt" content="Pressure cleaning blog articles" />
        <meta property="og:url" content="https://www.exteriorwashqld.com.au/blog" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Exterior Cleaning Blog & Tips | Exterior Wash QLD" />
        <meta name="twitter:description" content="Expert pressure cleaning tips, roof cleaning guides, driveway maintenance advice, and exterior cleaning insights for Brisbane & Sunshine Coast properties." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1594611372993-761f31b97dae?auto=format&fit=crop&q=80" />
        <meta name="twitter:image:alt" content="Pressure cleaning blog articles" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Exterior Wash QLD Blog",
              "url": "${baseUrl}/blog",
              "description": "Exterior cleaning tips, pressure washing advice, and property maintenance guides.",
              "publisher": {
                "@type": "Organization",
                "name": "Exterior Wash QLD",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${baseUrl}/logo.png"
                }
              }
            }
          `}
        </script>
      </Helmet>

      <Header />

      <main className="flex-grow">
        <section className="bg-muted py-16 md:py-24 border-b border-border">
          <div className="section-container max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
              Cleaning Guides & Insights
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Expert advice from the Exterior Wash QLD team on how to maintain, protect, and enhance your property's exterior.
            </p>
          </div>
        </section>

        <section className="section-spacing">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.featured_image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-AU', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>

                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.reading_time} min read
                      </span>
                    </div>

                    <h2 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-primary font-semibold text-sm mt-auto">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
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

export default BlogPage;