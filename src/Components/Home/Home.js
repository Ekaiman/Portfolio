import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import './Home.css'

const Home = () => {

  const [windowsize, setWindowSize] = useState({height: 0, width: 0})
  const [mouseCoords, setMouseCoords] = useState({x: 0, y: 0})
  
  const handleMouseMove = (event) => { 
    setMouseCoords({ x: event.clientX, y: event.clientY })
    setWindowSize({height: window.innerHeight, width: window.innerWidth})
  }
  
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      document.querySelector('.home').ariaCurrent = 'page'
      document.querySelector('.work').ariaCurrent = false
      document.querySelector('.about').ariaCurrent = false
      document.querySelector('.contact').ariaCurrent = false
    }
  }, [inView])

  return (
    <header ref={ref}  onMouseMove={(event) => {handleMouseMove(event) } } id='home' className='home-wrapper'>
      <h1 className='home-text'>Hey, I'm <span style={{color: 'hotpink'}}>Emili.</span></h1>
      <h1 className='home-text'>Front-end devloper.</h1>
      <a href='#about' className='view-work-button' onClick={() => { 
        document.querySelector('.about').ariaCurrent='page'
      } }>
        {' '}
        View my work
      </a>
    </header>
  )
}

export default Home
