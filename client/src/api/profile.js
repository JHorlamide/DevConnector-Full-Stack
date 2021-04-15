import axios from "axios";

const url = "/api/profile";

/***
 * @router  GET: api/profile/me
 * @desc    Get current user profile
 * @access  Private
 * ***/
export const getCurrentProfile = (source) => {
  try {
    return axios.get(`${url}/me`, {
      cancelToken: source.token,
    });
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log(`Error: ${error.message}`);
    }
    return error;
  }
};

/***
 * @router  POST: api/profile
 * @desc    Create or Update user profile
 * @access  Private
 * ***/
export const createProfile = (profile) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return axios.post(url, profile, config);
};

/***
 * @router  GET: api/profile
 * @desc    Get all profiles
 * @access  Public
 * ***/
export const getProfiles = () => {};
