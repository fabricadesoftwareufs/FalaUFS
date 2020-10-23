import React from 'react'
import { Segment, Container, Header, List, Grid, Image } from 'semantic-ui-react'
import Dcomp from '../assets/compwhite.png'
import DAU from '../assets/dau.png'
import SmartUFS from '../assets/smartufs.png'

function Footer() {
    return(
        <>
        <Segment vertical style={{ backgroundColor: "#004694", padding: '4em 0em' }}>
      <Container>
        <Grid divided stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Sobre' />
              <List link inverted>
                <List.Item as='a'></List.Item>
                <List.Item as='a'>Fale conosco</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header inverted as='h4' content='Colaboradores' />
              <div>
                <Image.Group size='small'>
                  <Image src={DAU} />
                  <Image src={SmartUFS} />
                  <Image src={Dcomp} />
                </Image.Group>
              </div>
            </Grid.Column>
            <Grid.Column width={6}>
              <Header as='h4' inverted>
                Projeto Fala UFS
                <div>
                  <span> &copy; {new Date().getFullYear()} Universidade Federal de Sergipe</span>
                </div>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
        </>
    )
}

export default Footer