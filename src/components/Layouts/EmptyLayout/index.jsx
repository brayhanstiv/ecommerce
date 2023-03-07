// Packages
import React from 'react'

// Styles
import './index.css'

const EmptyLayout = () => {
  return (
    <div>
      <p className='title'>No products yet</p>
      <div className='border-main empty'>
        <p>Please choose a product on the left</p>
      </div>
    </div>
  )
}

export default EmptyLayout