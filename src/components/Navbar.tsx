import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-500 ${
        isScrolled ? 'backdrop-blur-sm bg-gray-900/50 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between relative z-10">
        {/* Logo a la izquierda */}
        <div className="flex items-center gap-2">
        <h1
          className="font-extrabold text-4xl text-white"
          style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.6)' }}
        >
          Codev
        </h1>

        </div>

        {/* Links de navegación a la derecha */}
        <ul className="flex gap-8 font-medium">
          <li>
            <a href="#inicio" className="text-white text-lg hover:text-blue-500 transition">
              Inicio
            </a>
          </li>
          <li>
            <a href="#sobremi" className="text-white text-lg hover:text-blue-500 transition">
              Sobre mi
            </a>
          </li>
          <li>
            <a href="#projects" className="text-white text-lg hover:text-blue-500 transition">
              Mis proyectos
            </a>
          </li>
          <li>
            <a href="#skills" className="text-white text-lg hover:text-blue-500 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#contacto" className="text-white text-lg hover:text-blue-500 transition">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
