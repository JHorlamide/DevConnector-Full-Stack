import setAuthToken from "../utils/setAuthToken";
import { setAlert } from "./alert";
import * as api from "../api/auth";
import {
  REGISTER_SUCCESS,
  REGSTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFIL,
} from "../constant/types";

/* Get Authenticated User */
export const getAuthUser = (source) => {
  return async (dispatch) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const { data } = await api.getAuthUser(source);
      dispatch({
        type: USER_LOADED,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };
};

/* Register User */
export const registerUser = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await api.registerUser(user);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: data,
      });

      /* Get Authenticated User */
      dispatch(getAuthUser());
    } catch (error) {
      const err = error.response.data.msg;

      /* Set Alert  */
      if (err) {
        dispatch(setAlert(err, 3000));
      }

      dispatch({
        type: REGSTER_FAIL,
      });
    }
  };
};

/* Login User */
export const login = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await api.login(user);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });

      /* Get Authenticated User */
      dispatch(getAuthUser());
    } catch (error) {
      const err = error.response.data.msg;

      if (err) {
        dispatch(setAlert(err, 3000));
      }

      dispatch({ type: LOGIN_FAIL });
    }
  };
};

/* Logout  | Clear User Profile */
export const logout = () => {
  return async (dispatch) => {
    dispatch({ type: CLEAR_PROFIL });
    dispatch({
      type: LOGOUT,
    });
  };
};
