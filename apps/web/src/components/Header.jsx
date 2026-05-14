import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Phone
} from 'lucide-react';

import { Button } from '@/components/ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-950 text-slate-200 text-sm">
        <div className="section-container py-2 flex items-center justify-between">

          <p className="hidden md:block">
            Professional Pressure Cleaning Brisbane QLD
          </p>

          <a
            href="tel:0468848342"
            className="flex items-center gap-2 hover:text-primary transition-all duration-200"
          >
            <Phone className="w-4 h-4" />
            0468 848 342
          </a>

        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">

        <div className="section-container">

          <div className="flex items-center justify-between h-24">

            {/* Logo */}
            <Link
                to="/"
                className="flex items-center flex-shrink-0"
              >

                <img
                  src="/logo.png"
                  alt="Exterior Wash QLD Logo"
                  className="h-24 w-auto object-contain"
                />

              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8">

                {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold transition-all duration-200 relative ${
                    isActive(link.path)
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {link.name}

                  {isActive(link.path) && (
                    <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-primary rounded-full"></span>
                  )}

                </Link>
              ))}

              <a href="tel:0468848342">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-6">
                  Call Now
                </Button>
              </a>

            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-all duration-200"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-border bg-white">

              <div className="flex flex-col gap-2">

                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-3 px-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(link.path)
                        ? 'bg-primary/10 text-primary font-semibold'
                        : 'text-foreground hover:bg-muted hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <a
                  href="tel:0468848342"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl">
                    Call Now
                  </Button>
                </a>

              </div>

            </nav>
          )}

        </div>

      </header>
    </>
  );
};

export default Header;