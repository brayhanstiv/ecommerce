// Packages
import React from 'react'
import { useSelector } from 'react-redux'

// Components
import { CardLayout, EmptyLayout, ProductDetailLayout } from '../../components'

const HomePage = () => {

  const product = useSelector(state => state.product.product)
  

  return (
    <section className='main'>
      <CardLayout/>
      {JSON.stringify(product)==='{}'
      ? <EmptyLayout/>
      : <ProductDetailLayout product={product}/>}
    </section>
  )
}

export default HomePage