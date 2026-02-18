import React from "react";
import Layout from "../Layouts/Layout";
import Inicio from "./Sections/Inicio";
import SobreMi from "./Sections/SobreMi";
import Educacion from "./Sections/Educacion";
import Proyectos from "./Sections/Proyectos";
import Skills from "./Sections/Skills";
import Cert from "./Sections/Cert";
import Contacto from "./Sections/Contacto";

const Landing: React.FC = () => {
  return (
    <Layout>
      <Inicio/>
      <Educacion />
      <Proyectos />
      <Skills />
      <Cert />
      <SobreMi />
      <Contacto />
    </Layout>
  );
};

export default Landing;
