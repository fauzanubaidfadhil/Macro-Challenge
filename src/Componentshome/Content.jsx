import './home.css';
import Icon1 from '../Assets/frame70.png';
import Icon2 from '../Assets/frame19.png';
import { Container } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Content = () => {
    return ( 
      <div>
      <Container>
      <div className="paragraph">
      <h2 className="welcome">Welcome!</h2>
      <p className="p1">Terlalu banyak kegiatan sehingga terpaksa multitasking?</p>
      <p className="p2">MULTITASKING itu hanya MITOS !</p>
      <p className="p3">Dalam penelitian, orang yang melakukan multitasking akan mengalami penurunan produktivitas sebesar 40% dibandingkan individu yang fokus melakukan satu kegiatan secara penuh baru berpindah kepada kegiatan atau tugas lainnya.</p> 
      <p className="p4">“The key is not to prioritise whats on your schedule, but to schedule your priorities” – Stephen Covey</p>
      <p className="p5">We can help you to achieve your goals</p>
      <NavLink to="/Login">
      <button type="button" className="button" onclick="alert('Hello world!')">Get Started</button>
      </NavLink>
      </div>
      </ Container>
      <div className="icon1">
      <NavLink to="/Aboutus2">
        <img src={Icon1} alt='frame' />
      </NavLink>
      </div>
      <div className="icon2">
      <NavLink to="/Aboutus2">
      <img src={Icon2} alt='frame' />
      </NavLink>
      </div>
      </div>
     );
}
 
export default Content;