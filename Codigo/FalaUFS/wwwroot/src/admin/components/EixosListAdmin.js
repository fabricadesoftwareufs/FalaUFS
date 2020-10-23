import React from 'react';
import EixoAdminCard from "./EixoAdminCard";

export default function EixosListAdmin(props){
        return (
            <div>
                <div className="col-md-12">
                    <h5 className="text-muted mb-4">
                        <span className="badge badge-success">{props.eixos.length}</span>{" "}
                        Eixos{props.eixos.length > 0 ? "s" : ""}
                    </h5>

                    {props.eixos.length === 0 && !props.loading ? (
                        <div className="alert text-center alert-info">
                            Ainda não há nenhum eixo temático cadastrado
                        </div>
                    ) : null}

                    {props.eixos.map((eixo, index) => (
                        <EixoAdminCard key={index} eixo={eixo} />
                    ))}
                </div>
            </div>
        );
}
