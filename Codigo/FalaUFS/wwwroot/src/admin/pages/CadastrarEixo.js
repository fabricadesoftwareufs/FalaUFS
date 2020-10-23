import React, {Component} from 'react';

import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import AddEixoCard from "../components/AddEixoCard";

class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                {/* Conteudo da pagina */}
                <div className="content-wrapper">
                    {/* Nome da página */}
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Cadastrar Eixo Temático</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <a href="#">Início</a>
                                        </li>
                                        <li className="breadcrumb-item active">Cadastrar Eixo Temático</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Conteudo principal */}
                    <AddEixoCard/>

                </div>

                <Footer/>
                <Sidebar/>
            </div>
        );
    }
}

export default Main;