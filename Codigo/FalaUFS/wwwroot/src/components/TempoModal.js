import React, { Component } from 'react'


import { Button, Modal, Icon } from 'semantic-ui-react'


import Countdown from './Countdown'

import '../styles/Modal.css'


class ModalExampleSize extends Component {
  state = { open: false }

  show = (size) => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state

    return (
      <div>

        <Button fluid circular animated='vertical' onClick={this.show('mini')}>
          <Button.Content visible>Ver tempo restante da votação</Button.Content>
          <Button.Content hidden>
            <Icon name='time' />
          </Button.Content>
        </Button>

        <Modal className="modal" style={{ height: 230, width: 430 }} size={size} open={open} onClose={this.close}>
          <Modal.Header style={{ textAlign: "center" }} >TEMPO RESTANTE</Modal.Header>
          <Modal.Content >
            <Countdown timeTillDate="30 04 2020, 6:00 am" timeFormat="DD MM YYYY, h:mm a" />
          </Modal.Content>
        </Modal>

      </div>
    )
  }
}

export default ModalExampleSize