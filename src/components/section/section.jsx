import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import '../productslist/productslist.scss'
import './section.scss'
import '../hero/hero.scss'
import Tovari from '../../assets/tovari.png'
import Brendi from '../../assets/brendi.png'
import Obr from '../../assets/oborudivvanie.png'
import Texnika from '../../assets/texnika.png'
import Strelka from '../../assets/strelka.png'


const Section = () =>{

    const [products, setProducts] = useState([])
    const [visible, setVisible] = useState(4)

useEffect(() =>{
    
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then(data => {
        setProducts(data)
    })
    .catch (err=>{
        console.log(err)
    })
}, [])

const ShowMore = () => {
    setVisible((prevValue) => prevValue + 4)
}

   return(
      <>
        <div className = 'section'>
        <div className='container'>
            <div className='section__cards '>
                <img src={Texnika} className="section__img" />
                <img src={Brendi} className="section__img" />
                <img src={Tovari} className="section__img" />
            </div>
        </div>
        <img src={Obr}  className="section__image" />
       </div>
       <form className='hero__btn container'>
            <button className=' hero__btn__title '>
                Посмотренные 
            </button>
            <button className=' hero__btn__title1 '>
                Выбор редакции
            </button>
            <button className=' hero__btn__title1 '>
                Сниженные цены 
            </button>
        </form>
        <hr style={{border: '1px solid #D5D5D5'}} className='container'/>
       <div className="container" style={{marginTop: 7}}>
          <div className="row row-cols-1 row-cols-md-4 g-4 item ">  
                {
                    products.slice(0 , visible).map((item) => (
                        <div className="col ms-2 m-auto my-2" style={{overflow: 'hidden' , border: '1px solid black' , width: 320}}>
                            <Link key={item.id}   to='/products/${item.id}' style={{textDecoration: 'none'}} >
                            <div classNameName="card " style={{height: '350px'}}  >
                                <img src={item.image} className="card-img-top mt-2 item__img" alt={item.title}/>
                                <div className="card-body item__body">
                                    <h5 className="card-title item__title">
                                        {item.title}
                                    </h5>
                                    <p className="item__data">Вчера 22:55</p>
                                    <h3 className="card-text item__price">{item.price}sum</h3>
                                </div>
                            </div>
                            </Link>
                        </div>
                    ))
                }
          </div>
          <hr />
          <div  className="show">
             <button onClick={ShowMore} className={` show__btn ${ visible === products.length ? 'out' : ''}`}>
                    Показать ещё <img src={Strelka} alt="strelka" />
             </button>
          </div>
        </div>
      </>
   )
}

export default Section 
