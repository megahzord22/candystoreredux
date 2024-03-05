// Cart.jsx
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from './Redux/productSlice'

const Cart = () => {
  const cartItems = useSelector(state => state.products.cart) // Access cart items 
  const dispatch = useDispatch()

  const handleRemoveFromCart = (productId, quantity) => {
    dispatch(removeFromCart({ productId, quantity }))
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.productId}>
            <div>{item.productName}</div>
            <div>Price: ${item.price}</div>
            <div>Quantity: {item.quantity}</div>
            <button onClick={() => handleRemoveFromCart(item.productId, item.quantity)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart;
