import NavBar from '../NavBar/NavBar'
import Work from '../Work/Work'
import Home from '../Home/Home'
import About from '../About/About'
import { useState, useEffect, useRef } from 'react'
import './App.css'
import Contact from '../Contact/Contact'
import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import Modal from '../Modal/Modal'

function App() {
  const [showing, setShowing] = useState(false)
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

  return (
    <div
      className='app'
      onClick={() => {
        closeModal()
      }}
    >
      <Home />
      {/* {scroll && <NavBar setScroll={setScroll} />} */}
      <NavBar />
      <About />
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
      />
      <Contact />
    </div>
  )
}

export default App
