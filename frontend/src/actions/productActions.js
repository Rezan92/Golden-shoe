import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAIL,
} from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get('/api/products');

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: 'Something went wrong' });
  }
};

export const getOneProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_REQUEST });

    const { data } = await axios.get(`/api/product/${id}`);

    dispatch({ type: PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    console.log(`error`, error);
    dispatch({
      type: PRODUCT_FAIL,
      payload: error,
    });
  }
};
