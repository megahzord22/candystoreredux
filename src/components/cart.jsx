import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../Redux/cartSlice';
import { addProduct } from '../Redux/productSlice';
import './candy.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId, quantity) => {
    dispatch(removeFromCart({ productId, quantity }));
    dispatch(addProduct({ productId, quantity }));
  };

  const handleCheckout = () => {
    dispatch(clearCart());
  };

  const isCartEmpty = cartItems.length === 0;

  const calculateTotalCost = (price, quantity) => {
    const parsedPrice = parseFloat(price);
    const parsedQuantity = parseFloat(quantity);
    if (isNaN(parsedPrice) || isNaN(parsedQuantity)) {
      return 'Error';
    }
    return (parsedPrice * parsedQuantity).toFixed(2);
  };
  

  // Calculate total cost of all items in the cart
  const totalCost = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0).toFixed(2);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.productId} className="cart-item">
            <div className="cart-item-info">
              <div className="item-name">{item.productName}</div>
              <div className="item-price">Price: ${item.price}</div>
              <div className="item-quantity">Quantity: {item.quantity}</div>
              <div className="item-total-cost">
                Total Cost: ${calculateTotalCost(item.price, item.quantity)}
              </div>
            </div>
            <button
              onClick={() => handleRemoveFromCart(item.productId, item.quantity)}
              className="remove-button"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="total">Total: ${totalCost}</div>
        {!isCartEmpty && (
          <button onClick={handleCheckout} className="checkout-button">
            Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
