// Package
import React from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'

// Components
import store from '../../redux';
import ShoppingCartPage from './index';

test('renders content', () => {

  render(
    <Provider store={store}>
      <ShoppingCartPage/>
    </Provider>
  )
 })