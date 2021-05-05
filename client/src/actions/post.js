import * as api from '../api/post';
import { setAlert } from './alert';
import { GET_POSTS, POST_ERROR } from '../constant/types';

/* Get all post */
export const getAllPosts = (source) => {
  return async (dispatch) => {
    try {
      const { data } = await api.getAllPosts(source);
      dispatch({
        type: GET_POSTS,
        payload: data,
      });
    } catch (error) {
      const err = error.response.data.message;

      dispatch({
        type: POST_ERROR,
        payload: { msg: err, status: error.response.status },
      });
    }
  };
};
