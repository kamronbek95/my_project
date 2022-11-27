import { useEffect, useState , useContext } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addCart } from "../../static/action/addToCart"
import './productslist.scss'
import Strelka from '../../assets/strelka.png'
import {lang} from '../../lang/lang'
import {LangContext} from '../../context/langContext'

function ProductsList(){
    
     
    const [products, setProducts] = useState([])
    const [visible, setVisible] = useState(16)

    const {setLanguage , language}= useContext(LangContext)

    const dispatch = useDispatch();
    const addProduct = (item) => {
        dispatch(addCart(item));
    }


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
    return (
        <div className="container " style={{marginTop: 7}}>
          <div className="row row-cols-1 row-cols-md-4 g-4 item " >  
                {
                    products.slice(0 , visible).map((item) => (
                        <div className="col  ms-2" style={{overflow: 'hidden' , border: '1px solid black' , width: 320}}>
                            <Link 
                            key={item.id} to={`/products/${item.id}`} style={{textDecoration: 'none'}} 
                            >
                            <div classNameName="card  " style={{height: '350px'}}  >
                                <img src={item.image} className="card-img-top mt-2 item__img" alt={item.title}
                                />
                                <div className="card-body item__body mt-3" >
                                    <h5 className="card-title item__title">
                                        {item.title}
                                    </h5>
                                    <p className="item__data">Вчера 22:55</p>
                                    <h3 className="card-text item__price">{item.price}sum</h3>
                                </div>
                            </div>
                            </Link>
                            <div className="d-flex mt-2 mb-2 justify-content-between" style={{height: 60}}>
                             <Link to="/buy" className='btn btn-outline-dark me-2 w-50 bg-warning fw-bold py-3 px-4'>{lang[language].nav.cart.buy}</Link>
                            <button onClick={()=> {addProduct(item)}} className='fw-bold btn btn-outline-dark w-50 bg-warning'>{lang[language].nav.cart.add}</button>
                           </div>
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
    )
}
export default ProductsList