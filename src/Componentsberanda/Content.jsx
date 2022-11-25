import './Content.css';
import iconperson from '../Assets/iconperson.png';

const Content = () => {
    return ( 
            <>
            <div>
                <p className='text-1'>10</p>
                <p className='text-2'>:</p>
                <p className='text-3'>00</p>
            </div>
            <div>
                <p className='text-4'>Friday, 11 November 2022</p>
                <img className='iconperson' src={iconperson} alt="iconperson" />
                <p className='text5'>Halo, Adida Arfalen</p>
                <p className='text6'>"Orang biasa</p>
                <p className='text7'>hanya berpikir untuk</p>
                <p className='text8'>menghabiskan waktu,</p>
                <p className='text9'>orang hebat</p>
                <p className='text10'>berpikir untuk</p>
                <p className='text11'>berinvestasi</p>
                <p className='text12'>didalamnya."</p>
                <p className='text13'>- Arthur Schopenhauer</p>
            </div> 
            </>
     );
}
 
export default Content;