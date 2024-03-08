
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts, subProduct } from '../Redux/productSlice'
import { addToCart } from '../Redux/cartSlice'
import './candy.css'
const Products = () => {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  const handleAddToCart = (productId, quantity) => {
    const product = products.find(product => product.id === productId)

    if (quantity > product.inStock) {
        alert("Sorry, too many items!")
        return
    }
    dispatch(addToCart({ productId, quantity }))
    dispatch(subProduct({ productId, quantity }))
  }

  return (
    <div>
      <ul className='candy-list'>
        {products.map(product => (
          <li key={product.id} className='candy-card'>
            <div><img className='candy-image'src={product.photoUrl} alt={product.name}></img></div>
            <div className='candy-name'>{product.name}</div>
            <div className='candy-price'>Price: ${product.price}</div>
            <div className='candy-stock'>In Stock: {product.inStock}</div>
            <div className='input-container'>
              <input type="number" min="0" defaultValue="0" />
              <button 
                disabled={product.inStock === 0}
                className='add-to-cart' 
                onClick={() => handleAddToCart(product.id, parseInt(event.target.previousElementSibling.value))}>
                {product.inStock === 0 ? "Out of stock" : "Add to Cart"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products;
