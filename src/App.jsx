import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setProducts, addProduct, subProduct } from './Redux/productSlice'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import CartIcon from './components/cartIcon'
import candyLogo from './candylogo.jpg'
import './main.css'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/products.json')
        if (!response.ok) {
          throw new Error('Could not fetch products')
        }
        const data = await response.json()
        dispatch(setProducts(data))
      } catch (error) {
        console.error('Issue fetching products:', error.message)
      }
    };

    fetchData()
  }, [dispatch])

  return (
    <Router>
      <div>
        <h1>Penny Pincher's Candy Co. <img className='candy-logo' src={candyLogo} alt='candy-logo' /> <CartIcon /></h1>
        <Routes />
      </div>
    </Router>
  )
}

export default App;
