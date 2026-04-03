import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

export default function Contact() {
  return (
    <div className="bg-bg-light min-h-screen">
      {/* Header */}
      <section className="relative pt-40 pb-24 text-white overflow-hidden">
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-accent font-bold uppercase tracking-widest mb-4">Contactez-nous</div>
            <h1 className="text-4xl md:text-6xl mb-4 font-display">Parlons de votre projet</h1>
            <p className="text-gray-300 max-w-2xl text-lg">
              Diagnostic gratuit, devis transparent et réponse sous 24h garantis par nos experts.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-bg-light via-bg-light/5 to-transparent z-10 pointer-events-none"></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Téléphone</h3>
              <div className="space-y-2">
                <p className="text-gray-600 flex justify-between">
                  <span>Togo:</span>
                  <span className="font-bold">+228 90 86 64 76</span>
                </p>
                <p className="text-gray-600 flex justify-between">
                  <span>France:</span>
                  <span className="font-bold">+33 7 56 80 86 61</span>
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Email</h3>
              <p className="text-gray-600 font-bold">services@ultimexpertise.com</p>
              <p className="text-gray-400 text-sm mt-2">Réponse sous 24h ouvrées</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Adresse</h3>
              <p className="text-gray-600">Agoé-Télessou, Route de Léo 2000, Lomé, Togo</p>
              <div className="mt-4 flex items-center text-gray-400 text-sm">
                <Clock className="h-4 w-4 mr-2" />
                <span>Lun-Sam : 8h-18h</span>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-8">Envoyez-nous un message</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Nom complet *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-bg-light border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder="Ex: Jean Dupont"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Établissement / Société</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-bg-light border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder="Ex: Hôtel de la Paix"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="sector" className="text-sm font-bold text-gray-700">Secteur d'activité *</label>
                  <select id="sector" title="Secteur d'activité" className="w-full px-4 py-3 bg-bg-light border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50" required>
                    <option>Hôtellerie / Restauration</option>
                    <option>Éducation / Université</option>
                    <option>Industrie / BTP</option>
                    <option>Formation technique</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Téléphone *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 bg-bg-light border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder="+228 XX XX XX XX"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-gray-700">Votre besoin *</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-bg-light border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder="Décrivez brièvement votre projet ou votre demande de matériel..."
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-accent text-white py-4 rounded-lg font-bold text-lg hover:bg-secondary transition-all flex items-center justify-center shadow-lg"
                  >
                    Envoyer ma demande <Send className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Map Placeholder */}
     <section className="h-96 bg-gray-200 relative overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d495.80139915666217!2d1.179468!3d6.209372!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10215952b12f45ff%3A0x372d083fb1fcf81f!2sUltime%20Expertise%20SARL!5e0!3m2!1sfr!2sfr!4v1775224601169!5m2!1sfr!2sfr"
    title="Google Maps - Ultime Expertise SARL location in Lomé, Togo"
    className="absolute inset-0 w-full h-full border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/22890866476"
        target="_blank"
        rel="noopener noreferrer"
        title="Contactez-nous sur WhatsApp"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
      >
        <MessageSquare className="h-8 w-8" />
      </a>
    </div>
  );
}
