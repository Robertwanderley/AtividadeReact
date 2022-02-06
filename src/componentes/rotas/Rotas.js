import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../../navegação/Home';
import destinos from '../../navegação/destino';
import promocoes from '../../navegação/promoções';
import contatos from '../../navegação/contatos';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/destinos" component={destinos} />
                <Route path="/promocoes" component={promocoes} />
                <Route path="/contatos" component={contatos} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;