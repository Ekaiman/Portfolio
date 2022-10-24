import './SingleProj.css'
import React, { useState } from 'react'
import Modal from '../Modal/Modal'

const SingleProj = ({ title, img, gitHub, showModal, setSelectedProj, overview }) => {
  // const [showing, setShowing] = useState(false)

  // const showModal = () => {
  //   setShowing(true)
  // }

  // const closeModal = () => {
  //   setShowing(false)
  // }

  return (
    <>
      
        {/* <Modal
          title={title}
          gitHub={gitHub}
          show={showing}
          closeModal={closeModal}
          setShowing={setShowing}
        /> */}
      
      <div className='container'>
        <img className='project-image' src={img} />
        <div class='middle'>
          <button
            onClick={() => {
              showModal()
              setSelectedProj({ title: title , img: img, gitHub: gitHub, overview: overview })
            }}
            class='text'
          >
            SEE MORE
          </button>
        </div>
      </div>
    </>
  )
}

export default SingleProj
