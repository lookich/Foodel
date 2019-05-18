import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';

//Store creating with the transfer of the reducers and
//the Thunk middleware package for asynchronous API calls,
//and Logger for logging the actions in the Console.
const store = createStore(rootReducer, compose(applyMiddleware (thunk, logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store
