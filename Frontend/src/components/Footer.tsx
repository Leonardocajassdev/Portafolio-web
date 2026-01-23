import React from 'react';
import { 
  IconBrandWhatsapp
} from "@tabler/icons-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto w-full">
      <div className="max-w-5xl mx-auto px-16 py-3 flex items-center justify-between relative z-10">
        {/* Texto a la izquierda */}
        <p className="text-sm md:text-xs">Developed by Leonardo Cajas</p>

        {/* Iconos a la derecha */}
        <div className="flex gap-5">
          <a href="https://wa.me/573214641038/?text=Hola soy ..." target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
            <IconBrandWhatsapp size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

