import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

/* Custom Component */
import Navbar from './components/Layouts/Navbar';
import Landing from './components/Layouts/Landing';
import Register from './components/auth/register/Register';
import Login from './components/auth/login/Login';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
};

export default App;
