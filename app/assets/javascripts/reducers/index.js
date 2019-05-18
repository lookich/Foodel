import { combineReducers } from 'redux';
import products from './ProductsReducer';
import product from './ProductReducer';

//Combine reducers for each section into a single reducer object 
const rootReducer = combineReducers({
    products: products,
    product: product,
  });

export default rootReducer;
