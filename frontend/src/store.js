import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productsReducer, oneProductReducer } from './reducers/productReducers';
import {
  cartReducer,
  cartToggleReducer,
  loginToggleReducer,
} from './reducers/cartReducer';

const reducer = combineReducers({
  products: productsReducer,
  product: oneProductReducer,
  cart: cartReducer,
  cartToggle: cartToggleReducer,
  loginToggle: loginToggleReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
};
const middlerware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlerware))
);

export default store;
