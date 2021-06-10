import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";
import Axios from "axios";

//it return another async function that accept dispatch as a parameter
export const listProducts = () => async (dispatch) => {
  //dispatch accept a object and has a type or we can say dispatching the action
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });

  try {
    //fetching the data from the backend
    const { data } = await Axios.get("/api/products");

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data, //it is the data from the backend and sending the data to the reducer and storing in the store
    });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message }); //for some error from the ajax request
  }
};

//this action is for getting the particular product using their id and also storing into the store
//this function takes productId and get that product data from the backend
export const detailsProduct = (productId) => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });

  try {
    const { data } = await Axios.get(`/api/products/${productId}`);

    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

/*we fetched the data from the backend and stored into the store, 
so that we will be easily able to use that data*/
