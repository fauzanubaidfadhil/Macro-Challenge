import article1 from '../Assets/article1.png';
import article2 from '../Assets/article2.png';
import article3 from '../Assets/article3.png';
import article4 from '../Assets/article4.png';
import article5 from '../Assets/article5.png';
import article6 from '../Assets/article6.png';
import iconcomment1 from '../Assets/comment1.png';
import iconshare1 from '../Assets/share1.png';
import iconlove1 from '../Assets/love1.png';
import {NavLink} from 'react-router-dom';

import './Contentarticle.css';

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
        <div>
            <NavLink to="/Article1"><h6 className='article1'>Gimana sih cara mengatur waktu</h6></NavLink>  
            <img className='img1' src={article1} alt="article" />
            <div className="icon-article1">
                <img className='love1' src={iconlove1} alt="love1" />
                <img className='comment1' src={iconcomment1} alt="comment1" />
                <img className='share1' src={iconshare1} alt="share1" />
            </div>
            <h6 className='article2'>Mengapa aku harus mengatur waktu</h6>
            <img className='img2' src={article2} alt="article" />
            <div>
                <img className='love2' src={iconlove1} alt="love1" />
                <img className='comment2' src={iconcomment1} alt="comment1" />
                <img className='share2' src={iconshare1} alt="share1" />
            </div>
            <h6 className='article3'>Apa itu time management</h6>
            <img className='img3' src={article3} alt="article" />
            <div>
                <img className='love3' src={iconlove1} alt="love1" />
                <img className='comment3' src={iconcomment1} alt="comment1" />
                <img className='share3' src={iconshare1} alt="share1" />
            </div>
            <h6 className='article4'>Tips meningkatkan kesadaran diri</h6>
            <img className='img4' src={article4} alt="article" />
            <div>
                <img className='love4' src={iconlove1} alt="love1" />
                <img className='comment4' src={iconcomment1} alt="comment1" />
                <img className='share4' src={iconshare1} alt="share1" />
            </div>
            <h6 className='article5'>Waktu adalah uang</h6>
            <img className='img5' src={article5} alt="article" />
            <div>
                <img className='love5' src={iconlove1} alt="love1" />
                <img className='comment5' src={iconcomment1} alt="comment1" />
                <img className='share5' src={iconshare1} alt="share1" />
            </div>
            <h6 className='article6'>Faktor mempengaruhi produktifitas</h6>
            <img className='img6' src={article6} alt="article" />
            <div>
                <img className='love6' src={iconlove1} alt="love1" />
                <img className='comment6' src={iconcomment1} alt="comment1" />
                <img className='share6' src={iconshare1} alt="share1" />
            </div>
        </div>
        <di>

        </di>
        </section>
        

     );
}
 
export default Content;