import React from "react";
import Layout from "../Layouts/Layout";
import Inicio from "./Sections/Inicio"
import Skills from "./Sections/Skills";
import Proyectos from "./Sections/Proyectos";
import SobreMi from "./Sections/SobreMi";
import Contacto from "./Sections/Contacto";

const Landing: React.FC = () => {
  return (
    <Layout>
      {/* Aquí ya no repites Navbar ni Footer */}
      <Inicio/>
      <SobreMi />
      <Proyectos />
      <Skills />
      <Contacto />
    </Layout>
  );
};

export default Landing;
