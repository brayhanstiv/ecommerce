// Packages
import { combineReducers } from 'redux';

// Reducers
import shoppingReducer from './shoppingReducer';
import productsReducer from './productsReducer';

const reducers = combineReducers({
 shopping: shoppingReducer,
 product: productsReducer
})

export default reducers;