// Packages
import React from 'react'

// Styles
import './index.css'

const ShoppingCard = ({product}) => {  

  return (
    <div className='shopping-product'>
      <div className='value'>
        {product.quantity}
      </div>
      <img src={product.image} alt={product.name} />
      <div>
        <p>{product.name}</p>
      </div>
    </div>
  )
}

export default ShoppingCard