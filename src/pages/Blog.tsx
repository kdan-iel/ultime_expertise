import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';

const posts = [
  {
    id: 1,
    title: "Guide complet : la domotique au Togo en 2025",
    excerpt: "Découvrez comment les nouvelles technologies transforment les infrastructures à Lomé et dans toute la région.",
    date: "15 Mars 2025",
    author: "Admin",
    image: "https://picsum.photos/seed/blog-1/800/600",
    category: "Domotique"
  },
  {
    id: 2,
    title: "Où acheter du matériel industriel à Lomé ?",
    excerpt: "Conseils pour le sourcing de matériel de marque Siemens et Atlas Copco avec garantie locale.",
    date: "10 Mars 2025",
    author: "Admin",
    image: "https://picsum.photos/seed/blog-2/800/600",
    category: "Industrie"
  },
  {
    id: 3,
    title: "Réduire la facture d'énergie d'un hôtel en Afrique",
    excerpt: "Stratégies concrètes et retours sur investissement des solutions domotiques hôtelières.",
    date: "05 Mars 2025",
    author: "Admin",
    image: "https://picsum.photos/seed/blog-3/800/600",
    category: "Énergie"
  }
];

export default function Blog() {
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
            <div className="text-accent font-bold uppercase tracking-widest mb-4">Actualités & Insights</div>
            <h1 className="text-4xl md:text-6xl mb-4 font-display">Blog & Expertise</h1>
            <p className="text-gray-300 max-w-2xl text-lg">
              Retrouvez nos derniers articles sur l'ingénierie, la domotique et l'industrie en Afrique.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-bg-light via-bg-light/5 to-transparent z-10 pointer-events-none"></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, idx) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-accent text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center text-gray-400 text-xs mb-4 space-x-4">
                  <div className="flex items-center"><Calendar className="h-3 w-3 mr-2" /> {post.date}</div>
                  <div className="flex items-center"><User className="h-3 w-3 mr-2" /> {post.author}</div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-8 leading-relaxed line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-accent font-bold flex items-center hover:translate-x-2 transition-transform"
                >
                  Lire l'article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display text-white mb-6">Restez informé des innovations</h2>
            <p className="text-gray-300 mb-10">Inscrivez-vous à notre newsletter pour recevoir nos derniers articles et études de cas directement dans votre boîte mail.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-gray-500 focus:ring-2 focus:ring-accent outline-none transition-all"
              />
              <button className="bg-accent text-white px-10 py-4 rounded-2xl font-bold hover:bg-white hover:text-primary transition-all shadow-lg shadow-accent/20">
                S'abonner
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
