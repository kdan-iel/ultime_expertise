import React from 'react';
import Hero from '../components/Hero';
import { Building2, GraduationCap, Factory, ArrowRight, Star, Users, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const stats = [
  { label: "Années d'expertise terrain", value: "5+" },
  { label: "Secteurs d'activité", value: "3" },
  { label: "Économies d'énergie moyennes", value: "+30%" },
  { label: "Appel pour devis personnalisé", value: "1" },
];

const solutions = [
  {
    title: "Domotique Hôtellerie",
    description: "Modernisez l'expérience client et réduisez vos factures d'énergie grâce à nos solutions intelligentes.",
    icon: Building2,
    link: "/services/hotellerie",
    image: "https://picsum.photos/seed/hotel-tech/600/400"
  },
  {
    title: "Domotique Écoles",
    description: "Sécurisez vos campus et optimisez la gestion des espaces pour un environnement d'apprentissage moderne.",
    icon: GraduationCap,
    link: "/services/ecoles",
    image: "https://picsum.photos/seed/school-tech/600/400"
  },
  {
    title: "Fourniture Industrielle",
    description: "Sourcing international de matériel de marque (Siemens, Atlas Copco) avec garantie et SAV local.",
    icon: Factory,
    link: "/services/industrie",
    image: "https://picsum.photos/seed/industrial-parts/600/400"
  }
];

const testimonials = [
  {
    name: "Boukari",
    city: "Kara",
    text: "L'installation domotique dans notre établissement a radicalement changé notre gestion énergétique. Un investissement rentable dès les premiers mois.",
    rating: 5
  },
  {
    name: "Samuel",
    city: "Lomé",
    text: "Service de sourcing industriel impeccable. Les délais sont respectés et le matériel est conforme aux attentes les plus exigeantes.",
    rating: 5
  },
  {
    name: "Stephanie Ameyo",
    city: "Lomé",
    text: "Une équipe professionnelle et à l'écoute. Leur expertise technique est un véritable atout pour nos projets de modernisation.",
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />

      {/* Stats Banner */}
      <section className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-display font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-primary mb-4">Nos Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des services sur-mesure conçus pour répondre aux défis technologiques et industriels de l'Afrique moderne.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex-grow">
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <solution.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-primary">{solution.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <Link
                    to={solution.link}
                    className="text-secondary font-bold flex items-center hover:text-accent transition-colors"
                  >
                    En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-primary mb-8">Pourquoi nous choisir ?</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2">Expert local</h4>
                    <p className="text-gray-600">Une connaissance approfondie du terrain togolais et des besoins spécifiques de la zone CEDEAO.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    <Star className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2">Un seul partenaire</h4>
                    <p className="text-gray-600">De l'audit à l'installation et au SAV, nous gérons l'intégralité de vos projets technologiques.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2">ROI mesurable</h4>
                    <p className="text-gray-600">Nos solutions sont conçues pour générer des économies concrètes et améliorer votre rentabilité.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/seed/expertise-team/800/600"
                alt="Expertise Ultime"
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-xl shadow-xl hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-secondary p-3 rounded-full">
                    <ShieldCheck className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-gray-500 text-sm">Satisfaction Client</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Témoignages Clients</h2>
            <p className="text-gray-400">Ils nous font confiance pour leurs projets stratégiques.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white/5 p-8 rounded-xl border border-white/10">
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-accent text-sm">{t.city}, Togo</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-8">Prêt à moderniser vos infrastructures ?</h2>
          <Link
            to="/contact"
            className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-secondary transition-all shadow-xl"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </div>
  );
}
