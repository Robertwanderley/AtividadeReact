import React from "react";
import "./stylo.css";

function Header() {
  return (
    <header className="container">
      <nav className="navbar navbar-expand-lg navbar-light cor-bg">
        <a className="navbar-brand" href="http://localhost:3000"><img className="tm-logo" src="/imagens/logotipo.svg" alt="logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="http://localhost:3000">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/destinos">Destino</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/promocoes">Promoções</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/contatos">Contatos</a>
            </li>
          </ul>
        </div>
      </nav>

    </header>
  );
}
export default Header;