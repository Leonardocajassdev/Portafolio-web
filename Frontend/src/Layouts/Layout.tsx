import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="scroll-smooth bg-black text-white min-h-screen flex flex-col">
      {/* Navbar fijo arriba */}
      <Navbar />

      {/* Contenido dinámico */}
      <main className="flex-grow">{children}</main>

      {/* Footer fijo abajo */}
      <Footer />
    </div>
  );
};

export default Layout;
