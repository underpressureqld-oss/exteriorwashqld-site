import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

const ContactPage = () => {
  const baseUrl = 'https://www.exteriorwashqld.com.au';

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '0468 848 342',
      link: 'tel:0468848342'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'underpressureqld@gmail.com',
      link: 'mailto:info@www.exteriorwashqld.com.au'
    },
    {
      icon: MapPin,
      title: 'Service Areas',
      details: 'Brisbane & Sunshine Coast QLD',
      link: null
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Monday - Saturday: 7am - 6pm',
      link: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Exterior Wash QLD | Free Pressure Cleaning Quotes</title>
        <meta
          name="description"
          content="Contact Exterior Wash QLD for professional pressure cleaning in Brisbane & Sunshine Coast. Fast quotes for driveways, roofs, gutters and more."
        />
        <link rel="canonical" href={`${baseUrl}/contact`} />
        <meta property="og:title" content="Contact Exterior Wash QLD | Free Pressure Cleaning Quotes" />
        <meta property="og:description" content="Contact Exterior Wash QLD for professional pressure cleaning in Brisbane & Sunshine Coast. Fast quotes for driveways, roofs, gutters and more." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1594611372993-761f31b97dae?auto=format&fit=crop&q=80" />
        <meta property="og:image:alt" content="Call Exterior Wash QLD for pressure cleaning quotes" />
        <meta property="og:url" content={`${baseUrl}/contact`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Exterior Wash QLD | Free Pressure Cleaning Quotes" />
        <meta name="twitter:description" content="Contact Exterior Wash QLD for professional pressure cleaning in Brisbane & Sunshine Coast. Fast quotes for driveways, roofs, gutters and more." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1594611372993-761f31b97dae?auto=format&fit=crop&q=80" />
        <meta name="twitter:image:alt" content="Call Exterior Wash QLD for pressure cleaning quotes" />
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
              style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
            >
              Get a Free Quote
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Contact Exterior Wash QLD today for fast quotes and professional pressure cleaning services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-spacing">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Contact Information
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We provide professional pressure cleaning services across Brisbane and the Sunshine Coast. Contact us today for a free, no-obligation quote.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-primary/10 text-primary p-3 rounded-xl flex-shrink-0">
                      <info.icon className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-all duration-200"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.details}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Extra Trust Section */}
              <div className="mt-8 bg-muted rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Why choose us?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Fully insured professional service</li>
                  <li>• Residential & commercial cleaning</li>
                  <li>• Fast quotes and reliable scheduling</li>
                  <li>• High-quality pressure cleaning results</li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border"
            >
              <h2 className="text-2xl font-bold mb-6 text-card-foreground">Request a Quote</h2>
              <ContactForm />
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;