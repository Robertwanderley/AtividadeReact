import React from "react";
import "./stylo.css";

function Header(){
    return(
<header>
<nav class="navbar navbar-expand-lg navbar-light cor-bg ">
  <a class="navbar-brand" href="http://localhost:3000">logo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="http://localhost:3000">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="http://localhost:3000/destinos">Destino</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="http://localhost:3000/promocoes">Promoções</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="http://localhost:3000/contatos">Contatos</a>
      </li>
    </ul>
  </div>
</nav>
</header>
    );
}
export default Header;