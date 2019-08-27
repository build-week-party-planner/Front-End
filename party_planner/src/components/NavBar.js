import React from "react"
import { Menu } from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <Menu>
      <Menu.Item header>Party Planner</Menu.Item>
      <NavLink to='/dashboard'>
        <Menu.Item name="My Events"/>
      </NavLink>
      <Link to="/login">
        <Menu.Item name="Logout"           
            onClick={()=>{
            localStorage.removeItem("token");
          }}
        />
      </Link>
    </Menu>
  )
}

export default NavBar