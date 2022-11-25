import './Content.css';
import icontime from '../Assets/frame70.png';
import iconarticle from '../Assets/frame19.png';

const Content = () => {
    return ( 
                <>
                 <section>
                    <div>
                        <h1 className='about-aboutus'>ABOUT</h1>
                        <h1 className='extime-aboutus'>EXTIME</h1>
                    </div>
                    <div>
                        <p className="our">Our mission is to increase user productivity 
                            by helping them manage their time when completing 
                            a task or activity. In addition, we provide various 
                            articles containing tips on time management. 
                            So that by using our website, users can improve 
                            their time management skills.</p>
                        <p className='we'>We present 2 features that users can use to improve their time management skills :</p>
                    </div>
                    <div>
                        <img className='icontime-aboutus' src={icontime} alt="frame70" />
                        <img className='iconarticle-aboutus' src={iconarticle} alt="frame19" />
                    </div>
                    <div>
                        <p className='in'>In the Time Management feature, there is a timer and is equipped 
                            with a to do list so that users can focus on carrying out their 
                            activities on time according to the predetermined timer.</p>
                        <p className='there'>There are various articles that contain tips and ways to improve 
                            time management skills so that they can broaden user insights 
                            about the importance of having the ability to manage time well 
                            in order to increase productivity.</p>
                    </div>
                 </section>
                
                </>
     );
}
 
export default Content;