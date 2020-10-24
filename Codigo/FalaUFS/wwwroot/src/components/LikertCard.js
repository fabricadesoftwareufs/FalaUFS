import React from 'react'
import { Card, Image, Segment } from 'semantic-ui-react'
import Slider from '../components/Slider'
import LikertScale from '../assets/likertIcons/likertScale.svg'
import '../styles/ReactionsCard.css'

const CardExampleExtraContent = () => (
    <Card raised style={{ width: 386, borderRadius: 20}}>
        <Card.Content fluid>
            <Image verticalAlign='middle' src={LikertScale} />
            <Segment padded basic>
                <Slider />
            </Segment>
        </Card.Content>
    </Card>
)

export default CardExampleExtraContent