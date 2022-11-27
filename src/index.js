import React from 'react';
import ReactDOM from 'react-dom/client';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import App from './App';
import 'antd/dist/antd.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { AuthContextProvider } from './context/authContext';
import { LangContextProvider } from './context/langContext';
import { Provider } from 'react-redux';
import store from './static/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <LangContextProvider>
          <AuthContextProvider>
            <App/>
          </AuthContextProvider>
        </LangContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)