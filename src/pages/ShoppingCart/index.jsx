// Packages
import React from 'react'
import { useSelector } from 'react-redux';

// Components
import { CardLayout, ShoppingCartLayout } from '../../components'

const ShoppingCartPage = () => {

  const products = useSelector(state => state.shopping.products)
  let total = 0;
  products.forEach(item => total = total + item.price*item.quantity);

  return (
    <section className='main'>
      <CardLayout/>
      <ShoppingCartLayout products={products} total={total}/>
    </section>
  )
}

export default ShoppingCartPage