import CustomArrowProduct from "../../customarrows/custumarrows";
import KiviBuy from '../../../assets/bgl.png'
import {Link} from 'react-router-dom'
import { useContext } from "react";
import {lang} from '../../../lang/lang'
import {LangContext} from '../../../context/langContext'


const Buy = () => {

    const {setLanguage , language}= useContext(LangContext)

    return(
        <div className="mt-5 container">
           <div className="d-flex justify-content-between mt-5 mb-5">
                <div className="w-50 me-2 d-flex flex-column justify-content-between">
                    <div className="mt-5 input-group">
                            <span className="input-group-text fs-4 fw-bolder w-25 bg-warning">{lang[language].nav.buy.firstname}</span>
                            <input type="text" aria-label="First name" className="form-control"/>
                        </div>
                    <div className="mt-2 input-group">
                            <span className="input-group-text fw-bolder fs-4 w-25 bg-warning">{lang[language].nav.buy.lastname}</span>
                            <input type="text" className="form-control"/>
                    </div>
                    <div className="mt-2 input-group">
                            <span className="input-group-text fs-5 fw-bolder w-25 bg-warning">{lang[language].nav.buy.phone}</span>
                            <input type="text" className="form-control"/>
                    </div>
                    <div className="mt-2 input-group">
                            <span className="input-group-text fs-5 fw-bolder w-25 bg-warning">{lang[language].nav.buy.email}</span>
                            <input type="text" className="form-control"/>
                    </div>
                    <div className="mt-2 input-group">
                            <span className="input-group-text fs-4 fw-bolder  bg-warning">{lang[language].nav.buy.adress}</span>
                    </div>
                    <select class="form-select mt-2" aria-label="Default select example">
                                <option selected>Tashkent shahar</option>
                            </select>
                            <select class="form-select mt-2" aria-label="Default select example">
                                <option selected>Shayxontohur tumani</option>
                                <option value="1">Bektemir tumani</option>
                                <option value="2">Mirobod tumani</option>
                                <option value="3">Mirzo Ulug‘bek tumani</option>
                                <option value="4">Sergeli tumani</option>
                                <option value="5">Olmazor tumani</option>
                                <option value="6">Yashnobod tumani</option>
                                <option value="5">Uchtepa tumani</option>
                                <option value="6">Chilonzor tumani</option>
                                <option value="6">Yunusobod tumani</option>
                            </select>
                     <input type="text" className="form-control mt-2" placeholder="Alisher Navoi 25/3"/>
                     <div className="mt-2 input-group">
                            <span className="input-group-text fs-4 fw-bolder  bg-warning">{lang[language].nav.buy.check}</span>
                    </div>
                    <div className="d-flex justify-content-around mt-4">
                        <div className="form-check form-check-inline ">
                            <input type="radio" className="btn-check" name="options-outlined" id="dark-outlined" autocomplete="off" checked/>
                            <label className="btn btn-outline-warning text-dark fs-4 fw-bolder" for="dark-outlined">{lang[language].nav.buy.cart}</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio" className="btn-check" name="options-outlined" id="warning-outlined" autocomplete="off"/>
                            <label class="btn btn-outline-warning text-dark fs-4 fw-bolder" for="warning-outlined">{lang[language].nav.buy.cash}</label>
                        </div>
                    </div>
                    <Link to="/buy" className='btn text-center fs-3 btn-outline-dark  bg-warning fw-bold py-3 px-4'>{lang[language].nav.buy.checkout}</Link>
                </div>
                <div className="w-50">
                    <div className="">
                        <img className='w-100' src={KiviBuy} alt="kivi" />
                    </div>
                </div>
           </div>
           <CustomArrowProduct />
        </div>
    )
}

export default Buy