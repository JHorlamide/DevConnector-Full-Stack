import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useStyle from './style';
import { addProfileEducation } from '../../actions/profile';

/* Material UI Component */
import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Checkbox,
} from '@material-ui/core';

const AddEducation = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyle();
  const [toDateDisabled, toggleToDate] = useState(false);

  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    description: '',
    current: false,
    from: '',
    to: '',
  });

  const {
    school,
    degree,
    fieldofstudy,
    description,
    current,
    from,
    to,
  } = formData;

  const handleCurrent = (e) => {
    e.preventDefault();

    toggleToDate(!toDateDisabled);

    return setFormData({
      ...formData,
      current: !current,
    });
  };

  /* Handle input Field */
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* Submit Form */
  const handSubmit = (e) => {
    e.preventDefault();

    dispatch(addProfileEducation(formData, history));

    window.scrollTo({
      top: '100px',
      behavior: 'smooth',
    });

    clearButtonHandler();
  };

  const clearButtonHandler = () => {
    return setFormData({
      title: '',
      company: '',
      from: '',
      location: '',
      current: '',
      description: '',
      to: '',
    });
  };

  return (
    <Container maxWidth='sm'>
      <Paper className={classes.paper}>
        <Typography variant='h4' className='large text-primary' align='center'>
          Add Profile Education.
        </Typography>
        <Typography variant='subtitle1' className='lead' align='center'>
          <i className='fas fa-graduation-cap'></i> Add any school, bootcamp,
          etc that you have attended
        </Typography>
        <form
          autoComplete='on'
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handSubmit}
        >
          {/* School */}
          <TextField
            type='text'
            name='school'
            value={school}
            onChange={(e) => onChange(e)}
            variant='outlined'
            label='School'
            fullWidth
            required
          />

          {/* Degree */}
          <TextField
            type='text'
            name='degree'
            value={degree}
            onChange={(e) => onChange(e)}
            variant='outlined'
            label='Degree'
            fullWidth
            required
          />

          {/* Field Of Study */}
          <TextField
            type='text'
            name='fieldofstudy'
            value={fieldofstudy}
            onChange={(e) => onChange(e)}
            variant='outlined'
            label='Field Of Study'
            fullWidth
            required
          />

          <h5 className='form-text'>From Date</h5>
          {/* From */}
          <TextField
            type='date'
            name='from'
            value={from}
            onChange={(e) => onChange(e)}
            variant='outlined'
            fullWidth
            required
          />

          {/* Current */}
          <Checkbox
            className={classes.checkbox}
            value={current}
            onChange={(e) => {
              handleCurrent(e);
              onChange(e);
            }}
            color='primary'
            inputProps={{ 'aria-label': 'primary checkbox' }}
            label='Current'
            defaultValue={current}
          />
          <h5 className='form-text'>Current school or Bootcamp</h5>

          {/* To */}
          <TextField
            type='date'
            name='to'
            value={to}
            onChange={(e) => onChange(e)}
            variant='outlined'
            fullWidth
            required
            disabled={toDateDisabled ? true : false}
          />
          <h5 className='form-text'>To Date </h5>

          {/* Description */}
          <div className='form-group form'>
            <textarea
              placeholder='A short bio of yourself'
              name='description'
              value={description}
              onChange={(e) => onChange(e)}
              style={{ width: '500px', height: '200px', marginBottom: '20px' }}
            ></textarea>
          </div>

          {/* Button */}
          <Button
            className={classes.buttonSubmit}
            variant='contained'
            color='primary'
            size='large'
            type='submit'
            fullWidth
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default AddEducation;
