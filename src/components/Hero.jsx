import { motion } from 'framer-motion';

const Hero = () => {
  // Variantes para las animaciones de texto
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.45, 0.32, 0.9]
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.21, 0.45, 0.32, 0.9]
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: [0.21, 0.45, 0.32, 0.9]
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo con overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1505649118510-a5d934d3af17?q=80&w=2070")',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/70 to-dark/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(25,118,210,0.15)_0%,transparent_70%)]" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6"
        >
          Metal Corp
          <span className="text-secondary">.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-300 mb-8 max-w-2xl"
        >
          Expertos en metalurgia y soldadura industrial. Transformamos el metal en soluciones de calidad para tu negocio.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.4,
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => handleScroll('contact')}
            className="px-8 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 transition-colors"
          >
            Contáctanos
          </motion.button>

          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => handleScroll('services')}
            className="px-8 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 backdrop-blur-sm transition-colors"
          >
            Nuestros Servicios
          </motion.button>
        </motion.div>
      </div>

      {/* Decoración de fondo */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark to-dark/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full p-1"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full mx-auto"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
