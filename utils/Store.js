import Cookies from 'js-cookie';
import { createContext, useReducer } from 'react';

export const Store = createContext();
const initialState = {
  darkMode: Cookies.get('darkMode') === 'ON' ? true : false,
  cart: {
    cartItems: Cookies.get('cartItems')
      ? JSON.parse(Cookies.get('cartItems'))
      : [],
<<<<<<< HEAD
    shippingAddress: Cookies.get('shippingAddress')
      ? JSON.parse(Cookies.get('shippingAddress'))
=======
    billingAddress: Cookies.get('billingAddress') //shippingAddress //shippingAddress
      ? JSON.parse(Cookies.get('billingAddress')) //shippingAddress
>>>>>>> 36029ec239f0d07774168744a2ba29bf542ae748
      : { location: {} },
    paymentMethod: Cookies.get('paymentMethod')
      ? Cookies.get('paymentMethod')
      : '',
<<<<<<< HEAD
=======
    aboModell: Cookies.get('aboModell')
      ? Cookies.get('aboModell')
      : '',
>>>>>>> 36029ec239f0d07774168744a2ba29bf542ae748
  },
  userInfo: Cookies.get('userInfo')
    ? JSON.parse(Cookies.get('userInfo'))
    : null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'DARK_MODE_ON':
      return { ...state, darkMode: true };
    case 'DARK_MODE_OFF':
      return { ...state, darkMode: false };
    case 'CART_ADD_ITEM': {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      Cookies.set('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
<<<<<<< HEAD
    case 'SAVE_SHIPPING_ADDRESS':
=======
    case 'SAVE_BILLING_ADDRESS': //SAVE_SHIPPING_ADDRESS
>>>>>>> 36029ec239f0d07774168744a2ba29bf542ae748
      return {
        ...state,
        cart: {
          ...state.cart,
<<<<<<< HEAD
          shippingAddress: {
            ...state.cart.shippingAddress,
=======
          billingAddress: { //shippingAddress
            ...state.cart.billingAddress, //shippingAddress
>>>>>>> 36029ec239f0d07774168744a2ba29bf542ae748
            ...action.payload,
          },
        },
      };
<<<<<<< HEAD
    case 'SAVE_SHIPPING_ADDRESS_MAP_LOCATION':
=======
    case 'SAVE_BILLING_ADDRESS_MAP_LOCATION': //SAVE_SHIPPING_ADDRESS_MAP_LOCATION
>>>>>>> 36029ec239f0d07774168744a2ba29bf542ae748
      return {
        ...state,
        cart: {
          ...state.cart,
<<<<<<< HEAD
          shippingAddress: {
            ...state.cart.shippingAddress,
=======
          billingAddress: {    //shippingAddress
            ...state.cart.billingAddress,  //shippingAddress
>>>>>>> 36029ec239f0d07774168744a2ba29bf542ae748
            location: action.payload,
          },
        },
      };
    case 'SAVE_PAYMENT_METHOD':
      return {
        ...state,
        cart: { ...state.cart, paymentMethod: action.payload },
      };
<<<<<<< HEAD
=======

      //neu
      case 'SAVE_ABO_MODELL':
        return {
          ...state,
          cart: { ...state.cart, aboModell: action.payload },
        };

    //neu
>>>>>>> 36029ec239f0d07774168744a2ba29bf542ae748
    case 'CART_CLEAR':
      return { ...state, cart: { ...state.cart, cartItems: [] } };
    case 'USER_LOGIN':
      return { ...state, userInfo: action.payload };
    case 'USER_LOGOUT':
      return {
        ...state,
        userInfo: null,
        cart: {
          cartItems: [],
<<<<<<< HEAD
          shippingAddress: { location: {} },
=======
          billingAddress: { location: {} }, //shippingAddress
>>>>>>> 36029ec239f0d07774168744a2ba29bf542ae748
          paymentMethod: '',
        },
      };

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
