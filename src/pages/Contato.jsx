/** @format */

import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Contato() {
  return (
    <div>
      <Navbar />
      <section className="contato">
        <h2>Quer entrar em contato?</h2>
        <div className="perguntas">
          <div>
            <h3>Perguntas gerais</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              dolorum facilis consequuntur amet esse impedit minima deleniti?
              Quasi vitae corrupti ipsum animi sint repellat, ipsa
              exercitationem inventore itaque beatae odit!
            </p>
          </div>
          <div>
            <h3>Fale com um especialista</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              dolorum facilis consequuntur amet esse impedit minima deleniti?
              Quasi vitae corrupti ipsum animi sint repellat, ipsa
              exercitationem inventore itaque beatae odit!
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
