import React from 'react'
import { Container, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap'

import logo from '../assets/main_icon/dumbbell-svgrepo-com (2).png'
import user from "../assets/user.png"
import { Link } from 'react-router-dom'
function NavBarUserHome() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
        <Navbar.Brand href="/src">
            <span>ELGYMAWEYA</span>
            <img src={logo}  style={{width:"40px"}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-5">
            <NavDropdown title="" id="basic-nav-dropdown" className='mr-5'  key='start'> 
                <NavDropdown.Item>
                <Link to='/editProfile' className='text-dark text-decoration-none'>
                    Edit Profile
                </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                <Link to='/bmiCalc' className='text-dark text-decoration-none'>
                    Bmi Calculators
                </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                <Link to='/caloriesCalculator' className='text-dark text-decoration-none'>
                Caloris Calculators
                </Link>
                </NavDropdown.Item>
            </NavDropdown>
                <Image src={user} roundedCircle width="40px"  className='mr-5'/>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
  )
}

export default NavBarUserHome