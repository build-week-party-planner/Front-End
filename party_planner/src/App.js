import React from 'react';

import 'semantic-ui-css/semantic.min.css'
import './App.css';

import Login from './components/Login';
import Events from './components/Events';

function App() {


  return (
    <div className="App">
      {/* <Login /> */}
      <Events />
    </div>
  );
}

export default App;
