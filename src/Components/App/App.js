import NavBar from '../NavBar/NavBar'
import Work from '../Work/Work'
import Home from '../Home/Home'
import About from '../About/About'
import { useState, useEffect, useRef, useCallback } from 'react'
import './App.css'
import Contact from '../Contact/Contact'
import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import Modal from '../Modal/Modal'

function App() {
  const [showing, setShowing] = useState(false)
  const [elementInView, setElementInView] = useState([])
  const [scrollDirection, setScrollDirection] = useState('')
  
  //highlighting current href aria tag
  useEffect(() => { 
    if (elementInView.length === 1 && elementInView.includes('home')) {
      document.querySelector('.home').ariaCurrent = 'page'
      document.querySelector('.work').ariaCurrent = false
      document.querySelector('.about').ariaCurrent = false
      document.querySelector('.contact').ariaCurrent = false
    } else if (elementInView.length === 1 && elementInView.includes('about')) {
      document.querySelector('.about').ariaCurrent = 'page'
      document.querySelector('.work').ariaCurrent = false
      document.querySelector('.home').ariaCurrent = false
      document.querySelector('.contact').ariaCurrent = false
    } else if (elementInView.length === 1 && elementInView.includes('work')) {
      document.querySelector('.work').ariaCurrent = 'page'
      document.querySelector('.about').ariaCurrent = false
      document.querySelector('.home').ariaCurrent = false
      document.querySelector('.contact').ariaCurrent = false
    } else if (elementInView.length === 1 && elementInView.includes('contact')) {
      document.querySelector('.contact').ariaCurrent = 'page'
      document.querySelector('.work').ariaCurrent = false
      document.querySelector('.home').ariaCurrent = false
      document.querySelector('.work').ariaCurrent = false
    } else if (elementInView.length > 1) {
      document.querySelector('.contact').ariaCurrent = elementInView[1]
      
    }
  }, [elementInView])

  //projects
  const projects = [
    {
      id: 2,
      title: 'Roll For Initiative',
      img: '../../../../project_imgs/dnd.png',
      gitHub: 'https://github.com/jskomal/roll-for-initiative',
      overview:
        'Roll For Initiative is a chance style combat game featuring the mythical monster and courageous herse from the Dungens and Dragons (DnD) universe. Written in React and TypeScript.',
      lang: 'React / TypeScript'
    },
    {
      id: 1,
      title: 'DiverCity',
      img: '../../../../project_imgs/divercity.png',
      gitHub: 'https://github.com/Capstone-LGBTQ-BIPOC/FE_DiverCity',
      overview: 'Divercity',
      lang: 'React / Ruby on Rails'
    },
    {
      id: 3,
      title: 'Tic Tac Toe',
      img: '../../../../project_imgs/tictac.png',
      gitHub: 'https://github.com/Ekaiman/tic-tac-toe',
      overview:
        'Tic Tac Toe allows for users to play a game that automatically asses for a win or draw. Written in vanilla JavaScript.',
      lang: 'Vanilla JS'
    },
    {
      id: 5,
      title: 'Randcid Tomatillos',
      img: '../../../../project_imgs/rancid.png',
      gitHub: 'https://github.com/Ekaiman/Rancid_Tomatillos',
      overview:
        'Rancid tomatillos was a project built to learn React and dynamic routing. ',
      lang: 'React'
    },
    {
      id: 4,
      title: 'Travel Tracker',
      img: '../../../../project_imgs/travel.png',
      gitHub: 'https://github.com/Ekaiman/travelTracker',
      overview: '',
      lang: 'Vanilla JS'
    }
  ]


  const [selectedProj, setSelectedProj] = useState({
    title: '',
    img: '',
    gitHub: '',
    overview: ''
  })

  const showModal = () => {
    setShowing(true)
  }

  const closeModal = () => {
    setShowing(false)
    setSelectedProj({ title: '', img: '', gitHub: '', overview: '' })
  }

  const [y, setY] = useState(window.scrollY)
  const [innerHeight, setInnerHeight] = useState(window.innerHeight)

  
  const onResize = () => { 
    setInnerHeight(window.innerHeight)
  }

  window.addEventListener('resize', onResize)
  
  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget
      if (y > window.scrollY) {
        // console.log('scrolling up')
        setScrollDirection('up')
      } else if (y < window.scrollY) {
        // console.log('scrolling down')
        setScrollDirection('down')
      }
      setY(window.scrollY)
    },
    [y]
  )

  useEffect(() => {
    setY(window.scrollY)
    window.addEventListener('scroll', handleNavigation)

    return () => {
      window.removeEventListener('scroll', handleNavigation)
    }
  }, [handleNavigation])

  return (
    <div
      className='app'
      onClick={() => {
        closeModal()
      }}
    >
      <Home setElementInView={setElementInView} elementInView={elementInView} />
      {/* {scroll && <NavBar setScroll={setScroll} />} */}
      <NavBar />
      <About
        setElementInView={setElementInView}
        elementInView={elementInView}
      />
      {/* (<Modal show={showing} closeModal={closeModal} title={selectedProj.title} img={selectedProj.img} github ={selectedProj.gitHub} /> */}
      <Work
        showModal={showModal}
        setSelectedProj={setSelectedProj}
        showing={showing}
        closeModal={closeModal}
        title={selectedProj.title}
        img={selectedProj.img}
        gitHub={selectedProj.gitHub}
        overview={selectedProj.overview}
        setElementInView={setElementInView}
        elementInView={elementInView}
        projects={projects}
      />
      <Contact
        setElementInView={setElementInView}
        elementInView={elementInView}
      />
    </div>
  )
}

export default App
