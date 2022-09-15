import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className='menueIcon'>
        <ul className='navbar-list'>
          <li>
            <NavLink to='/Portfolio/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/Portfolio/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/Portfolio/services'>Services</NavLink>
          </li>
          <li>
            <NavLink to='/Portfolio/contact'>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar