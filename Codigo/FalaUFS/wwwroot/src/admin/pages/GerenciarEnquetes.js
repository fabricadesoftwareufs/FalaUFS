import React, {Component} from 'react';
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import EnqueteListAdmin from "../components/EnqueteListAdmin";

class GerenciarEnquetes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            enquetes: [],
            loading: false
        };

        this.addEnquete = this.addEnquete.bind(this);

    }

    componentDidMount() {
        this.setState({loading: true});

        fetch("http://loalhost:8080")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    eixos: res,
                    loading: false
                });
            })
            .catch(err => {
                this.setState({loading: false});
            })
    }

    /**
     * Add new eixo
     * @param {Object} enquetes
     */
    addEnquete(enquete) {
        this.setState({
            loading: false,
            enquete: [enquete, ...this.state.enquetes]
        });
    }

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
                                    <h1>Gerenciar Enquetes</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <a href="#">Início</a>
                                        </li>
                                        <li className="breadcrumb-item active">Gerenciar enquetes</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        {/* /.container-fluid */}
                    </section>
                    {/* MainPage content */}

                    <EnqueteListAdmin
                        loading={this.state.loading}
                        enquetes={this.state.enquetes}/>

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

export default GerenciarEnquetes;