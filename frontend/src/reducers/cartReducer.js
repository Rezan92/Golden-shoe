import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SHOW,
  CART_HIDE,
  LOGIN_SHOW,
  LOGIN_HIDE,
} from '../constants/cartConstents.js';
export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.id === item.id);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === existItem.id ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload),
      };
    default:
      return state;
  }
};

export const cartToggleReducer = (state = { cartToggle: false }, action) => {
  switch (action.type) {
    case CART_SHOW:
      return { ...state, cartToggle: action.payload };
    case CART_HIDE:
      return { ...state, cartToggle: action.payload };
    default:
      return state;
  }
};

export const loginToggleReducer = (state = { loginToggle: false }, action) => {
  switch (action.type) {
    case LOGIN_SHOW:
      return { ...state, loginToggle: action.payload };
    case LOGIN_HIDE:
      return { ...state, loginToggle: action.payload };
    default:
      return state;
  }
};
