
import CustomArrowProduct from '../../components/customarrows/custumarrows'
import SingleProducts from '../../components/singleProducts/singleProducts'
import './singleProduct.scss'
const SingleProduct = () =>{
    
    return(
        <div className="container">
            <div className="single__hero">
                <div className="single__hero__select">
                    <select className="single__hero__select__select">
                        <option >Любая категория</option>
                    </select>
                    <p className="single__hero__select__title">Что будем искать ?</p> 
                    <select className="single__hero__select__select">
                        <option >По всей Узбекистану</option>
                    </select>
                    <button className="single__hero__select__btn" >Найти</button>
                </div>
                <div className="single__hero__btn">
                    <h3 className="single__hero__btn__plus">+</h3>
                    <p className="single__hero__btn__title">Добавить обьявления</p>
                </div>
            </div>
            <p className="obyavlenie">Объявления   /   Ташкент Недвижимость   /   Ташкент Квартиры   /   Ташкент Продажа   /   Новостройки Ташкент</p>
            <SingleProducts/>
            <form className='hero__btn container'>
                <button className=' hero__btn__title '>
                    Новые обявления 
                </button>
                <button className='hero__btn__title1 '>
                    Лучщие предложение 
                </button>
            </form>
            <hr style={{border: '1px solid #D5D5D5', marginBottom: 14}} className='container'/>
            <CustomArrowProduct/>
        </div>
    )
}

export default SingleProduct