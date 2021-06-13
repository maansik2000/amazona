import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducer";
import {
  userDetailsReducer,
  userRegisterReducer,
  userSigninReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducer";
import {
  productDetailsReducer,
  productListReducer,
} from "./reducers/productReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderMineListReducer,
  orderPayReducer,
} from "./reducers/orderReducer";

//for store we need two things (initial state and reducer) this is the initial state
const initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingAddress: localStorage.getItem("ShippingAddress")
      ? JSON.parse(localStorage.getItem("ShippingAddress"))
      : {},
    paymentMethod: "PayPal",
  },
  userSignIn: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};

/*all the reducer in the global store, reducer accept two thing ,initial state and action
inside that it returns new state, combineReducer is used to send all the reducer to the store*/
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignIn: userSigninReducer,
  userRegister: userRegisterReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderMineList: orderMineListReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
});

/*add redux to the chrome developer tool, */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//this line create our store in redux,it takes two parameters initial state and reducers
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(
    applyMiddleware(thunk)
  ) /*redux thunk make it possible to make ajax request in our redux action*/
);

export default store;
