import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFIL,
  ADD_PROFILE_EXPERIENCE,
  ADD_PROFILE_EDUCATION,
  GET_PROFILES,
  GET_GITHUB_REPOS,
} from '../constant/types';

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case ADD_PROFILE_EDUCATION:
    case ADD_PROFILE_EXPERIENCE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };

    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };

    case PROFILE_ERROR:
      return {
        ...state,
        profile: null,
        error: payload,
        loading: false,
      };
    case CLEAR_PROFIL:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false,
      };
    case GET_GITHUB_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default profileReducer;
