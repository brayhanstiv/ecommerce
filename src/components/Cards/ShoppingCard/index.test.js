// Package
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'

// Components
import ShoppingCard from './index'

test('renders content', () => { 
  const product = {
    name:'test',
    price: '1500',
    image: 'test',
    description: 'test'
  }

  render(<ShoppingCard product={product}/>)
 })