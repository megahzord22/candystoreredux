
import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const { productId, productName, price, quantity } = action.payload
      const cartItemIndex = state.findIndex(item => item.productId === productId)
      if (cartItemIndex !== -1) {
        // Update quantity 
        state[cartItemIndex].quantity += quantity
      } else {
        // Add new item 
        state.push({
          productId,
          productName,
          price,
          quantity,
        })
      }
    },
    removeFromCart(state, action) {
      const { productId, quantity } = action.payload
      const cartItemIndex = state.findIndex(item => item.productId === productId)
      if (cartItemIndex !== -1) {
        // Remove item or update amount
        if (state[cartItemIndex].quantity <= quantity) {
          state.splice(cartItemIndex, 1)
        } else {
          state[cartItemIndex].quantity -= quantity
        }
      }
    },
    clearCart(state, action) {
      state.splice(0, state.length);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
