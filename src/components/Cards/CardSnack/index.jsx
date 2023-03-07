// Packages
import React from 'react'
import { useSelector } from 'react-redux'

// Styles
import './index.css'

const CardSnack = ({product, clickeable}) => {
  
  const data = useSelector(state => state.product.product)
  
  const clicked = data.name === product.name ? true : false;
  
  return (
    <div className={clicked ? 'pressable card-click' : 'pressable card'} onClick={clickeable}>
      <img src={product.image} alt={product.name} />
    </div>
  )
}

export default CardSnack