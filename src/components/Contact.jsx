import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Teléfono',
      details: '+1 234 567 890',
      link: 'tel:+1234567890',
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: 'contacto@tuempresa.com',
      link: 'mailto:contacto@tuempresa.com',
    },
    {
      icon: MapPinIcon,
      title: 'Ubicación',
      details: 'Tu Dirección, Ciudad, País',
      link: 'https://maps.google.com',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Contáctanos</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Estamos aquí para ayudarte con tus proyectos. Contáctanos y descubre cómo
            podemos hacer realidad tu visión.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group flex flex-col items-center p-8 rounded-lg bg-[#0A0C14] border border-gray-800 hover:border-secondary transition-colors"
            >
              <div className="bg-secondary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <info.icon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{info.title}</h3>
              <p className="text-gray-400 text-center">{info.details}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-[#0A0C14] border border-gray-800 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent text-white placeholder-gray-500"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-[#0A0C14] border border-gray-800 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent text-white placeholder-gray-500"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-[#0A0C14] border border-gray-800 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent text-white placeholder-gray-500"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-secondary hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
