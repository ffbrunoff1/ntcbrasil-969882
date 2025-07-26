import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setStatus('Enviando...');
    // Simulação de envio
    console.log('Form data submitted:', formData);
    setTimeout(() => {
      setStatus('Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      text: 'Rua Padre Lebret, 801, G05 Bloco 03',
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      text: '+55 44 99104-0774',
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      text: 'ffbrunoff@yahoo.com.br',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            Vamos Construir <span className="gradient-text">Juntos</span>
          </h2>
          <p className="section-subtitle">
            Tem um projeto em mente? Entre em contato conosco. Nossa equipe está
            pronta para transformar sua ideia em realidade.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              Informações de Contato
            </h3>
            <p className="text-text-secondary mb-8">
              Estamos disponíveis para atendê-lo. Escolha o melhor canal para
              você e vamos iniciar a conversa sobre seu próximo grande projeto.
            </p>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    {info.icon}
                  </div>
                  <span className="text-text-secondary text-lg">
                    {info.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="bg-secondary p-8 rounded-2xl shadow-card"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label htmlFor="name" className="sr-only">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Seu Nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Seu E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Seu Telefone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="Sua Mensagem"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full cta-button flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Enviar Mensagem</span>
                </button>
              </div>
              {status && (
                <p className="text-center text-text-secondary mt-4">{status}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
