import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logoD from '../../img/logo-destroy.png';
import CartWidget from './CartWidget';
import {Link, NavLink} from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
    return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="miNavbar">
                    <Container>
                        <Link className="navbar-brand" to="/"><img src={logoD} className="logo" alt="logo" /></Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto">
                            <   Link className="nav-link" to="/todos">Productos</Link>
                                <NavLink className="nav-link" to="/categoria/poleras">Poleras</NavLink>
                                <Link className="nav-link" to="/categoria/polerones">Polerones</Link>
                                <Link className="nav-link" to="/categoria/accesorios">Accesorios</Link>
                            </Nav>
                        </Navbar.Collapse>
                        <CartWidget/>
                       
                    </Container>
                </Navbar>
            </>
        )
}

export default NavBar;