import React, { Component } from 'react'
import { Card, Form, Button, Icon, Confirm } from 'semantic-ui-react'



class CardExampleExtraContent extends Component {

    state = { open: false, result: 'show the modal to capture a result' }

    show = () => this.setState({ open: true })
    handleConfirm = () => this.setState({ result: 'confirmed', open: false })
    handleCancel = () => this.setState({ result: 'cancelled', open: false })

    render() {
        const {open} = this.state
        return (
            <Card raised style={{width: 390, borderRadius: 20}}>
                <Card.Content>
                    <Form>
                        <Form.TextArea style={{minHeight: 90}}/>
                        <div>
                            <Button onClick={this.show} positive floated='left' icon labelPosition='right'>
                                Enviar
                                <Icon name='right arrow'/>
                            </Button>
                            <Confirm
                                content='Selecione Enviar para confirmar seu comentário ou selecione Não enviar para finalizar seu voto sem um comentário'
                                open={open}
                                cancelButton='Não enviar'
                                confirmButton="Enviar"
                                onCancel={this.handleCancel}
                                onConfirm={this.handleConfirm}
                            />

                            
                        </div>
                    </Form>
                </Card.Content>
            </Card>
        )
    }
}
  
  export default CardExampleExtraContent