import { v1 as uuid } from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "../constant/types";

export const setAlert = (msg, type = 'error', timeout = 3000) => {
  return async (dispatch) => {
    const id = uuid();
    dispatch({
      type: SET_ALERT,
      payload: { msg, id, type },
    });

    setTimeout(() => {
      return dispatch({
        type: REMOVE_ALERT,
        payload: id,
      });
    }, timeout);
  };
};
