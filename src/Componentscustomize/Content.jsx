import background1 from '../Assets/rectangle60.png';
import background3 from '../Assets/rectangle63.png';
import background4 from '../Assets/rectangle64.png';
import background5 from '../Assets/rectangle65.png';
import background6 from '../Assets/rectangle66.png';
import background2 from '../Assets/rectangle61.png';
import './Content.css';

const Content = () => {
    return ( 
            <section>
                   <div>
                    <p className='text1'>10</p>
                    <p className='text2'>:</p>
                    <p className='text3'>00</p>
                    </div>
                    <div>
                    <p className='text4'>Friday, 11 November 2022</p>
                    </div>
                    <img className='background1-img' src={background1} alt="background1" />
                    <img className="background2" src={background2} alt="background2" />
                    <img className="background3" src={background3} alt="background3" />
                    <img className='background4' src={background4} alt="background4" />
                    <img className='background5' src={background5} alt="background5" />
                    <img className='background6' src={background6} alt="background6" />
                    
            </section>
     );
}
 
export default Content;