import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../actions/auth";
import { setAlert } from "../../../actions/alert";
import { Link, useHistory } from "react-router-dom";

/* Custom Component */
import useStyles from "./style";

/* Material UI Component */
import {
  Button,
  Paper,
  TextField,
  Typography,
  Container,
} from "@material-ui/core";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const { email, password } = formData;

  const isAuthenticated = useSelector((state) => {
    return state.auth.isAuthenticated;
  });

  if (isAuthenticated) {
    history.push("/dashboard");
  }

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!(email && password)) {
      return dispatch(
        setAlert("Please enter your email and password", "error")
      );
    }

    dispatch(login({ email, password }));

    clearButtonHandler();
  };

  const clearButtonHandler = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  /* View */
  return (
    <Container maxWidth="sm">
      <Paper className={classes.paper}>
        <Typography variant="h6" className="large text-primary" align="center">
          Sign In
        </Typography>
        <Typography variant="subtitle1" className="lead" align="center">
          <i className="fas fa-user"></i> Sign into Your Account
        </Typography>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          {/* Email */}
          <TextField
            type="text"
            name="email"
            value={email}
            label="Email"
            variant="outlined"
            fullWidth
            onChange={(e) => onChange(e)}
            required
          />

          {/* Password */}
          <TextField
            type="password"
            name="password"
            value={password}
            label="Password"
            variant="outlined"
            fullWidth
            onChange={(e) => onChange(e)}
            minLength="6"
            required
          />

          {/* Button */}
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
        </form>
        <Typography className="my-1">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Login;
