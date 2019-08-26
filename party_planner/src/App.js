import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Event from './components/Event'
import Register from './components/Register';

import Facebook from './components/SocialLogin/FacebookAuth'

function App() {

  const [ loggedIn, setLoggedIn ] = useState(false)

  
  return (
    <div className="App">
      <Login />
      <Register />
      <Facebook loggedIn = {loggedIn}/>
      <Event/>
    </div>
  );
}

export default App;
