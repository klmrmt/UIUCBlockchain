import React, {Component} from 'react';
import { Navbar, Nav, Container, Image} from 'react-bootstrap'
import '../fonts.css'

export default class NavbarComp extends Component {
    render() {
        const Rule = ({ color }) => (
            <div
              style={{
                borderColor: color,
                backgroundColor: color,
                height: 12,
                padding: 0,
                margin: 0,
                zIndex: 1
              }}
            />
          );
        return (
            <div>
                <div>
                    <Rule color = 'rgba(255,86,45, 1)' />
                </div>
                <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="/images/navbarBrand.png"
                            width= "303.2"
                            height= "56.8"
                            alt = "UIUC Blockchain"
                            className = "d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="#home"></Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='navbar-Text' style={{paddingRight: 50}} href="#home">About</Nav.Link>
                        <Nav.Link className='navbar-Text' style={{paddingRight: 50}} href="#link">Initiatives</Nav.Link>
                        <Nav.Link className='navbar-Text' style={{paddingRight: 50}} href="#link">People</Nav.Link>
                        <Nav.Link className='navbar-Text' style={{backgroundColor: '#FF552E', color: 'white', borderRadius: 50, paddingLeft: 10, paddingRight: 10}} href="#link">Get Involved</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
               </Container>
                </Navbar>
            </div>
        )
    }
}