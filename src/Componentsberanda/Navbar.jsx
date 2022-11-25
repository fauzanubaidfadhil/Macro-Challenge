import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import Logo from '../Assets/logo.png';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return ( 
        <>
        <Navbar bg="transparant" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} width="30" height="30" className="logo" alt="React Bootstrap logo"/>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className='position-navbar-beranda'>
        <Navbar className="navbar" bg="transparant" variant="dark">
        <Container>
          <Nav className="me-auto">
            <NavLink to="/Beranda" className="navlink-home animasi-left-right ">Home</NavLink>
            <NavDropdown title="Menu" id="collasible-nav-dropdown">
              <div><NavLink style={{textDecoration: "none", color:"black"}} to="/Pomodoro">Time Management</NavLink></div>
              <div><NavLink style={{textDecoration: "none", color:"black"}} to="/articles">Article</NavLink></div>
            </NavDropdown>
            <NavLink to="/Customize" className="navlink-customize animasi-left-right">Customize</NavLink>
            <Nav.Link className='navlink-aboutus animasi-left-right' href="/Aboutus">About us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
      <NavLink to="/">
      < button type="button" className="button-nav" onclick="alert('Hello world!')">Logout</button>
      </NavLink>
         </>
     );
};
export default Navigation;