import React from "react";
import "./stylo.css";

function Header(){
    return(
<header className="d-flex justify-content-center">
<nav class="navbar navbar-expand-lg fixarnav navbar-light bg-transparent">
  <a class="navbar-brand" href="#"><img className="tm-logo" src="/imagens/logotipo.svg"/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
      <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Destino</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Promoções</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contatos</a>
      </li>
    </ul>
  </div>
</nav>
</header>
    );
}
export default Header;