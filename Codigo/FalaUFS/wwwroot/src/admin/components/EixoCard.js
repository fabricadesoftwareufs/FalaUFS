import React from 'react'
import { Card, Item, Label, Icon, Button } from 'semantic-ui-react'

export default function EixoCard(props) {
    const { title, description, time } = props.eixo;
    return (
        <>
            <Card fluid>
                <Card.Content>
                    <Card.Header>
                    <Icon circular name='lock open' size='large'/>
                            <Item.Header as='a'>{title}</Item.Header>
                    </Card.Header>
                    <Item>
                        <Item.Content>
                            <Item.Description>
                                {description}
                            </Item.Description>
                        </Item.Content>
                        <Item.Content>
                            {time}
                        </Item.Content>
                    </Item>
                </Card.Content>
                <Card.Content>
                    <Item.Extra>
                        <Button circular positive animated floated='right'>
                            <Button.Content visible>Entrar</Button.Content>
                            <Button.Content hidden>
                                <Icon name='arrow circle right' />
                            </Button.Content>
                        </Button>
                        <Label>Disponível</Label>
                    </Item.Extra>
                </Card.Content>
            </Card>
        </>
    );
}
