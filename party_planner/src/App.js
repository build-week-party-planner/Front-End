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
import Register from './components/Register'
import Events from './components/Events';
import Event from './components/Event'
import Footer from './components/Footer'

function App() {


  
  return (

    <Router>
      <div className="App">
        <NavBar/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <PrivateRoute path="/dashboard" component={Events}/>
        <Route path="/events/:id" component={Event} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
