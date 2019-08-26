<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';
import logo from './logo.svg';
>>>>>>> 221c04f6b95262d0441490dff02f1aeff5978bfe
=======
import React, { useState } from 'react';
import logo from './logo.svg';
>>>>>>> f58f4f968da1083e693042767b0fc7319bfae132
import './App.css';
import Login from './components/Login';

import Facebook from './components/SocialLogin/FacebookAuth'

function App() {

  const [ loggedIn, setLoggedIn ] = useState(false)

  return (
    <div className="App">
<<<<<<< HEAD
<<<<<<< HEAD
      <Login />
=======
=======
>>>>>>> f58f4f968da1083e693042767b0fc7319bfae132
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
<<<<<<< HEAD
>>>>>>> 221c04f6b95262d0441490dff02f1aeff5978bfe
=======
>>>>>>> f58f4f968da1083e693042767b0fc7319bfae132
    </div>
  );
}

export default App;
