import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./navegação/Home";
import Destino from "./navegação/destino";
import Promocoes from "./navegação/promoções";
import Contatos from "./navegação/contatos";

function App() {

  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/destino' element={<Destino />} />
          <Route path='/promocoes' element={<Promocoes />} />
          <Route path='/contato' element={<Contatos />} />
        </Routes>
      </BrowserRouter>]

    </section>

  );
}

export default App;
