import axios from 'axios';
import { CART_ADD_ITEM, CART_SHOW, CART_HIDE } from '../constants/cartConstents';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/product/${id}`);
  dispatch({ type: CART_ADD_ITEM, payload: { ...data, qty } });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const toggleCart = (bool) => (dispatch) => {
  if (bool) {
    dispatch({ type: CART_SHOW, payload: bool });
  } else {
    dispatch({ type: CART_HIDE, payload: bool });
  }
};