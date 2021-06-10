import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

//it store all the product from the backend into the store
export const productListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true }; //loading is set to true because we are waiting for a response after we make a ajax request
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload }; //after getting the response from the ajax request we will set the loading to false and storing the data into the product and changing the state in the store
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload }; //for the errors
    default:
      return state;
  }
};

//we are getting the product according to the id of the product or storing the data into the store
export const productDetailsReducer = (
  state = { loading: true, product: {} },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
