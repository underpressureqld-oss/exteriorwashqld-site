import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet';

const BreadcrumbNav = ({ serviceName, suburbName, currentUrl }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.exteriorwashqld.com.au.au/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.exteriorwashqld.com.au.au/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${serviceName} in ${suburbName}`,
        "item": currentUrl
      }
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <nav aria-label="Breadcrumb" className="py-4 bg-muted/30 border-b border-border">
        <div className="section-container">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground overflow-x-auto whitespace-nowrap pb-1 scrollbar-hide">
            <li>
              <Link to="/" className="flex items-center hover:text-primary transition-colors">
                <Home className="w-4 h-4 mr-1" />
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-4 h-4 mx-1 opacity-50" />
            </li>
            <li>
              <Link to="/services" className="hover:text-primary transition-colors">
                Services
              </Link>
            </li>
            <li>
              <ChevronRight className="w-4 h-4 mx-1 opacity-50" />
            </li>
            <li className="text-foreground font-medium" aria-current="page">
              {serviceName} {suburbName}
            </li>
          </ol>
        </div>
      </nav>
    </>
  );
};

export default BreadcrumbNav;