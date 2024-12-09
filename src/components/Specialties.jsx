import { motion } from 'framer-motion';
import { BeakerIcon, WrenchIcon, CogIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const specialties = [
  {
    icon: BeakerIcon,
    title: 'Soldadura TIG',
    description: 'Precisión excepcional para materiales como acero inoxidable y aluminio.',
  },
  {
    icon: WrenchIcon,
    title: 'Soldadura MIG',
    description: 'Ideal para proyectos industriales y trabajos de gran escala.',
  },
  {
    icon: CogIcon,
    title: 'Fabricación Metálica',
    description: 'Diseño y construcción de estructuras metálicas personalizadas.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Control de Calidad',
    description: 'Inspección rigurosa y certificación de todas las soldaduras.',
  },
];

const Specialties = () => {
  return (
    <section className="py-20 bg-[#0A0C14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Nuestras Especialidades</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Dominamos diversas técnicas de soldadura y metalurgia para ofrecer
            soluciones precisas a sus necesidades específicas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 rounded-lg bg-dark/50 hover:bg-dark/30 transition-all border border-gray-800"
            >
              <div className="bg-secondary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <specialty.icon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white text-center">{specialty.title}</h3>
              <p className="text-gray-400 text-center">{specialty.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
