import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const services = [
  { name: 'Hôtellerie', href: '/services/hotellerie' },
  { name: 'Écoles', href: '/services/ecoles' },
  { name: 'Industrie', href: '/services/industrie' },
  { name: 'Formations', href: '/services/formations' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center group">
            <div className="relative h-12 w-12 mr-3 transition-transform group-hover:scale-105">
              <img 
                src="logo2.png" 
                alt="Ultimate Expertise Logo" 
                className="h-full w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-display font-bold text-lg leading-tight tracking-tight transition-colors",
                isScrolled ? "text-primary" : "text-white"
              )}>
                ULTIMATE EXPERTISE
              </span>
              <span className={cn(
                "text-[10px] font-bold tracking-[0.2em] transition-colors",
                isScrolled ? "text-accent" : "text-accent"
              )}>
                SARL
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={cn(
              "font-medium transition-colors",
              isScrolled ? "text-primary hover:text-secondary" : "text-white hover:text-accent"
            )}>Accueil</Link>
            
            <div className="relative group">
              <button className={cn(
                "flex items-center font-medium transition-colors",
                isScrolled ? "text-primary hover:text-secondary" : "text-white hover:text-accent"
              )}>
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block px-4 py-2 text-sm text-primary hover:bg-bg-light hover:text-secondary"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/boutique" className={cn(
              "font-medium transition-colors",
              isScrolled ? "text-primary hover:text-secondary" : "text-white hover:text-accent"
            )}>Boutique</Link>
            <Link to="/realisations" className={cn(
              "font-medium transition-colors",
              isScrolled ? "text-primary hover:text-secondary" : "text-white hover:text-accent"
            )}>Réalisations</Link>
            <Link to="/a-propos" className={cn(
              "font-medium transition-colors",
              isScrolled ? "text-primary hover:text-secondary" : "text-white hover:text-accent"
            )}>À Propos</Link>
            <Link to="/blog" className={cn(
              "font-medium transition-colors",
              isScrolled ? "text-primary hover:text-secondary" : "text-white hover:text-accent"
            )}>Blog</Link>
            
            <Link
              to="/contact"
              className="bg-accent text-white px-6 py-2 rounded-full font-bold hover:bg-secondary transition-colors shadow-lg shadow-accent/20"
            >
              DEVIS GRATUIT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={isScrolled ? "text-primary" : "text-white"}>
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-primary font-medium">Accueil</Link>
            <div className="px-3 py-2 font-medium text-gray-400 uppercase text-xs">Services</div>
            {services.map((service) => (
              <Link
                key={service.name}
                to={service.href}
                className="block px-6 py-2 text-primary hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                {service.name}
              </Link>
            ))}
            <Link to="/boutique" className="block px-3 py-2 text-primary font-medium" onClick={() => setIsOpen(false)}>Boutique</Link>
            <Link to="/realisations" className="block px-3 py-2 text-primary font-medium" onClick={() => setIsOpen(false)}>Réalisations</Link>
            <Link to="/a-propos" className="block px-3 py-2 text-primary font-medium" onClick={() => setIsOpen(false)}>À Propos</Link>
            <Link to="/blog" className="block px-3 py-2 text-primary font-medium" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link
              to="/contact"
              className="block mt-4 bg-accent text-white px-6 py-3 rounded-md font-bold text-center"
              onClick={() => setIsOpen(false)}
            >
              DEVIS GRATUIT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
