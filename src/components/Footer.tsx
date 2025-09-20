import React from 'react';
import { 
  IconBrandInstagram,
  IconBrandDiscord
} from "@tabler/icons-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto w-full">
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between relative z-10">
        {/* Texto a la izquierda */}
        <p className="text-sm md:text-base">Developed by Leonardo Cajas</p>

        {/* Iconos a la derecha */}
        <div className="flex gap-8">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
            <IconBrandInstagram size={40} />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
            <IconBrandDiscord size={40} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

