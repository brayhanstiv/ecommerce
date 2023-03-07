// Packages
import React from 'react'
import {AiFillSafetyCertificate } from 'react-icons/ai'

// Components
import ShoppingCard from '../../Cards/ShoppingCard'

// Styles
import './index.css'

const ShoppingCartLayout = ({products, total}) => {

  const value= total + '00';
  const aleatorio = Math.floor(Math.random() * (999 - 100) + 100);
  const reference = aleatorio + 'XMPGKWWP' + aleatorio + 1

  return (
    <div>
      <p className='title'>Shopping Cart</p>
      <div className='border-main'>
        {products.map((item, index) => (
          <ShoppingCard product={item} key={index}/>
        )
        )}
        <div className='total'>
          <span>Total: </span>
          <span>${total}</span>
        </div>
      </div>
      <form action="https://checkout.wompi.co/p/" method="GET">
        <input type="hidden" name="public-key" value="pub_test_go7eeFDmFf6x93MhOWhtNsxGP3Vjlb0W" />
        <input type="hidden" name="currency" value="COP" />
        <input type="hidden" name="amount-in-cents" value={value} />
        <input type="hidden" name="reference" value={reference} />
        <button className='wompi' type="submit">
          <AiFillSafetyCertificate />
          Pagar con Wompi
        </button>
      </form>
    </div>
  )
}

export default ShoppingCartLayout