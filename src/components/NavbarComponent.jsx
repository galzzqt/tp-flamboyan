import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/index'

import '../dist/css/navbar.css'
import logoImage from '../assets/img/logo.png'

function NavbarComponent() {
    return (
      <Navbar 
        expand="lg" 
        className="navbar-custom fixed-top"
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="brand">
            <img
              src={logoImage}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="TP Flamboyan logo"
            />
            {' TP Flamboyan'}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {navLinks.map((link) => (
                <Nav.Link
                  key={link.id}
                  as={NavLink}
                  to={link.path}
                  className={({ isActive }) => 
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  {link.text}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
  
  export default NavbarComponent
