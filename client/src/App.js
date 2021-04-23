import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';

/* Custom Component */
import Navbar from './components/Layouts/Navbar';
import Landing from './components/Layouts/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import CreatProfile from './components/Profile_Form/CreateProfile';
import PrivateRoute from './components/Routing/PrivateRoute';
import EditProfile from './components/Profile_Form/EditProfile';
import AddExperience from './components/Profile_Form/AddExperience';
import AddEducation from './components/Profile_Form/AddEducation';

import Alert from './components/Layouts/Alert';
import Register from './components/auth/register/Register';
import Login from './components/auth/login/Login';
import setAuthToken from './utils/setAuthToken';
import { getAuthUser } from './actions/auth';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    dispatch(getAuthUser(source));

    return () => {
      source.cancel('Request Cancelled.');
    };

    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Alert />
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute
              exact
              path='/create_profile'
              component={CreatProfile}
            />
            <PrivateRoute exact path='/edit-profile' component={EditProfile} />
            <PrivateRoute
              exact
              path='/add-experience'
              component={AddExperience}
            />
            <PrivateRoute
              exact
              path='/add-education'
              component={AddEducation}
            />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
};

export default App;
