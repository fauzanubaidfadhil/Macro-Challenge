import Navigation from '../Componentsberanda/Navbar';
import Content from '../Componentsaboutus/Content';
import '../css/background.css';

const Aboutus = () => {
    return ( 
                <>
                <section className='background'>
                    <div>
                         <Navigation />
                         <Content />
                    </div>
                </section>
                </>
     );
}
 
export default Aboutus;