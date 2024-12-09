import { motion } from 'framer-motion';
import { WrenchScrewdriverIcon, CubeIcon, ShieldCheckIcon, CogIcon, CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Soldadura Industrial',
    description: 'Soldadura de alta precisión para proyectos industriales y comerciales. Utilizamos las últimas tecnologías y métodos.',
    icon: WrenchScrewdriverIcon,
    image: 'https://images.unsplash.com/photo-1505649118510-a5d934d3af17?q=80&w=1470',
    features: [
      'Soldadura de alta precisión',
      'Proyectos industriales y comerciales',
      'Últimas tecnologías y métodos'
    ]
  },
  {
    title: 'Fabricación Metálica',
    description: 'Diseño y fabricación de estructuras metálicas personalizadas según sus especificaciones exactas.',
    icon: CubeIcon,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1470',
    features: [
      'Diseño y fabricación personalizados',
      'Estructuras metálicas según especificaciones',
      'Materiales de alta calidad'
    ]
  },
  {
    title: 'Mantenimiento',
    description: 'Servicios de mantenimiento preventivo y correctivo para asegurar la durabilidad de sus estructuras.',
    icon: CogIcon,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1470',
    features: [
      'Mantenimiento preventivo y correctivo',
      'Durabilidad de estructuras',
      'Servicios personalizados'
    ]
  },
  {
    title: 'Control de Calidad',
    description: 'Inspección rigurosa y certificación de todas las soldaduras según estándares internacionales.',
    icon: ShieldCheckIcon,
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1470',
    features: [
      'Inspección rigurosa y certificación',
      'Estándares internacionales',
      'Calidad garantizada'
    ]
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Nuestros Servicios</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales en metalurgia y soldadura, respaldadas por años de experiencia
            y un compromiso inquebrantable con la calidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-dark/40 backdrop-blur-sm p-8 hover:bg-dark/60 transition-all duration-300 border border-gray-800/30 hover:border-secondary/30">
                {/* Icono flotante */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-secondary/20 to-blue-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative">
                  {/* Icono del servicio */}
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-secondary" />
                  </div>

                  {/* Título y descripción */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-secondary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Lista de características */}
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                      >
                        <CheckCircleIcon className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Botón de más información */}
                  <div className="mt-8">
                    <button className="inline-flex items-center text-secondary hover:text-white transition-colors duration-300 group/btn">
                      <span>Más información</span>
                      <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
