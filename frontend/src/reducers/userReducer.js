import {
  User_REGISTER_FAIL,
  User_REGISTER_REQUEST,
  User_REGISTER_SUCCESS,
  User_SIGNIN_FAIL,
  User_SIGNIN_REQUEST,
  User_SIGNIN_SIGNOUT,
  User_SIGNIN_SUCCESS,
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
