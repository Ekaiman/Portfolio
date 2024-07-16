
import './NavBar.css'

const NavBar = () => {
  return (
    <header className='nav-wrapper'>
      <nav>
        <ul className='nav-items'>
          <li>
            <a className='home nav-button' href='#home'>
              HOME
            </a>
          </li>
          <li>
            <a className='about nav-button' href='#about'>
              ABOUT
            </a>
          </li>
          <li>
            <a className='work nav-button' href='#work'>
              PORTFOLIO
            </a>
          </li>
          <li>
            <a className='careers nav-button' href='#careers'>
              CAREERS
            </a>
          </li>
          <li>
            <a className='contact nav-button' href='#contact'>
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
