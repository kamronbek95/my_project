import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import Avatar from '../../assets/avatar.png'
import { AuthContext } from '../../context/authContext'
import './navbar.scss'
import { Radio } from 'antd';
import { LangContext } from '../../context/langContext'
import { lang } from '../../lang/lang'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const {token} = useContext(AuthContext)
    const navigate = useNavigate()
    const {setLanguage , language}= useContext(LangContext)
    

    const handleChange = (e) => {
        setLanguage(e.target.value)
        localStorage.setItem('lang' , JSON.stringify(e.target.value))
    }

    const state = useSelector((state) => state.handleCart)

    return(
        <div className='header'>
            <nav className="navbar navbar-expand-lg container  ">
            <div className="container nav__cor">
                <Link to='/' className='nav__cor__logo'>
                    <img src= {Logo} alt="logo-img"/>
                    <p className='nav__cor__title'>{lang[language].nav.logo.title}</p>
                </Link>
                <ul className="navbar-nav me-auto  mb-lg-0">
                    <li className="nav-item p-3">
                    <Link to={'/products'} className="nav-link active nav__cor__link">{lang[language].nav.link.elon}</Link>
                    </li>
                    <li className="nav-item p-3">
                    <Link className="nav-link active nav__cor__link">{lang[language].nav.link.magazin}</Link>
                    </li>
                    <li className="nav-item dropdown p-3">
                    <Link className="nav-link active nav__cor__link">{lang[language].nav.link.biznes}</Link>
                    </li>
                    <li className="nav-item p-3">
                    <Link className="nav-link active nav__cor__link">{lang[language].nav.link.yordam}</Link>
                    </li>
                </ul>
                <div className='nav__cor__lang'>

                    <Radio.Group onChange={handleChange} defaultValue={language}  size="large">
                        <Radio.Button value="ru">Рус</Radio.Button>
                        <Radio.Button value="uz">O’z</Radio.Button>
                    </Radio.Group>
                </div>
                {
                    token ?  <div className="avatar nav__cor__log">
                                    <Link style={{textDecoration: 'none'}} to="/profile">
                                        <button onClick={()=> navigate('/profile')}  
                                                className='nav__cor__log__btn '>Ортиков</button>
                                        </Link>
                                        <Link style={{textDecoration: 'none'}} to="/profile">
                                        <button onClick={()=> navigate('/profile')}  className='nav__cor__log__btn '>
                                            <img src={Avatar} alt="avatar image" />
                                        </button>
                                </Link>
                    </div>
                     : 
                        <div className='nav__cor__log'>
                            <Link to="/cart" className='btn btn-outline-primary text-dark ms-2'> 
                                <i className='fa fa-shopping-cart me-1'></i> {lang[language].nav.cart.name} ({state.length})
                            </Link>
                            <Link style={{textDecoration: 'none'}} to="/login">
                            <button onClick={() => navigate('/login')}  className='nav__cor__log__btn '>{lang[language].nav.login.kirish}</button>
                            </Link>
                            <p className='nav__cor__log__icon' >|</p>
                            <button  className='nav__cor__log__btn'>{lang[language].nav.login.reg}</button>
                        </div>
                }
                    
            </div>
            </nav>
        </div>
    )
}


export default Navbar