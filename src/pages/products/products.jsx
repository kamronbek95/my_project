
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import './products.scss'
import Lupa from '../../assets/lupa.png'
import Pin from '../../assets/pin.png'
import Elektronika from '../../assets/electronic.png'
import Monitor from '../../assets/monitor.png'
import Vniz from '../../assets/vniz.png'
import Kupit from '../../assets/kupit.png'
import { useState } from 'react'
import ProductsList from '../../components/productslist/productslist'
import CustomArrowProduct from '../../components/customarrows/custumarrows'

const val = {
    0: '0 sum' , 
    10: '100 000 sum',
    40: '2 000 000 sum',
    100: '10 000 000 sum',
}


const Products = () =>{

    const [val , setValue] = useState([10 , 40])
    const updateRange = (e,data) =>{
        setValue(data)
    }
    return(
        <>
            <div className="container ">
               <div className="product__hero  ">
                    <img src={Lupa} alt="lupa" className='product__hero__search' />
                    <input 
                    placeholder='Введите название обявления или '
                    className='product__hero__input'
                    />
                    <a href='#' className='product__hero__href'>выберите из списка</a>
               </div>
               <div className="product__page__btn">
                    <button type="button" class=" product__page__btn__title1">Интерсное</button>
                    <button type="button" class="product__page__btn__title2">Топ</button>
                    <button type="button" class="product__page__btn__title3">Отличные предложение</button>
                    <button type="button" class="product__page__btn__title4">Супер цена</button>
                    <button type="button" class="product__page__btn__title5">г.Ташкент <img src={Pin} alt="location" 
                            className = 'product__page__btn__title5__img'
                    /></button>
                    <button type="button" class="product__page__btn__title5">г.Термез <img src={Pin} alt="location" 
                            className = 'product__page__btn__title5__img'
                    /></button>
                    <button type="button" class="product__page__btn__title5">г.Самарканд <img src={Pin} alt="location" 
                            className = 'product__page__btn__title5__img'
                    /></button>
               </div>
               <div className="product__select">
                    <p className="product__select__title">Вы сейчас в рубрике</p>
                    <div className="product__select__mark">
                        <img src={Elektronika} alt="elektronika" className='product__select__mark__img1'/>
                        <img src={Monitor} alt="monitor" className='product__select__mark__img1'/>
                        <img src={Vniz} alt="strelka" className='product__select__mark__img2'/>
                    </div>
               </div>
               <div className="product__select">
                    <p className="product__select__title1"> Выберите цену от и до </p>
                    <Slider
                        value={val}
                        onChange={updateRange} 
                        valueLabelDisplay = 'on'
                    />
               </div>
               <div className='product__btn'>
                    <div className="product__btn__select">
                    <select className='product__btn__select__title' >
                        <option value="Состояние">Состояние</option>
                    </select>
                    <select className='product__btn__select__title' >
                        <option value="Тип">Тип объявщика</option>
                    </select>
                    <select className='product__btn__select__title' >
                        <option value="Ташкент">Ташкент &#62; Мирза улугбекский район</option>
                    </select>
                    </div>
                    <button className='product__btn__btn'>Применить</button>
               </div>
            </div> 
            <hr style={{maxWidth: 1408 , margin: 'auto' , marginBottom: 22}}/> 
            <ProductsList/>  
            <div className="container">
                 <div className="product__kupit">
                    <img src={Lupa} alt="lupa" className="product__kupit__img" />
                    <h3 className="product__kupit__title"> СЕЙЧАС ИЩУТ</h3>
                 </div>
                <img src={Kupit} alt="kupit" style={{width: '100%'}}/>
            </div>
            <div className="container">
                <h3 className="product__slide__title">САМОЕ ИНТЕРЕСНОЕ</h3>
                <CustomArrowProduct />
            </div>
        </>
    )
}

export default Products