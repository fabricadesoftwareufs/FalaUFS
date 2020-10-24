import React, { Component, Fragment } from "react";
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import { Button, Icon } from 'semantic-ui-react'
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/Navbar.css'
import logo from "../assets/white-logo.png";
import styled from "styled-components";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Router>
        <MDBNavbar className="Navbar" color="black" dark expand="md">
          <Image src={logo} alt="UFS" style={{marginLeft: 10}} />

          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav className="Items" right>
              <Fragment>
                <Button circular color='blue' style={{ backgroundColor: "#004694" }} animated='vertical'>
                  <Button.Content visible>Audiências</Button.Content>
                  <Button.Content hidden>
                    <Icon name='discussions' />
                  </Button.Content>
                </Button>

                <Button circular color='blue' style={{ backgroundColor: "#004694" }} animated='vertical'>
                  <Button.Content visible>Calendário</Button.Content>
                  <Button.Content hidden>
                    <Icon name='calendar check' />
                  </Button.Content>
                </Button>

                <Button circular color='blue' style={{ backgroundColor: "#004694" }} animated='vertical'>
                  <Button.Content visible>Ajuda</Button.Content>
                  <Button.Content hidden>
                    <Icon name='question circle' />
                  </Button.Content>
                </Button>

                <Button circular color='blue' style={{ backgroundColor: "#004694" }} animated='vertical'>
                  <Button.Content visible>Perfil</Button.Content>
                  <Button.Content hidden>
                    <Icon name='user circle' />
                  </Button.Content>
                </Button>

                <Button circular color='red' animated>
                  <Button.Content visible>Sair</Button.Content>
                  <Button.Content hidden>
                    <Icon name='log out' />
                  </Button.Content>
                </Button>
              </Fragment>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>

      </Router>


    );
  }
}

export default NavbarPage;

const Image = styled.img`
  height: 50px;
  width: 130px;
  margin-top: 0px;
  margin-left: 0px;
`;