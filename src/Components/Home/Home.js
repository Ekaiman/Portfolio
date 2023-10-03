import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import './Home.css'
import {
  faArrowsRotate,
  faVolumeHigh,
  faVolumeMute,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = ({
  setElementInView,
  elementInView,
  play,
  playWater,
  volumeControll
}) => {

  const [currentQuote, setCurrentQuote] = useState(0)
  const [volumeOn, setVolumeOn] = useState(true)
  const emili = [
    'A FRONT-END DEVELOPER',
    'AN OUTDOOR LOVER',
    'PASSIONATE ABOUT CHEESE',
    'ENTHUSIASTIC LEARNER',
    'FRIEND TO ANIMALS'
  ]

  const changeQuote = () => {
    let newQuote = currentQuote
    newQuote++
    if (newQuote < emili.length) {
      setCurrentQuote(newQuote)
    } else {
      setCurrentQuote(0)
    }
  }

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

  useEffect(() => { 
     {
       console.log(
         'Hello! Thanks for viewing my portfolio. Everything you see here came from my fingertips-- including this portfolio. I have a lot to learn but I am proud of where I started and how far I have come!'
       )
     }
  },[])

  return (
    <header
      id='home'
      className='home-wrapper'
    >
      <div className='volume-holder'>
        {!volumeOn &&
        <FontAwesomeIcon
          icon={faVolumeHigh}
          className='volumePlay'
          onClick={() => {
            volumeControll(0.2)
            setVolumeOn(true)
            play()
          }}
        />
 } {volumeOn &&
        <FontAwesomeIcon
          icon={faVolumeMute}
          className='volumeMute'
          onClick={() => {
            volumeControll(0)
            setVolumeOn(false)
          }}
        />
        }
      </div>
      <div className='all-home-text'>
        <div className='text-holder'>
          <h1 ref={ref} className='home-text emili'>
            EMILI
          </h1>
          <h1 className='home-text kaiman'>KAIMAN</h1>
        </div>
        <h1 className='home-text quote'>{emili[currentQuote]}</h1>
      </div>
      <FontAwesomeIcon
        icon={faArrowsRotate}
        className='refresh'
        onClick={() => {
          changeQuote()
          rotate()
          playWater()
        }}
        onMouseEnter={() => {}}
      />

      <a
        href='#about'
        className='view-work-button'
        onClick={() => {
          document.querySelector('.about').ariaCurrent = 'page'
        }}
        onMouseEnter={() => {
          play()
        }}
      >
        {' '}
        VIEW MY WORK
      </a>
      
    </header>
  )
}

export default Home
