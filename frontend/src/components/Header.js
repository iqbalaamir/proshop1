import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
const Header = () => {
    return (
        <header>
            <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">Proshop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end" style={{ width: "100%" }}>
                            <Nav.Link href="/cart"><i className="fas fa-shopping-cart px-1"></i>Cart</Nav.Link>
                            <Nav.Link href="/login"><i className="fa fa-user px-1"></i>Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
