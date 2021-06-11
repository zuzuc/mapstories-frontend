import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import '../../App.css';
import './Header.css';
import "../../scss/custom.scss";
import logo from '../../img/logo_mapstories_round_scandi.png';


function Header() {
    return (
        <div className='header'>
            <Navbar sticky='top' expand='lg' variant='primary' bg='success' >
            <Navbar.Brand  /> 
            <img src={logo} width='60vw' height='60vh' alt="mapstories" />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                {/* <Nav.Link href="/ClimateMigration">Climate-induced Migration</Nav.Link>
                <Nav.Link href="/Conflicts">Conflicts</Nav.Link> */}
                <NavDropdown title="Climate-induced Migration" id="basic-nav-dropdown">
                {/* <NavDropdown.Item href="/ClimateMigration">Start</NavDropdown.Item> */}
                <NavDropdown.Item href="/ClimateMigration/Facts">Facts</NavDropdown.Item>
                <NavDropdown.Item href="/ClimateMigration/Map">Map</NavDropdown.Item>
                {/* <NavDropdown.Item href="/ClimateMigration/Stories">Stories</NavDropdown.Item> */}
                <NavDropdown.Divider />
                <NavDropdown.Item href="/ClimateMigration/Submit">Submit your story</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Conflicts" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/Conflicts">Map</NavDropdown.Item>
                    {/* <NavDropdown.Item href="/Conflicts2">Map 2</NavDropdown.Item> */}
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>       
            </Navbar>
        </div>
    )
}

export default Header
