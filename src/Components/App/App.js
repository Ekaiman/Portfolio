import NavBar from '../NavBar/NavBar'
import Work from '../Work/Work'
import Home from '../Home/Home'
import About from '../About/About'
import Careers from '../Careers/Careers'
import { useState, useEffect, useRef, useCallback, Profiler } from 'react'
import './App.css'
import Contact from '../Contact/Contact'
import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import Modal from '../Modal/Modal'
import useSound from 'use-sound'
import boop from '../../sounds/boop.mp3'
import water from '../../sounds/water.mp3'

function App() {
  const [showing, setShowing] = useState(false)
  const [elementInView, setElementInView] = useState([])

  const [volume, setVolume] = useState(0.2)
  const [showVolume, setShowVolume] = useState(false)
  const [play, { stop }] = useSound(boop, { volume })
  const [playWater, { stopWater }] = useSound(water, { volume })

  const volumeControll = level => {
    setVolume(level)
  }

  //highlighting current href aria tag
  useEffect(() => {
    if (elementInView.length === 1 && elementInView.includes('home')) {
      document.querySelector('.home').ariaCurrent = 'page'
      document.querySelector('.careers').ariaCurrent = false
      document.querySelector('.work').ariaCurrent = false
      document.querySelector('.about').ariaCurrent = false
      document.querySelector('.contact').ariaCurrent = false
    } else if (elementInView.length === 1 && elementInView.includes('about')) {
      document.querySelector('.about').ariaCurrent = 'page'
      document.querySelector('.careers').ariaCurrent = false
      document.querySelector('.work').ariaCurrent = false
      document.querySelector('.home').ariaCurrent = false
      document.querySelector('.contact').ariaCurrent = false
    } else if (elementInView.length === 1 && elementInView.includes('work')) {
      document.querySelector('.work').ariaCurrent = 'page'
      document.querySelector('.careers').ariaCurrent = false
      document.querySelector('.about').ariaCurrent = false
      document.querySelector('.home').ariaCurrent = false
      document.querySelector('.contact').ariaCurrent = false
    } else if (
      elementInView.length === 1 &&
      elementInView.includes('careers')
    ) {
      console.log('careeeer')
      document.querySelector('.careers').ariaCurrent = 'page'
      document.querySelector('.work').ariaCurrent = false
      document.querySelector('.about').ariaCurrent = false
      document.querySelector('.home').ariaCurrent = false
      document.querySelector('.contact').ariaCurrent = false
    } else if (
      elementInView.length === 1 &&
      elementInView.includes('contact')
    ) {
      console.log('CONTACT')
      document.querySelector('.contact').ariaCurrent = 'page'
      document.querySelector('.work').ariaCurrent = false
      document.querySelector('.home').ariaCurrent = false
      document.querySelector('.careers').ariaCurrent = false
      document.querySelector('.work').ariaCurrent = false
    } else if (elementInView.length > 1) {
      console.log('something!!!')
      let item = `.${elementInView[0]}`
      document.querySelector(item).ariaCurrent = 'page'
    }
  }, [elementInView])

  //projects
  const projects = [
    {
      id: 2,
      title: 'Roll For Initiative',
      img: [
        '../../../../project_imgs/dnd1.png',
        '../../../../project_imgs/dnd2.png',
        '../../../../project_imgs/dnd3.png',
        '../../../../project_imgs/dnd4.png',
        '../../../../project_imgs/dnd5.png'
      ],
      gitHub: 'https://github.com/jskomal/roll-for-initiative',
      overview:
        'Roll For Initiative is a chance style combat game featuring the mythical monster and courageous heroes from the Dungens and Dragons (DnD) universe. Written in React and TypeScript this group project was designed with mobile in mind.',
      lang: 'React / TypeScript',
      description: 'Game'
    },
    {
      id: 1,
      title: 'DiverCity',
      img: [
        '../../../../project_imgs/divercity1.png',
        '../../../../project_imgs/divercity2.png',
        '../../../../project_imgs/divercity3.png'
      ],
      gitHub: 'https://github.com/Capstone-LGBTQ-BßIPOC/FE_DiverCity',
      overview:
        'DiverCity is a resource to browse and discover LGBTQ+ and BIPOC owned businesses. This application was built using React, React Context API for global state management and Cypress for End-to-End testing automated with CircleCI.',
      lang: 'React / Ruby on Rails',
      description: 'Busniess Guide'
    },
    {
      id: 3,
      title: 'Tic Tac Toe',
      img: [
        '../../../../project_imgs/tictac1.png',
        '../../../../project_imgs/tictac2.png',
        '../../../../project_imgs/tictac3.png'
      ],
      gitHub: 'https://github.com/Ekaiman/tic-tac-toe',
      overview:
        'Tic Tac Toe allows for two users to play a game that automatically assess for a win or draw. Written in vanilla JavaScript and without looking at other tutorials, this was my first solo project.',
      lang: 'Vanilla JS',
      description: 'Game'
    },
    {
      id: 5,
      title: 'Randcid Tomatillos',
      img: [
        '../../../../project_imgs/rancid1.png',
        '../../../../project_imgs/rancid2.png',
        '../../../../project_imgs/rancid3.png'
      ],
      gitHub: 'https://github.com/Ekaiman/Rancid_Tomatillos',
      overview:
        'Rancid tomatillos was a project built to learn React, Cypress, and dynamic routing. This interface uses a mock API and was designed to reflect a Movie Ratings service.',
      lang: 'React',
      description: 'Movie Ratings'
    },
    {
      id: 4,
      title: 'Travel Tracker',
      img: ['../../../../project_imgs/travel1.png'],
      gitHub: 'https://github.com/Ekaiman/travelTracker',
      overview:
        'Travel Tracker was built so users can record past, pending and upcoming trips. Built in Vanilla JavaScript, Mocha and Chai was used for end to end testing. ',
      lang: 'Vanilla JS',
      description: 'Travel Iternerary'
    }
  ]

  const [selectedProj, setSelectedProj] = useState({
    title: '',
    img: [],
    gitHub: '',
    overview: '',
    description: ''
  })

  const showModal = () => {
    setShowing(true)
  }

  const closeModal = () => {
    setShowing(false)
    setSelectedProj({ title: '', img: [], gitHub: '', overview: '' })
  }

  return (
    <div
      className='app'
      onClick={() => {
        closeModal()
      }}
    >
      <Home
        setElementInView={setElementInView}
        elementInView={elementInView}
        play={play}
        playWater={playWater}
        volumeControll={volumeControll}
        showVolume={showVolume}
        setShowVolume={setShowVolume}
      />
      <NavBar />
      <About
        setElementInView={setElementInView}
        elementInView={elementInView}
        play={play}
      />

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
        description={selectedProj.description}
      />
      <Careers
        setElementInView={setElementInView}
        elementInView={elementInView}
      />
      <Contact
        setElementInView={setElementInView}
        elementInView={elementInView}
        play={play}
        stop={stop}
      />
    </div>
  )
}

export default App
