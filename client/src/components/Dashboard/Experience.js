import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import useStyles from './style';
import { useDispatch } from 'react-redux';
import { deleteExperience } from '../../actions/profile';

import { Container, Button } from '@material-ui/core';

const Experience = ({ experience }) => {
  const classes = useStyles();
  const dispatch = useDispatch();


  const experiences = experience.map((exp) => {
    return (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td className='hide-sm'>{exp.title}</td>
        <td>
          <Moment format='YYYY/MM/DD'>{exp.from}</Moment> -{' '}
          {exp.to === null ? (
            'Now'
          ) : (
            <Moment format='YYYY/MM/DD'>{exp.to}</Moment>
          )}
        </td>
        <td>
          <Button
            className={classes.buttonSubmit}
            variant='contained'
            color='secondary'
            size='medium'
            type='submit'
            onClick={() => dispatch(deleteExperience(exp._id))}
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <Container>
      <h2 className='my-2'>Experience Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Company</th>
            <th className='hide-sm'>Title</th>
            <th className='hide-sm'>Years</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Container>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default Experience;
