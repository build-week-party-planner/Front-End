import React, { useEffect } from "react"
import { Menu } from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom'
import axios from 'axios'

const NavBar = props => {
  return (
    <Menu>
      <NavLink to={`/dashboard/${localStorage.getItem('user_id')}`}>
        <Menu.Item header name="Party Planner"/>
      </NavLink>
      
      <Menu.Menu position= 'right'>
        <Link to="/login">
          <Menu.Item
              id= 'login-logout'        
              onClick={()=>{
              localStorage.removeItem("token");
              localStorage.removeItem('user_id');
              localStorage.removeItem("email");
              localStorage.removeItem('persist:globalReducer')
            }}
            name={props.location.pathname === "/login" || props.location.pathname === "/register" ? "Login" : "Log Out"}   
          />
        </Link>

        {(!localStorage.emailDisplay)
          ? <span></span>
          : <Link>
              <h1 id= "email-letter">{localStorage.emailDisplay}</h1>
            </Link>
        }
      </Menu.Menu>
    </Menu>
  )
}

export default NavBar