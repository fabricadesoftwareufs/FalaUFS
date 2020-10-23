import React, { Component } from 'react'
import { Card, Form, Button, Icon, TextArea } from 'semantic-ui-react'



class CardExampleExtraContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: "",

            comment: {
                name: "",
                message: ""
            }
        };

        // bind context to methods
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    /**
     * Handle form input field changes & update the state
     */
    handleFieldChange = event => {
        const { value } = event.target;

        this.setState({
                ...this.state,
                comment: value
            }
        );
    };

    /**
     * Form submit handler
     */
    onSubmit(e) {
        // prevent default form submission
        e.preventDefault();

        if (!this.isFormValid()) {
            this.setState({ error: "Escreva um comentário." });
            return;
        }

        // loading status and clear error
        this.setState({ error: "", loading: true });

        // persist the comments on server
        let { comment } = this.state;
        fetch("http://localhost:7777", {
            method: "post",
            body: JSON.stringify(comment)
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    this.setState({ loading: false, error: res.error });
                } else {
                    // add time return from api and push comment to parent state
                    comment.time = res.time;
                    this.props.addComment(comment);

                    this.setState({
                        loading: false,
                        comment: { ...comment, message: "" }
                    });
                }
            })
            .catch(err => {
                this.setState({
                    error: "Algo deu errado. Tente novamente",
                    loading: false
                });
            });
    }
    /**
     * Simple validation
     */
    isFormValid() {
        return this.state.comment.message !== "";
    }

    renderError() {
        return this.state.error ? (
            <div className="alert alert-danger">{this.state.error}</div>
        ) : null;
    }
    render() {
        return (
            <Card raised style={{width: 390, borderRadius: 20}}>
                <Card.Content>
                    <Form method="post" onSubmit={this.onSubmit}>
                        <TextArea
                            onChange={this.handleFieldChange}
                            value={this.state.comment.message}
                            className="form-control"
                            placeholder=" Escreva seu comentário aqui"
                            name="message"
                            style={{minHeight: 90}}/>
                        {this.renderError()}
                        <div>
                            <Button style={{ marginTop: 15}} disabled={this.state.loading} positive floated='left' icon labelPosition='right'>
                                Enviar
                                <Icon name='right arrow'/>
                            </Button>
                        </div>
                    </Form>
                </Card.Content>
            </Card>
        )
    }
}

  export default CardExampleExtraContent