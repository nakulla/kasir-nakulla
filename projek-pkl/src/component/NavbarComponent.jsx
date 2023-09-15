import React from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap'

const NavbarComponent = () => {
    return (
        <div>
            <Navbar expand="lg" className="">
            <Container fluid="fluid">
                <Navbar.Brand href="#">KASIR</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto text-center"
                        style={{
                            maxHeight: '100px'
                        }}
                        navbarScroll="navbarScroll">
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
}
export default NavbarComponent