import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/auth";

/* View */
const Navbar = () => {
  const dispatch = useDispatch();

  const { isAuthenticated, loading } = useSelector((state) => {
    return state.auth;
  });

  const logoutUser = () => {
    dispatch(logout());
  };

  const authLinks = (
    <ul>
      <li> 
        <Link to="/dashboard">
          <i className="fas fa-user"></i>{" "}
          <span className="hidd-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logoutUser} href="#!">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hidd-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>

      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

export default Navbar;
