'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Couleurs personnalisées
  const bleuFonce = '#0A1A2F'; // Bleu foncé
  const dore = '#D4AF37';      // Doré

  const menuItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Occasions', href: '/occasions' },
    { name: 'Histoire', href: '/histoire' },
    { name: 'Savoir-faire', href: '/savoir-faire' },
    { name: 'Réalisations', href: '/realisations' },
    { name: 'Contact', href: '/contact' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      {/* Fond semi-transparent */}
      <div 
        className="absolute inset-0 backdrop-blur-md"
        style={{ backgroundColor: `${bleuFonce}99` }}
      ></div>
      
      {/* Contenu de la navigation */}
      <div className="relative flex items-center justify-between px-6 py-4 md:px-12">
        {/* Logo */}
        <Link href="/">
          <div className="relative z-10 flex items-center">
            <Image
              src="/images/logo-porschealmeras.svg"
              alt="Porsche Almeras"
              width={120}
              height={40}
              className="h-auto w-auto"
            />
          </div>
        </Link>

        {/* Navigation desktop */}
        <div className="hidden md:block">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className="relative text-white transition-colors hover:text-gray-300"
                >
                  <span className="relative">
                    {item.name}
                    <motion.span 
                      className="absolute -bottom-1 left-0 h-[1px] w-0 bg-current"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bouton contact */}
        <div className="hidden md:block">
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-none border-[1px] px-5 py-2 text-sm font-medium transition-colors"
              style={{ 
                borderColor: dore, 
                color: dore
              }}
            >
              CONTACTEZ-NOUS
            </motion.button>
          </Link>
        </div>

        {/* Bouton menu mobile */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-10 flex h-10 w-10 flex-col items-center justify-center"
          >
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
              className="absolute h-[2px] w-6"
              style={{ backgroundColor: isOpen ? dore : 'white' }}
            />
            <motion.span
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="absolute h-[2px] w-6"
              style={{ backgroundColor: 'white' }}
            />
            <motion.span
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
              className="absolute h-[2px] w-6"
              style={{ backgroundColor: isOpen ? dore : 'white' }}
            />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="absolute left-0 top-full w-full overflow-hidden md:hidden"
        style={{ backgroundColor: bleuFonce }}
      >
        <motion.ul className="flex flex-col py-4">
          {menuItems.map((item) => (
            <motion.li 
              key={item.name}
              variants={itemVariants}
              className="border-b border-gray-800 py-3"
            >
              <Link 
                href={item.href}
                className="block px-6 text-lg text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
          <motion.li 
            variants={itemVariants}
            className="px-6 py-4"
          >
            <Link href="/contact">
              <button
                className="w-full rounded-none border-[1px] px-4 py-2 text-center text-sm font-medium"
                style={{ 
                  borderColor: dore, 
                  color: dore
                }}
                onClick={() => setIsOpen(false)}
              >
                CONTACTEZ-NOUS
              </button>
            </Link>
          </motion.li>
        </motion.ul>
      </motion.div>

      {/* Ligne décorative */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 h-[1px] w-full origin-left"
        style={{ background: `linear-gradient(to right, ${dore}, transparent)` }}
      ></motion.div>
    </nav>
  );
};

export default Navbar;
