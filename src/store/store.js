import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    // Add more reducers if needed
  });
  
  const store = createStore(rootReducer, applyMiddleware(thunk));
  
  export default store;