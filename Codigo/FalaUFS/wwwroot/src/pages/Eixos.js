import React, { Component }from 'react'
import Navbar from '../layouts/Navbar'
import { Header, Grid, Icon, Segment } from 'semantic-ui-react'
import EixoList from '../admin/components/EixosList'
import Footer from '../layouts/Footer'
import Pagination from "../components/Pagination";
import HomeButton from '../components/HomeButon'

class Eixos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eixos: [],
      loading: false
    };

    this.addEixo = this.addEixo.bind(this);

  }

  componentDidMount() {
    this.setState({loading: true});

    fetch("http://loalhost:8080")
        .then(res => res.json())
        .then(res => {
          this.setState({
            eixos: res,
            loading: false
          });
        })
        .catch(err => {
          this.setState({loading: false});
        })
  }

  /**
   * Add new eixo
   * @param {Object} eixo
   */
  addEixo(eixo) {
    this.setState({
      loading: false,
      eixos: [eixo, ...this.state.eixos]
    });
  }

  render() {
    return (
        <>
          <Navbar />

          <Segment basic>
            <Header  as='h2' icon textAlign='center'>
              <Icon name='settings' circular style={{ color: "#004694" }} />
              <Header.Content>Eixos Temáticos</Header.Content>
              <Header.Subheader>Veja abaixo quais são os eixos temáticos disponíveis</Header.Subheader>
            </Header>
            <Grid centered columns={3} stackable>
              <Grid.Row>
                <Grid.Column width={3}>

                </Grid.Column>
                <Grid.Column width={10}>
                  <EixoList
                      loading={this.state.loading}
                      eixos={this.state.eixos}/>
                </Grid.Column>
                <Grid.Column width={3}>

                </Grid.Column>
              </Grid.Row>


              <Grid.Row>
                <Grid.Column width={5}>
                </Grid.Column>
                <Grid.Column verticalAlign='middle' width={5}>
                  <Pagination/>
                </Grid.Column>
                <Grid.Column verticalAlign='middle' width={5}>
                  <HomeButton/>
                </Grid.Column>
              </Grid.Row>

            </Grid>
          </Segment>

          <Footer/>
        </>
    )
  }

}

export default Eixos