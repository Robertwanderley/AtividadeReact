import React from "react";
import "./stylo.css";
import Buscar from "../../componentes/buscador";
import Sobre from "../../componentes/sobre";
import Footer from "../../componentes/footer";
import Headers from "../../componentes/header";
import Carosel from "../../componentes/carrousel/carrousel";


function Home() {
    return (
        <section className="container">
            <Headers/>
            <Carosel/>
            <Buscar />
            <br />
            <br />
            <Sobre></Sobre>
            <Footer ano={2022}/>
        </section>
    );
}
export default Home;