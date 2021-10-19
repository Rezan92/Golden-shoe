import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productsReducer } from './reducers/productReducers';

const reducer = combineReducers({
  products: productsReducer,
});
const initialState = {};
const middlerware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlerware))
);

export default store;
