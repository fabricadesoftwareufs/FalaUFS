import React from 'react';
import EixoCard from "./EixoCard";

export default function EixosList(props) {

        return (
            <div>
                <div className="commentList">
                    <h5 className="text-muted mb-4">
                        <span className="badge badge-success">{props.eixos.length}</span>{" "}
                        Eixos{props.eixos.length > 0 ? "s" : ""}
                    </h5>

                    {props.eixos.length === 0 && !props.loading ? (
                        <div className="alert text-center alert-info">
                            Ainda não há nenhum eixo temático disponível :(
                        </div>
                    ) : null}

                    {props.eixos.map((eixo, index) => (
                        <EixoCard key={index} eixo={eixo} />
                    ))}
                </div>
            </div>
        );
}