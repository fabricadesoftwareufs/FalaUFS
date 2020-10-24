import React, { Component } from 'react';
import { Form, TextArea, Select, Button } from 'semantic-ui-react'

const options = [
    { key: 'yes', text: 'Sim', value: 'yes' },
    { key: 'no', text: 'Não', value: 'no' },

];

 class AddEixoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: "",

            eixo: {
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
            eixo: {
                ...this.state.eixo,
                [title]: value
            }
        });
    };

    onSubmit(e) {
        e.preventDefault();

        if (!this.isFormValid())


        this.setState({error: "", loading: true});

        let {eixo} = this.state;
        fetch("http://localhost:8080", {
            method: "post",
            body: JSON.stringify(eixo)
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    this.setState({ loading: false, error: res.error });
                } else {
                    eixo.time = res.time;
                    this.props.addEixo(eixo);

                    this.setState({
                        loading: false,
                        eixo: { ...eixo, description: "" }
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
        return this.state.eixo.title !== "" && this.state.eixo.description !== "";
    }

    renderError() {
        return this.state.error ? (
            <div className="alert alert-danger">{this.state.error}</div>
        ) : null;
    }

    render() {
        return (
            <React.Fragment>
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
                                    <Form method="post" onSubmit={this.onSubmit}>
                                        <Form.Input
                                            required
                                            id='title'
                                            label='Título do eixo temático'
                                            placeholder='Título do eixo'
                                            name='title'
                                            defalutValue={this.state.eixo.title}
                                            onChange={this.handleFieldChange}
                                            />
                                        {this.renderError()}
                                         <Form.Field
                                             required
                                             id='description'
                                             control={TextArea}
                                             label='Descrição'
                                             placeholder='Descrição'
                                             name='description'
                                             defaultValue={this.state.eixo.description}
                                             onChange={this.handleFieldChange}
                                        />
                                        {this.renderError()}
                                        <Form.Field
                                            required
                                            control={Select}
                                            options={options}
                                            label='Pode receber enquetes?'
                                            placeholder='Selecione'
                                            search
                                            searchInput={{ id: 'form-select-control-gender' }}
                                        />

                                        <div className="form-group">
                                            <label htmlFor="exampleInputFile">Selecione a imagem representativa do eixo:</label>
                                            <div className="input-group">
                                                <div className="custom-file">
                                                    <input type="file" className="custom-file-input" id="exampleInputFile" />
                                                    <label className="custom-file-label" htmlFor="exampleInputFile">
                                                        Escolher imagem
                                                    </label>
                                                </div>
                                                <div className="input-group-append">
                                          <span className="input-group-text" id>
                                            Enviar
                                          </span>
                                                </div>
                                            </div>
                                        </div>
                                            <Form.Button disabled={this.state.loading} positive floated='right' content='Cadastrar eixo' />
                                    </Form>
                                    <Button negative floated='left'>Cancelar</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </React.Fragment>
        )
    }
}

export default AddEixoCard
