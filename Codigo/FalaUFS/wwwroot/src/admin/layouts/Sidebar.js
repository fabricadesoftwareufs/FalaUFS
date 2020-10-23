import React, {Component} from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{ marginTop: 0}}>
                    {/* Brand Logo */}
                    <a href="#" className="brand-link">
                        <span className="brand-text font-weight-light" style={{marginLeft:50}}>AdminFALAUFS</span>
                    </a>
                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar user panel (optional) */}
                        <div className="user-panel mt-2 pb-2 mb-2 d-flex">
                            <div className="info">
                                <a href="#" className="d-block">
                                    Administrador
                                </a>
                            </div>
                        </div>
                        {/* Sidebar Menu */}
                        <nav className="mt-2">
                            <ul
                                className="nav nav-pills nav-sidebar flex-column"
                                data-widget="treeview"
                                role="menu"
                                data-accordion="false"
                            >
                                {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                                <li className="nav-header">GERENCIAMENTO DE DADOS</li>
                                <li className="nav-item has-treeview">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-edit" />
                                        <p>
                                            Cadastrar dados
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="/addeixo" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Cadastrar eixo temático</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/addenquete" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Cadastrar enquete</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item has-treeview">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-poll" />
                                        <p>
                                            Votação
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Gerenciar votos</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item has-treeview">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-cogs" />
                                        <p>
                                            Eixos temáticos
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Eixos temáticos ativos</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Eixos temáticos inativos</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/gerenciareixos" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Gerenciar eixos temáticos</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item has-treeview">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-th-list" />
                                        <p>
                                            Enquetes
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Enquetes ativas</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Enquetes finalizadas</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/gerenciarenquetes" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Gerenciar enquetes</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item has-treeview">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-users" />
                                        <p>
                                            Usuários
                                            <i className="fas fa-angle-left right" />

                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Gerenciar usuários</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item has-treeview">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-comments" />
                                        <p>
                                            Comentários
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Gerenciar comentários</p>
                                            </a>
                                        </li>

                                    </ul>
                                </li>

                            </ul>
                        </nav>
                        {/* /.sidebar-menu */}
                    </div>
                    {/* /.sidebar */}
                </aside>;

            </div>
        );
    }
}

export default Sidebar;