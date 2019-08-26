import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Footer from './components/Footer'
import NavBar from './components/NavBar'

import Facebook from './components/SocialLogin/FacebookAuth'

function App() {

  const [ loggedIn, setLoggedIn ] = useState(false)

  return (
    <div className="App"> 
      <NavBar/>
      <Footer/>
    </div>
  );
}

export default App;
