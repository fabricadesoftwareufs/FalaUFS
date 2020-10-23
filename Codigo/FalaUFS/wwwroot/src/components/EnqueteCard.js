import React from 'react'
import { Card, Icon, Label } from 'semantic-ui-react'
import TempoModal from './TempoModal'
const description = [
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
].join(' ')

const CardExampleExtraContent = () => (
  <Card raised style={{ width: 810, borderRadius: 20}}>
    <Card.Content><Label style={{ color: 'white', backgroundColor: "#004694"}} size="huge" className="Label" as='a' ribbon='left'>
          EIXO TEMÁTICO: SEGURANÇA
        </Label></Card.Content>
    <Card.Content header='ENQUETE: Você acha a UFS segura?' />
    <Card.Content description={description} />
    <Card.Content extra>
      <Icon name='calendar alternate' />Audiência criada em: 20/03/2020.
    </Card.Content>
    <Card.Content><TempoModal /></Card.Content>
  </Card>
)

export default CardExampleExtraContent