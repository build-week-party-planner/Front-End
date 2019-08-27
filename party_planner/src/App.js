import React, { useState } from 'react';

// Routing
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

// CSS
import 'semantic-ui-css/semantic.min.css'
import './styles/App.scss';

// Components
import NavBar from './components/NavBar'
import Login from './components/Login';
import { FormikRegister } from './components/Register'
import Events from './components/Events';

import SingleEvent from './components/Event'
import FormikUpdateEvents from './components/UpdateEventForm'


import Footer from './components/Footer'


function App() {


  
  return (

    <Router>
      <div className="App">
        <NavBar/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={FormikRegister}/>
        <PrivateRoute path="/dashboard" component={Events}/>
        <PrivateRoute path="/events/:id" component={SingleEvent} />
        <PrivateRoute exact path="/events/:id/edit" component={FormikUpdateEvents} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
