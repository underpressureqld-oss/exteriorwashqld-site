import React, { Suspense, useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import StickyMobileCTA from '@/components/StickyMobileCTA.jsx';

// Critical LCP entry components loaded synchronously
import HomePage from '@/pages/HomePage.jsx';

// Lazy loaded routes for Code Splitting optimization
const AboutPage = React.lazy(() => import('@/pages/AboutPage.jsx'));
const ContactPage = React.lazy(() => import('@/pages/ContactPage.jsx'));
const ServicesPage = React.lazy(() => import('@/pages/ServicesPage.jsx'));
const GalleryPage = React.lazy(() => import('@/pages/GalleryPage.jsx'));
const SuburbServicePage = React.lazy(() => import('@/pages/SuburbServicePage.jsx'));
const NotFound = React.lazy(() => import('@/pages/NotFound.jsx'));

// Dedicated Service Pages (Lazy Loaded)
const DrivewayCleaningPage = React.lazy(() => import('@/pages/DrivewayCleaningPage.jsx'));
const RoofCleaningPage = React.lazy(() => import('@/pages/RoofCleaningPage.jsx'));
const HouseWashingPage = React.lazy(() => import('@/pages/HouseWashingPage.jsx'));
const SolarPanelCleaningPage = React.lazy(() => import('@/pages/SolarPanelCleaningPage.jsx'));
const GutterCleaningPage = React.lazy(() => import('@/pages/GutterCleaningPage.jsx'));
const CommercialCleaningPage = React.lazy(() => import('@/pages/CommercialCleaningPage.jsx'));

// Blog Pages (Lazy Loaded)
const BlogPage = React.lazy(() => import('@/pages/BlogPage.jsx'));
const BlogPostPage = React.lazy(() => import('@/pages/BlogPostPage.jsx'));

const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // To be provided - Replace with actual GA4 measurement ID

// Tracking hook
const RouteTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Only track if GA4 is properly configured (not placeholder)
    if (window.gtag && GA4_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title
      });
    }
  }, [location]);

  return null;
};

// Route Loader
const RouteLoader = () => (
  <div className="w-full min-h-[100dvh] flex items-center justify-center bg-background">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Helmet>
        {/* GA4 Tracking Code */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_MEASUREMENT_ID}');
          `}
        </script>
      </Helmet>
      <ScrollToTop />
      <RouteTracker />
      
      <Suspense fallback={<RouteLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          
          {/* Dedicated Core Service Pages */}
          <Route path="/driveway-cleaning" element={<DrivewayCleaningPage />} />
          <Route path="/roof-cleaning" element={<RoofCleaningPage />} />
          <Route path="/house-washing" element={<HouseWashingPage />} />
          <Route path="/solar-panel-cleaning" element={<SolarPanelCleaningPage />} />
          <Route path="/gutter-cleaning" element={<GutterCleaningPage />} />
          <Route path="/commercial-cleaning" element={<CommercialCleaningPage />} />

          {/* Blog Pages */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          
          {/* Catch-All Core Page / 404 explicitly mapped */}
          <Route path="/404" element={<NotFound />} />
          
          {/* Dynamic Suburb Service Pages Route (Catch-all for generated SEO pages) */}
          <Route path="/:slug" element={<SuburbServicePage />} />
          
          {/* Absolute 404 Catch-all for non-matching deeper routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      
      <StickyMobileCTA />
      <Toaster />
    </Router>
  );
}

export default App;