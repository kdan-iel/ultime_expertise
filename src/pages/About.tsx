import React from 'react';
import { History, Target, Shield, Users, Award, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import AnimatedBackground from '../components/AnimatedBackground';

const values = [
  {
    title: "Expertise",
    description: "Une maîtrise technique de pointe en automatisme et domotique.",
    icon: Award
  },
  {
    title: "Proximité",
    description: "Un accompagnement local réactif à Lomé et dans toute la zone CEDEAO.",
    icon: Users
  },
  {
    title: "Vision",
    description: "Moderniser les infrastructures africaines pour un avenir durable.",
    icon: Target
  }
];

const partners = [
  { name: "Siemens", logo: "https://picsum.photos/seed/siemens-logo/200/100" },
  { name: "Atlas Copco", logo: "https://picsum.photos/seed/atlas-logo/200/100" },
  { name: "Schneider Electric", logo: "https://picsum.photos/seed/schneider-logo/200/100" },
  { name: "ABB", logo: "https://picsum.photos/seed/abb-logo/200/100" }
];

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 text-white overflow-hidden">
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="text-accent font-bold uppercase tracking-widest mb-4">Qui sommes-nous ?</div>
            <h1 className="text-4xl md:text-6xl mb-6 font-display">Les Experts de l'Ingénierie Africaine</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Basée à Lomé, Ultime Expertise SARL est le partenaire stratégique pour la modernisation technologique et industrielle au Togo et en Afrique de l'Ouest.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white via-white/5 to-transparent z-10 pointer-events-none"></div>
      </section>

      {/* History & Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://picsum.photos/seed/lome-office/800/600"
                alt="Bureaux Ultime Expertise"
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent p-8 rounded-xl shadow-xl text-white">
                <div className="text-4xl font-bold mb-1">5+ Ans</div>
                <div className="text-sm uppercase font-bold tracking-wider">D'expertise terrain</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center text-accent font-bold uppercase tracking-widest mb-4">
                <History className="h-5 w-5 mr-2" /> Notre Histoire
              </div>
              <h2 className="text-3xl text-primary mb-6">Fondation à Lomé, Rayonnement Régional</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Fondée il y a plus de 5 ans, Ultime Expertise est née d'une volonté simple : apporter des solutions d'ingénierie de classe mondiale aux entreprises locales. 
                Nous avons commencé par la fourniture industrielle avant de devenir un leader en domotique intelligente.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Notre mission est de devenir la référence africaine de l'ingénierie intelligente, en alliant innovation technologique et respect des réalités locales.
              </p>
              <div className="flex items-center space-x-8">
                <div className="flex items-center">
                  <Globe className="h-10 w-10 text-secondary mr-3" />
                  <div>
                    <div className="font-bold text-primary">Togo</div>
                    <div className="text-xs text-gray-500">Siège Social</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe className="h-10 w-10 text-secondary mr-3" />
                  <div>
                    <div className="font-bold text-primary">France</div>
                    <div className="text-xs text-gray-500">Bureau de Liaison</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-display text-primary mb-4"
            >
              Nos Valeurs Fondamentales
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500"
            >
              Ce qui guide chacune de nos interventions au quotidien.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow group"
              >
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-colors">
                  <v.icon className="h-8 w-8 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl text-primary mb-12 uppercase tracking-widest font-display"
          >
            Nos Partenaires & Marques Représentées
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            {partners.map((p, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex flex-col items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <img src={p.logo} alt={p.name} className="h-12 object-contain mb-4" referrerPolicy="no-referrer" />
                <span className="font-bold text-primary text-sm">{p.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
