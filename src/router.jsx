/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
