import React from 'react'
import { useSelector } from 'react-redux'
import { removeFromCart } from '../Redux/cartSlice'


const CartIcon = () => {
  const cartItems = useSelector(state => state.cart);

  // unique items in the cart
  const totalUniqueItems = cartItems.length

  return (
    <div>
      <i className="fas fa-shopping-cart"></i>
      <span>{totalUniqueItems}</span>
    </div>
  )
}

export default CartIcon
