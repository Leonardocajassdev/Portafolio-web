import React from 'react';
import { 
  IconBrandInstagram,
  IconBrandDiscord
} from "@tabler/icons-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto w-full">
      <div className="max-w-5xl mx-auto px-15 py-3 flex items-center justify-between relative z-10">
        {/* Texto a la izquierda */}
        <p className="text-sm md:text-xs">Developed by Leonardo Cajas</p>

        {/* Iconos a la derecha */}
        <div className="flex gap-5">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
            <IconBrandInstagram size={25} />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
            <IconBrandDiscord size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

