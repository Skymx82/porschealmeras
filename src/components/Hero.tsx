'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  // Couleurs personnalisées
  const bleuFonce = '#0A1A2F'; // Bleu foncé
  const dore = '#D4AF37';      // Doré

  return (
    <div className="relative h-screen w-full overflow-hidden" style={{ backgroundColor: bleuFonce }}>
      {/* Image d'arrière-plan avec un overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.jpg"
          alt="Porsche Almeras"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ backgroundColor: `${bleuFonce}99` }}></div>
      </div>

      {/* Contenu du Hero */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-4"
          >
            <Image
              src="/images/logo-porschealmeras.svg"
              alt="Porsche Logo"
              width={120}
              height={60}
              className="mx-auto"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-2 text-5xl font-bold tracking-tighter text-white md:text-7xl"
          >
            PORSCHE <span style={{ color: dore }}>ALMERAS</span>
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mb-8 max-w-2xl text-lg font-light text-gray-200 md:text-xl"
        >
          L&apos;excellence Porsche depuis plus de 40 ans
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="rounded-none border-2 bg-transparent px-8 py-3 text-sm font-medium transition-colors"
            style={{ 
              borderColor: dore, 
              color: dore,
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: dore,
              color: bleuFonce
            }}
          >
            DÉCOUVRIR
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="rounded-none border-2 border-white bg-white px-8 py-3 text-sm font-medium transition-colors"
            style={{ color: bleuFonce }}
            whileHover={{
              scale: 1.05,
              backgroundColor: 'transparent',
              color: 'white'
            }}
          >
            NOS SERVICES
          </motion.button>
        </motion.div>
      </div>

      {/* Éléments décoratifs - lignes dorées */}
      {/* Ligne horizontale en haut à gauche */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.8, duration: 1.2, ease: "easeInOut" }}
        className="absolute top-16 left-0 h-[1px] w-[30%] origin-left"
        style={{ background: dore }}
      ></motion.div>
      
      {/* Ligne verticale en haut à gauche */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.0, duration: 1.0, ease: "easeInOut" }}
        className="absolute top-16 left-[30%] h-[80px] w-[1px] origin-top"
        style={{ background: dore }}
      ></motion.div>
      
      {/* Ligne horizontale en bas à droite */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 1.2, ease: "easeInOut" }}
        className="absolute bottom-32 right-0 h-[1px] w-[25%] origin-right"
        style={{ background: dore }}
      ></motion.div>
      
      {/* Ligne verticale en bas à droite */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.4, duration: 1.0, ease: "easeInOut" }}
        className="absolute bottom-32 right-[25%] h-[60px] w-[1px] origin-bottom"
        style={{ background: dore }}
      ></motion.div>
      
      {/* Ligne horizontale centrale */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.6, duration: 1.2, ease: "easeInOut" }}
        className="absolute bottom-[40%] left-0 h-[2px] w-full origin-left"
        style={{ background: `linear-gradient(to right, transparent, ${dore}, transparent)` }}
      ></motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center"
        >
          <span className="mb-2 text-xs text-gray-300">SCROLL</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: dore }}
          >
            <path
              d="M12 5L12 19M12 19L19 12M12 19L5 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
