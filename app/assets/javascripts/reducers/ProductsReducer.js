import { RECEIVE_PRODUCTS, ADD_PRODUCT, REMOVE_PRODUCT, REPLACE_PRODUCT } from '../constants/ActionTypes';

const initialState = { products: [] }

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    //If the action type is RECEIVE_PRODUCTS it returns the products data to update the store with.
    case RECEIVE_PRODUCTS:
      return action.products;
    //Adds the new product from the store's current state.
    case ADD_PRODUCT:
      return [action.payload, ...state];
    //Remove product from the products array in the store
    case REMOVE_PRODUCT:
      return state.filter(product => product.id !== action.payload.id);
    //The dispatch with action type REPLACE_PRODUCT goes to the productsReducer
    // to replace the appropriate product object in the products array.
    case REPLACE_PRODUCT:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            image: action.payload.image,
            name: action.payload.name,
            description: action.payload.description,
          }
        } else return product;
      })
    default:
      return state;
  }
}
