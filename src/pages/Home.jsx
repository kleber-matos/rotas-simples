/** @format */
import "../../src/App.css";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="home">
        <div className="title_home">
          <h2>Bem vindo a pagina home</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aspernatur, beatae?
          </p>
        </div>
        <div className="post">
          <h2>New post</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            beatae molestiae, hic ab doloribus necessitatibus sequi eum
            obcaecati quae ipsam, cupiditate quo adipisci vitae! Sapiente sequi
            sit maiores ipsam dignissimos.
          </p>
        </div>
        <div className="post">
          <h2>New post</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            beatae molestiae, hic ab doloribus necessitatibus sequi eum
            obcaecati quae ipsam, cupiditate quo adipisci vitae! Sapiente sequi
            sit maiores ipsam dignissimos.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
