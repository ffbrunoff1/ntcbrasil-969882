import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Nossa Abordagem', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: {
      opacity: 1,
      x: '0%',
      transition: { type: 'spring', stiffness: 260, damping: 30 },
    },
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-secondary/95 shadow-md backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1752958274433_0.png"
            alt="NTC Brasil Logo"
            className="h-12 md:h-14 w-auto"
          />
        </motion.a>

        <nav className="hidden md:flex items-center space-x-8">
          <motion.ul
            className="flex space-x-8"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map(link => (
              <motion.li key={link.name} variants={menuItemVariants}>
                <a
                  href={link.href}
                  className={`font-medium ${isScrolled ? 'text-text-primary' : 'text-secondary'} hover:text-primary transition-colors duration-300`}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)} aria-label="Abrir menu">
            <Menu
              className={`h-8 w-8 ${isScrolled ? 'text-text-primary' : 'text-secondary'}`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-primary/95 backdrop-blur-lg z-50 md:hidden"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <X className="h-8 w-8 text-secondary" />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center h-full -mt-16">
              <ul className="flex flex-col space-y-8 text-center">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-3xl font-bold text-secondary hover:opacity-80 transition-opacity"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
