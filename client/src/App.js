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
import Profiles from './components/Profiles/Profiles';
import Profile from './components/Profile/Profile';

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

    /*
    To do:
    -Remove dispatch if app not working properly
    eslint-disable-next-line
    */
  }, [dispatch]);

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
            <Route exact path='/profiles' component={Profiles} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute
              exact
              path={`/profile/:id`}
              component={Profile}
            />
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
