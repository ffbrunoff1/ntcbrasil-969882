import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const footerLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Nossa Abordagem', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Linkedin className="h-6 w-6" />, href: '#' },
    { icon: <Instagram className="h-6 w-6" />, href: '#' },
    { icon: <Facebook className="h-6 w-6" />, href: '#' },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="bg-text-primary text-secondary">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <a href="#home" className="inline-block mb-4">
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1752958274433_0.png"
                alt="NTC Brasil Logo"
                className="h-14 w-auto mx-auto md:mx-0"
              />
            </a>
            <p className="max-w-md text-secondary/70 mx-auto md:mx-0">
              Seu sonho, nossa construção. Comprometidos em entregar projetos de
              alta qualidade com inovação e segurança.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-4">Navegação</h3>
            <ul className="space-y-3">
              {footerLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-secondary/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-4">Siga-nos</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary/70 hover:text-primary transition-colors"
                  aria-label={`Link para ${social.icon.type.displayName}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="border-t border-secondary/20">
        <div className="container mx-auto px-6 py-6 text-center text-sm text-secondary/50">
          <p>
            &copy; {new Date().getFullYear()} NTC Brasil. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
