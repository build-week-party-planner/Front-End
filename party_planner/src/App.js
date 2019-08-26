import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';

import Facebook from './components/SocialLogin/FacebookAuth'

function App() {

  const [ loggedIn, setLoggedIn ] = useState(false)

  return (
    <div className="App">
      <Login />
      <Register />
      <Facebook loggedIn = {loggedIn}/>
    </div>
  );
}

export default App;
