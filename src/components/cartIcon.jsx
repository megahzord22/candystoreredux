import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartIcon = () => {
  const cartItems = useSelector(state => state.cart)
  const totalUniqueItems = cartItems.length

  return (
    <div>
      <Link to="/cart"> 
        <i className="fas fa-shopping-cart"></i>
        <span>{totalUniqueItems}</span>
      </Link>
    </div>
  )
}

export default CartIcon;
