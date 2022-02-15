import React from "react";
import Header from "../../componentes/header";
import Footer from "../../componentes/footer";
import Cards from "../../componentes/card_promoções/cards";


function Promocoes() {
    return (
        <section>
            <Header />
            <Cards/>
            <Cards/>
            <Footer />
        </section>

    );
}

export default Promocoes;
