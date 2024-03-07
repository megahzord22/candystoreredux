import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts(state, action) {
      return action.payload
    },
    addProduct(state, action) {
      const { productId, quantity } = action.payload
      const productIndex = state.findIndex(product => product.id === productId)
      if (productIndex !== -1) {
        state[productIndex].inStock += quantity
      }
    },
    subProduct(state, action) {
      const { productId, quantity } = action.payload
      const productIndex = state.findIndex(product => product.id === productId)
      if (productIndex !== -1) {
        state[productIndex].inStock -= quantity;
        if (state[productIndex].inStock < 0) {
          state[productIndex].inStock = 0
        }
      }
    },
  },
})

export default productSlice.reducer
export const { setProducts, addProduct, subProduct } = productSlice.actions
