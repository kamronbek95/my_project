import { useContext } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { delCart } from "../../../static/action/addToCart"
import { lang } from '../../../lang/lang'
import { LangContext } from "../../../context/langContext"
import { Link } from "react-router-dom"

const Cart = () => {

    const {setLanguage , language}= useContext(LangContext)

    const state = useSelector((state) => state.handleCart)
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(delCart(item))
    }

    var total = 0;
    const cartItems = (cartItem) => {

        total = total + cartItem.price
        return (
            <div className="container px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="mb-5 mt-5">
                    <button onClick={() => handleClose(cartItem)} className="btn-close mt-3 float-end" aria-label="Close"></button>
                     <div>
                     <h2 className="text-uppercase text-black-50">{cartItem.category}</h2>
                        <div className="single__products justify-content-between">
                             <img src={cartItem.image} alt={cartItem.title} height="300px" width="300px" />
                            <div className="col-md-6">
                                <h1 className="display-5">{cartItem.title}</h1>
                                <p className="lead fw-bolder">
                                     Rating {cartItem.rating && cartItem.rating.rate}
                                 <i className="fa fa-star"></i>
                                </p>
                                <h3 className="display-6 fw-bold my-4">
                                            {cartItem.price} sum
                                </h3>
                                <p className="lead">{cartItem.description}</p>
                            </div>
                        </div>
                     </div>
                </div>

            </div>
        )
    }

    const emptyCart = () => {
        return(
            <div className="container px-4 my-5 rounded-3 py-5">
                <div className="mb-5 mt-5">
                    <h3 className="fs-1 fw-bold text-danger">{lang[language].nav.empty.title}</h3>
                </div>
            </div>
        )
    }
    const buy = () => {

        return(
        <div className="container px-4 my-5 rounded-3 py-5">
            <div className="d-flex justify-content-between  mb-5 mt-5">
                <h4 className="fs-1">{lang[language].nav.cart.product}</h4>
                <span className="badge bg-warning text-dark fs-3 py-2  rounded-pill">{state.length}</span>
            </div>
            <div className="d-flex justify-content-between  mb-5 mt-5">
                <h4 className="fs-1">{lang[language].nav.cart.totalprice}</h4>
                <span className="badge bg-warning text-dark fs-3 py-2  rounded-pill">{total}sum</span>
            </div>
            <Link to="/buy" className='btn btn-outline-dark me-2 w-50 bg-warning fw-bold py-3 px-4'>{lang[language].nav.cart.buy}</Link>
        </div>
        )
    }
    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && buy()} 
        </>
    )
}

export default Cart;