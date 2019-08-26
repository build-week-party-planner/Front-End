import React from "react"
import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'; 
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <Menu>
      <Menu.Item header>Party Planner</Menu.Item>
      <NavLink to='/'>
        <Menu.Item name="My Events"/>
      </NavLink>
    </Menu>
  )
}

export default NavBar