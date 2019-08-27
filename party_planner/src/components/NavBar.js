import React from "react"
import { Menu } from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom'


const NavBar = (props) => {
  return (
    <Menu>
      <Menu.Item header>Party Planner</Menu.Item>
      <NavLink to='/dashboard'>
        <Menu.Item name="My Events"/>
      </NavLink>
      <Link>
        <Menu.Item name="Logout"           
            onClick={()=>{
            localStorage.removeItem("token");
            props.push("/login")
          }}
        />
      </Link>
    </Menu>
  )
}

export default NavBar