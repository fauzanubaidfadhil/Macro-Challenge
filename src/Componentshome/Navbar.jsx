import {Container, Navbar} from 'react-bootstrap';
import Logo from '../Assets/logo.png';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return ( 
        <>
        <Navbar bg="transparant" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} width="30" height="30" className="logo" alt="React Bootstrap logo"/>
          </Navbar.Brand>
        </Container>
      </Navbar>
      {/* <Navbar className="navbar" bg="transparant" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link to="/Home">Home</Nav.Link>
            <NavDropdown title="Menu" id="collasible-nav-dropdown">
              <NavDropdown.Item to="#action/3.1">Time Management</NavDropdown.Item>
              <NavDropdown.Item to="#action/3.2">Article</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">Customize</Nav.Link>
            <Nav.Link href="/">About us</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
      <NavLink to="/Login">
      <button type="button" className="button-nav" onclick="alert('Hello world!')">Login</button>
      </NavLink>
         </>
     );
};
export default Navigation;