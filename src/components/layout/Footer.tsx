'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  // Couleurs personnalisées
  const bleuFonce = '#0A1A2F'; // Bleu foncé
  const dore = '#D4AF37';      // Doré

  return (
    <footer className="relative" style={{ backgroundColor: bleuFonce }}>
      {/* Ligne décorative supérieure */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute top-0 left-0 h-[1px] w-full origin-left"
        style={{ background: `linear-gradient(to right, transparent, ${dore}, transparent)` }}
      ></motion.div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo et informations */}
          <div className="flex flex-col">
            <Image
              src="/images/logo-porschealmeras.svg"
              alt="Porsche Almeras"
              width={150}
              height={50}
              className="mb-6 h-auto w-auto"
            />
            <p className="mb-4 text-sm text-gray-300">
              L&apos;excellence Porsche depuis plus de 40 ans. Préparation et entretien Porsche à Montpellier.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border text-gray-400 transition-colors hover:border-amber-400 hover:text-amber-400" style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border text-gray-400 transition-colors hover:border-amber-400 hover:text-amber-400" style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border text-gray-400 transition-colors hover:border-amber-400 hover:text-amber-400" style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="mb-6 text-lg font-medium text-white">Liens rapides</h3>
            <ul className="space-y-3">
              {['Accueil', 'Occasions', 'Histoire', 'Savoir-faire', 'Réalisations'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase() === 'accueil' ? '' : item.toLowerCase()}`} className="text-gray-400 transition-colors hover:text-amber-400">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-medium text-white">Nos services</h3>
            <ul className="space-y-3">
              {['Entretien', 'Restauration', 'Préparation', 'Compétition', 'Dépôt-vente'].map((item) => (
                <li key={item}>
                  <Link href={`/savoir-faire/${item.toLowerCase()}`} className="text-gray-400 transition-colors hover:text-amber-400">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-medium text-white">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5" style={{ color: dore }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Avenue de la Liberté<br />34000 Montpellier</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5" style={{ color: dore }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@porschealmeras.com" className="hover:text-amber-400">contact@porschealmeras.com</a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5" style={{ color: dore }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+33467000000" className="hover:text-amber-400">04 67 00 00 00</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Porsche Almeras. Tous droits réservés.
          </p>
        </div>
      </div>

      {/* Élément décoratif - ligne en bas à droite */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '30%' }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute bottom-[30%] right-0 h-[1px] origin-right"
        style={{ background: dore }}
      ></motion.div>
    </footer>
  );
};

export default Footer;
