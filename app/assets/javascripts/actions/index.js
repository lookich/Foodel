import axios from 'axios';
import * as types from '../constants/ActionTypes';
import { createBrowserHistory } from 'history';

const apiUrl = 'http://localhost:3000/api/v1/products';

//GetProducts() will make API call
export const getProducts = () => {
  //Use the dispatch method to send an action to the reducer 'productsReducer'.
  return (dispatch) => {
    {/*Make an HTTP GET request to our API endpoint using AJAX via the Axios module.*/}
    return axios.get(`${apiUrl}.json`)
      .then(response => {
        {/*If it is get a successful response, then call the dispatch method and send an Action.
          In this case the action type is RECEIVE_PRODUCTS,
          and we are sending the API response data with the action as a payload called "products."
          Then the reducer will add it to the store.*/}
        dispatch({type: types.RECEIVE_PRODUCTS, products: response.data})
      })
      .catch(error => { throw(error); });
  };
};

const history = createBrowserHistory();

//When the 'addProduct' function is called, the form data is sent as the argument.
export const addProduct = ({ image, name, description }) => {
  //Use the dispatch method to send an action to the reducer 'productsReducer'.
  return (dispatch) => {
    {/*Use Axios to send an AJAX POST request to the API endpoint including the data object.*/}
    return axios.post(`${apiUrl}.json`, {image, name, description})
      .then(response => {
        let data = response.data;
        {/*If it is posted successfully, the API's server will return the new product data
         as a JSON string.
        Dispatch the action to the reducer, with the data in a payload property. */}
        dispatch({type: types.ADD_PRODUCT, payload: {id: data.id, image: data.image, name: data.name, description: data.description}})
      })
      //Redirect back to the /products route.
      .then(() => {
        history.push("/products")
      })
      .catch(error => { throw(error) });
  };
};

//Get product data from json by id
export const getProduct = (id) => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/${id}.json`)
      .then(response => {
        dispatch({type: types.RECEIVE_PRODUCT, product: response.data});
      })
      .catch(error => {
        throw(error);
      });
  };
};

//This function deletes the product from the database and redirects back to the /products page.
export const deleteProduct = (id) => {
  return (dispatch) => {
    return axios.delete(`${apiUrl}/${id}.json`)
      .then(response => {
        {/*Use the productsReducer to remove product from the productss array in the store.*/}
        dispatch({type: types.REMOVE_PRODUCT, payload: {id}})
      })
      .then(() => {
        {/*Redirect back to the /products route.*/}
        history.push("/products")
      })
      .catch(error => {
        throw(error);
      });
  };
};

//The updateProduct function uses Axios to send an AJAX PATCH request to the API.
//If successful, the server sends a response with the updated product object.
//Then we dispatch not one but two actions.
export const updateProduct = (product) => {
  const productId = product.id;
  return (dispatch) => {
    return axios.patch(`${apiUrl}/${product.id}.json`, {image: product.image, name: product.name, description: product.description})
      .then(response => {
        const data = response.data;
        dispatch({type: types.UPDATE_PRODUCT, payload: {id: data.id, image: data.image, name: data.name, description: data.description}})
        dispatch({type: types.REPLACE_PRODUCT, payload: {id: data.id, image: data.image, name: data.name, description: data.description}})
      })
      .then(() => {
        history.push(`/products/${productId}`)
      })
      .catch(error => { throw(error) });
  };
};
