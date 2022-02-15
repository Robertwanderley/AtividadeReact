import React from "react";


function Box() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src="/imagens/sp.jpg" alt="São Paulo" />
                        <div className="card-body">
                            <h5 className="card-title">São Paulo</h5>
                            <p className="card-text">Aproveite sua viagem em São Paulo com os melhores Pontos Turísticos. Compre com tranquilidade.Reserve Agora sua viagem!</p>
                            <button type="button" className="btn btn-primary">comprar</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src="/imagens/rio.jpg" alt="Rio de Janeiro" />
                        <div className="card-body">
                            <h5 className="card-title">Rio de Janeiro</h5>
                            <p className="card-text">O destino mais famoso do Brasil, local do Cristo Redentor, Copacabana e Pão de Açúcar.Conheça nossas dicas e planeje sua viagem com segurança.</p>
                            <button type="button" className="btn btn-primary">comprar</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src="/imagens/recife.jpg" alt="Recife" />
                        <div className="card-body">
                            <h5 className="card-title">Recife</h5>
                            <p className="card-text">Aproveite sua viagem para Pernambuco com os melhores Pontos Turísticos. Compre com tranquilidade.Reserve Agora sua viagem!</p>
                            <button type="button" className="btn btn-primary">comprar</button>
                        </div>
                    </div>
                    <br/>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src="/imagens/bahia.jpg" alt="Salvador" />
                        <div className="card-body">
                            <h5 className="card-title">Salvador</h5>
                            <p className="card-text">Aproveite sua viagem para Bahia com, Pelourinho,Mercado Modelo,Praia da Barra,Farol da Barra e os melhores Pontos Turísticos. Compre com tranquilidade.Reserve Agora sua viagem!</p>
                            <button type="button" className="btn btn-primary">comprar</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src="/imagens/bh.jpg" alt="Belo Horizonte" />
                        <div className="card-body">
                            <h5 className="card-title">Belo horizonte</h5>
                            <p className="card-text">Aproveite sua viagem para belo horizonte,Praça da Liberdade ,Museu das Minas e do Metal,Memorial Minas Vale e os melhores Pontos Turísticos. Compre com tranquilidade.Reserve Agora sua viagem!</p>
                            <button type="button" className="btn btn-primary">comprar</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src="/imagens/portoalegre.jpg" alt="Imagem do card3" />
                        <div className="card-body">
                            <h5 className="card-title">Porto Alegre</h5>
                            <p className="card-text">Aproveite sua viagem para Porto Alegre, Lago Guaíba, Casa de Cultura Mário Quintana ,Parque Farroupilha e os melhores Pontos Turísticos. Compre com tranquilidade.Reserve Agora sua viagem!</p>
                            <button type="button" className="btn btn-primary">comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Box;