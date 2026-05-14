import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Clock, Calendar, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import QuoteButton from '@/components/QuoteButton.jsx';
import { blogPosts } from '@/data/BlogData.js';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const relatedPosts = post.related_posts
    ? blogPosts.filter(p => post.related_posts.includes(p.slug))
    : [];

  const canonicalUrl = `https://www.exteriorwashqld.com.au/blog/${post.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.featured_image,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Exterior Wash QLD",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.exteriorwashqld.com.au/logo.png"
      }
    },
    "datePublished": post.date,
    "description": post.excerpt,
    "mainEntityOfPage": canonicalUrl
  };

  const faqSchema =
    post.faq_schema && post.faq_schema.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": post.faq_schema.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }
      : null;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{post.title} | Exterior Wash QLD</title>

        <meta name="description" content={post.excerpt} />

        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.featured_image} />
        <meta property="og:image:alt" content={post.title} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.featured_image} />
        <meta name="twitter:image:alt" content={post.title} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>

        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      <Header />

      <main className="flex-grow">
        <article className="section-spacing">
          <div className="section-container max-w-3xl">
            <Link
              to="/blog"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all articles
            </Link>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground mb-8 pb-8 border-b border-border">
              <span>{post.author}</span>

              <span>•</span>

              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-AU', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>

              <span>•</span>

              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.reading_time} min read
              </span>
            </div>

            <img
              src={post.featured_image}
              alt={post.title}
              loading="lazy"
              className="w-full aspect-video object-cover rounded-2xl mb-12 shadow-lg"
            />

            <div
              className="prose-blog"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-16 p-8 bg-primary/5 border border-primary/20 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">
                Need Professional Help?
              </h3>

              <p className="text-muted-foreground mb-6">
                Our experienced team is ready to restore your property's exterior.
                Get a free, no-obligation quote today.
              </p>

              <QuoteButton className="btn-primary" />
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="py-16 bg-muted/30 border-t border-border">
            <div className="section-container max-w-5xl">
              <h2 className="text-2xl font-bold mb-8">
                Related Articles
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map(related => (
                  <Link
                    key={related.id}
                    to={`/blog/${related.slug}`}
                    className="flex gap-4 bg-card rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow group p-4"
                  >
                    <img
                      src={related.featured_image}
                      alt={related.title}
                      className="w-24 h-24 object-cover rounded-lg"
                      loading="lazy"
                    />

                    <div className="flex flex-col justify-center">
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {related.title}
                      </h3>

                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                        {related.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;