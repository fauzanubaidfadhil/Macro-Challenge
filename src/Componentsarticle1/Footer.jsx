import logonew from '../Assets/frame127.png';
import facebook from '../Assets/logofacebook.png';
import twitter from '../Assets/logotwitter.png';
import instagram from '../Assets/logoinstagram.png';
import './Content.css';


const Footer = () => {
    return ( 
                <>
                    <div className='footer'>
                        <div>
                            <img className="logo-new-footer" src={logonew} alt="frame127" />
                        </div>
                        <div>
                            <p className='services'>Services</p>
                            <p className='email-marketing'>Email Marketing</p>
                            <p className='campaigns'>Campaigns</p>
                            <p className='branding'>Branding</p>
                            <p className='offline'>Offline</p>
                        </div>
                        <div>
                            <p className='about'>About</p>
                            <p className='ourstory'>Our story</p>
                            <p className='benefits'>Benefits</p>
                            <p className='team'>Team</p>
                            <p className='careers'>Careers</p>
                        </div>
                        <div>
                            <p className='followus'>Follow us</p>
                            <p className='facebook'>Facebook</p>
                            <img className='logo-facebook' src={facebook} alt="logofacebook" />
                            <p className='twitter'>Twitter</p>
                            <img className='logo-twitter' src={twitter} alt="logotwitter" />
                            <p className='instagram'>Instagram</p>
                            <img className='logo-instagram' src={instagram} alt="logoinstagram" />
                            <p className='copyright'>Copyright © 2022. Infinite Learning</p>
                            <p className='terms'>Terms & Conditions</p>
                            <p className='privacy'>Privacy Policy</p>
                        </div>
                    </div>
                </>
     );
}
 
export default Footer;