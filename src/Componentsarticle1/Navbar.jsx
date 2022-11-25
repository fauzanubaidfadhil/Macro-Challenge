import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import Logo from '../Assets/logo.png';
import './Content.css';
import '../Componentsberanda/Content.css';

const Navigation = () => {
    return ( 
            <section style={{borderStyle: "solid", backgroundColor:"#16084A", borderColor:"transparent", height:"70px"}}>
               <Navbar bg="transparant" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} width="30" height="30" className="logo-article" alt="React Bootstrap logo"/>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className='position-navbar-beranda'>
         <Navbar className="navbar-article" bg="transparant" variant="dark">
        <Container>
          <Nav className="me-auto">
            <NavLink to="/Beranda" className="navlink-home">Home</NavLink>
            <NavDropdown title="Menu" id="collasible-nav-dropdown">
              <div><NavLink style={{textDecoration: "none", color:"black"}} to="/Pomodoro">Time Management</NavLink></div>
              <div><NavLink style={{textDecoration: "none", color:"black"}} to="/articles">Article</NavLink></div>
            </NavDropdown>
            <NavLink className="navlink-customize" to="/Customize">Customize</NavLink>
            <Nav.Link className='navlink-aboutus' href="/Aboutus">About us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
      <NavLink to="/">
      < button type="button" className="button-nav" onclick="alert('Hello world!')">Logout</button>
      </NavLink>  
            </section>
     );
}
 
export default Navigation;