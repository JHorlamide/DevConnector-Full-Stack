import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import DashboardAction from './DashboardAction';
import Experience from './Experience';
import Education from './Education';
import axios from 'axios';
import useStyles from './style';

import { Button } from '@material-ui/core';

/* Materual UI */
import { CircularProgress, Typography } from '@material-ui/core';

const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const {
    profile: { profile, loading },
    auth: { user },
  } = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    dispatch(getCurrentProfile(source));

    return () => {
      source.cancel('Request Cancelled.');
    };

    /*
    To do:
    -Remove dispatch if app not working properly
    eslint-disable-next-line
    */
  }, [dispatch]);

  return loading && profile === null ? (
    <CircularProgress className={classes.alignment} align='center'/>
  ) : (
    <Fragment>
      <Typography variant='h5' align='center' className='larget text-primary'>
        Dashboard
      </Typography>
      <Typography variant='h6' className='lead'>
        <i className='fas fa-user'></i> Welcome {user && user.name}
      </Typography>
      {profile !== null ? (
        <Fragment>
          <DashboardAction />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
          <div className='my-2'>
            <Button
              className={classes.buttonSubmit}
              variant='contained'
              color='secondary'
              size='medium'
              type='submit'
              onClick={() => dispatch(deleteAccount())}
            >
              <i className='fas fa-user-minus'></i>{' '} Delete My Account
            </Button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <Typography>
            You have not yet setup a profile, please add some info
          </Typography>
          <Link to='/create_profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Dashboard;
