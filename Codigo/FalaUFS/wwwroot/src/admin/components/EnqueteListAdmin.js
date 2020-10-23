import React from 'react';
import EnqueteAdminCard from "./EnqueteAdminCard";

export default function EnqueteListAdmin(props) {
        return (
            <div>
                <div className="col-md-12">
                    <h5 className="text-muted mb-4">
                        <span className="badge badge-success">{props.enquetes.length}</span>{" "}
                        Enquetes{props.enquetes.length > 0 ? "s" : ""}
                    </h5>

                    {props.enquetes.length === 0 && !props.loading ? (
                        <div className="alert text-center alert-info">
                            Ainda não há nenhuma enquete cadastrada
                        </div>
                    ) : null}

                    {props.enquetes.map((enquete, index) => (
                        <EnqueteAdminCard key={index} enquete={enquete} />
                    ))}
                </div>
            </div>
        );
}
