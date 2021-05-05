import axios from 'axios';

const url = '/api/posts';

/***
 * @router  GET: api/posts
 * @desc    Get all posts
 * @access  Private
 * ***/
export const getAllPosts = (source) => {
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
}