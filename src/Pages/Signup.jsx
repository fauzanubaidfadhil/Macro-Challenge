import Navigation from '../Componentslogin/Navbar';
import Content from '../Componentssignup/Content';
import '../css/background.css';

const Signup = () => {
    return ( 
            <section className='background'>
                <div>
                    <Navigation />
                    <Content />
                </div>
            </section>

     );
}
 
export default Signup;