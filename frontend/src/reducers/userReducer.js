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
  User_UPDATE_PROFILE_RESET,
  User_UPDATE_PROFILE_SUCCESS,
} from "../constants/userConstants";

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case User_REGISTER_REQUEST:
      return { loading: true };
    case User_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case User_REGISTER_FAIL:
      return { loading: false, err: action.payload };
    default:
      return state;
  }
};

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case User_SIGNIN_REQUEST:
      return { loading: true };
    case User_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case User_SIGNIN_FAIL:
      return { loading: false, err: action.payload };
    case User_SIGNIN_SIGNOUT:
      return {};
    default:
      return state;
  }
};

export const userDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case User_DETAILS_REQUEST:
      return { loading: true };
    case User_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case User_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case User_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case User_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true };
    case User_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    case User_UPDATE_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};
