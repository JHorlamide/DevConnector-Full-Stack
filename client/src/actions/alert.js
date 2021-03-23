import { v1 as uuid } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from '../constant/types';

export const setAlert = (msg, alertType) => {
  return async (dispatch) => {
    const id = uuid()
    console.log(id);
    dispatch({
      type: SET_ALERT,
      payload: { msg, alertType, id },
    });
  };
};
