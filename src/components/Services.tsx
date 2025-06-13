'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaTools, FaFlagCheckered, FaHistory, FaHandshake } from 'react-icons/fa';

const Services = () => {
  // Couleurs personnalisées
  const bleuFonce = '#0A1A2F';
  const dore = '#D4AF37';
  
  // État pour suivre le service sélectionné
  const [activeService, setActiveService] = useState(0);
  
  // Données des services
  const services = [
    {
      id: 0,
      title: 'Entretien & Réparation',
      icon: FaTools,
      description: 'Notre atelier spécialisé Porsche assure l\'entretien et la réparation de votre véhicule avec une expertise reconnue et des équipements de dernière génération.',
      features: [
        'Diagnostic électronique complet',
        'Révision selon les standards Porsche',
        'Réparation mécanique spécialisée',
        'Entretien préventif personnalisé'
      ],
      image: '/images/services-1.jpg'
    },
    {
      id: 1,
      title: 'Préparation Compétition',
      icon: FaFlagCheckered,
      description: 'Bénéficiez de notre expérience en compétition pour préparer votre Porsche aux plus hauts standards de performance, de fiabilité et de sécurité.',
      features: [
        'Optimisation moteur et châssis',
        'Installation d\'équipements de compétition',
        'Réglages personnalisés sur circuit',
        'Assistance technique en course'
      ],
      image: '/images/services-2.jpg'
    },
    {
      id: 2,
      title: 'Restauration',
      icon: FaHistory,
      description: 'Redonnez vie à votre Porsche classique grâce à notre service de restauration qui respecte l\'authenticité et l\'histoire de chaque modèle.',
      features: [
        'Restauration complète ou partielle',
        'Recherche de pièces d\'origine',
        'Carrosserie et peinture spécialisées',
        'Documentation détaillée du processus'
      ],
      image: '/images/services-3.jpg'
    },
    {
      id: 3,
      title: 'Vente & Conseil',
      icon: FaHandshake,
      description: 'Notre expertise vous accompagne dans l\'achat ou la vente de votre Porsche, avec un conseil personnalisé et une sélection rigoureuse de véhicules.',
      features: [
        'Recherche personnalisée de véhicules',
        'Expertise technique approfondie',
        'Accompagnement administratif',
        'Suivi après-vente privilégié'
      ],
      image: '/images/services-4.jpg'
    }
  ];

  return (
    <section className="py-24" style={{ backgroundColor: '#0c1824' }}>
      {/* Élément décoratif - ligne dorée */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '15%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute right-0 h-[1px] w-[15%]"
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
            <h2 className="mb-3 text-4xl font-light text-white">Notre Savoir-Faire</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Découvrez l'expertise Porsche Alméras à travers nos services spécialisés, fruits de décennies d'expérience et de passion.
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

        {/* Navigation des services - version mobile (sélecteur) */}
        <div className="mb-10 md:hidden">
          <select 
            value={activeService}
            onChange={(e) => setActiveService(parseInt(e.target.value))}
            className="w-full rounded-none border-0 bg-gray-800 px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
            style={{ borderColor: dore }}
          >
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        {/* Navigation des services - version desktop (onglets) */}
        <div className="mb-12 hidden md:block">
          <div className="flex flex-wrap justify-center">
            {services.map((service) => (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: service.id * 0.1 }}
                className={`relative mx-2 mb-4 flex items-center px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  activeService === service.id 
                    ? 'text-amber-400' 
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveService(service.id)}
              >
                <span className="mr-2 text-xl" style={{ color: activeService === service.id ? dore : 'currentColor' }}>
                  {React.createElement(service.icon)}
                </span>
                {service.title}
                {activeService === service.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 h-0.5 w-full" 
                    style={{ backgroundColor: dore }}
                  ></motion.div>
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Contenu du service sélectionné */}
        <motion.div
          key={activeService}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image du service */}
            <div className="order-2 md:order-1">
              <div className="relative h-full min-h-[300px]">
                <Image
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 h-1 w-full" style={{ background: `linear-gradient(to right, ${dore}, transparent)` }}></div>
              </div>
            </div>
            
            {/* Description du service */}
            <div className="order-1 flex flex-col justify-center bg-gray-900 p-8 md:order-2">
              <h3 className="mb-4 text-2xl font-medium text-white">{services[activeService].title}</h3>
              <p className="mb-6 text-gray-400">{services[activeService].description}</p>
              
              <ul className="mb-8 space-y-3">
                {services[activeService].features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ color: dore }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <Link href="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center border-0 px-6 py-3 text-sm font-medium"
                    style={{ backgroundColor: dore, color: bleuFonce }}
                  >
                    DÉCOUVRIR CE SERVICE
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bannière de contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 rounded-sm bg-gradient-to-r from-gray-900 to-gray-800 p-8 text-center md:p-12"
        >
          <h3 className="mb-4 text-2xl font-light text-white">Une question sur nos services ?</h3>
          <p className="mb-8 text-gray-400">Notre équipe d'experts est à votre disposition pour vous conseiller et répondre à toutes vos questions.</p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center border-2 bg-transparent px-8 py-3 text-sm font-medium"
              style={{ borderColor: dore, color: dore }}
            >
              CONTACTEZ-NOUS
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
