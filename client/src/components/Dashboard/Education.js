import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import useStyles from './style';
import { useDispatch } from 'react-redux';
import { deleteEducation } from '../../actions/profile';

import { Container, Button } from '@material-ui/core';

const Education = ({ education }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteEducation(id));
    window.scrollTo({
      top: '100px',
      behavior: 'smooth',
    });
  };

  const educations = education.map((edu) => {
    return (
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td className='hide-sm'>{edu.degree}</td>
        <td className='hide-sm'>{edu.fieldofstudy}</td>
        <td>
          <Moment format='YYYY/MM/DD'>{edu.from}</Moment> -{' '}
          {edu.to === null ? (
            'Now'
          ) : (
            <Moment format='YYYY/MM/DD'>{edu.to}</Moment>
          )}
        </td>
        <td>
          <Button
            className={classes.buttonSubmit}
            variant='contained'
            color='secondary'
            size='medium'
            type='submit'
            onClick={() => handleDelete(edu._id)}
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <Container>
      <h2 className='my-2'>Education Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>School</th>
            <th className='hide-sm'>Degree</th>
            <th className='hide-sm'>Field Of Study</th>
            <th className='hide-sm'>Years</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Container>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
};

export default Education;
