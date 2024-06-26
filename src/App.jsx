import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setProducts } from './Redux/productSlice'
import { Routes, Route, Link } from 'react-router-dom'
import CartIcon from './components/cartIcon'
import candyLogo from './candylogo.jpg'
import './main.css'
import Products from './components/products'
import Cart from './components/cart'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/products.json')
        if (!response.ok) {
          throw new Error('Could not fetch products')
        }
        const data = await response.json();
        dispatch(setProducts(data));
      } catch (error) {
        console.error('Issue fetching products:', error.message)
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <nav className="navbar">
        <div className="left-section">
          <Link to="/" className="brand">
            Penny Pincher's Candy Co.
            <img className='candy-logo' src={candyLogo} alt='candy-logo' />
          </Link>
        </div>
        <div className="right-section">
          <CartIcon />
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<Products/>} />
        <Route exact path="cart" element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App;