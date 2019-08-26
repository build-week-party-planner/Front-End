import React from 'react';

// Routing
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

// CSS
import 'semantic-ui-css/semantic.min.css'
import './App.css';

// Components
import Login from './components/Login';
import Register from './components/Register'
import Events from './components/Events';

function App() {

  return (
    <Router>
      <div className="App">
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <PrivateRoute path="/dashboard" component={Events}/>
      </div>
    </Router>
  );
}

export default App;
