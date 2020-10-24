import React from 'react';
import EnqueteCard from "./EnqueteCard";

export default function EnqueteList(props) {

    return (
        <div>
            <div className="commentList">
                <h5 className="text-muted mb-4">
                    <span className="badge badge-success">{props.enquetes.length}</span>{" "}
                    Enquetes{props.enquetes.length > 0 ? "s" : ""}
                </h5>

                {props.enquetes.length === 0 && !props.loading ? (
                    <div className="alert text-center alert-info">
                        Ainda não há nenhuma enquete disponível :(
                    </div>
                ) : null}

                {props.enquetes.map((enquete, index) => (
                    <EnqueteCard key={index} enquete={enquete} />
                ))}
            </div>
        </div>
    );
}