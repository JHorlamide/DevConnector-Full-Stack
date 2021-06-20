import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProfileById } from '../../actions/profile';
import axios from 'axios';
import { Link } from 'react-router-dom';

/* Custom Component */
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithubRepos from './ProfileGithubRepos';

/* Material UI */
import { CircularProgress, Container } from '@material-ui/core';

const Profile = ({ match }) => {
  const dispatch = useDispatch();

  const {
    profile: { profile, loading },
    auth,
  } = useSelector((state) => state);

  useEffect(() => {
    const source = axios.CancelToken.source();

    dispatch(getProfileById(match.params.id, source));
    return () => {
      return source.cancel('Request canceled.');
    };
  }, [dispatch, match.params.id]);

  return (
    <div>
      {profile === null || loading ? (
        <CircularProgress justify='center' />
      ) : (
        <Container>
          <Link to='/profiles' className='btn btn-light'>
            Back To Profiles
          </Link>

          {auth.isAuthenticated &&
            auth.user._id === profile.user._id &&
            auth.loading === false && (
              <Link to='/edit-profile' className='btn btn-primary'>
                Edit Profile
              </Link>
            )}

          <div className='profile-grid my-1'>
            {/* Profile Avatart with Details */}
            <ProfileTop profile={profile} />

            {/* About */}
            <ProfileAbout profile={profile} />

            {/* Experience */}
            <div className='profile-exp bg-white p-2'>
              <h2 className='text-primary'>Experience</h2>
              {profile.experience.length > 0 ? (
                <Fragment>
                  {profile.experience.map((experience) => {
                    return (
                      <ProfileExperience
                        key={experience._id}
                        experience={experience}
                      />
                    );
                  })}
                </Fragment>
              ) : (
                <h4>No Experience Credentials</h4>
              )}
            </div>

            {/* Education */}
            <div className='profile-edu bg-white p-2'>
              <h2 className='text-primary'>Education</h2>
              {profile.education.length > 0 ? (
                <Fragment>
                  {profile.education.map((education) => {
                    return (
                      <ProfileEducation
                        key={education._id}
                        education={education}
                      />
                    );
                  })}
                </Fragment>
              ) : (
                <h4>No Education Credentials</h4>
              )}
            </div>
          </div>

          {/* Github Repos */}
          {profile.githubusername && (
            <ProfileGithubRepos username={profile.githubusername} />
          )}
        </Container>
      )}
    </div>
  );
};

export default Profile;
