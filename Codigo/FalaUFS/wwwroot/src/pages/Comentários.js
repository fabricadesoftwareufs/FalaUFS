import React, {Component} from 'react'
import { Grid, Segment, Header, Icon } from 'semantic-ui-react'
import Navbar from '../layouts/Navbar'
import CommentList from "../components/CommentList";
import Filter from '../components/Filter'
import Pagination from '../components/Pagination'
import HomeButton from '../components/HomeButon'
import Footer from "../layouts/Footer";

class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            loading: false
        };

        this.addComment = this.addComment.bind(this);
    }

    componentDidMount() {
        // loading
        this.setState({ loading: true });

        // get all the comments
        fetch("http://localhost7777")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    comments: res,
                    loading: false
                });
            })
            .catch(err => {
                this.setState({ loading: false });
            });
    }

    /**
     * Add new comment
     * @param {Object} comment
     */
    addComment(comment) {
        this.setState({
            loading: false,
            comments: [comment, ...this.state.comments]
        });
    }

    render() {
        return (
            <>
                <Navbar />
                <Segment basic>
                    <Grid centered stackable>
                        <Grid.Row>
                            <Grid.Column width={13}>
                                <Header  as='h2'>
                                    <Icon name='comments outline' circular style={{ color: "#004694"}} />
                                    <Header.Content>
                                        Comentários
                                        <Header.Subheader>Veja abaixo os comentários dos usuários</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Grid.Column>
                            <Grid.Column verticalAlign='middle' width={3}>
                                <Filter/>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column>
                                <CommentList
                                    loading={this.state.loading}
                                    comments={this.state.comments}/>
                            </Grid.Column>
                        </Grid.Row>


                        <Grid.Row>
                            <Grid.Column width={3}>
                            </Grid.Column>
                            <Grid.Column verticalAlign='middle' width={10}>
                                <Pagination/>
                            </Grid.Column>
                            <Grid.Column verticalAlign='middle' width={3}>
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


export default Comments