import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, clearCart } from '../Redux/cartSlice'
import { addProduct } from '../Redux/productSlice'

const Cart = () => {
  const cartItems = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleRemoveFromCart = (productId, quantity) => {
    dispatch(removeFromCart({ productId, quantity }))
    dispatch(addProduct({ productId, quantity }))
  }
  const handleCheckout = () => {
    dispatch(clearCart())
  }
  const isCartEmpty = cartItems.length === 0

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.productId}>
            <div>{item.productName}</div>
            <div>Price: ${item.price}</div>
            <div>Quantity: {item.quantity}</div>
            <button onClick={() => handleRemoveFromCart(item.productId, item.quantity)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      {!isCartEmpty && <button onClick={handleCheckout}>Checkout</button>}
    </div>
  )
}

export default Cart;