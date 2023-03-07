// Packages
import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { RiSubtractFill} from 'react-icons/ri'

//Redux
import { useDispatch } from 'react-redux'
import { addCart } from '../../../redux/actions/shoppingAction'

// Styles
import './index.css'

const ProductDetailLayout = ({product}) => {

  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1)

  return (
    <div className='main-detail'>
      <p className='title'>Product</p>
      <div className='border-main product-detail'>
        <img src={product.image} alt={product.name} />
        <div className='product'>
          <div>
            <span>{product.name} -</span>
            <span> ${product.price}</span>
          </div>
            <div className='buttons'>
                <div className='pressable' onClick={() => {
                  if(counter>=2){
                    setCounter(counter-1)
                  }
                }}>
                  <RiSubtractFill />
                </div>
              <div className='pressable' onClick={() => {
                setCounter(counter+1)
              }}>
                <AiOutlinePlus />
              </div>
            </div>
        </div>
        <div className='description'>
          <p>{product.description}</p>
        </div>
      </div>
      <div className='quantity'>
        {counter}
      </div>
      <div className='button'>
        <div className='pressable' onClick={() => {
          const data = {
            ...product,
            quantity: counter
          }
          dispatch(addCart(data))
          
        }}>
          Add to Cart
        </div>
      </div>
    </div>
  )
}

export default ProductDetailLayout