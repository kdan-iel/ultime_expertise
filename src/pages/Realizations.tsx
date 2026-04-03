import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, MapPin, Tag } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

const projects = [
  {
    title: "Automatisation Hôtel 5 Étoiles",
    sector: "Hôtellerie",
    location: "Lomé",
    problem: "Factures d'énergie excessives et manque de contrôle centralisé sur les chambres.",
    solution: "Installation d'un système de gestion intelligente de l'éclairage et de la climatisation avec capteurs de présence.",
    result: "Réduction de 35% de la consommation énergétique annuelle dès la première année.",
    image: "https://picsum.photos/seed/hotel-project/800/600",
    testimonial: "L'expertise d'Ultime Expertise a transformé notre gestion opérationnelle."
  },
  {
    title: "Sourcing Matériel Ligne de Production",
    sector: "Industrie",
    location: "Kara",
    problem: "Difficulté à trouver des pièces de rechange Siemens d'origine avec garantie locale.",
    solution: "Sourcing international complet, logistique sécurisée et assistance à l'installation technique.",
    result: "Remise en service de la ligne en moins de 15 jours, évitant des pertes de production majeures.",
    image: "https://picsum.photos/seed/factory-project/800/600",
    testimonial: "Un partenaire fiable pour nos besoins critiques en matériel industriel."
  },
  {
    title: "Campus Connecté & Sécurisé",
    sector: "Éducation",
    location: "Lomé",
    problem: "Insécurité nocturne sur le campus et gaspillage d'éclairage dans les amphithéâtres.",
    solution: "Déploiement d'un réseau d'éclairage intelligent et contrôle d'accès biométrique aux zones sensibles.",
    result: "Sécurité renforcée et baisse de 20% des coûts de maintenance électrique.",
    image: "https://picsum.photos/seed/school-project/800/600",
    testimonial: "Une modernisation nécessaire réalisée avec un grand professionnalisme."
  }
];

export default function Realizations() {
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
            <div className="text-accent font-bold uppercase tracking-widest mb-4">Études de cas</div>
            <h1 className="text-4xl md:text-6xl mb-4 font-display">Nos Réalisations</h1>
            <p className="text-gray-300 max-w-2xl text-lg">
              Découvrez comment nous accompagnons nos clients dans leurs projets de modernisation et d'optimisation technique.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-bg-light via-bg-light/5 to-transparent z-10 pointer-events-none"></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-24">
          {projects.map((p, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 flex space-x-2">
                    <span className="bg-accent text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase flex items-center">
                      <Tag className="h-3 w-3 mr-1" /> {p.sector}
                    </span>
                    <span className="bg-white/90 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase flex items-center">
                      <MapPin className="h-3 w-3 mr-1" /> {p.location}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl text-primary mb-6">{p.title}</h2>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">Problématique</h4>
                    <p className="text-gray-600 leading-relaxed">{p.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">Solution Apportée</h4>
                    <p className="text-gray-600 leading-relaxed">{p.solution}</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border-l-4 border-secondary shadow-sm">
                    <h4 className="text-sm font-bold text-secondary uppercase tracking-wider mb-2">Résultat Chiffré</h4>
                    <p className="text-primary font-bold text-lg">{p.result}</p>
                  </div>
                </div>

                <div className="bg-bg-light p-6 rounded-xl italic text-gray-500 border border-gray-200 relative">
                  <span className="absolute -top-4 left-6 text-4xl text-accent opacity-50">"</span>
                  {p.testimonial}
                  <span className="absolute -bottom-8 right-6 text-4xl text-accent opacity-50">"</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 bg-primary rounded-3xl p-12 text-center text-white">
          <h3 className="text-2xl mb-6">Vous avez un projet similaire ?</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Nos experts sont à votre disposition pour une étude personnalisée de vos besoins.
          </p>
          <button className="bg-accent text-white px-10 py-4 rounded-full font-bold hover:bg-secondary transition-all">
            Démarrer mon projet
          </button>
        </div>
      </div>
    </div>
  );
}
