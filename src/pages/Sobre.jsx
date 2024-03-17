/** @format */

import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Sobre() {
  return (
    <div>
      <Navbar />
      <section className="contato">
        <h2>Pagina About</h2>
        <div className="perguntas">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              dolorum facilis consequuntur amet esse impedit minima deleniti?
              Quasi vitae corrupti ipsum animi sint repellat, ipsa
              exercitationem inventore itaque beatae odit!
            </p>
          </div>
          <div>
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
