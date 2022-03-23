import React from "react";

function Cards() {

    return (
        
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <div className="card">
                        <img className="card-img-top" src="/imagens/sp.jpg" alt="São Paulo" />
                        <div className="card-body  text-center">
                            <h5 className="card-title"><img src="/imagens/aviao.png" alt="imagem card1"/> São Paulo</h5>
                            <p className="card-text"><del>valor:R$ 950</del></p>
                            <p className="card-text text-danger">Promoção:R$ 550</p>
                            <button type="button" className="btn btn-primary">Comprar</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <img className="card-img-top" src="/imagens/rio.jpg" alt="Rio de Janeiro" />
                        <div className="card-body  text-center">
                            <h5 className="card-title"><img src="/imagens/aviao.png" alt="imagem card2"/> Rio de Janeiro</h5>
                            <p className="card-text"><del>valor:R$ 1150</del></p>
                            <p className="card-text text-danger">Promoção:R$ 550</p>
                            <button type="button" className="btn btn-primary">Comprar</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <img className="card-img-top" src="/imagens/recife.jpg" alt="Recife" />
                        <div className="card-body  text-center">
                            <h5 className="card-title"><img src="/imagens/aviao.png" alt="imagem card3"/> Recife</h5>
                            <p className="card-text"><del>valor:R$ 850</del></p>
                            <p className="card-text text-danger">Promoção:R$ 450</p>
                            <button type="button" className="btn btn-primary">Comprar</button>
                        </div>
                    </div>
                    <br/>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <img className="card-img-top" src="/imagens/bahia.jpg" alt="Salvador" />
                        <div className="card-body  text-center">
                            <h5 className="card-title"><img src="/imagens/aviao.png" alt="imagem card4"/> Salvador</h5>
                            <p className="card-text"><del>valor:R$ 550</del></p>
                            <p className="card-text text-danger">Promoção:R$ 250</p>
                            <button type="button" className="btn btn-primary">Comprar</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <img className="card-img-top" src="/imagens/bh.jpg" alt="Belo Horizonte" />
                        <div className="card-body  text-center">
                            <h5 className="card-title"><img src="/imagens/aviao.png" alt="imagem card5"/> Belo Horizonte</h5>
                            <p className="card-text"><del>valor:R$1950</del></p>
                            <p className="card-text text-danger">Promoção:R$ 1050</p>
                            <button type="button" className="btn btn-primary">Comprar</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <img className="card-img-top" src="/imagens/portoalegre.jpg" alt="Imagem do card6" />
                        <div className="card-body  text-center">
                            <h5 className="card-title"><img src="/imagens/aviao.png" alt="imagem card6"/> Porto Alegre</h5>
                            <p className="card-text"><del>valor:R$ 650</del></p>
                            <p className="card-text text-danger">Promoção:R$ 350</p>
                            <button type="button" className="btn btn-primary">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cards;