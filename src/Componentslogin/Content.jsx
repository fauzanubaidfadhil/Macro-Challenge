import './login.css';
import {NavLink} from 'react-router-dom';
import Logogoogle from '../Assets/logogoogle.png';
import Logoapple from '../Assets/logoapple.png';

const Content = () => {
    return ( 
        <>
    <div style={{ 
    backgroundColor:"rgba(0, 0, 0, 0.4)",
    borderStyle: "solid",
    width: "500px",
    height: "500px",
    left: "380px",
    top: "90px",  
    borderRadius:"30px",
    position:"fixed",
    borderColor:"none",
    backdropFilter:"blur(5px)"}}>
    <div>
        <h2 className="text-login">LOGIN</h2>
        <p className='text-1-login'>Remember everything important</p>
        <p className="text-2-login">Sign In to Exact Time</p>
    </div>
        <div className='input-email'><input className='text-email' type="text" placeholder="Email" name="email" required/> </div>
        <div className='input-pwd'><input className='text-pwd' type="password" placeholder="Password" name="psw" required/> </div>
        <NavLink to="/Beranda"><button type="button" className="btn-login" onclick="alert('Hello world!')">Sign In</button></NavLink>
        <div>
            <div>
                <p className='text-3-login'>Don't have an Account, </p>
                 <NavLink to="/Signup">
                    <p className='text-4-login'>Register now</p>
                 </NavLink>
            </div>
        <button  type="button" className="btn-google" onclick="alert('Hello world!')">
            <img className='logogoogle' src={Logogoogle} alt="logogoogle" />
            <p className='text-5-login'>Continue With Google</p></button>
        <button  type="button" className="btn-apple" onclick="alert('Hello world!')">
            <img className='logoapple' src={Logoapple} alt="logoapple" />
            <p className='text-6-login'>Continue With Apple</p></button>
        </div>
    </div>
        </>
     );
}
 
export default Content;