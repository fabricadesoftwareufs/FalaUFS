import React from 'react'
import { Card, Item, Label, Icon, Button } from 'semantic-ui-react'

const paragraph = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong.'

function EixoCard() {
    return (
        <>
            <Card fluid raised>
                <Card.Content>
                    <Card.Header>
                    <Icon circular name='lock open' size='large'/>
                            <Item.Header as='a'>EIXO TEMÁTICO: Segurança</Item.Header>
                            <Item.Meta>
                                <span className='cinema'>Segurança nos campus da UFS</span>
                            </Item.Meta>
                    </Card.Header>
                    <Item>
                        <Item.Content>
                            <Item.Description>{paragraph}</Item.Description>
                        </Item.Content>
                    </Item>
                </Card.Content>
                <Card.Content>
                    <Item.Extra>
                        <Button circular positive animated floated='right'>
                            <Button.Content visible>Votar</Button.Content>
                            <Button.Content hidden>
                                <Icon name='arrow circle right' />
                            </Button.Content>
                        </Button>
                        <Label>Disponível</Label>
                    </Item.Extra>
                </Card.Content>
            </Card>
        </>
    )
}

export default EixoCard