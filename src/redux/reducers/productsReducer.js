import { SUCCESS_SET_PRODUCT } from "../constants";

let initialState = {
  product: {},
};

const productsReducer = (state = initialState, action) => {
  switch (action.type){
    case SUCCESS_SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      }
    default:
      return state;
  }
}

export default productsReducer;