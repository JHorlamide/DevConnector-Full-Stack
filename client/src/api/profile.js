import axios from 'axios';

const url = '/api/profile';

/***
 * @router  GET: api/profile
 * @desc    Get all profiles
 * @access  Public
 * ***/
export const getProfiles = (source) => {
  try {
    return axios.get(url, {
      cancelToken: source.token,
    });
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log(`Error ${error.message}`);
    }
    return error;
  }
};


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
 * @router  GET: api/profile/user/user_id
 * @desc    Get profile by Id.
 * @access  Private
 * ***/
export const getProfileById = (userId, source) => {
  try {
    return axios.get(`${url}/user/${userId}`, {
      cancelToken: source.token,
    });
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log(`Error ${error.message}`);
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
      'Content-Type': 'application/json',
    },
  };

  return axios.post(url, profile, config);
};


/***
 * @router  PUT: api/profile/experience
 * @desc    Put user profile experience
 * @access  Private
 * ***/
export const addProfileExperience = (experience) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return axios.put(`${url}/experience`, experience, config);
};


/***
 * @router  PUT: api/profile/education/
 * @desc    Add education to profile
 * @access  Private
 * ***/
export const addProfileEducation = (education) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return axios.put(`${url}/education`, education, config);
};


/***
 * @router  DELETE: api/profile/experience/:exp_id
 * @desc    Delete exeperience from profile
 * @access  Private
 * ***/
export const deleteExperience = (id) => {
  return axios.delete(`${url}/experience/${id}`);
};


/***
 * @router  DELETE: api/profile/education/:edu_id
 * @desc    Delete education profile
 * @access  Private
 * ***/
export const deleteEducation = (id) => {
  return axios.delete(`${url}/education/${id}`);
};


/***
 * @router  DELETE: api/profile/
 * @desc    Delete profile, user, and post
 * @access  Private
 * ***/
export const deleteAccount = () => {
  return axios.delete(url);
};


/***
 * @router  DELETE: api/profile/github/:username
 * @desc    Get user repos from Github
 * @access  Public
 * ***/
export const getGithubRepos = (githubUsername, source) => {
  try {
    return axios.get(`${url}/github/${githubUsername}`, {
      cancelToken: source.token,
    });
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log(`Error ${error.message}`);
    }
    return error;
  }
};
