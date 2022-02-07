import React from "react";
import Home from "./navegação/Home";
import Destino from "./navegação/destino";
import Promocoes from "./navegação/promoções";
import Contatos from "./navegação/contatos";

function App() {

  const url = window.location.href;
  return (
    <div>
    { 
        url ==="http://localhost:3000/"
        ?<Home/>
        :url ==="http://localhost:3000/destinos"
        ?<Destino/>
        :url ==="http://localhost:3000/promocoes"
        ?<Promocoes/>
        :url ==="http://localhost:3000/contatos"
        ?<Contatos/>
        :"errro"
        }
    </div>
  

  );
}

export default App;
