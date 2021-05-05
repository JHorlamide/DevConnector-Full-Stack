import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../actions/post';
import axios from 'axios';

/* Material UI */
import { CircularProgress } from '@material-ui/core';

const Posts = () => {
  const dispatch = useDispatch();

  const post = useSelector((state) => state.post);
  const {posts, loading} = post;

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    dispatch(getAllPosts(source));

    return () => {
      source.cancel('Request Cancelled.');
    };
    
  }, [dispatch]);

  return <div></div>;
};

export default Posts;
