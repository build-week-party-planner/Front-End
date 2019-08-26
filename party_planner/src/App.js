<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';
import logo from './logo.svg';
>>>>>>> 221c04f6b95262d0441490dff02f1aeff5978bfe
import './App.css';
import Login from './components/Login';

import Facebook from './components/SocialLogin/FacebookAuth'

function App() {

  const [ loggedIn, setLoggedIn ] = useState(false)



  return (
    <div className="App">
<<<<<<< HEAD
      <Login />
=======
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Facebook loggedIn = {loggedIn}/>
>>>>>>> 221c04f6b95262d0441490dff02f1aeff5978bfe
    </div>
  );
}

export default App;
