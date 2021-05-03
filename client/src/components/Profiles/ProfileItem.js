import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* Material UI */
import { Paper, Container } from '@material-ui/core';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    company,
    status,
    skills,
    location,
  },
}) => {
  return (
    <Container className='profiles'>
      <Paper className='profile bg-light'>
        {/* Avatar */}
        {avatar ? (
          <img src={avatar} alt='profile_image' className='round-img' />
        ) : (
          <h4>No Profile Image</h4>
        )}

        {/* Profile Details */}
        <div className=''>
          <h2>{name}</h2>
          <p>
            {status}{' '}
            {company && (
              <span>
                {' '}
                at: <br /> {company}
              </span>
            )}
          </p>
          <p className='my-1'>{location && <span>{location}</span>}</p>
          <Link to={`/profile/${_id}`} className='btn btn-primary'>
            View Profile
          </Link>
        </div>

        <ul>
          {skills.slice(0, 4).map((skill, idx) => {
            return (
              <li key={idx} className='text-primary'>
                <i className='fas fa-check'></i>
                {skill}
              </li>
            );
          })}
        </ul>
      </Paper>
    </Container>
  );
};

ProfileItem.prototypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
