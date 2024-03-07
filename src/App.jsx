import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import  { setProducts, addProduct, subProduct }  from './Redux/productSlice'
import Cart from './components/cart'
import Products from './components/products'
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
    }

    fetchData()
  }, [dispatch])
  const addToCart = (productId, quantity) => {
    // Dispatch action to add products
    dispatch(addProduct({ productId, quantity }));
  }

  const removeFromCart = (productId, quantity) => {
    // Dispatch action to subtract products
    dispatch(subProduct({ productId, quantity }));
  }

  return (
    <div>
      <h1>Penny Pincher's Candy Co. <img className='candy-logo' src={candyLogo} alt='candy-logo'></img> <CartIcon></CartIcon></h1>
      <Products></Products>
      <Cart></Cart>
    </div>
  )
}

export default App;

