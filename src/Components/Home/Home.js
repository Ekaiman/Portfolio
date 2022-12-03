import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import './Home.css'
import { faArrowsRotate, faHome, faRotate } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = ({ setElementInView, elementInView }) => {
  const [windowsize, setWindowSize] = useState({ height: 0, width: 0 })
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 })
  const [currentQuote, setCurrentQuote] = useState(0)
  const emili = [
    'IS A FRONT-END DEVELOPER',
    'LOVES THE GREAT OUTDOORS',
    'IS PASSIONATE ABOUT CHEESE',
    'IS AN ENTHUSASTIC LEARNER'
  ]

  const changeQuote = () => {
    console.log(currentQuote)
    let newQuote = currentQuote
    newQuote++
    if (newQuote < emili.length) {
      setCurrentQuote(newQuote)
    } else {
      setCurrentQuote(0)
    }
    console.log(currentQuote)
  }
  // const handleMouseMove = event => {
  //   setMouseCoords({ x: event.clientX, y: event.clientY })
  //   setWindowSize({ height: window.innerHeight, width: window.innerWidth })
  // }

  const rotate = () => { 
    document.querySelector('.refresh').classList.toggle('rotate')
    setTimeout(() => {
    document.querySelector('.refresh').classList.toggle('rotate')

     }, 500) 
  }

  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      setElementInView(prev => [...prev, 'home'])
    } else {
      let removeElem = elementInView.filter(elem => elem !== 'home')
      setElementInView(removeElem)
    }
  }, [inView])

  return (
    <header
      // onMouseMove={event => {
      //   handleMouseMove(event)
      // }}
      id='home'
      className='home-wrapper'
    >
      <div className='text-holder'>
        <h1 ref={ref} className='home-text '>
          <span className='animate-character'>Emili</span>
        </h1>
        <h1 className='home-text'>KAIMAN </h1>
        <h1 className='home-text'>{emili[currentQuote]}</h1>
      </div>
      <FontAwesomeIcon
        icon={faArrowsRotate}
        className='refresh'
        onClick={() => {
          changeQuote()
          rotate()
        }}
      />

      <a
        href='#about'
        className='view-work-button'
        onClick={() => {
          document.querySelector('.about').ariaCurrent = 'page'
        }}
      >
        {' '}
        View my work
      </a>
    </header>
  )
}

export default Home
