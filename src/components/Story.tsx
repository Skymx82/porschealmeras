'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Story = () => {
  // Couleurs personnalisées
  const bleuFonce = '#0A1A2F'; // Bleu foncé
  const dore = '#D4AF37';      // Doré
  
  // État pour suivre l'ère sélectionnée
  const [activeEra, setActiveEra] = useState(0);
  
  // Données pour la timeline
  const timeline = [
    {
      year: '1972',
      title: 'La naissance d\'une passion',
      description: 'Les frères Alméras découvrent l\'univers Porsche et tombent immédiatement sous le charme de ces bolides d\'exception.',
      image: '/images/story-1.jpg',
    },
    {
      year: '1978',
      title: 'Premiers pas en compétition',
      description: 'Jacques et Jean-Marie Alméras font leurs débuts en compétition automobile au volant de Porsche, marquant le début d\'une aventure exceptionnelle.',
      image: '/images/story-2.jpg',
    },
    {
      year: '1985',
      title: 'L\'atelier spécialisé',
      description: 'Création de l\'atelier spécialisé Porsche à Montpellier, où l\'expertise des frères Alméras commence à attirer les passionnés de la marque.',
      image: '/images/story-3.jpg',
    },
    {
      year: '1994',
      title: 'Champions de France',
      description: 'Premier titre de Champion de France GT, une consécration qui marque le début d\'une série de victoires prestigieuses.',
      image: '/images/story-4.jpg',
    },
    {
      year: '2005',
      title: 'Reconnaissance internationale',
      description: 'L\'expertise Alméras est reconnue à l\'international, avec des participations aux plus grandes courses européennes.',
      image: '/images/story-5.jpg',
    },
    {
      year: 'Aujourd\'hui',
      title: 'L\'excellence continue',
      description: 'Avec 17 titres de champions et une expertise inégalée, Porsche Alméras poursuit sa quête d\'excellence dans l\'univers Porsche.',
      image: '/images/story-6.jpg',
    },
  ];

  return (
    <section className="relative overflow-hidden py-24" style={{ backgroundColor: '#070e17' }}>
      {/* Élément décoratif - lignes dorées */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: '40%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute left-[10%] top-0 w-[1px]"
        style={{ background: `linear-gradient(to bottom, ${dore}, transparent)` }}
      ></motion.div>
      
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '25%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="absolute right-0 top-[30%] h-[1px]"
        style={{ background: `linear-gradient(to left, ${dore}, transparent)` }}
      ></motion.div>

      <div className="container mx-auto px-6">
        {/* En-tête de section */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-3 text-4xl font-light text-white">Notre Histoire</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Découvrez l'histoire des frères Alméras, une aventure exceptionnelle née d'une passion commune pour Porsche et la compétition automobile.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '120px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-6 h-[2px]"
            style={{ background: dore }}
          ></motion.div>
        </div>

        {/* Citation inspirante */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto mb-20 max-w-4xl"
        >
          <div className="px-8 py-10 text-center md:px-16">
            <svg 
              className="absolute left-0 top-0 h-16 w-16 -translate-x-1/4 -translate-y-1/4 text-gray-800 opacity-50" 
              fill="currentColor" 
              viewBox="0 0 32 32"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-xl font-light italic text-white md:text-2xl">
              "La passion pour Porsche ne s'explique pas, elle se vit. Chaque voiture raconte une histoire, chaque course est un chapitre de notre aventure."
            </p>
            <div className="mt-4 text-right">
              <span className="font-medium" style={{ color: dore }}>— Jacques Alméras</span>
            </div>
            <svg 
              className="absolute bottom-0 right-0 h-16 w-16 translate-x-1/4 translate-y-1/4 text-gray-800 opacity-50" 
              fill="currentColor" 
              viewBox="0 0 32 32"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
          </div>
        </motion.div>

        {/* Timeline interactive */}
        <div className="relative mb-16">
          {/* Ligne de temps - cachée sur mobile, visible sur desktop */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[1px] -translate-x-1/2 bg-gray-800 md:block"></div>
          
          {/* Points de la timeline */}
          <div className="flex justify-center">
            <div className="relative flex w-full max-w-3xl flex-col space-y-8 md:flex-row md:justify-between md:space-y-0">
              {timeline.map((era, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`relative z-10 flex items-center md:block`}
                  onClick={() => setActiveEra(index)}
                >
                  {/* Version mobile: boutons en liste verticale */}
                  <div className="flex items-center md:hidden">
                    <div 
                      className={`mr-4 flex h-6 w-6 items-center justify-center rounded-full ${activeEra === index ? 'scale-125' : 'scale-100'} transition-transform duration-300`}
                      style={{ 
                        backgroundColor: activeEra === index ? dore : bleuFonce,
                        border: `2px solid ${activeEra === index ? dore : 'rgba(212, 175, 55, 0.5)'}` 
                      }}
                    ></div>
                    <span className="text-sm font-medium" style={{ color: activeEra === index ? dore : 'white' }}>
                      {era.year} - {era.title}
                    </span>
                  </div>
                  
                  {/* Version desktop: points sur la timeline */}
                  <div className="hidden md:block">
                    <div 
                      className={`flex h-6 w-6 items-center justify-center rounded-full ${activeEra === index ? 'scale-125' : 'scale-100'} transition-transform duration-300`}
                      style={{ 
                        backgroundColor: activeEra === index ? dore : bleuFonce,
                        border: `2px solid ${activeEra === index ? dore : 'rgba(212, 175, 55, 0.5)'}` 
                      }}
                    ></div>
                    <span className="absolute -bottom-8 text-xs font-medium" style={{ color: activeEra === index ? dore : 'white' }}>
                      {era.year}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Contenu de l'ère sélectionnée */}
          <motion.div
            key={activeEra}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 md:mt-16"
          >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-sm">
                <Image
                  src={timeline[activeEra].image}
                  alt={timeline[activeEra].title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 h-1 w-full" style={{ background: `linear-gradient(to right, ${dore}, transparent)` }}></div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="mb-2 text-2xl font-medium text-white">{timeline[activeEra].title}</h3>
                <p className="mb-6 text-gray-400">{timeline[activeEra].description}</p>
                <div className="mt-auto">
                  <Link href="/histoire">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center border-0 px-6 py-3 text-sm font-medium"
                      style={{ backgroundColor: dore, color: bleuFonce }}
                    >
                      DÉCOUVRIR NOTRE HISTOIRE
                      <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Chiffres clés */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid grid-cols-2 gap-x-4 gap-y-8 md:mt-24 md:grid-cols-4 md:gap-6"
        >
          {[
            { value: '50+', label: 'Années d\'expérience' },
            { value: '17', label: 'Titres de champions' },
            { value: '1000+', label: 'Porsche entretenues' },
            { value: '100%', label: 'Passion' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="mb-1 text-4xl font-light" style={{ color: dore }}>{stat.value}</p>
                <p className="text-sm uppercase tracking-wider text-gray-400">{stat.label}</p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
