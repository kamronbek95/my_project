import Avto from '../../assets/avtomobil.png'
import Nedvijimost from '../../assets/nedvijimost.png'
import Elektronika from '../../assets/elektronika.png'
import Rabota from '../../assets/rabota.png'
import Lichnie from '../../assets/lichnie.png'
import Dom from '../../assets/dom.png'
import Remont from '../../assets/remont.png'
import Hobbi from '../../assets/hobbi.png'
import Biznes from '../../assets/biznes.png'
import Left from '../../assets/before.png'
import Right from '../../assets/after.png'
import './hero.scss'



const Hero = () => {
    return(
        <>
        <div className='hero container'>
            <img src={Left} alt="Strelka" className='hero__left'/>
            <img src={Avto} alt="hero-img" className="hero__img" />
            <img src={Nedvijimost} alt="hero-img" className="hero__img" />
            <img src={Elektronika} alt="hero-img" className="hero__img" />
            <img src={Rabota} alt="hero-img" className="hero__img" />
            <img src={Lichnie} alt="hero-img" className="hero__img" />
            <img src={Dom} alt="hero-img" className="hero__img" />
            <img src={Remont} alt="hero-img" className="hero__img" />
            <img src={Hobbi} alt="hero-img" className="hero__img" />
            <img src={Biznes} alt="hero-img" className="hero__img" />
            <img src={Right} alt="Strelka"  className='hero__right'/>
        </div>
        <form className='hero__btn container'>
            <button className=' hero__btn__title '>
                Новые обявления 
            </button>
            <button className='hero__btn__title1 '>
                Лучщие предложение 
            </button>
        </form>
        <hr style={{border: '1px solid #D5D5D5'}} className='container'/>
        </>
    )
}

export default Hero