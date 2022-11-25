import Navigation from '../Componentsberanda/Navbar';
import Content from '../Componentsberanda/Content';
import '../css/background.css';

const Beranda = () => {
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
 
export default Beranda;
