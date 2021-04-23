import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useStyle from './style';
import { addProfileExperience } from '../../actions/profile';

/* Material UI Component */
import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Checkbox,
} from '@material-ui/core';

const AddExperience = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyle();
  const [toDateDisabled, toggleToDate] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    from: '',
    location: '',
    current: false,
    description: '',
    to: '',
  });

  const { title, company, from, location, description, to, current } = formData;

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

    dispatch(addProfileExperience(formData, history));

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
          Add Profile Experience.
        </Typography>
        <Typography variant='subtitle1' className='lead' align='center'>
          <i className='fas fa-code-branch'></i> Add any developer/programming
          positions that you have had in the past
        </Typography>
        <form
          autoComplete='off'
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handSubmit}
        >
          {/* Title */}
          <TextField
            type='text'
            name='title'
            value={title}
            onChange={(e) => onChange(e)}
            variant='outlined'
            label='Title'
            fullWidth
            required
          />

          {/* Company */}
          <TextField
            type='text'
            name='company'
            value={company}
            onChange={(e) => onChange(e)}
            variant='outlined'
            label='Company'
            fullWidth
            required
          />

          {/* Location */}
          <TextField
            type='text'
            name='location'
            value={location}
            onChange={(e) => onChange(e)}
            variant='outlined'
            label='Location'
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
            onChange={(e) => handleCurrent(e)}
            color='primary'
            inputProps={{ 'aria-label': 'primary checkbox' }}
            label='Current'
            defaultValue={current}
          />
          <h5 className='form-text'>Do you currently work here?</h5>

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

export default AddExperience;
