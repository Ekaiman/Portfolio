import { useEffect, useState } from 'react'
import Home from '../Home/Home'
import './NavBar.css'

const NavBar = () => {
  return (
    <header className='nav-wrapper'>
      <nav>
        <ul className='nav-items'>
          <li>
            <a className='home nav-button' href='#home'>
              Home
            </a>
          </li>
          <li>
            <a className='about nav-button' href='#about'>
              About
            </a>
          </li>
          <li>
            <a className='work nav-button' href='#work'>
              Portfolio
            </a>
          </li>
          <li>
            <a className='contact nav-button' href='#contact'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
