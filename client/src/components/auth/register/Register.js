import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

/* Material UI Component */
import {
  Button,
  Paper,
  TextField,
  Typography,
  Container,
} from '@material-ui/core';
import useStyles from './style';
import { setAlert } from '../../../actions/alert';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      dispatch(setAlert('Password do not match', 'danger'));
    } else {
      const newUser = {
        name,
        email,
        password,
      };

      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const body = JSON.stringify(newUser);

        const res = await axios.post('/api/users', body, config);
        console.log(res.data);
      } catch (error) {
        console.error(error.response.data);
      }
    }
  };

  const classes = useStyles();
  return (
    <Container maxWidth='sm'>
      <Paper className={classes.paper}>
        <Typography variant='h6' className='large text-primary' align='center'>
          Sign Up
        </Typography>
        <Typography variant='subtitle1' className='lead' align='center'>
          <i className='fas fa-user'></i> Create Your Account
        </Typography>
        <form
          autoComplete='off'
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={(e) => handleSubmit(e)}
        >
          {/* Name */}
          <TextField
            type='text'
            name='name'
            value={name}
            variant='outlined'
            label='Name'
            fullWidth
            onChange={(e) => onChange(e)}
            required
          />

          {/* Email */}
          <TextField
            type='email'
            name='email'
            value={email}
            label='Email'
            variant='outlined'
            fullWidth
            onChange={(e) => onChange(e)}
            required
          />
          <small>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>

          {/* Password */}
          <TextField
            type='password'
            name='password'
            value={password}
            label='Password'
            variant='outlined'
            fullWidth
            minLength='6'
            onChange={(e) => onChange(e)}
            required
          />
          {/* Confirm Password */}
          <TextField
            type='password'
            name='password2'
            value={password2}
            label='Confirm Password'
            variant='outlined'
            fullWidth
            minLength='6'
            onChange={(e) => onChange(e)}
            required
          />
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
        <Typography className='my-1'>
          Already have an account? <Link to='/login'>Sign In</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Register;
