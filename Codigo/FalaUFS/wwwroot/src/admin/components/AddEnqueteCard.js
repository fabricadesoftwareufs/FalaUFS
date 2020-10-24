import React, {Component} from 'react';
import DatePickerComponent from "./DatePicker";
import { Form, TextArea, Select, Button } from 'semantic-ui-react'

const options = [
    { key: 'yes', text: 'Sim', value: 'yes' },
    { key: 'no', text: 'Não', value: 'no' },

];

class AddEnqueteCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: "",

            enquete: {
                title: "",
                description: ""
            }
        };

        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleFieldChange = event => {
        const { value, title } = event.target;

        this.setState({
            ...this.state,
            enquete: {
                ...this.state.enquete,
                [title]: value
            }
        });
    };

    onSubmit(e) {
        e.preventDefault();

        if (!this.isFormValid())


            this.setState({error: "", loading: true});

        let {enquete} = this.state;
        fetch("http://localhost:8080", {
            method: "post",
            body: JSON.stringify(enquete)
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    this.setState({ loading: false, error: res.error });
                } else {
                    enquete.time = res.time;
                    this.props.addEnquete(enquete);

                    this.setState({
                        loading: false,
                        enquete: { ...enquete, description: "" }
                    });
                }
            })
            .catch(err => {
                this.setState({
                    error: "Algo deu errado, tente novamente.",
                    loading: false,
                });
            });
    }

    isFormValid() {
        return this.state.enquete.title !== "" && this.state.enquete.description !== "";
    }

    renderError() {
        return this.state.error ? (
            <div className="alert alert-danger">{this.state.error}</div>
        ) : null;
    }

    render() {

        return (
            <div>
                <section className="content">
                    <div className="row">
                        <div className="col-md-10">
                            <div className="card card-primary" style={{marginLeft: 10, marginRight: 10}}>
                                <div className="card-header">
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
                                <div className="card-body">
                                    <Form onSubmit={this.handleSubmit}>

                                        <Form.Input
                                            required
                                            label='Título da enquete'
                                            placeholder='Título da enquete'
                                            name='title'
                                            defaultValue={this.state.enquete.title}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderError()}
                                        <Form.Field
                                            required
                                            id='description'
                                            control={TextArea}
                                            label='Descrição'
                                            placeholder='Descrição'
                                            defaultValue={this.state.enquete.description}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderError()}
                                        <Form.Group widths='equal'><Form.Field
                                            required
                                            control={Select}
                                            options={options}
                                            label='Enquete pode receber votos?'
                                            placeholder='Selecione'
                                            />
                                            <Form.Field
                                                required
                                                control={Select}
                                                options={options}
                                                label='Enquete visível para o público?'
                                                placeholder='Selecione'
                                            />
                                        </Form.Group>
                                        <Form.Input

                                            label='Selecione as datas e o horário de início e fim da enquete:'
                                        >
                                            <DatePickerComponent/>
                                        </Form.Input>

                                        <Form.Button positive floated='right' content='Cadastrar enquete' />
                                    </Form>
                                    <Button negative floated='left'>Cancelar</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        );
    }
}

export default AddEnqueteCard;