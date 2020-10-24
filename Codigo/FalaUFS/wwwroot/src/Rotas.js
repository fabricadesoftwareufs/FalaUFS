import React from 'react'

import Login from './pages/Login'
import Register from './pages/Register'
import Eixos from './pages/Eixos'
import Enquetes from './pages/Enquetes'
import Enquete from './pages/Enquete'
import Comentários from './pages/Comentários'
import Gráfico from './pages/Gráfico'
import MainPage from './admin/pages/MainPage'
import AddEixo from './admin/pages/CadastrarEixo'
import CadastrarEnquete from "./admin/pages/CadastrarEnquete";
import { Route, Switch, BrowserRouter} from 'react-router-dom'
import GerenciarEixos from "./admin/pages/GerenciarEixos";
import GerenciarEnquetes from "./admin/pages/GerenciarEnquetes";

 
function Rotas(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/eixos" component={Eixos} />
                <Route exact path="/enquetes" component={Enquetes} />
                <Route exact path="/enquete" component={Enquete} />
                <Route exact path="/comentarios" component={Comentários} />
                <Route exact path="/grafico" component={Gráfico} />
                <Route exact path="/admin" component={MainPage} />
                <Route exact path="/addeixo" component={AddEixo} />
                <Route exact path="/addenquete" component={CadastrarEnquete} />
                <Route exact path="/gerenciareixos" component={GerenciarEixos} />
                <Route exac path="/gerenciarenquetes" component={GerenciarEnquetes} />
                <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>

    )
}

export default Rotas