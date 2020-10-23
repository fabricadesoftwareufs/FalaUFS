import React from 'react';

export default function EixoAdminCard(props) {
    const { title, time } = props.eixo;
        return (
            <div>
                <section className="content">
                    {/* Default box */}
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Eixos Temáticos</h3>
                            <div className="card-tools">
                                <button
                                    type="button"
                                    className="btn btn-tool"
                                    data-card-widget="collapse"
                                    data-toggle="tooltip"
                                    title="Collapse"
                                >
                                    <i className="fas fa-minus" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <table className="table table-striped projects">
                                <thead>
                                <tr>
                                    <th style={{ width: "1%" }}>#</th>
                                    <th style={{ width: "20%" }}>Título</th>
                                    <th>Progresso</th>
                                    <th style={{ width: "8%" }} className="text-center">
                                        Status
                                    </th>
                                    <th style={{ width: "20%" }}></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>#</td>
                                    <td>
                                        <a>{title}</a>
                                        <br />
                                        <small>{time}</small>
                                    </td>
                                    <td className="project_progress">
                                        <div className="progress progress-sm">
                                            <div
                                                className="progress-bar bg-green"
                                                role="progressbar"
                                                aria-volumenow={57}
                                                aria-volumemin={0}
                                                aria-volumemax={100}
                                                style={{ width: "57%" }}
                                            ></div>
                                        </div>
                                        <small>57% Completo</small>
                                    </td>
                                    <td className="project-state">
                                        <span className="badge badge-success">Ativo</span>
                                    </td>
                                    <td className="project-actions text-right">
                                        <a className="btn btn-primary btn-sm" href="#">
                                            <i className="fas fa-folder"></i>
                                            Ver
                                        </a>
                                        <a className="btn btn-info btn-sm" href="#">
                                            <i className="fas fa-pencil-alt"></i>
                                            Editar
                                        </a>
                                        <a className="btn btn-danger btn-sm" href="#">
                                            <i className="fas fa-trash"></i>
                                            Deletar
                                        </a>
                                    </td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                        {/* /.card-body */}
                    </div>
                    {/* /.card */}
                </section>;
                
            </div>
        );
}
