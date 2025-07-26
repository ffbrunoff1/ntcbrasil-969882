import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lightbulb, CalendarCheck, HardHat } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <ShieldCheck className="h-12 w-12 text-primary" />,
      title: 'Qualidade Superior',
      description:
        'Utilizamos os melhores materiais e as mais rigorosas normas de qualidade para garantir construções duradouras e seguras.',
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-primary" />,
      title: 'Inovação Constante',
      description:
        'Adotamos tecnologias de ponta e métodos construtivos inovadores para otimizar processos e entregar resultados eficientes.',
    },
    {
      icon: <CalendarCheck className="h-12 w-12 text-primary" />,
      title: 'Compromisso com Prazos',
      description:
        'Planejamento meticuloso e gestão eficiente garantem que seu projeto seja entregue no prazo, sem surpresas.',
    },
    {
      icon: <HardHat className="h-12 w-12 text-primary" />,
      title: 'Segurança em Primeiro Lugar',
      description:
        'Priorizamos a segurança em nossos canteiros de obras, seguindo protocolos rígidos para proteger nossa equipe e seu investimento.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">Nossa Abordagem de Trabalho</h2>
          <p className="section-subtitle">
            Pilares que sustentam cada projeto que realizamos, garantindo a
            excelência do início ao fim.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-secondary p-8 rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 flex flex-col"
              variants={cardVariants}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-text-secondary flex-grow">
                {service.description}
              </p>
              <div className="mt-auto pt-6">
                <a
                  href="#contact"
                  className="font-bold text-primary hover:text-accent transition-colors"
                >
                  Saiba Mais &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
