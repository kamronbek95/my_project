import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Buy from './components/buyandcart/buy/buy';
import Cart from './components/buyandcart/cart/cart';
import Footers from './components/footer/footer';
import Navbar from './components/navbar/Navbar';
import { AuthContext } from './context/authContext';
import Errors from './pages/Error/error';
import Home from './pages/home/home';
import LoginPage from './pages/login/login';
import Products from './pages/products/products';
import Profile from './pages/profile/profile';
import SingleProduct from './pages/singleProduct/singleProduct';


function App() {

  const { token } = useContext(AuthContext)
  return(
    <>
    <header><Navbar/></header>
    <main>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<SingleProduct/>} />
        <Route path='/cart'  element={<Cart/>} />
        <Route path='/buy'  element={<Buy/>} />
        { token ? <Route path='/profile' element={ <Profile/>}/> : <Route path='/login' element={ <LoginPage/>}/>
        }
        <Route path='*' element={<Errors/>}/>
      </Routes>
    </main>
    <footer><Footers/></footer>
  </>
  )
  
}

export default App;