import React, { Component }from 'react'
import Navbar from '../layouts/Navbar'
import { Header, Grid, Icon, Segment } from 'semantic-ui-react'
import EnquetesList from '../admin/components/EnquetesList'
import Footer from '../layouts/Footer'
import Pagination from "../components/Pagination";
import HomeButton from '../components/HomeButon'

class Eixos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            enquetes: [],
            loading: false
        };

        this.addEnquete = this.addEnquete.bind(this);

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
     * @param {Object} enquetes
     */
    addEnquete(enquete) {
        this.setState({
            loading: false,
            enquete: [enquete, ...this.state.enquetes]
        });
    }

    render() {
        return (
            <>
                <Navbar />

                <Segment basic>
                    <Header  as='h2' icon textAlign='center'>
                        <Icon name='tasks' circular style={{ color: "#004694" }} />
                        <Header.Content>Enquetes</Header.Content>
                        <Header.Subheader>Veja abaixo quais são as enquetes disponíveis para votação.</Header.Subheader>
                    </Header>
                    <Grid centered columns={3} stackable>
                        <Grid.Row>
                            <Grid.Column width={3}>

                            </Grid.Column>
                            <Grid.Column width={10}>
                                <EnquetesList
                                    loading={this.state.loading}
                                    enquetes={this.state.enquetes}/>
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