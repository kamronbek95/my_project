import './profile.scss'
import Foto from '../../assets/foto.png'
import Podnyat from '../../assets/podnyat.png'
import Reklomirovat from '../../assets/reklamirovat.png'
import Tochka from '../../assets/tochka.png'
import {Link} from 'react-router-dom'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext'



function Profile(){

    const {setToken} = useContext(AuthContext)

    const handleSubmit = () => {
        setToken(null)
    }
    const menu = (
        <Menu
          items={[
            {
              key: '1',
              label: (
                <Link onClick={handleSubmit}  rel="noopener noreferrer" to='/'>
                  Log out
                </Link>
              ),
            },
          ]}
        />
      );
    return(
        <>
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
                <div className="privet">
                    <h4 className="privet__tittle">Здравствуйте Камронбек Ортиков</h4>
                    <div className="privet__balans">
                        <span className="privet__balans__title">Ваш счет: 2 3000 сум</span>
                        <div className="privet__balans__btn">
                            <h3 className="privet__balans__btn__plus">+</h3>
                            <p className="privet__balans__btn__title">Пополнить</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr  style={{maxWidth: 1408, margin: 'auto'}}/>
            <div className="container">
                    <div className="profile__list">
                        <p className="profile__list__link1">Объявления</p>
                        <p className="profile__list__link">Сообщения</p>
                        <p className="profile__list__link">Платежи и счёт</p>
                        <Dropdown overlay={menu}>
                            <a onClick={(e) => e.preventDefault()} style={{textDecoration: 'none' , paddingTop: 0}}>
                            <Space className='profile__list__link'>
                            Настройки
                                <DownOutlined />
                            </Space>
                            </a>
                        </Dropdown>
                    
                
                        <p className="profile__list__link">Мой бизнес</p>
                    </div>
                    <hr />
            </div>
                 <div className="profile">
                  <div className="container">
                     <ul className="profile__todo">
                        <li className="profile__todo__title">Фото</li>
                        <li className="profile__todo__title2">Название</li>
                         <li className="profile__todo__title3">Цена</li>
                        <li className="profile__todo__title4">Дата</li>
                        <li className="profile__todo__title5">Действие</li>
                    </ul>
                    <div className="profile__cards">
                        <div className="profile__card">
                            <img className='profile__card__img'  src={Foto} alt="foto" />
                            <h4 className='profile__card__naz'>Срочно нужен программист yii2</h4>
                            <p className='profile__card__sena'>2 000 000 <br /> 6 000 000 сум</p>
                            <p className='profile__card__data'># 345 002 <br /> С: 28 июнь <br /> По: 28 июль</p>
                            <div className='profile__card__deyst'>
                                <img className='profile__card__deyst__img1' src={Podnyat} alt="podnyat" />
                                <img className='profile__card__deyst__img2' src={Reklomirovat} alt="reklama" />
                                <img className='profile__card__deyst__img3' src={Tochka} alt="tochka" />
                            </div>
                        </div>
                        <hr />
                        <ul className="profile__cards__list">
                            <li className="profile__cards__list__link1">Статистика</li>
                            <li className="profile__cards__list__link">Просмотры: 195</li>
                            <li className="profile__cards__list__link">Тел.: 200</li>
                            <li className="profile__cards__list__link">В Избранном: 0</li>
                        </ul>
                    </div>
                    <div className="profile__cards">
                        <div className="profile__card">
                            <img className='profile__card__img'  src={Foto} alt="foto" />
                            <h4 className='profile__card__naz'>Срочно нужен программист yii2</h4>
                            <p className='profile__card__sena'>2 000 000 <br /> 6 000 000 сум</p>
                            <p className='profile__card__data'># 345 002 <br /> С: 28 июнь <br /> По: 28 июль</p>
                            <div className='profile__card__deyst'>
                                <img className='profile__card__deyst__img1' src={Podnyat} alt="podnyat" />
                                <img className='profile__card__deyst__img2' src={Reklomirovat} alt="reklama" />
                                <img className='profile__card__deyst__img3' src={Tochka} alt="tochka" />
                            </div>
                        </div>
                        <hr />
                        <ul className="profile__cards__list">
                            <li className="profile__cards__list__link1">Статистика</li>
                            <li className="profile__cards__list__link">Просмотры: 195</li>
                            <li className="profile__cards__list__link">Тел.: 200</li>
                            <li className="profile__cards__list__link">В Избранном: 0</li>
                        </ul>
                    </div>
                    <div className="profile__cards">
                        <div className="profile__card">
                            <img className='profile__card__img'  src={Foto} alt="foto" />
                            <h4 className='profile__card__naz'>Срочно нужен программист yii2</h4>
                            <p className='profile__card__sena'>2 000 000 <br /> 6 000 000 сум</p>
                            <p className='profile__card__data'># 345 002 <br /> С: 28 июнь <br /> По: 28 июль</p>
                            <div className='profile__card__deyst'>
                                <img className='profile__card__deyst__img1' src={Podnyat} alt="podnyat" />
                                <img className='profile__card__deyst__img2' src={Reklomirovat} alt="reklama" />
                                <img className='profile__card__deyst__img3' src={Tochka} alt="tochka" />
                            </div>
                        </div>
                        <hr />
                        <ul className="profile__cards__list">
                            <li className="profile__cards__list__link1">Статистика</li>
                            <li className="profile__cards__list__link">Просмотры: 195</li>
                            <li className="profile__cards__list__link">Тел.: 200</li>
                            <li className="profile__cards__list__link">В Избранном: 0</li>
                        </ul>
                    </div>
                    <div className="profile__cards">
                        <div className="profile__card">
                            <img className='profile__card__img'  src={Foto} alt="foto" />
                            <h4 className='profile__card__naz'>Срочно нужен программист yii2</h4>
                            <p className='profile__card__sena'>2 000 000 <br /> 6 000 000 сум</p>
                            <p className='profile__card__data'># 345 002 <br /> С: 28 июнь <br /> По: 28 июль</p>
                            <div className='profile__card__deyst'>
                                <img className='profile__card__deyst__img1' src={Podnyat} alt="podnyat" />
                                <img className='profile__card__deyst__img2' src={Reklomirovat} alt="reklama" />
                                <img className='profile__card__deyst__img3' src={Tochka} alt="tochka" />
                            </div>
                        </div>
                        <hr />
                        <ul className="profile__cards__list">
                            <li className="profile__cards__list__link1">Статистика</li>
                            <li className="profile__cards__list__link">Просмотры: 195</li>
                            <li className="profile__cards__list__link">Тел.: 200</li>
                            <li className="profile__cards__list__link">В Избранном: 0</li>
                        </ul>
                    </div>
                    <div className="profile__cards" >
                        <div className="profile__card">
                            <img className='profile__card__img'  src={Foto} alt="foto" />
                            <h4 className='profile__card__naz'>Срочно нужен программист yii2</h4>
                            <p className='profile__card__sena'>2 000 000 <br /> 6 000 000 сум</p>
                            <p className='profile__card__data'># 345 002 <br /> С: 28 июнь <br /> По: 28 июль</p>
                            <div className='profile__card__deyst'>
                                <img className='profile__card__deyst__img1' src={Podnyat} alt="podnyat" />
                                <img className='profile__card__deyst__img2' src={Reklomirovat} alt="reklama" />
                                <img className='profile__card__deyst__img3' src={Tochka} alt="tochka" />
                            </div>
                        </div>
                        <hr />
                        <ul className="profile__cards__list">
                            <li className="profile__cards__list__link1">Статистика</li>
                            <li className="profile__cards__list__link">Просмотры: 195</li>
                            <li className="profile__cards__list__link">Тел.: 200</li>
                            <li className="profile__cards__list__link">В Избранном: 0</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile