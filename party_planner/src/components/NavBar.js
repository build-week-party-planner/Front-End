import React from "react"
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <Menu>
      <Menu.Item header>Party Planner</Menu.Item>
      <NavLink to={`/dashboard/${localStorage.getItem('user_id')}`}>
        <Menu.Item name="My Events"/>
      </NavLink>
    </Menu>
  )
}

export default NavBar