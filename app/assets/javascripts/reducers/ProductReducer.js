import { RECEIVE_PRODUCT, UPDATE_PRODUCT } from '../constants/ActionTypes';

const initialState = { product: [] }

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    //If the action type is RECEIVE_PRODUCT then the reducer returns the product data to be added to the store.
    case RECEIVE_PRODUCT:
      return action.product;
    //The dispatch with action goes to the productReducer to change the product object in the store.
    case UPDATE_PRODUCT:
      return {
        id: action.id,
        image: action.payload.image,
        name: action.payload.name,
        description: action.payload.description,
      }
    default:
      return state;
  }
}
