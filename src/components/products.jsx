
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from '../Redux/productSlice'
import { addToCart } from '../Redux/cartSlice'
import './candy.css'
const Products = () => {
  const products = useSelector(state => state.products)
  console.log(products)
  const dispatch = useDispatch()

  const handleAddToCart = (productId, quantity) => {
    dispatch(addToCart({ productId, quantity }))
  }

  return (
    <div>
      <h2>Here's what we have today:</h2>
      <ul className='candy-list'>
        {products.map(product => (
          <li key={product.id} className='candy-card'>
            <div><img className='candy-image'src={product.photoUrl} alt={product.name}></img></div>
            <div className='candy-name'>{product.name}</div>
            <div className='candy-price'>Price: ${product.price}</div>
            <div className='candy-stock'>In Stock: {product.inStock}</div>
            <div className='input-container'>
              <input type="number" min="0" defaultValue="0" />
              <button className='add-to-cart' onClick={() => handleAddToCart(product.id, parseInt(event.target.previousElementSibling.value))}>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products;
