import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, ShoppingBag, ArrowRight, Info } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import AnimatedBackground from '../components/AnimatedBackground';

const categories = [
  "Tous les produits",
  "Automatismes & contrôle",
  "Équipements domotiques",
  "Pièces de rechange industrielles",
  "Accessoires & consommables"
];

const products = [
  {
    id: 1,
    name: "Automate Siemens S7-1500",
    category: "Automatismes & contrôle",
    ref: "SIE-S71500-01",
    description: "Le contrôleur modulaire pour les applications système de moyenne à grande échelle.",
    image: "https://picsum.photos/seed/siemens-plc/400/400",
    available: true
  },
  {
    id: 2,
    name: "Capteur de présence intelligent",
    category: "Équipements domotiques",
    ref: "DOM-SEN-02",
    description: "Capteur haute précision pour gestion d'éclairage et climatisation.",
    image: "https://picsum.photos/seed/sensor/400/400",
    available: true
  },
  {
    id: 3,
    name: "Vanne de régulation Atlas Copco",
    category: "Pièces de rechange industrielles",
    ref: "ATL-VAL-05",
    description: "Vanne de haute performance pour systèmes d'air comprimé.",
    image: "https://picsum.photos/seed/valve/400/400",
    available: true
  },
  {
    id: 4,
    name: "Module de communication IHM",
    category: "Automatismes & contrôle",
    ref: "SIE-HMI-09",
    description: "Interface homme-machine tactile pour contrôle industriel.",
    image: "https://picsum.photos/seed/hmi/400/400",
    available: false
  },
  {
    id: 5,
    name: "Thermostat connecté Pro",
    category: "Équipements domotiques",
    ref: "DOM-THR-11",
    description: "Thermostat intelligent avec contrôle à distance pour hôtels.",
    image: "https://picsum.photos/seed/thermostat/400/400",
    available: true
  }
];

export default function Boutique() {
  const [activeCategory, setActiveCategory] = useState("Tous les produits");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === "Tous les produits" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.ref.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            <div className="text-accent font-bold uppercase tracking-widest mb-4">Catalogue Officiel</div>
            <h1 className="text-4xl md:text-6xl mb-4 font-display">Boutique & Matériel</h1>
            <p className="text-gray-300 max-w-2xl text-lg">
              Retrouvez notre sélection de matériel industriel et domotique. 
              Demandez un prix personnalisé pour vos projets.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-bg-light via-bg-light/5 to-transparent z-10 pointer-events-none"></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
              <h3 className="font-bold text-primary mb-6 flex items-center">
                <Filter className="h-4 w-4 mr-2" /> Catégories
              </h3>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "w-full text-left px-4 py-2 rounded-md text-sm transition-all",
                      activeCategory === cat 
                        ? "bg-accent text-white font-bold" 
                        : "text-gray-600 hover:bg-bg-light"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl border border-secondary/20">
              <h4 className="font-bold text-secondary mb-2 flex items-center">
                <Info className="h-4 w-4 mr-2" /> Besoin d'aide ?
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Vous ne trouvez pas une référence spécifique ? Contactez notre service de sourcing international.
              </p>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-grow">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher par nom ou référence..."
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map((product, idx) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-56 overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {!product.available && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
                        Sur commande
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="text-accent text-[10px] font-bold uppercase mb-1">{product.category}</div>
                    <h3 className="text-lg font-bold text-primary mb-2">{product.name}</h3>
                    <div className="text-gray-400 text-xs mb-4">Réf: {product.ref}</div>
                    <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                      {product.description}
                    </p>
                    <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-secondary transition-all flex items-center justify-center">
                      <ShoppingBag className="h-4 w-4 mr-2" /> Demander un prix
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <div className="text-gray-400 mb-4">Aucun produit trouvé pour cette recherche.</div>
                <button 
                  onClick={() => {setActiveCategory("Tous les produits"); setSearchQuery("");}}
                  className="text-accent font-bold underline"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
