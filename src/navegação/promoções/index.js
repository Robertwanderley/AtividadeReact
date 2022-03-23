import React from "react";
import Footer from "../../componentes/footer";
import Cards from "../../componentes/card_promoções/cards";
import Headers from "../../componentes/header";


function Promocoes() {
    return (
        <section className="container">
            <Headers/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Cards/>
            <Cards/>
            <Footer ano={2022}/>
        </section>

    );
}

export default Promocoes;
