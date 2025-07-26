import React from 'react';
import { motion } from 'framer-motion';
import { Building, Award, Users } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const stats = [
    {
      icon: <Building className="h-10 w-10 text-primary" />,
      value: '100+',
      label: 'Projetos Concluídos',
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      value: '15+',
      label: 'Anos de Experiência',
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      value: '98%',
      label: 'Clientes Satisfeitos',
    },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            Sobre a <span className="gradient-text">NTC Brasil</span>
          </h2>
          <p className="section-subtitle">
            Comprometidos com a excelência e a inovação, oferecemos soluções
            completas para todos os tipos de projetos, desde reformas até
            grandes obras.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative aspect-video rounded-2xl shadow-card overflow-hidden">
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/construction-site.jpg"
                alt="Canteiro de obras moderno"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Seu sonho, nossa construção.
            </h3>
            <p className="text-text-secondary mb-6">
              Na NTC Brasil, cada projeto é uma parceria. Unimos nossa vasta
              experiência técnica com uma abordagem centrada no cliente para
              transformar visões em realidade. Nossa equipe de especialistas se
              dedica a entregar resultados que não apenas atendem, mas superam
              as expectativas, garantindo qualidade, segurança e pontualidade em
              cada etapa.
            </p>
            <a href="#services" className="cta-button">
              Conheça nossa abordagem
            </a>
          </motion.div>
        </div>

        <motion.div
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-secondary p-8 rounded-xl shadow-card"
              variants={itemVariants}
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <p className="text-4xl font-bold text-primary">{stat.value}</p>
              <p className="text-text-secondary mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
