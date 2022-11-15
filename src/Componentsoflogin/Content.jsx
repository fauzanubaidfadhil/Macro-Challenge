import './login.css';
import image from '../Assets/borderlogin.png';

const Content = () => {
    return <>
        {/* <di>
            <input type={"text"} placeholder="Enter email" name="uname" required />
            
            <input type={"password"} placeholder="Enter password" name="pwd" required />

            <button type="submit">Login</button>
        </di> */}
        <div className="borderlogin">
            <img src={image} alt="borderlogin" />
        </div>
     </>
}
 
export default Content;