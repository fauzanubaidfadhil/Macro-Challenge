import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import Logo from '../Assets/logo.png';

const Navigation = () => {
    return ( 
        <>
         {/* Logo */}
        <Navbar bg="transparant" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="" src={Logo} className="logo"/>{' '}
          </Navbar.Brand>
        </Container>
        {/* Logo end */}
         {/* Navbar */}
         <Container>  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar">
            <Nav.Link href="/home">Home</Nav.Link>
            {/* Dropdown */}
            <NavDropdown title="Menu" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Time Management</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Article</NavDropdown.Item>
            </NavDropdown>
            {/* Dropdown end */}
            <Nav.Link href="/link">Customize</Nav.Link>
            <Nav.Link href="/ink">About us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* Navbar end */}
        {/* Button */}
        <button type="button" className="button-nav" onclick="alert('Hello world!')">Logout</button>
        {/* Button end */}
      </Container>
      </Navbar>
         </>
     );
};
export default Navigation;