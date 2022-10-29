import { useEffect, useState } from 'react'
import Home from '../Home/Home'
import './NavBar.css'

const NavBar = () => {

  window.addEventListener(
    'click',

    

    function (event) {
      // highlighted = false
      // console.log(event.target.className)
      if (event.target.className.includes('about') ) {
        event.target.ariaCurrent = 'page'
        document.querySelector('.home').ariaCurrent = false
        document.querySelector('.contact').ariaCurrent = false
        document.querySelector('.work').ariaCurrent = false
      } else if (event.target.className.includes('home')) {
        event.target.ariaCurrent = 'page'
        document.querySelector('.about').ariaCurrent = false
        document.querySelector('.contact').ariaCurrent = false
        document.querySelector('.work').ariaCurrent = false
      } else if (event.target.className.includes('work')) {
        event.target.ariaCurrent = 'page'
        document.querySelector('.about').ariaCurrent = false
        document.querySelector('.contact').ariaCurrent = false
        document.querySelector('.home').ariaCurrent = false
      } else if (event.target.className.includes('contact')) {
        event.target.ariaCurrent = 'page'
        document.querySelector('.about').ariaCurrent = false
        document.querySelector('.home').ariaCurrent = false
        document.querySelector('.work').ariaCurrent = false
      }
    }
  )

  return (
    <header className='nav-wrapper'>
      <nav>
        <ul className='nav-items'>
          <li>
            <a
              className='home nav-button'
              // id='home'
              href='#home'
              // aria-current={false}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className='about nav-button'
              // id='about'
              href='#about'
              // aria-current={false}
            >
              About
            </a>
          </li>
          <li>
            <a
              className='work nav-button'
              href='#work'
              // id='work'
              // aria-current={false}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              className='contact nav-button'
              href='#contact'
              // id='contact'
              // aria-current={false}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
