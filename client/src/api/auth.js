import axios from 'axios';

const url = '/api/users';
const authURI = '/api/auth';


/* Get current logged in user */
export const getAuthUser = (source) => {
  try {
    return axios.get(authURI, {
      cancelToken: source.token,
    });
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log(`Error ${error.message}`);
    }
    return error;
  }
};

/* Register User */
export const registerUser = (user) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify(user);
  return axios.post(url, body, config);
};

/* Login User */
export const login = (user) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify(user);
  return axios.post(authURI, body, config);
};
