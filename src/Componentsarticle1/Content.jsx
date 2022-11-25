import './Content.css';
import line from '../Assets/linearticle.png';
import iconcomment1 from '../Assets/comment1.png';
import iconshare1 from '../Assets/share1.png';
import iconlove1 from '../Assets/love1.png';
import profil from '../Assets/photoprofil.png';
import pict from '../Assets/pictarticle1.png';
import pict2 from '../Assets/rectangle170.png';
import profil2 from '../Assets/photoprofil2.png';

const Content = () => {
    return ( 
            <>
                <div>
                     <div>
                    <h2 className='text-1-article'>Gimana sih cara mengatur waktu</h2>
                    <img className='line' src={line} alt="linearticle" />
                    <p className='text-2-article'>#Time Management</p>
                    <img className='iconlove' src={iconlove1} alt="iconlove1" />
                    <img className='iconcomment' src={iconcomment1} alt="iconcomment1" />
                    <img className='iconshare' src={iconshare1} alt="iconshare1" />
                </div>
                <div>
                    <img className='profil' src={profil} alt="photoprofil" />
                    <p className='text-3-article'>Jhonny</p>
                    <p className='text-4-article'>Posted on 15 Nov</p>
                    <img className='pict' src={pict} alt="pictarticle1" />
                </div>
                <div>
                    <p className='text-5-article'>
                    Pertama-tama, kamu harus tahu bahwa tidak ada cara time management yang sempurna. 
                    Semua itu bergantung penuh kepada konteks aktivitas yang ingin kamu kerjakan dan kepribadianmu. 
                    Oleh karena itu, strategi mengatur waktumu harus fleksibel— dapat kamu perbaiki atau 
                    sesuaikan sewaktu-waktu. Nah, berikut ini adalah langkah-langkah yang dapat kamu praktikkan nih 
                    sembari merumuskan cara jitu mengatur waktu ala kamu!
                    </p>
                </div>
                <div>
                    <h5 className='text-6-article'>1. Kenali dirimu dan tujuanmu</h5>
                    <p className='text-7-article'>Seperti yang sudah disampaikan sebelumnya, tidak semua orang 
                    cocok mempraktekkan strategi time management tertentu. Jadi, kamu harus memastikan dahulu 
                    kira-kira apa sih yang penting buatmu? Apa sih goal yang ingin kamu capai? Apakah kamu ingin 
                    prestasi yang baik? Apakah kamu ingin kualitas hubungan yang baik dengan orang-orang terdekat? 
                    Ataukah kamu mencari keseimbangan antara pekerjaan dan kehidupan lainnya?</p>
                    <p className='text-8-article'>Setelah kamu tahu nih goal cara hidup seperti apa yang ingin 
                    kamu capai, kamu juga harus mengetahui mengapa selama ini kamu belum berhasil mencapainya? 
                    Apakah kamu selalu menunda-nunda pekerjaan? Apakah kamu mudah lupa hal-hal yang seharusnya kamu 
                    kerjakan sehingga semuanya menumpuk di detik-detik terakhir?</p>
                    <p className='text-9-article'>Setelah kamu menjabarkan secara jelas keinginanmu dan apa yang 
                    menghambatmu melakukannya, kamu dapat memfokuskan diri untuk memperbaiki hal-hal tersebut. Ingat, 
                    kamu harus menyampaikan kepada dirimu secara eksplisit, misalnya dengan menulisnya terlebih dahulu. 
                    Dirimu tidak akan benar-benar menyadarinya kecuali telah dijabarkan secara jelas.</p>
                    <h5 className='text-10-article'>2. Catat dan kelompokan yang penting dan yang tidak</h5>
                    <p className='text-11-article'>Setelah kamu mengetahui tujuanmu, kamu tentu dapat semakin jelas 
                        membedakan yang mana yang penting untuk kamu lakukan dan yang tidak. Ingat, perlakukan waktu 
                        seperti uang. Uang itu terbatas jumlahnya— kamu harus memperlakukannya secara bijaksana. 
                        Hal yang sama juga terjadi dalam hal waktu. Maka dari itu, kamu tidak mungkin dapat melakukan 
                        banyak hal dalam satu periode waktu.</p>
                </div>
                <div>
                    <img className='pict2' src={pict2} alt="rectangle170" />
                </div>
                <div>
                    <h5 className='text-12-article'>3. Jabarkan hal yang harus kamu lakukan menjadi langkah-langkah kecil</h5>
                    <p className='text-13-article'>Hal ini karena untuk berganti kegiatan dari satu kegiatan ke kegiatan lainnya, kamu membutuhkan 
                        waktu untuk mengalihkan kemampuan kognitifmu. Bahkan, menurut Stephen Monsell dari University 
                        of Exeter, ketika kamu beralih antara satu aktivitas ke aktivitas lain, respon kognitifmu akan 
                        melambat, bahkan akan error sementara. Alhasil, untuk melakukan suatu kegiatan, butuh waktu 
                        yang lebih lama</p>
                    <h5 className='text-14-article'>4. Be organized!</h5>
                    <p className='text-15-article'>Tips paling jitu yang harus kamu lakukan untuk menghindarinya hanya satu: tatalah dokumenmu 
                        dengan rapi. Buatlah folder-folder khusus untuk dokumen-dokumen kalian, baik softcopy dan 
                        hardcopy. Dengan begitu, kamu dapat menemukan dokumen yang kamu butuhkan dengan lebih cepat. 
                        Ini juga berlaku untuk barang-barang lainnya. Jangan lupa juga untuk terus menaruh kembali 
                        barang atau dokumenmu ke tempat semula setelah memanfaatkannya.</p>
                    <p className='text-16-article'>Mengatur waktu memang bukan perkara mudah. Kamu dapat terus menerus menyesuikan diri dengan 
                        cara mengatur waktu terbaik versimu. Ingat, tidak perlu membanding-bandingkan dengan cara 
                        orang lain karena setiap orang punya kebutuhannnya dan caranya sendiri.</p>
                </div>
                <div style={{ 
                    borderStyle: "solid",
                    width: "450px",
                    height: "368px",
                    left: "750px",
                    top: "2550px",  
                    borderRadius:"20px",
                    position:"absolute",
                    borderColor:"black",
                    }}>
                    <h5 className='komentar'>Komentar</h5>
                    <input className='input-komentar' type="text" placeholder="Tulis komentar" name="komentar" required />
                    <div className='button-add'>
                        <p className='text-17-article'>add</p>
                    </div>
                    <img className='profil-2' src={profil2} alt="photoprofil2" />
                   <div className='border-komen'> 
                        <h5 className='text-1-komen'>Buyaaa</h5>
                        <p className='text-2-komen'>Sangat membantu</p>
                        <p className='text-3-komen'>2 Jam</p>
                        <p className='text-4-komen'>Suka</p>
                        <p className='text-5-komen'>Balas</p>
                        <p className='text-6-komen'>Laporkan</p>
                    </div>
                </div>
                </div>
               
            </>
     );
}
 
export default Content;