import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        addProduct(state, action) {
            state.push({
                text: action.payload,
                completed: false,
                id: currId++
            })
        },
        toggleProduct(state, action) {
            const product = state.find(t => t.id === action.payload)
            if (product) {
                product.completed = !product.completed
            }
        }
    }
})