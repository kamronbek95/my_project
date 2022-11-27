import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom"
import './singleProducts.scss'
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addCart } from "../../static/action/addToCart";
import {lang} from '../../lang/lang'
import {LangContext} from '../../context/langContext'

const SingleProducts =() =>{
    const {id} = useParams();
    const [product, setProduct] = useState([])

    const {setLanguage , language}= useContext(LangContext)

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() =>{
    
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then(data => {
            setProduct(data)
            console.log(data)
        })
        .catch (err=>{
            console.log(err)
        })
    }, [])

    return(
        <>
           <h2 className="text-uppercase text-black-50">{product.category}</h2>
           <div className="single__products">
               <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="460px" width="600px" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-between">
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        {product.price} sum
                    </h3>
                    <p className="lead">{product.description}</p>
                    <div className="d-flex mt-2 mb-0 justify-content-between" style={{height: 50}}>
                             <Link to="/buy" className=' py-1 btn btn-outline-dark me-2 w-50 bg-warning fs-4 fw-bold'>{lang[language].nav.cart.buy}</Link>
                            <button onClick={()=> {addProduct(product)}} className=' fs-4 fw-bold btn btn-outline-dark w-50 bg-warning px-4 py-1'>{lang[language].nav.cart.add}</button>
                    </div>
                </div>
           </div>
        </>
    )
    
}

export default SingleProducts