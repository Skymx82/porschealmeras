'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const News = () => {
  // Couleurs personnalisées
  const bleuFonce = '#0A1A2F'; // Bleu foncé
  const dore = '#D4AF37';      // Doré
  
  // État pour le formulaire d'inscription à la newsletter
  const [email, setEmail] = useState('');
  
  // Animation variants pour le conteneur
  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Données des actualités
  const newsItems = [
    {
      id: 1,
      title: "La légende se conjugue au futur…",
      excerpt: "Porsche Alméras, c'est l'histoire de deux frères unis par la même passion et la même envie de réaliser leur rêve : la compétition automobile sur Porsche.",
      image: "/images/news-1.jpg", // À remplacer par une vraie image
      link: "/histoire"
    },
    {
      id: 2,
      title: "Nouvelle 911 GT3 RS",
      excerpt: "Découvrez la nouvelle Porsche 911 GT3 RS, une voiture de course homologuée pour la route avec un aérodynamisme inspiré du sport automobile.",
      image: "/images/news-2.jpg", // À remplacer par une vraie image
      link: "/actualites/911-gt3-rs"
    },
    {
      id: 3,
      title: "Service d'entretien premium",
      excerpt: "Notre atelier spécialisé vous propose un service d'entretien premium pour votre Porsche, réalisé par nos techniciens experts.",
      image: "/images/news-3.jpg", // À remplacer par une vraie image
      link: "/savoir-faire/entretien"
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#0d1d30' }}>
      <div className="container mx-auto px-6">
        {/* Titre de section avec ligne décorative */}
        <div className="mb-12 flex items-center">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mr-6 h-[1px]"
            style={{ background: dore }}
          ></motion.div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl font-light text-white"
          >
            Actualités
          </motion.h2>
        </div>

        {/* Articles d'actualités */}
        <motion.div 
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {newsItems.map((item) => (
            <motion.div 
              key={item.id} 
              className="group relative overflow-hidden rounded-sm bg-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={338}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-medium text-white">{item.title}</h3>
                <p className="mb-4 text-gray-400">{item.excerpt}</p>
                <Link href={item.link}>
                  <div className="inline-flex items-center text-sm font-medium transition-colors" style={{ color: dore }}>
                    En savoir plus
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Link>
              </div>
              {/* Ligne décorative */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '30%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-[1px]"
                style={{ background: dore }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section newsletter */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 rounded-sm p-8"
          style={{ backgroundColor: 'rgba(10, 26, 47, 0.6)' }}
        >
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="md:w-2/3">
              <h3 className="mb-2 text-2xl font-light text-white">Abonnez-vous à notre newsletter</h3>
              <p className="text-gray-400">Restez informé des dernières actualités et événements Porsche Alméras.</p>
            </div>
            <div className="w-full md:w-1/3">
              <form className="flex flex-col space-y-4 sm:flex-row sm:space-x-2 sm:space-y-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  className="w-full rounded-none border-0 bg-gray-800 px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-amber-400"
                  style={{}}
                  required
                />
                <button
                  type="submit"
                  className="rounded-none px-6 py-2 text-sm font-medium transition-colors"
                  style={{ backgroundColor: dore, color: bleuFonce }}
                >
                  S'ABONNER
                </button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Partenaires */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-col items-center"
        >
          <h4 className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-gray-400">Groupe Alméras</h4>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Link href="http://www.pro-gt.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/logo-progt.svg"
                alt="Pro GT"
                width={120}
                height={40}
                className="h-auto w-auto opacity-70 transition-opacity hover:opacity-100"
              />
            </Link>
            <Link href="http://concessions.peugeot.fr/almeras-freres" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/logo-peugeot.svg"
                alt="Peugeot Alméras"
                width={120}
                height={40}
                className="h-auto w-auto opacity-70 transition-opacity hover:opacity-100"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default News;
