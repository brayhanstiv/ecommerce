// Package
import React from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'

// Components
import CardSnack from './index';
import store from '../../../redux';

test('renders content', () => {
  const product = {
    name:'test',
    price: '1500',
    image: 'test',
    description: 'test'
  }

  render(
    <Provider store={store}>
      <CardSnack product={product}/>
    </Provider>
  )
 })