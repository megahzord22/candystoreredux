import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        addProduct(state, action) {},
    }
})

console.log("== slice:", productSlice)

export default productSlice.reducer