import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center text-secondary overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent z-0"></div>
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <motion.div
        className="relative z-20 container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
          variants={itemVariants}
        >
          Soluções em drenagem
        </motion.h1>
        <motion.p
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-secondary/90"
          variants={itemVariants}
        >
          Transformamos desafios em construções sólidas e inovadoras.
        </motion.p>
        <motion.div className="mt-10" variants={itemVariants}>
          <a
            href="#contact"
            className="inline-block bg-secondary text-primary font-bold py-4 px-10 rounded-full transition-all duration-300 ease-in-out transform hover:bg-secondary/90 hover:scale-105 hover:shadow-lg"
          >
            Realize seu Projeto
          </a>
        </motion.div>
      </motion.div>
      <motion.a
        href="#about"
        className="absolute bottom-10 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        aria-label="Rolar para baixo"
      >
        <ArrowDown className="h-8 w-8 text-secondary" />
      </motion.a>
    </section>
  );
}
