import React, {Component} from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import { Segment, Grid, Button, Icon } from "semantic-ui-react";
import ChartComponent from '../components/ChartComponent'

class Grafico extends Component {
    render() {
        return (
            <>
            <Navbar/>
            <Segment basic>
                <Grid centered stackable columns={3}>
                    <Grid.Row>
                        <Grid.Column width={4}>
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle' width={8}>
                            <ChartComponent/>
                            <Button.Group icon>
                                <Button>
                                    <Icon name='arrow circle right' />
                                </Button>
                                <Button>
                                    <Icon name='arrow circle right' />
                                </Button>
                                <Button>
                                    <Icon name='arrow circle right' />
                                </Button>
                                <Button>
                                    <Icon name='arrow circle right' />
                                </Button>
                                <Button>
                                    <Icon name='arrow circle right' />
                                </Button>
                            </Button.Group>
                        </Grid.Column>
                        <Grid.Column width={4}>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={4}>
                        </Grid.Column>
                        <Grid.Column width={8}>
                        </Grid.Column>
                        <Grid.Column width={4}>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                        </Grid.Column>
                        <Grid.Column>
                        </Grid.Column>
                        <Grid.Column>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Footer/>
            </>

        );
    }
}

export default Grafico