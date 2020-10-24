import React from 'react'
import {Comment, Icon, Card, Segment, Button, Label, Dropdown} from 'semantic-ui-react'


const options = [
  { key: 'Conteúdo ofensivo', text: 'Conteúdo ofensivo', value: 'Conteúdo ofensivo' },
  { key: 'Comentário fora do tema', text: 'Comentário fora do tema', value: 'Comentário fora do tema' },
  { key: 'É span', text: 'É span', value: 'É span' },
]

export default function CommentComponent(props) {
  const {message, time} = props.comment;

  return (
      <Card color='green' raised fluid width={5}>
        <Segment>
          <Comment.Group>
            <Comment style={{height: 130}}>
              <Comment.Content>
                <Comment.Author>Usuário</Comment.Author>
                <Comment.Metadata>
                  {time}
                </Comment.Metadata>
                <Comment.Text>
                  {message}
                </Comment.Text>
                <Card.Content extra>
                  <Button size='tiny' as='div' labelPosition='right'>
                    <Button size='tiny' positive>
                      <Icon name='thumbs up'/>
                    </Button>
                    <Label as='a' basic pointing='left'>
                      2,048
                    </Label>
                  </Button>

                  <Button size='tiny' as='div' labelPosition='right'>
                    <Button size='tiny' color='red'>
                      <Icon name='thumbs down'/>
                    </Button>
                    <Label as='a' basic pointing='left'>
                      2,048
                    </Label>
                  </Button>
                  <Dropdown
                      direction='left'
                      header='Reportar comentário'
                      size='mini'
                      icon='exclamation triangle'
                      className='button icon'
                      floating
                      options={options}
                      trigger={<React.Fragment/>}
                  />
                </Card.Content>

              </Comment.Content>
            </Comment>
          </Comment.Group>
        </Segment>
      </Card>

  );
}
