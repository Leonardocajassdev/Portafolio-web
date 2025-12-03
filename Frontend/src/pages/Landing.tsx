import React from "react";
import Layout from "../Layouts/Layout";
import Inicio from "./Sections/Inicio"
import Skills from "./Sections/Skills";
import Cert from "./Sections/Cert";
import Proyectos from "./Sections/Proyectos";
import SobreMi from "./Sections/SobreMi";
import Contacto from "./Sections/Contacto";

const Landing: React.FC = () => {
  return (
    <Layout>
      <Inicio/>
      <SobreMi />
      <Proyectos />
      <Skills />
      <Cert />
      <Contacto />
    </Layout>
  );
};

export default Landing;
