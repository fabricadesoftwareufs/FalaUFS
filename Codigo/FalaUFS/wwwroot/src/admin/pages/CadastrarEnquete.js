import React, {Component} from 'react';

import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import AddEnqueteCard from '../components/AddEnqueteCard'

class CadastrarEnquete extends Component {
    render() {
        return (
            <div>
                <Header/>

                {
                    /* Content Wrapper. Contains page content */
                }
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Cadastrar Enquete</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <a href="#">Início</a>
                                        </li>
                                        <li className="breadcrumb-item active">Cadastrar Enquete</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        {/* /.container-fluid */}
                    </section>
                    {/* MainPage content */}
                    <AddEnqueteCard/>
                    {/* /.content */}
                </div>
                {
                    /* /.content-wrapper */
                }

                <Sidebar/>
                <Footer/>

            </div>
        );
    }
}

export default CadastrarEnquete;