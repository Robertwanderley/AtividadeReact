import React from "react";

function Buscar(){
    return(
        <section>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h3>Encontre seu Destino</h3>
                            <div className="input-group flex-nowrap">
                                <span className="input-group-text" id="addon-wrapping">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                        height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </span>
                                <input type="text" className="form-control" placeholder="Buscar." aria-label="Username"
                                    aria-describedby="addon-wrapping"/>
                                <button type="button" className="bpequisar btn btn-danger">Buscar</button>
                            </div>
                        </div>
                    </div>
                </div>
    </section>
    );

}
export default Buscar;
