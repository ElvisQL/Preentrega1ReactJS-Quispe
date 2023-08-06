import CartWidget from "./CartWidget"
import loginIco from "../assets/login.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/logo.png'

export default function NavBar() {
    
    return <header>
        <Navbar bg="dark" variant="dark">
          <Container className="container-header">
            <img className= "logoheader" src={Logo} alt="logo"></img>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#link">Catalogo</Nav.Link>
                <NavDropdown title="Ayuda" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Sobre Nosotros</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                  Preguntas Frecuentes
                  </NavDropdown.Item>
                  
                  
                </NavDropdown>
              </Nav>
              
            </Navbar.Collapse>
            <Container className="container-ico">
                <img src={loginIco} alt="" />
                <CartWidget/>      
            </Container>
          </Container>
        </Navbar>
    </header>
}


