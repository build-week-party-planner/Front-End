import React from 'react';

// Routing
import { BrowserRouter as Router, Route } from 'react-router-dom';

// CSS
import 'semantic-ui-css/semantic.min.css'
import './App.css';

// Components
import Login from './components/Login';
import Events from './components/Events';

function App() {


  return (
    <Router>
      <div className="App">
        <Login />
        <Events />
      </div>
    </Router>
  );
}

export default App;
