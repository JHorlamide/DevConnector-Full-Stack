import * as api from "../api/profile";
import { setAlert } from "../actions/alert";
import { GET_PROFILE, PROFILE_ERROR } from "../constant/types";

/* Get Current Authenticated User Profile */
export const getCurrentProfile = (source) => {
  return async (dispatch) => {
    try {
      const { data } = await api.getCurrentProfile(source);
      dispatch({
        type: GET_PROFILE,
        payload: data,
      });
    } catch (error) {
      const err = error.response.data.msg;
      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: err,
          status: error.response.status,
        },
      });
    }
  };
};

/* Crate or Update Profile */
export const createProfile = (profile, history, edit = false) => {
  return async (dispatch) => {
    try {
      const { data } = await api.createProfile(profile);
      dispatch({
        type: GET_PROFILE,
        payload: data,
      });

      dispatch(
        setAlert(edit ? "Profile Updated" : "Profile Created", "success")
      );

      if (!edit) {
        return history.push("/dashboard");
      }
    } catch (error) {
      const errMessage = error.response.data.msg;

      if (errMessage) {
        return dispatch(setAlert(errMessage, "error"));
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: errMessage,
          status: error.response.status,
        },
      });
    }
  };
};
