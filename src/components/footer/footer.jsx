import Strelka1 from '../../assets/rightstrelka.png'
import Strelka2 from '../../assets/right2.png'
import Strelka3 from '../../assets/right3.png'
import Strelka4 from '../../assets/right4.png'
import Strelka5 from '../../assets/right5.png'
import Strelka6 from '../../assets/right6.png'
import Strelka7 from '../../assets/right7.png'
import Strelka8 from '../../assets/right8.png'
import Strelka from '../../assets/strelkafooter.png'
import Logo from '../../assets/logofooter.png'
import App from '../../assets/app.png'
import Android from '../../assets/android.png'
import './footer.scss'

const Footers = () => {
    return(
        <>
        <div style={{backgroundColor: '#282B30', maxWidth: 1408, margin: 'auto',  paddingBottom: 21}}>
            <div className='logo container'>
                    <img className='logo__img' src={Logo} alt="logo" />
                    <p className='logo__title' >Веб сайт бесплатных обьявлений | на базе 
                        имеется 234 944 999 шт обяления
                    </p>
                    <div className='logo__imgs'>
                        <img className='logo__imgs__img'  src={App} alt="app" />
                        <img className='logo__imgs__img' src={Android} alt="android" />
                    </div>
            </div>
        </div>
        <div style={{backgroundColor: '#33383C', maxWidth: 1408, margin: 'auto'}}>
          <div className="container"> 
            <div className='footer'>
                <div className="footer__m">
                    <div className='footer__main'>
                        <div className="footer__main__cards">
                            <img className='footer__main__cards__img' src={Strelka1} alt="strelka" />
                            <h3 className='footer__main__cards__title'>Автомобилы</h3>
                        </div>
                        <div className='footer__main__card'>
                            <p className='footer__main__card__desc'> Легковые авто <br />
                                Мото <br />
                                Автобусы <br />
                                Грузовые авто <br />
                                Сельхозтехника <br />
                                Запчасти и Аксессуары <br />
                                Прицепы и Спецтехника <br />
                                Водный и Другой транспортa
                            </p>
                        </div>
                    </div>
                    <div className='footer__main'>
                        <div className="footer__main__cards">
                            <img className='footer__main__cards__img' src={Strelka2} alt="strelka" />
                            <h3 className='footer__main__cards__title'>Дом и Сад</h3>
                        </div>
                        <div className='footer__main__card'>
                            <p className='footer__main__card__desc'>  
                                Товары для интерьера <br />
                                Товары для сада <br />
                                Растения <br />
                                Продукты питания <br />
                                Посуда и Кухонная утварь <br />
                                Хоз.инвентарь и Бытовая химия <br />
                                Канцтовары и Расходные <br />
                                Прочие товары для дома 
                            </p>
                        </div>
                    </div>
                </div>

                <div className="footer__m">
                    <div className='footer__main'>
                        <div className="footer__main__cards">
                            <img className='footer__main__cards__img' src={Strelka3} alt="strelka" />
                            <h3 className='footer__main__cards__title'>Недвижимость</h3>
                        </div>
                        <div className='footer__main__card'>
                            <p className='footer__main__card__desc'> 
                            Аренда квартир <br />
                            Аренда домов <br />
                            Аренда гаражей и Стоянок <br />
                            Продажа квартир <br />
                            Продажа домов <br />
                            Продажа земли <br />
                            Продажа гаражей/Стоянок  <br />
                            Аренда помещений <br />
                            Продажа помещений <br /> 
                            Прочая недвижимость <br /> 
                            Обмен недвижимости <br /> 
                            Коммерческая недвижимость
                            </p>
                        </div>
                    </div>
                    <div className='footer__main'>
                        <div className="footer__main__cards">
                            <img className='footer__main__cards__img' src={Strelka4} alt="strelka" />
                            <h3 className='footer__main__cards__title' style={{width: 218}}>Товары стройки и ремонта</h3>
                        </div>
                        <div className='footer__main__card'>
                            <p className='footer__main__card__desc'>  
                            Двери и окна <br />
                            Сантехника <br />
                            Стройматериалы <br />
                            Инструменты
                            </p>
                        </div>
                    </div>
                </div>
                <div className="footer__m">
                    <div className='footer__main'>
                        <div className="footer__main__cards">
                            <img className='footer__main__cards__img' src={Strelka5} alt="strelka" />
                            <h3 className='footer__main__cards__title'>Электроника</h3>
                        </div>
                        <div className='footer__main__card'>
                            <p className='footer__main__card__desc'> 
                            Телефоны <br />
                            Компьютеры <br /> 
                            Ноутбуки, планшеты <br />
                            Оргтехника и расходники <br />
                            ТВ,Фото,Видео и Аудио <br />
                            Игры и Приставки <br />
                            Техника для дома и Для себя <br />
                            Климатическое оборудование <br />
                            Аксессуары и Комплектующие <br />
                            Техника для наблюдения <br />
                            Прочая электроника
                            </p>
                        </div>
                    </div>
                    <div className='footer__main'>
                        <div className="footer__main__cards">
                            <img className='footer__main__cards__img' src={Strelka6} alt="strelka" />
                            <h3 className='footer__main__cards__title' style={{width: 187}}>Хобби, Отдых и Спорт</h3>
                        </div>
                        <div className='footer__main__card'>
                            <p className='footer__main__card__desc'>  
                            Антиквариат и Коллекции <br />
                            Музыкальные инструменты <br />
                            Велосипеды <br />
                            Товары для спорта и отдыха <br />
                            Книги/Журналы <br />
                            CD/DVD/Пластинки/Кассеты <br />
                            Билеты и путешествия <br />
                            Охота и рыбалка 
                            </p>
                        </div>
                    </div>
                </div>

                <div className="footer__m">
                    <div className='footer__main'>
                        <div className="footer__main__cards">
                            <img className='footer__main__cards__img' src={Strelka7} alt="strelka" />
                            <h3 className='footer__main__cards__title'>Личные вещи</h3>
                        </div>
                        <div className='footer__main__card'>
                            <p className='footer__main__card__desc'> 
                            Одежда, обувь, аксессуары <br />
                            Детская одежда и обувь <br />
                            Детские товары и Игрушки <br />
                            Школьникам <br />
                            Часы и украшения <br />
                            Товары для красоты и здоровья <br />
                            Разные вещи
                            </p>
                        </div>
                    </div>
                    <div className='footer__main'>
                        <div className="footer__main__cards">
                            <img className='footer__main__cards__img' src={Strelka8} alt="strelka" />
                            <h3 className='footer__main__cards__title' > Бизнес и услуги</h3>
                        </div>
                        <div className='footer__main__card'>
                            <p className='footer__main__card__desc' style={{overflow: 'visible'}}>  
                                Сырьё и материалы <br/>
                                Оборудование и аренда <br/>
                                Производство и обработка <br/>
                                Продажа бизнеса и партнерство <br/>
                                Финансовые услуги/Бухгалтерия <br/>
                                Услуги для красоты и здоровья <br/>
                                Услуги курьера и доставки <br/>
                                Реклама, Полиграфия и Маркетинг <br/>
                                Няни, Сиделки и Домработницы <br/>
                                Обучение, курсы и репетиторы <br/>
                                Фото, видео, искусство и дизайн <br/>
                                Перевод и Набор текста <br/>
                                Юридические услуги <br/>
                                Прокат товаров <br/>
                                Туризм и спорт <br/>
                                Праздники и мероприятия <br/>
                                Перевозки и Аренда авто <br/>
                                Услуги спецтехники <br/>
                                Автосервис <br/>
                                Услуги такси <br/>
                                Химчистка и стирка <br/>
                                Пошив одежды и Обуви <br/>
                                Ювелирные услуги <br/>
                                Питание и доставка еды <br/>
                                Уход за животными <br/>
                                Другие услуги
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div  className="show__footer">
             <p className='show__footer__title' >
                    Показать ещё <img src={Strelka} alt="strelka" />
             </p>
          </div>
          <hr  className='hr'/>
          <ul className="footer__nav">
            <li className="footer__nav__title1">Подать объявление</li>
            <li className="footer__nav__title">Объявления </li>
            <li className="footer__nav__title">Магазины</li>
            <li className="footer__nav__title">Помощь</li>
            <li className="footer__nav__title">Безопасность</li>
            <li className="footer__nav__title">Реклама на сайте</li>
            <li className="footer__nav__title">О компании</li>
          </ul>
          </div>
        </div>
        </>
    )
}

export default Footers