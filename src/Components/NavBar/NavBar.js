import { useEffect, useState } from 'react'
import './NavBar.css'

const NavBar = () => {
  
  return (
    <header className='nav-wrapper'>
      <nav>
        <ul className='nav-items'>
          <li>
            <a className='nav-button' href='#home'>
              Home
            </a>
          </li>
          <li>
            <a className='nav-button' href='#about'>
              About
            </a>
          </li>
          <li>
            <a className='nav-button' href='#work'>
              Portfolio
            </a>
          </li>
          <li>
            <a className='nav-button' href='#contact'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
