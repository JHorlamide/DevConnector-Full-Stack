import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const ProfileExperience = ({
  experience: { company, title, from, current, to, description },
}) => {
  return (
    <div>
      <div>
        {company && <h3 className='text-dark'>{company}</h3>}

        <p>
          <Moment format='YYYY/MM/DD'>{from}</Moment>
          <span> - </span>
          {current ? 'Current' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
        </p>

        <p>
          <strong>Position: </strong>
          {title}
        </p>
        <p>
          <strong>Description: </strong>
          {description}
        </p>
      </div>
    </div>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
