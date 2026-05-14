import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const NotFound = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Basic simulation of routing to a service
      navigate(`/${searchQuery.toLowerCase().replace(/\s+/g, '-')}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Page Not Found | Exterior Wash QLD</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Header />

      <main className="flex-grow flex items-center justify-center section-spacing bg-muted/30">
        <div className="section-container text-center max-w-3xl">
          <div className="bg-primary/10 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm border border-primary/20">
            <Search className="w-12 h-12 text-primary" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
            Oops! Page not found
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            We couldn't find the page you're looking for. It might have been moved, or the URL might be incorrect.
          </p>

          <form onSubmit={handleSearch} className="max-w-md mx-auto mb-12 flex gap-2">
            <input 
              type="text" 
              placeholder="Search for a service or suburb..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button type="submit" className="btn-primary">Search</button>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12 pt-12 border-t border-border">
            <div>
              <h2 className="text-xl font-bold mb-4 text-foreground">Main Services</h2>
              <ul className="space-y-3">
                <li><Link to="/driveway-cleaning" className="text-muted-foreground hover:text-primary transition-colors">Driveway Cleaning</Link></li>
                <li><Link to="/roof-cleaning" className="text-muted-foreground hover:text-primary transition-colors">Roof Cleaning</Link></li>
                <li><Link to="/house-washing" className="text-muted-foreground hover:text-primary transition-colors">House Washing</Link></li>
                <li><Link to="/commercial-cleaning" className="text-muted-foreground hover:text-primary transition-colors">Commercial Cleaning</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4 text-foreground">Popular Suburbs</h2>
              <ul className="space-y-3">
                <li><Link to="/pressure-cleaning-brisbane" className="text-muted-foreground hover:text-primary transition-colors">Brisbane</Link></li>
                <li><Link to="/pressure-cleaning-sunshine-coast" className="text-muted-foreground hover:text-primary transition-colors">Sunshine Coast</Link></li>
                <li><Link to="/pressure-cleaning-gold-coast" className="text-muted-foreground hover:text-primary transition-colors">Gold Coast</Link></li>
                <li><Link to="/pressure-cleaning-logan" className="text-muted-foreground hover:text-primary transition-colors">Logan</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <Link to="/" className="btn-secondary gap-2 inline-flex">
              <Home className="w-5 h-5" />
              Return to Homepage
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;