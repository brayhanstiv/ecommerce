// Package
import React from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'

// Components
import HomePage from './index';
import store from '../../redux';

test('renders content', () => {

  render(
    <Provider store={store}>
      <HomePage/>
    </Provider>
  )
 })