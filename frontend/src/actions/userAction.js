import Axios from "axios";
import {
  User_DETAILS_FAIL,
  User_DETAILS_REQUEST,
  User_DETAILS_SUCCESS,
  User_REGISTER_FAIL,
  User_REGISTER_REQUEST,
  User_REGISTER_SUCCESS,
  User_SIGNIN_FAIL,
  User_SIGNIN_REQUEST,
  User_SIGNIN_SIGNOUT,
  User_SIGNIN_SUCCESS,
  User_UPDATE_PROFILE_FAIL,
  User_UPDATE_PROFILE_REQUEST,
  User_UPDATE_PROFILE_SUCCESS,
} from "../constants/userConstants";

export const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: User_REGISTER_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("/api/users/register", {
      name,
      email,
      password,
    });
    dispatch({ type: User_REGISTER_SUCCESS, payload: data });
    dispatch({ type: User_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: User_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: User_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("/api/users/signin", { email, password });
    dispatch({ type: User_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: User_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signOut = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartItems");
  localStorage.removeItem("ShippingAddress");

  dispatch({ type: User_SIGNIN_SIGNOUT });
};

export const detailsUser = (userId) => async (dispatch, getState) => {
  dispatch({ type: User_DETAILS_REQUEST, payload: userId });
  const {
    userSignIn: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`/api/users/${userId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: User_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: User_DETAILS_FAIL, payload: message });
  }
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
  dispatch({ type: User_UPDATE_PROFILE_REQUEST, payload: user });
  const {
    userSignIn: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/users/profile`, user, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: User_UPDATE_PROFILE_SUCCESS, payload: data });
    dispatch({ type: User_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: User_UPDATE_PROFILE_FAIL, payload: message });
  }
};
