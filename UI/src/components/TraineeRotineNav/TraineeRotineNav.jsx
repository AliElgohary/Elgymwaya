import React from 'react'
import { Container, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from "../../assets/main_icon/dumbbell-svgrepo-com (1).png"
import user from "../../assets/user.png"
function TraineeRotineNav() {
  return (
    <Navbar expand="lg" className=" bg-secondary-subtle">
        <Container fluid>
        <Navbar.Brand href="/src">
            <span style={{color:"#5d4957"}}>ELGYMAWEYA</span>
            <img src={logo}  style={{width:"40px"}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-5">
            <NavDropdown title="" id="basic-nav-dropdown" className='mr-5'  key='start'> 
                <NavDropdown.Item>
                <Link to='#' className='text-dark text-decoration-none'>
                    _
                </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                <Link to='#' className='text-dark text-decoration-none'>
                   _
                </Link>
                </NavDropdown.Item>
            </NavDropdown>
                <Image src={user} roundedCircle width="40px" />
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default TraineeRotineNav
