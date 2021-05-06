import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getProfiles } from '../../actions/profile';
import ProfileItem from './ProfileItem';

import {
  CircularProgress,
  Container,
  Typography,
  Box,
} from '@material-ui/core';

const Profiles = () => {
  const dispatch = useDispatch();

  const {
    profile: { profiles, loading },
  } = useSelector((state) => state);

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    dispatch(getProfiles(source));
    return () => {
      return source.cancel('Request canceled');
    };

    /*
    To do:
    -Remove dispatch if app not working properly
    -Apply: (eslint-disable-next-line) to avoid useEffect warning.
    */
  }, [dispatch]);

  return profiles === null && loading ? (
    <CircularProgress
      justify='center'
    />
  ) : (
    <Container>
      <Box
        variant='h5'
        align='center'
        className='larget text-primary'
        fontWeight='fontWeightBold'
        fontSize={35}
      >
        Developers
      </Box>
      <Typography variant='h5' align='center' className='larget text-primary'>
        <i className='fab fa-connectdevelop'></i> Browse and connect with
        developers
      </Typography>
      <div className='profiles'>
        {profiles.length > 0 ? (
          profiles.map((profile) => {
            return <ProfileItem key={profile._id} profile={profile} />;
          })
        ) : (
          <CircularProgress
            justify='center'
          />
          // <h4>No profiles found...</h4>
        )}
      </div>
    </Container>
  );
};

export default Profiles;
