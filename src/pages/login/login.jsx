import './login.scss'
import Line from '../../assets/line.png'
import Kivi from '../../assets/kivi.png'
import { useContext, useRef } from 'react'
import { AuthContext } from '../../context/authContext'
import { useNavigate } from 'react-router-dom'
const LoginPage = () => {
    const { setToken } = useContext(AuthContext)
    const navigate = useNavigate()
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = JSON.stringify({
            email: emailRef.current.value , 
            password: passwordRef.current.value
        })

        if(emailRef.current.value.length > 0 && passwordRef.current.value.length > 0) {
            fetch( 'https://reqres.in/api/login', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data
            }).then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.token){
                   setToken(data)
                   navigate('/')
                }
                else{
                    alert('Login yoki parol noto\'g\'ri')
                }
            })
            .catch(err => console.log(err))
            return
        }

        alert('Login yoki parol noto\'g\'ri')
    }
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
            <div className="login">
                <div className="login__task">
                    <h2 className="login__task__title">Ваша регистрация завершена!</h2>
                    <p className="login__task__desc">Вы успешно зарегистрированы на сайте киви и ваше пароль отправлен в виде смс на ваше телефонный номер</p>
                    <form onSubmit={handleSubmit} className="login__form">
                        <label className="login__form__label">Введите email или номер телефона</label>
                        <input ref={emailRef} type="email" className="login__form__login"  placeholder="99891 167 27 23"/>
                        <label className="login__form__label">Пароль</label>
                        <input ref={passwordRef} type="password" className="login__form__password"  placeholder="***********"/>
                        <button className="login__form__btn" type="submit" >Войти</button>
                    </form>
                    <h5 className="login__task__line">
                        <img src={Line} alt="line" className='login__task__line__img'/> 
                        или
                        <img src={Line} alt="line" className='login__task__line__img'/> 
                    </h5>
                    <a href='#' className='login__task__vostonavlenie'>Восстоновить ваше пароль</a>
                </div>
               <div className="img">
                    <img className='img__kivi' src={Kivi} alt="kivi" />
               </div>
            </div>
        </div>
    )
}

export default LoginPage