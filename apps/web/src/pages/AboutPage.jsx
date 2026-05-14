import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  Shield,
  CheckCircle2,
  Award,
  Clock
} from 'lucide-react';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import QuoteButton from '@/components/QuoteButton.jsx';

const AboutPage = () => {
  const values = [
    {
      icon: Shield,
      title: 'Professional Service',
      description:
        'Reliable pressure cleaning services with attention to detail and customer satisfaction.'
    },
    {
      icon: Award,
      title: 'Quality Results',
      description:
        'We use professional equipment and safe cleaning methods for outstanding results.'
    },
    {
      icon: Clock,
      title: 'Fast Response',
      description:
        'Quick quotes, reliable scheduling and efficient service every step of the way.'
    }
  ];

  const baseUrl = 'https://www.exteriorwashqld.com.au';

  return (
    <>
      <Helmet>
        <title>About Exterior Wash QLD | Pressure Cleaning Brisbane & Sunshine Coast</title>
        <meta
          name="description"
          content="Learn more about Exterior Wash QLD. Professional pressure cleaning services across Brisbane & Sunshine Coast with reliable service and quality results."
        />
        <link rel="canonical" href="https://www.exteriorwashqld.com.au/about" />
        <meta property="og:title" content="About Exterior Wash QLD | Pressure Cleaning Brisbane & Sunshine Coast" />
        <meta property="og:description" content="Learn more about Exterior Wash QLD. Professional pressure cleaning services across Brisbane & Sunshine Coast with reliable service and quality results." />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/29891a98-b64e-4d1a-a351-176254719b39/85249d14e5781f530f3bd5ccb2633897.png" />
        <meta property="og:image:alt" content="Exterior Wash QLD team in action" />
        <meta property="og:url" content={`${baseUrl}/about`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Exterior Wash QLD | Pressure Cleaning Brisbane & Sunshine Coast" />
        <meta name="twitter:description" content="Learn more about Exterior Wash QLD. Professional pressure cleaning services across Brisbane & Sunshine Coast with reliable service and quality results." />
        <meta name="twitter:image" content="https://horizons-cdn.hostinger.com/29891a98-b64e-4d1a-a351-176254719b39/85249d14e5781f530f3bd5ccb2633897.png" />
        <meta name="twitter:image:alt" content="Exterior Wash QLD team in action" />
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{
                letterSpacing: '-0.02em',
                textWrap: 'balance'
              }}
            >
              About Exterior Wash QLD
            </h1>

            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Professional pressure cleaning services across Brisbane and the Sunshine Coast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-spacing">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
                style={{ textWrap: 'balance' }}
              >
                Pressure cleaning done properly
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Exterior Wash QLD provides professional pressure cleaning services for residential and commercial properties across Brisbane and the Sunshine Coast.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We specialise in driveway cleaning, roof cleaning, house washing, gutter cleaning and commercial pressure cleaning using professional equipment and safe cleaning methods.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our goal is simple — deliver reliable service, quality results and make your property look its best.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />

                  <span className="text-foreground">
                    Residential & commercial pressure cleaning
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />

                  <span className="text-foreground">
                    Professional equipment & quality results
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />

                  <span className="text-foreground">
                    Reliable scheduling & fast quotes
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />

                  <span className="text-foreground">
                    Brisbane & Sunshine Coast service areas
                  </span>
                </li>
              </ul>

              <div className="mt-8">
                <QuoteButton />
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://horizons-cdn.hostinger.com/29891a98-b64e-4d1a-a351-176254719b39/1000068508-RnqRo.jpg"
                alt="Pressure cleaning service"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing bg-muted">
        <div className="section-container">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
              style={{ textWrap: 'balance' }}
            >
              Why customers choose us
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reliable service and professional pressure cleaning solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
                className="bg-card rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="bg-primary/10 text-primary p-4 rounded-xl w-fit mx-auto mb-4">
                  <value.icon className="w-10 h-10" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {value.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;