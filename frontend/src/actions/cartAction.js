import axios from 'axios';
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SHOW,
  CART_HIDE,
  LOGIN_SHOW,
  LOGIN_HIDE,
} from '../constants/cartConstents';

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

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: id });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const toggleLogin = (bool) => (dispatch) => {
  if (bool) {
    dispatch({ type: LOGIN_SHOW, payload: bool });
  } else {
    dispatch({ type: LOGIN_HIDE, payload: bool });
  }
};
