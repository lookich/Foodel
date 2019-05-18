import React from 'react'
import ReactDOM from 'react-dom';
import App from '../components/App.jsx'
import { Provider } from 'react-redux';
import { getProducts } from '../actions';
import store from '../store';

//Sending the 'getProducts()' action to the store to get the data from the store.
store.dispatch (getProducts());

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    //'Provider' binds React and Redux.
    //Wrapping main App element in the Provider component with a store attribute
    //makes the Redux store available to all React components.
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app'),
  )
});
