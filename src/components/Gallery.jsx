import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

const Gallery = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Usando useSpring para hacer la animación más suave
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transformaciones más suaves para diferentes elementos
  const y = useTransform(smoothProgress, [0, 1], [0, -50]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  const projects = [
    {
      title: 'Soldadura Industrial',
      category: 'Industrial',
      image: 'https://images.unsplash.com/photo-1605098293544-25f4c32344c8?q=80&w=1470',
      description: 'Soldadura de alta precisión para proyectos industriales',
      stats: ['100+ Proyectos', '99% Satisfacción']
    },
    {
      title: 'Estructura Metálica',
      category: 'Construcción',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1470',
      description: 'Diseño y fabricación de estructuras metálicas',
      stats: ['50+ Estructuras', '10+ Años exp.']
    },
    {
      title: 'Mantenimiento',
      category: 'Servicios',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1470',
      description: 'Servicios de mantenimiento preventivo y correctivo',
      stats: ['24/7 Disponible', 'Respuesta Rápida']
    },
    {
      title: 'Soldadura Especializada',
      category: 'Especializado',
      image: 'https://images.unsplash.com/photo-1505649118510-a5d934d3af17?q=80&w=1470',
      description: 'Soldaduras especiales para proyectos específicos',
      stats: ['Certificados', 'Alta Precisión']
    },
    {
      title: 'Fabricación',
      category: 'Manufactura',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1470',
      description: 'Fabricación de piezas y componentes metálicos',
      stats: ['Personalizado', 'Alta Calidad']
    },
    {
      title: 'Proyectos Especiales',
      category: 'Personalizado',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1470',
      description: 'Soluciones personalizadas para proyectos únicos',
      stats: ['Innovación', 'Experiencia']
    }
  ];

  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      className="py-20 bg-gradient-to-b from-dark to-dark/95 overflow-hidden"
    >
      <motion.div
        style={{ y, scale }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-secondary text-sm font-medium tracking-wider uppercase mb-3 inline-block">
            Portafolio
          </span>
          <h2 className="text-5xl font-bold text-white mb-6 font-serif">
            Nuestros Proyectos
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg italic">
            Explora algunos de nuestros trabajos más destacados en metalurgia y soldadura. Cada proyecto
            refleja nuestro compromiso con la calidad y la excelencia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-dark/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-300 group"
            >
              {/* Imagen con overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Categoría */}
                <div className="absolute top-4 right-4">
                  <span className="bg-secondary/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Estadísticas */}
                <div className="flex flex-wrap gap-3">
                  {project.stats.map((stat, statIndex) => (
                    <span
                      key={statIndex}
                      className="bg-dark/50 text-gray-300 px-3 py-1 rounded-lg text-sm backdrop-blur-sm border border-gray-700/50"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Línea decorativa */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-blue-400 to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Gallery;
