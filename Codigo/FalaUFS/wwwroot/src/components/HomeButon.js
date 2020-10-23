import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonExampleLabeledIcon = () => (
    <div>
        <Button icon labelPosition='left' style={{ color: 'white', backgroundColor: "#004694"}}>
            <Icon name='home' />
            Voltar para o início
        </Button>
    </div>
)

export default ButtonExampleLabeledIcon