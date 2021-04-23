import * as api from '../api/profile';
import { setAlert } from '../actions/alert';
import {
  GET_PROFILE,
  CLEAR_PROFIL,
  PROFILE_ERROR,
  ADD_PROFILE_EXPERIENCE,
  ADD_PROFILE_EDUCATION,
  ACCOUNT_DELETED,
} from '../constant/types';

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

/* Create or Update Profile */
export const createProfile = (profile, history, edit = false) => {
  return async (dispatch) => {
    try {
      const { data } = await api.createProfile(profile);
      dispatch({
        type: GET_PROFILE,
        payload: data,
      });

      dispatch(
        setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success')
      );

      if (!edit) {
        return history.push('/dashboard');
      }
    } catch (error) {
      const errMessage = error.response.data.msg;

      if (errMessage) {
        return dispatch(setAlert(errMessage, 'error'));
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

/* Add Profile Experience */
export const addProfileExperience = (experience, history) => {
  return async (dispatch) => {
    try {
      const { data } = await api.addProfileExperience(experience);
      dispatch({
        type: ADD_PROFILE_EXPERIENCE,
        payload: data,
      });

      dispatch(setAlert('Experience Added', 'success'));

      history.push('/dashboard');
    } catch (error) {
      const errMessage = error.response.data.msg;

      if (errMessage) {
        dispatch(setAlert(errMessage, 'error', 3000));
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: errMessage, status: error.response.status },
      });
    }
  };
};

/* Add Profile Education */
export const addProfileEducation = (education, history) => {
  return async (dispatch) => {
    try {
      const { data } = await api.addProfileEducation(education);
      dispatch({
        type: ADD_PROFILE_EDUCATION,
        payload: data,
      });

      dispatch(setAlert('Education Added', 'success'));

      history.push('/dashboard');
    } catch (error) {
      const errMessage = error.response.data.msg;

      if (errMessage) {
        dispatch(setAlert(errMessage, 'error'));
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: errMessage, status: error.response.status },
      });
    }
  };
};

/* Delete Profile Experience */
export const deleteExperience = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await api.deleteExperience(id);

      dispatch({
        type: GET_PROFILE,
        payload: data,
      });

      dispatch(setAlert('Experience Removed.', 'success'));
    } catch (error) {
      const errMessage = error.response.data.msg;

      if (errMessage) {
        dispatch(setAlert(errMessage, 'error'));
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: errMessage, status: error.response.status },
      });
    }
  };
};

/* Delete Profile Education */
export const deleteEducation = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await api.deleteEducation(id);

      dispatch({
        type: GET_PROFILE,
        payload: data,
      });

      dispatch(setAlert('Education Removed', 'success'));
    } catch (error) {
      const errMessage = error.response.data.msg;

      if (errMessage) {
        dispatch(setAlert(errMessage, 'error'));
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: errMessage, status: error.response.status },
      });
    }
  };
};

/* Delete Profile And User */
export const deleteAccount = () => {
  return async (dispatch) => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
      try {
        const { data } = await api.deleteAccount();
        dispatch({ type: CLEAR_PROFIL });
        dispatch({ type: ACCOUNT_DELETED });
        dispatch(setAlert(data.msg, 'success'));
      } catch (error) {
        const errMessage = error.response.data.msg;

        if (errMessage) {
          dispatch(setAlert(errMessage, 'error'));
        }

        dispatch({
          type: PROFILE_ERROR,
          payload: { msg: errMessage, status: error.response.status },
        });
      }
    }
  };
};
