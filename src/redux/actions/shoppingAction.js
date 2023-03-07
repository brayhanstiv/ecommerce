import { SUCCESS_ADD_TO_CART } from "../constants"

export const addCart = payload => ({
  type: SUCCESS_ADD_TO_CART,
  payload
});