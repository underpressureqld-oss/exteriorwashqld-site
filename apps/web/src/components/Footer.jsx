import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-slate-950 text-slate-200 pt-16 pb-8 border-t border-slate-800">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Exterior Wash QLD</h3>
            <p className="text-sm font-medium leading-relaxed mb-6 text-slate-200">
              Professional pressure cleaning services across Brisbane and the Sunshine Coast. Fully insured, reliable, and delivering premium quality results for residential and commercial properties.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Top Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/driveway-cleaning" className="text-slate-200 hover:text-primary transition-colors">Driveway Cleaning</Link></li>
              <li><Link to="/roof-cleaning" className="text-slate-200 hover:text-primary transition-colors">Roof Cleaning</Link></li>
              <li><Link to="/house-washing" className="text-slate-200 hover:text-primary transition-colors">House Washing</Link></li>
              <li><Link to="/solar-panel-cleaning" className="text-slate-200 hover:text-primary transition-colors">Solar Panel Cleaning</Link></li>
              <li><Link to="/gutter-cleaning" className="text-slate-200 hover:text-primary transition-colors">Gutter Cleaning</Link></li>
              <li><Link to="/commercial-cleaning" className="text-slate-200 hover:text-primary transition-colors">Commercial Cleaning</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Popular Areas</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/pressure-cleaning-brisbane" className="text-slate-200 hover:text-primary transition-colors">Brisbane</Link></li>
              <li><Link to="/pressure-cleaning-sunshine-coast" className="text-slate-200 hover:text-primary transition-colors">Sunshine Coast</Link></li>
              <li><Link to="/pressure-cleaning-gold-coast" className="text-slate-200 hover:text-primary transition-colors">Gold Coast</Link></li>
              <li><Link to="/pressure-cleaning-logan" className="text-slate-200 hover:text-primary transition-colors">Logan</Link></li>
              <li><Link to="/pressure-cleaning-redcliffe" className="text-slate-200 hover:text-primary transition-colors">Redcliffe</Link></li>
              <li><Link to="/pressure-cleaning-ipswich" className="text-slate-200 hover:text-primary transition-colors">Ipswich</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:0468848342" className="hover:text-primary transition-colors font-medium text-white">0468 848 342</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:underpressureqld@gmail.com" className="text-slate-200 hover:text-primary transition-colors">underpressureqld@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="leading-relaxed text-slate-200">Brisbane & Sunshine Coast,<br />Queensland, Australia</span>
              </li>
              <li className="pt-2">
                <span className="block text-slate-300 mb-1">Business Hours:</span>
                <span className="block text-white">Mon-Sat: 7:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-200">
          <p>© {new Date().getFullYear()} Exterior Wash QLD. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/blog" className="text-slate-200 hover:text-primary transition-colors">Blog</Link>
            <Link to="/privacy-policy" className="text-slate-200 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-200 hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;