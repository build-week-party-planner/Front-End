import React, { useEffect } from "react"
import { Menu } from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom'
import axios from 'axios'

const NavBar = props => {
  console.log(localStorage.user_id)

  useEffect(() => {
    axios
    .get('https://bw-party-planner.herokuapp.com/api/party/list/todo')
    .then(res => {
      console.log(res)
    })
  },[])

  return (
    <Menu>
      <NavLink to={`/dashboard/${localStorage.getItem('user_id')}`}>
        <Menu.Item header name="Party Planner"/>
      </NavLink>
      <Link to="/login">
        <Menu.Item        
            onClick={()=>{
            localStorage.removeItem("token");
            localStorage.removeItem('user_id');
            localStorage.removeItem('persist:globalReducer')
          }}
          name={props.location.pathname === "/login" || props.location.pathname === "/register" ? "Login" : "Logout"}   
        />
      </Link>
    </Menu>
  )
}

export default NavBar