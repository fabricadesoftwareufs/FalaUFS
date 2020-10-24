import React from "react";
import CommentComponent from '../components/CommentComponent'

export default function CommentList(props) {
    return (
        <div className="commentList">
            <h5 className="text-muted mb-4">
                <span className="badge badge-success">{props.comments.length}</span>{" "}
                Comentários{props.comments.length > 0 ? "s" : ""}
            </h5>

            {props.comments.length === 0 && !props.loading ? (
                <div className="alert text-center alert-info">
                    Seja o primeiro a comentar!
                </div>
            ) : null}

            {props.comments.map((comment, index) => (
                <CommentComponent key={index} comment={comment} />
            ))}
        </div>
    );
}