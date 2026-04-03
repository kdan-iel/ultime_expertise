import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Zap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import AnimatedBackground from './AnimatedBackground';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-bold mb-8 border border-accent/30">
                <Shield className="h-4 w-4 mr-2" />
                Expertise Certifiée au Togo
              </div>
              
              <h1 className="text-5xl md:text-7xl text-white mb-8 leading-[1.1] font-display">
                L'ingénierie qui <span className="text-accent">modernise</span> vos infrastructures
              </h1>
              
              <p className="text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
                Solutions intelligentes en domotique et fourniture industrielle de haute qualité. 
                Nous accompagnons les hôtels, écoles et industries vers l'excellence opérationnelle.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/contact"
                  className="bg-accent text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-secondary transition-all flex items-center justify-center shadow-xl shadow-accent/20 group"
                >
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services/hotellerie"
                  className="bg-white/5 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all text-center"
                >
                  Nos solutions
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                    <Zap className="h-10 w-10 text-accent mb-4" />
                    <h3 className="text-white font-bold mb-2">Efficacité</h3>
                    <p className="text-gray-400 text-sm">Optimisation énergétique maximale.</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                    <Shield className="h-10 w-10 text-accent mb-4" />
                    <h3 className="text-white font-bold mb-2">Sécurité</h3>
                    <p className="text-gray-400 text-sm">Contrôle d'accès intelligent.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                    <Award className="h-10 w-10 text-accent mb-4" />
                    <h3 className="text-white font-bold mb-2">Qualité</h3>
                    <p className="text-gray-400 text-sm">Matériel de marques leaders.</p>
                  </div>
                  <div className="bg-accent p-6 rounded-2xl shadow-2xl shadow-accent/30">
                    <div className="text-4xl font-bold text-white mb-2">5+</div>
                    <p className="text-white/80 text-sm font-bold uppercase tracking-wider">Ans d'expérience</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient - Softened */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white via-white/20 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
