// Packages
import React from 'react'
import { useDispatch } from 'react-redux'

// Actions
import { setProduct } from '../../../redux/actions/productsAction'

// Constants
import products from '../../../utils/constants'

// Widgets
import CardSnack from '../../Cards/CardSnack'

// Styles
import './index.css'

const CardLayout = () => {

  const dispatch = useDispatch();

  return (
    <div>
      <p className='title'>Store</p>
      <div className='border-main list-products'>
          {products.map((item, index) => (
            <CardSnack product={item} key={index} clickeable={() => dispatch(setProduct(item))}/>
          )
          )}
      </div>
    </div>
  )
}

export default CardLayout