
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Products = () => {
  const products = useSelector(state => state.products.products); // Accessing products from state
  const dispatch = useDispatch()

  const handleAddToCart = (productId, quantity) => {
    dispatch(addToCart({ productId, quantity }))
  };

  return (
    <div>
      <h2>Available Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <div>{product.name}</div>
            <div>Price: ${product.price}</div>
            <div>In Stock: {product.inStock}</div>
            <input type="number" min="0" defaultValue="0" />
            <button onClick={() => handleAddToCart(product.id, parseInt(event.target.previousElementSibling.value))}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products;
