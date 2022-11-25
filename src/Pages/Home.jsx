import Navigation from "../Componentshome/Navbar";
import Content from "../Componentshome/Content";
import '../css/background.css';

const Home = () => {
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
 
export default Home;