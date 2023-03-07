import { SUCCESS_ADD_TO_CART, REMOVE_FROM_CART } from "../constants";

let initialState = {
  counter: 0,
  products: [],
};

const shoppingReducer = (state = initialState, action) => {
  switch (action.type){
    case SUCCESS_ADD_TO_CART:
      return {
        ...state,
        counter: state.counter+1,
        products: [
          ...state.products,
          {
            ...action.payload,
            quantity: action.payload.quantity,
          }
        ]
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        counter: 0,
        products: []
      }
    default:
      return state;
  }
}

export default shoppingReducer;