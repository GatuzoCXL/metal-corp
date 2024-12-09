import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Galería', href: '#gallery' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className="bg-dark/95 backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-secondary">MetalPro</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
