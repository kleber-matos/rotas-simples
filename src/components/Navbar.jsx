/** @format */
import "../../src/App.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="menuBar">
        <Link to="/home">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/sobre">Sobre</Link>
      </div>
    </div>
  );
}
