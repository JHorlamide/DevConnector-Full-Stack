import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import axios from "axios";
import { CircularProgress, Typography } from "@material-ui/core";
import useStyles from "./style";

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
      source.cancel("Request Cancelled.");
    };
    // eslint-disable-next-line
  }, []);

  return loading && profile === null ? (
    <CircularProgress className={classes.alignment} />
  ) : (
    <Fragment>
      <Typography variant="h5" align="center" className="larget text-primary">
        Dashboard
      </Typography>
      <Typography variant="h6" className="lead">
        <i className="fas fa-user"></i> Welcome {user && user.name}
      </Typography>
      {profile !== null ? (
        <Fragment>Has</Fragment>
      ) : (
        <Fragment>
          <Typography>
            You have not yet setup a profile, please add some info
          </Typography>
          <Link to="/create_profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Dashboard;
