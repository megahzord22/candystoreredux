import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Redux/store'
import App from './App'
import Cart from './components/cart'
import '@fortawesome/fontawesome-free/css/all.min.css'

const RoutesComponent = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Provider>
  );
};

export default RoutesComponent;