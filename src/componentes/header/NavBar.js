import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logoD from '../../img/logo-destroy.png';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="miNavbar">
                    <Container>
                        <Navbar.Brand href="#home"><img src={logoD} className="logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#poleras">Poleras</Nav.Link>
                                <Nav.Link href="#polerones">Polerones</Nav.Link>
                                <Nav.Link href="#accesorios">Accesorios</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <CartWidget/>
                       
                    </Container>
                </Navbar>
            </>
        )
}

export default NavBar