import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center group mb-6">
              <div className="relative h-10 w-10 mr-3 transition-transform group-hover:scale-105">
                <img 
                  src="logo1.png" 
                  alt="Ultimate Expertise Logo" 
                  className="h-full w-full object-contain brightness-0 invert"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base leading-tight tracking-tight text-white">
                  ULTIMATE EXPERTISE
                </span>
                <span className="text-[9px] font-bold tracking-[0.2em] text-accent">
                  SARL
                </span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Ultimate Expertise SARL : L'ingénierie qui modernise vos infrastructures en Afrique. Domotique, Fourniture Industrielle et Formation.
            </p>
            <div className="flex space-x-4">
              <a href="#" title="Facebook" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" title="LinkedIn" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" title="Instagram" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li><Link to="/services/hotellerie" className="text-gray-400 hover:text-accent flex items-center"><ArrowRight className="h-4 w-4 mr-2" /> Domotique Hôtellerie</Link></li>
              <li><Link to="/services/industrie" className="text-gray-400 hover:text-accent flex items-center"><ArrowRight className="h-4 w-4 mr-2" /> Fourniture Industrielle</Link></li>
              <li><Link to="/services/formations" className="text-gray-400 hover:text-accent flex items-center"><ArrowRight className="h-4 w-4 mr-2" /> Formations Techniques</Link></li>
              <li><Link to="/boutique" className="text-gray-400 hover:text-accent flex items-center"><ArrowRight className="h-4 w-4 mr-2" /> Boutique</Link></li>
              <li><Link to="/realisations" className="text-gray-400 hover:text-accent flex items-center"><ArrowRight className="h-4 w-4 mr-2" /> Nos Réalisations</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mr-3 mt-1" />
                <span className="text-gray-400">Agoé-Télessou, Route de Léo 2000, Lomé, Togo</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-accent mr-3" />
                <span className="text-gray-400">+228 90 86 64 76</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent mr-3" />
                <span className="text-gray-400">services@ultimexpertise.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-lg font-bold mb-6">Nous rejoindre</h3>
            <p className="text-gray-400 mb-4">Vous souhaitez rejoindre notre équipe d'experts ?</p>
            <Link
              to="/rejoindre-equipe"
              className="inline-block bg-accent text-white px-6 py-2 rounded-full font-bold hover:bg-secondary transition-colors"
            >
              Postuler
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 Ultimate Expertise SARL. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/mentions-legales" className="hover:text-white">Mentions Légales</Link>
            <Link to="/confidentialite" className="hover:text-white">Confidentialité</Link>
            <Link to="/cgv" className="hover:text-white">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}