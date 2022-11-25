import Logo from '../Assets/logo.png';
import {Navbar, Container} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return <>
        <Navbar bg="transparant" variant="dark">
        <Container>
          <NavLink to="/">
            <img src={Logo} width="30" height="30" className="logo" alt="React Bootstrap logo"/>
          </NavLink>
        </Container>
      </Navbar>
    </>

     
}
 
export default Navigation;