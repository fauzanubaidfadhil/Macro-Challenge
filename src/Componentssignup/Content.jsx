import './Signup.css'
import {NavLink} from 'react-router-dom'
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
        <h2 className="text-signup">SIGN UP</h2>
        <p className='text-1-login'>Remember everything important</p>
        <p className='text-2-login'>Sign Up to Exact Time</p>
        </div>
        <div className='inputname'><input className='textname' type="text" placeholder="Name" name="name" required/></div>
         <div className='inputemail'><input className='textemail' type="text" placeholder="Email" name="email" required/> </div>
         <div className='inputpwd'><input className='textpwd' type="password" placeholder="Password" name="psd" required/> </div>
         <NavLink to="/Beranda"> <button className='sign' type="button" onclick="alert('Hello world!')">Sign Up</button></NavLink>
        <div> 
            <div>
                <p className='i'>I have an Account, </p>
                <NavLink to="/Login"> <p className='login'>Login now</p></NavLink>
            </div>
                <button className='cg' type="button" onclick="alert('Hello world!')">
                    <img className='logogoogle' src={Logogoogle} alt="logogoogle" />
                    <p className='continue-g'>Continue With Google</p></button>
                <button className='ca' type="button" onclick="alert('Hello world!')">
                    <img className='logoapple' src={Logoapple} alt="logoapple" />
                    <p className="continue-a">Continue With Apple</p></button>
        </div>
        </div>
         </>
     );
}
 
export default Content;