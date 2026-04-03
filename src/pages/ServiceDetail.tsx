import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Download, Clock, Shield, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import AnimatedBackground from '../components/AnimatedBackground';

const serviceData = {
  hotellerie: {
    title: "Domotique Hôtellerie",
    subtitle: "Solutions domotiques pour hôtels et restaurants au Togo",
    heroImage: "https://picsum.photos/seed/hotel-automation/1920/1080",
    description: "Modernisez l'expérience client et réduisez vos factures d'énergie grâce à nos solutions intelligentes. Nous installons des systèmes de gestion centralisée pour l'éclairage, la climatisation et l'accès.",
    benefits: [
      "Réduction des coûts énergétiques jusqu'à 30%",
      "Amélioration de l'expérience client (confort personnalisé)",
      "Gestion centralisée via tablette ou smartphone",
      "Maintenance préventive simplifiée"
    ],
    process: [
      "Audit énergétique et technique",
      "Proposition de solution sur-mesure",
      "Installation et configuration",
      "Formation du personnel et suivi"
    ],
    hasCatalog: false,
    hasProgram: false
  },
  ecoles: {
    title: "Domotique Écoles",
    subtitle: "Solutions domotiques pour établissements scolaires au Togo",
    heroImage: "https://picsum.photos/seed/school-automation/1920/1080",
    description: "Sécurisez vos campus et optimisez la gestion des espaces. Nos solutions permettent un contrôle intelligent de l'éclairage et des accès pour réduire les charges de fonctionnement.",
    benefits: [
      "Sécurisation des accès au campus",
      "Éclairage automatisé des salles de classe",
      "Réduction des gaspillages énergétiques",
      "Modernisation de l'image de l'établissement"
    ],
    process: [
      "Diagnostic des besoins de sécurité",
      "Planification de l'infrastructure",
      "Mise en œuvre technique",
      "Accompagnement à l'utilisation"
    ],
    hasCatalog: false,
    hasProgram: false
  },
  industrie: {
    title: "Fourniture Industrielle",
    subtitle: "Sourcing international de matériel industriel à Lomé",
    heroImage: "https://picsum.photos/seed/industrial-supply/1920/1080",
    description: "Nous fournissons du matériel industriel de haute qualité (Siemens, Atlas Copco) avec une expertise en négoce international. Bénéficiez d'un sourcing fiable et d'un SAV local.",
    benefits: [
      "Accès aux meilleures marques internationales",
      "Garantie constructeur et SAV local",
      "Délais de livraison optimisés",
      "Conseil technique expert"
    ],
    process: [
      "Analyse de vos besoins spécifiques",
      "Sourcing et négociation fournisseurs",
      "Logistique et dédouanement",
      "Livraison et mise en service"
    ],
    hasCatalog: true,
    hasProgram: false
  },
  formations: {
    title: "Formations Techniques",
    subtitle: "Devenez expert en automatisme et domotique",
    heroImage: "https://picsum.photos/seed/technical-training/1920/1080",
    description: "Transformez votre carrière avec nos formations techniques en automatisme (niveaux 0 à 3). Des programmes pratiques adaptés aux réalités du marché africain.",
    benefits: [
      "Certificat reconnu par l'industrie",
      "Formateurs experts praticiens",
      "Matériel de pointe pour les TP",
      "Accompagnement à l'insertion"
    ],
    process: [
      "Niveau 0 : Initiation à l'automatisme",
      "Niveau 1 : Programmation de base",
      "Niveau 2 : Systèmes complexes",
      "Niveau 3 : Expertise et maintenance"
    ],
    hasCatalog: false,
    hasProgram: true
  }
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const data = serviceData[slug as keyof typeof serviceData];

  if (!data) return <div className="pt-32 text-center">Service non trouvé</div>;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <AnimatedBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="text-accent font-bold uppercase tracking-widest mb-4">Service Expertise</div>
            <h1 className="text-4xl md:text-6xl text-white mb-4 font-display">{data.title}</h1>
            <p className="text-xl text-gray-300 font-medium leading-relaxed">{data.subtitle}</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/10 to-transparent z-10 pointer-events-none"></div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl text-primary mb-6">Présentation</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {data.description}
              </p>
              
              <div className="space-y-4">
                {data.benefits.map((benefit, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {data.hasCatalog && (
                <div className="mt-12 p-8 bg-bg-light rounded-xl border border-gray-200 flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-1">Catalogue Produits 2024</h4>
                    <p className="text-gray-500 text-sm">Téléchargez notre offre complète en PDF</p>
                  </div>
                  <button className="bg-accent text-white p-4 rounded-full hover:bg-secondary transition-all">
                    <Download className="h-6 w-6" />
                  </button>
                </div>
              )}
            </motion.div>

            <div className="bg-bg-light p-10 rounded-2xl border border-gray-100">
              <h3 className="text-2xl text-primary mb-8">Notre Processus d'Intervention</h3>
              <div className="space-y-8">
                {data.process.map((step, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary mb-1">{step}</h4>
                      <p className="text-gray-500 text-sm">Étape clé de notre méthodologie d'excellence.</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <Link
                  to="/contact"
                  className="block w-full bg-secondary text-white text-center py-4 rounded-full font-bold hover:bg-primary transition-all"
                >
                  Demander une étude gratuite
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Shield className="h-12 w-12 text-accent mx-auto mb-6" />
              <h4 className="text-xl font-bold mb-4">Garantie & Fiabilité</h4>
              <p className="text-gray-400">Toutes nos installations sont garanties et bénéficient d'un suivi rigoureux.</p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 text-accent mx-auto mb-6" />
              <h4 className="text-xl font-bold mb-4">Performance Énergétique</h4>
              <p className="text-gray-400">Optimisez vos consommations et réduisez vos charges dès le premier mois.</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-accent mx-auto mb-6" />
              <h4 className="text-xl font-bold mb-4">Réponse sous 24h</h4>
              <p className="text-gray-400">Notre équipe réagit rapidement à toutes vos demandes de devis ou d'assistance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
