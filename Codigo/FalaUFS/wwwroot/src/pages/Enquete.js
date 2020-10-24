import React from 'react'
import Navbar from '../layouts/Navbar'
import {Grid, Segment } from 'semantic-ui-react'
import EnqueteCard from '../components/EnqueteVoteCard'
import LikertCard from '../components/LikertCard'
import CommentCard from '../components/CommentForm'
import Footer from '../layouts/Footer'
import HomeButton from '../components/HomeButon'
import HelpVote from '../components/HelpVote'
import '../styles/Enquete.css'


function Enquete() {
  return (
    <>
      <Navbar />
      <Segment basic>
        <Grid   centered basic stackable >
          <Grid.Row>
            <Grid.Column verticalAlign='middle' width={3}>
            </Grid.Column>
            <Grid.Column width={10} fluid>
              <EnqueteCard />
            </Grid.Column>
            <Grid.Column width={3}>
              <HelpVote/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
          <Grid.Column width={3} centered>
            </Grid.Column>
            <Grid.Column className="column" width={5} >
              <LikertCard />
            </Grid.Column>
            <Grid.Column width={5}>
              <CommentCard />
            </Grid.Column>
            <Grid.Column verticalAlign='bottom' width={3}>
              <HomeButton/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Footer />
    </>
  )
}

export default Enquete