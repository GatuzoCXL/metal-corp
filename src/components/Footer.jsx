const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MetalPro</h3>
            <p className="text-gray-400">
              Expertos en metalurgia y soldadura, ofreciendo servicios de alta calidad para sus proyectos.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Horario de Atención</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Lunes - Viernes: 8:00 AM - 6:00 PM</li>
              <li>Sábado: 9:00 AM - 2:00 PM</li>
              <li>Domingo: Cerrado</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} MetalPro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
