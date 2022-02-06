import React from "react";
import "./stylo.css";
import Header from "../../componentes/header";
import Footer from "../../componentes/footer";
import Buscar from "../../componentes/buscador";
import Sobre_nos from "../../componentes/sobre";

function Home(){
    return(
        <section>
            <Header/>
            <img className="d-block w-100" src="/imagens/1slide.jpg" alt="Primeiro slide"/>
            <Buscar/>
            <br/>
            <br/>
            <Sobre_nos></Sobre_nos>
            <Footer/>
        </section>
    );
}
export default Home;